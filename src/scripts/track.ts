// 4차시 반 / 6차시 반 경로 전환
// 4차시 반에서는 확장 활동(details.ext)을 접어 둔다. 학생이 펼치면 볼 수 있다.

const KEY = 'aibook-track';

function apply(track: string) {
  document.documentElement.dataset.track = track;
  document.querySelectorAll<HTMLButtonElement>('[data-set-track]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.setTrack === track));
  });
  document.querySelectorAll<HTMLDetailsElement>('details.ext').forEach((d) => {
    d.open = track === '6';
  });
}

export function initTrack() {
  let track = '6';
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === '4' || saved === '6') track = saved;
  } catch {}
  apply(track);
  document.querySelectorAll<HTMLButtonElement>('[data-set-track]').forEach((b) => {
    b.addEventListener('click', () => {
      const t = b.dataset.setTrack || '6';
      try { localStorage.setItem(KEY, t); } catch {}
      apply(t);
    });
  });
}
