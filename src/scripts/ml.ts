// 위젯에서 함께 쓰는 작은 기계학습 도구 (브라우저에서 바로 계산)

/** 같은 시드면 같은 수열을 내는 난수 */
export function rng(seed = 1) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const gauss = (r: () => number) => Math.sqrt(-2 * Math.log(r() || 1e-9)) * Math.cos(2 * Math.PI * r());

export function shuffle<T>(a: T[], r: () => number) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

/** 클래스 비율을 지키며 훈련:테스트로 나눈 인덱스 */
export function stratifiedSplit(y: string[], testSize: number, seed = 42) {
  const r = rng(seed);
  const train: number[] = [], test: number[] = [];
  [...new Set(y)].forEach((c) => {
    const idx = shuffle(y.map((v, i) => (v === c ? i : -1)).filter((i) => i >= 0), r);
    const nt = Math.round(idx.length * testSize);
    test.push(...idx.slice(0, nt)); train.push(...idx.slice(nt));
  });
  return { train, test };
}

export type Pt = number[];

/** 최소-최대 정규화 기준을 훈련 데이터로 정한다 */
export function minmax(X: Pt[]) {
  const d = X[0].length;
  const lo = Array.from({ length: d }, (_, j) => Math.min(...X.map((x) => x[j])));
  const hi = Array.from({ length: d }, (_, j) => Math.max(...X.map((x) => x[j])));
  return (x: Pt) => x.map((v, j) => (v - lo[j]) / (hi[j] - lo[j] || 1));
}

export interface Classifier { predict(x: Pt): string; }

// ---------- k-최근접 이웃 ----------
export function knn(X: Pt[], y: string[], k: number, scale?: (x: Pt) => Pt) {
  const f = scale || ((x: Pt) => x);
  const XS = X.map(f);
  const neighbors = (x: Pt) => {
    const q = f(x);
    return XS.map((p, i) => ({ i, d: Math.hypot(...p.map((v, j) => v - q[j])) })).sort((a, b) => a.d - b.d).slice(0, k);
  };
  return {
    neighbors,
    predict(x: Pt) {
      const cnt = new Map<string, number>();
      const nb = neighbors(x);
      nb.forEach(({ i }) => cnt.set(y[i], (cnt.get(y[i]) || 0) + 1));
      // 표가 같으면 더 가까운 이웃의 클래스
      const best = Math.max(...cnt.values());
      return y[nb.find(({ i }) => cnt.get(y[i]) === best)!.i];
    },
  };
}

// ---------- 결정트리 (지니 불순도) ----------
export type Node = { leaf: true; cls: string; n: number; counts: Record<string, number> } |
  { leaf: false; f: number; t: number; l: Node; r: Node; n: number; counts: Record<string, number> };

const counts = (y: string[]) => y.reduce((m, c) => ((m[c] = (m[c] || 0) + 1), m), {} as Record<string, number>);
const gini = (y: string[]) => { const c = counts(y); return 1 - Object.values(c).reduce((s, v) => s + (v / y.length) ** 2, 0); };
const major = (c: Record<string, number>) => Object.entries(c).sort((a, b) => b[1] - a[1])[0][0];

export function tree(X: Pt[], y: string[], maxDepth: number, depth = 0): Node {
  const c = counts(y);
  if (depth >= maxDepth || Object.keys(c).length === 1 || y.length < 2) return { leaf: true, cls: major(c), n: y.length, counts: c };
  let best = { g: gini(y) - 1e-12, f: -1, t: 0 };
  for (let f = 0; f < X[0].length; f++) {
    const vs = [...new Set(X.map((x) => x[f]))].sort((a, b) => a - b);
    for (let i = 0; i < vs.length - 1; i++) {
      const t = (vs[i] + vs[i + 1]) / 2;
      const L: string[] = [], R: string[] = [];
      X.forEach((x, j) => (x[f] <= t ? L : R).push(y[j]));
      const g = (L.length * gini(L) + R.length * gini(R)) / y.length;
      if (g < best.g) best = { g, f, t };
    }
  }
  if (best.f < 0) return { leaf: true, cls: major(c), n: y.length, counts: c };
  const li = X.map((x, j) => (x[best.f] <= best.t ? j : -1)).filter((j) => j >= 0);
  const ri = X.map((x, j) => (x[best.f] > best.t ? j : -1)).filter((j) => j >= 0);
  return {
    leaf: false, f: best.f, t: best.t, n: y.length, counts: c,
    l: tree(li.map((j) => X[j]), li.map((j) => y[j]), maxDepth, depth + 1),
    r: tree(ri.map((j) => X[j]), ri.map((j) => y[j]), maxDepth, depth + 1),
  };
}
export function treePredict(n: Node, x: Pt): string { return n.leaf ? n.cls : treePredict(x[n.f] <= n.t ? n.l : n.r, x); }
export function treeDepth(n: Node): number { return n.leaf ? 0 : 1 + Math.max(treeDepth(n.l), treeDepth(n.r)); }

// ---------- 로지스틱 회귀 (다중 클래스, 소프트맥스) ----------
export function logistic(X: Pt[], y: string[], iters = 400, lr = 0.8) {
  const classes = [...new Set(y)].sort();
  const d = X[0].length;
  const mu = Array.from({ length: d }, (_, j) => X.reduce((s, x) => s + x[j], 0) / X.length);
  const sd = Array.from({ length: d }, (_, j) => Math.sqrt(X.reduce((s, x) => s + (x[j] - mu[j]) ** 2, 0) / X.length) || 1);
  const z = (x: Pt) => [1, ...x.map((v, j) => (v - mu[j]) / sd[j])];
  const Z = X.map(z);
  const W = classes.map(() => new Array(d + 1).fill(0));
  const prob = (zx: number[]) => {
    const s = W.map((w) => w.reduce((a, wi, i) => a + wi * zx[i], 0));
    const m = Math.max(...s); const e = s.map((v) => Math.exp(v - m)); const t = e.reduce((a, b) => a + b, 0);
    return e.map((v) => v / t);
  };
  for (let it = 0; it < iters; it++) {
    const G = W.map(() => new Array(d + 1).fill(0));
    Z.forEach((zx, n) => {
      const p = prob(zx);
      classes.forEach((c, k) => { const g = p[k] - (y[n] === c ? 1 : 0); zx.forEach((v, i) => (G[k][i] += g * v)); });
    });
    W.forEach((w, k) => w.forEach((_, i) => (w[i] -= (lr * G[k][i]) / Z.length + lr * 1e-3 * (i ? w[i] : 0))));
  }
  return { classes, proba: (x: Pt) => prob(z(x)), predict: (x: Pt) => { const p = prob(z(x)); return classes[p.indexOf(Math.max(...p))]; } };
}

// ---------- 평가 ----------
export function confusion(actual: string[], pred: string[], labels: string[]) {
  const M = labels.map(() => labels.map(() => 0));
  actual.forEach((a, i) => { const r = labels.indexOf(a), c = labels.indexOf(pred[i]); if (r >= 0 && c >= 0) M[r][c]++; });
  return M;
}
export const accuracy = (a: string[], p: string[]) => a.filter((v, i) => v === p[i]).length / a.length;

/** 실루엣 점수 (유클리디언 거리) */
export function silhouette(P: Pt[], lab: number[]) {
  const ks = [...new Set(lab)];
  if (ks.length < 2) return 0;
  let s = 0;
  P.forEach((p, i) => {
    const dist = (q: Pt) => Math.hypot(...p.map((v, j) => v - q[j]));
    const mean = (k: number) => {
      const idx = P.map((_, j) => j).filter((j) => lab[j] === k && j !== i);
      return idx.length ? idx.reduce((a, j) => a + dist(P[j]), 0) / idx.length : 0;
    };
    const own = P.filter((_, j) => lab[j] === lab[i]).length;
    if (own < 2) return;
    const a = mean(lab[i]);
    const b = Math.min(...ks.filter((k) => k !== lab[i]).map(mean));
    s += (b - a) / Math.max(a, b);
  });
  return s / P.length;
}
