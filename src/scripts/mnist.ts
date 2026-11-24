// 숫자 인식 신경망 (784 → 128 → 64 → 10)을 브라우저에서 실행한다.
// 가중치는 public/models/mnist_mlp.bin (float32, [W1,b1,W2,b2,W3,b3] 순서)

const SIZES = [784, 128, 64, 10];
type Layer = { W: Float32Array; b: Float32Array; inN: number; outN: number };
let layersPromise: Promise<Layer[]> | null = null;

export function loadModel(base: string): Promise<Layer[]> {
  if (!layersPromise) {
    layersPromise = fetch(`${base}/models/mnist_mlp.bin`)
      .then((r) => {
        if (!r.ok) throw new Error('모델 파일을 불러오지 못했습니다.');
        return r.arrayBuffer();
      })
      .then((buf) => {
        const all = new Float32Array(buf);
        const layers: Layer[] = [];
        let off = 0;
        for (let l = 0; l < SIZES.length - 1; l++) {
          const inN = SIZES[l], outN = SIZES[l + 1];
          const W = all.subarray(off, off + inN * outN); off += inN * outN;
          const b = all.subarray(off, off + outN); off += outN;
          layers.push({ W, b, inN, outN });
        }
        return layers;
      });
  }
  return layersPromise;
}

export function predict(layers: Layer[], x: Float32Array): number[] {
  let h: Float32Array = x;
  layers.forEach((L, li) => {
    const out = new Float32Array(L.outN);
    out.set(L.b);
    for (let i = 0; i < L.inN; i++) {
      const v = h[i];
      if (v === 0) continue;
      const row = i * L.outN;
      for (let j = 0; j < L.outN; j++) out[j] += v * L.W[row + j];
    }
    if (li < layers.length - 1) for (let j = 0; j < out.length; j++) out[j] = Math.max(0, out[j]);
    h = out;
  });
  const m = Math.max(...h);
  const e = Array.from(h, (v) => Math.exp(v - m));
  const s = e.reduce((a, b) => a + b, 0);
  return e.map((v) => v / s);
}

// 그림판(흰 바탕에 검은 글씨)을 MNIST 형식(검은 바탕에 흰 글씨 28×28, 0~1)으로 바꾼다.
// center=true: 글씨를 20×20 상자에 맞춰 줄이고 무게중심을 가운데로 옮긴다 (MNIST를 만든 방식).
// center=false: 그림 전체를 그대로 28×28로 줄인다.
export function toMnist(src: HTMLCanvasElement, center: boolean): Float32Array | null {
  const w = src.width, h = src.height;
  const sctx = src.getContext('2d')!;
  const img = sctx.getImageData(0, 0, w, h).data;
  // 잉크 세기 캔버스 (흰 글씨/검은 바탕)
  const inkCanvas = document.createElement('canvas');
  inkCanvas.width = w; inkCanvas.height = h;
  const ictx = inkCanvas.getContext('2d')!;
  const ink = ictx.createImageData(w, h);
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4;
    const v = 255 - img[i]; // 빨강 채널 기준 어두운 정도
    ink.data[i] = ink.data[i + 1] = ink.data[i + 2] = v;
    ink.data[i + 3] = 255;
    if (v > 40) { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }
  }
  if (maxX < 0) return null;
  ictx.putImageData(ink, 0, 0);

  const out = document.createElement('canvas');
  out.width = 28; out.height = 28;
  const octx = out.getContext('2d', { willReadFrequently: true })!;
  octx.fillStyle = '#000'; octx.fillRect(0, 0, 28, 28);
  octx.imageSmoothingEnabled = true;
  octx.imageSmoothingQuality = 'high';

  if (!center) {
    octx.drawImage(inkCanvas, 0, 0, w, h, 0, 0, 28, 28);
  } else {
    const bw = maxX - minX + 1, bh = maxY - minY + 1;
    const scale = 20 / Math.max(bw, bh);
    const dw = bw * scale, dh = bh * scale;
    // 1차: 상자 가운데에 놓기
    const tmp = document.createElement('canvas');
    tmp.width = 28; tmp.height = 28;
    const tctx = tmp.getContext('2d', { willReadFrequently: true })!;
    tctx.fillStyle = '#000'; tctx.fillRect(0, 0, 28, 28);
    tctx.imageSmoothingQuality = 'high';
    tctx.drawImage(inkCanvas, minX, minY, bw, bh, (28 - dw) / 2, (28 - dh) / 2, dw, dh);
    // 2차: 무게중심을 (14, 14)로
    const d = tctx.getImageData(0, 0, 28, 28).data;
    let sx = 0, sy = 0, sm = 0;
    for (let y = 0; y < 28; y++) for (let x = 0; x < 28; x++) {
      const v = d[(y * 28 + x) * 4]; sx += x * v; sy += y * v; sm += v;
    }
    const cx = sm ? sx / sm : 13.5, cy = sm ? sy / sm : 13.5;
    octx.drawImage(tmp, Math.round(13.5 - cx), Math.round(13.5 - cy));
  }
  const d = octx.getImageData(0, 0, 28, 28).data;
  const x = new Float32Array(784);
  for (let i = 0; i < 784; i++) x[i] = d[i * 4] / 255;
  return x;
}
