// 사이트 설정: 배포 전에 이 파일만 고치면 됩니다.

export const SITE = {
  title: '우리 반 AI 연구소',
  subtitle: '인공지능 기초 Ⅱ-03 인공 신경망과 딥러닝',

  // 깃허브 저장소 "사용자명/저장소명". 채우면 '코랩에서 열기' 버튼이 켜집니다.
  // 예: 'mstai/aibook-dl'
  githubRepo: 'MiSun78/aibook-dl',
  githubBranch: 'main',

  // 학생 기록을 받을 구글 폼 주소. 비워 두면 '제출하기' 버튼이 숨겨집니다.
  recordFormUrl: '',

  // 단원별 구글 문서 학습지 ID (docs.google.com/document/d/[이 부분]/edit).
  // 버튼을 누르면 학생 드라이브에 사본이 만들어집니다. 비워 두면 버튼이 숨겨집니다.
  // 학생에게 사이트의 [내 학습지 만들기] 버튼을 보여 줄지. 원본을 학생이 볼 수 있게 공유했을 때만 true로 바꾸세요.
  worksheetButton: false,
  worksheets: {
    u1: '1eQd5JTBq60AkIeaWRrG45suPNh9kiX5ps7rp6rvxxRs',
    u2: '11ejDgD3mApFvbUp00lJs2FOrUd2SkcrVn81ef8OZDYc',
    u3: '1X5e8pNLh1aOivnRUZTny9nBnPfFtVOZEHDAtuVTdJrk',
    u4: '17NzbvDT5GQfdekmpRRGYfRc_9WJZc_2xdKRy2IbfgeI',
  } as Record<string, string>,
};

export function worksheetCopyUrl(id: string): string | null {
  if (!SITE.worksheetButton) return null;
  const doc = SITE.worksheets[id];
  return doc ? `https://docs.google.com/document/d/${doc}/copy` : null;
}

export function colabUrl(notebookFile: string): string | null {
  if (!SITE.githubRepo) return null;
  return `https://colab.research.google.com/github/${SITE.githubRepo}/blob/${SITE.githubBranch}/public/notebooks/${notebookFile}`;
}
