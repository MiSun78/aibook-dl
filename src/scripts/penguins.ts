// 펭귄 데이터(penguins_size.csv와 같은 내용)를 불러오고 간단한 통계를 계산하는 도구

export type Row = (string | number | null)[];
export const COLS = ['species', 'island', 'culmen_length_mm', 'culmen_depth_mm', 'flipper_length_mm', 'body_mass_g', 'sex'];
export const NUM = ['culmen_length_mm', 'culmen_depth_mm', 'flipper_length_mm', 'body_mass_g'];
export const KO: Record<string, string> = {
  species: '종', island: '서식지(섬)', culmen_length_mm: '부리 길이', culmen_depth_mm: '부리 깊이',
  flipper_length_mm: '날개 길이', body_mass_g: '체질량', sex: '성별',
};
export const UNIT: Record<string, string> = { culmen_length_mm: 'mm', culmen_depth_mm: 'mm', flipper_length_mm: 'mm', body_mass_g: 'g' };
export const SPECIES = ['Adelie', 'Chinstrap', 'Gentoo'];
export const SP_KO: Record<string, string> = { Adelie: '아델리', Chinstrap: '턱끈', Gentoo: '젠투' };
export const SP_COLOR: Record<string, string> = { Adelie: '#2563eb', Chinstrap: '#e0464e', Gentoo: '#f2a516' };

let cache: Promise<Row[]> | null = null;
export function loadPenguins(): Promise<Row[]> {
  if (!cache) {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    cache = fetch(`${base}/data/penguins.json`).then((r) => r.json()).then((j) => j.rows as Row[]);
  }
  return cache;
}

export const col = (name: string) => COLS.indexOf(name);

/** pandas와 같은 방식(선형 보간)의 분위수 */
export function quantile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

export function describe(values: number[]) {
  const v = values.slice().sort((a, b) => a - b);
  const n = v.length;
  const mean = v.reduce((a, b) => a + b, 0) / n;
  const std = Math.sqrt(v.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1));
  return { count: n, mean, std, min: v[0], q1: quantile(v, 0.25), q2: quantile(v, 0.5), q3: quantile(v, 0.75), max: v[n - 1] };
}

export function pearson(x: number[], y: number[]) {
  const n = x.length;
  const mx = x.reduce((a, b) => a + b, 0) / n, my = y.reduce((a, b) => a + b, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) { sxy += (x[i] - mx) * (y[i] - my); sxx += (x[i] - mx) ** 2; syy += (y[i] - my) ** 2; }
  return sxy / Math.sqrt(sxx * syy);
}

export const fmt = (v: number, d = 2) => (Number.isInteger(v) && Math.abs(v) >= 100 ? String(v) : v.toFixed(d));
