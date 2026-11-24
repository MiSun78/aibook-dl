# 우리 반 AI 연구소: 인공 신경망과 딥러닝

고등학교 「인공지능 기초」 Ⅱ-03 단원을 이론과 실습으로 함께 배우는 디지털 교과서입니다.
서버가 필요 없는 정적 웹사이트(Astro)라서 Vercel 무료 플랜으로 운영할 수 있습니다.

## 지금 들어 있는 것

| 차시 | 상태 | 주요 활동 |
|---|---|---|
| 1. 뉴런에서 딥러닝까지 | 완성 | 퍼셉트론 조종기, 은닉층 실험실(브라우저에서 신경망 학습) |
| 2. 신경망으로 숫자 알아보기 | 완성 | 숫자 그리기 판(브라우저 안 신경망), MNIST 코랩 실습(학생용/교사용) |
| 3~6차시 | 활동 계획만 | 차례로 추가 예정 |

## 배포하기 (처음 한 번)

1. 깃허브에 새 저장소를 만들고 이 폴더의 파일을 모두 올립니다. `node_modules`와 `dist` 폴더는 올리지 않습니다.
2. [vercel.com](https://vercel.com)에 깃허브 계정으로 로그인하고 **Add New → Project**에서 그 저장소를 고릅니다.
3. Framework Preset이 **Astro**로 잡히는지 확인하고 **Deploy**를 누릅니다. 1분 안팎이면 `https://저장소이름.vercel.app` 주소가 생깁니다.

이후에는 깃허브 저장소의 파일을 고치기만 하면 Vercel이 자동으로 다시 배포합니다.

## 설정 바꾸기: `src/config.ts`

```ts
githubRepo: 'MiSun78/aibook-dl',        // 넣으면 '코랩에서 열기' 버튼이 켜짐
recordFormUrl: 'https://forms.gle/...', // 넣으면 연구 노트에 '구글 폼에 제출하기' 버튼이 생김
```

## 내용 고치기

- 차시 본문: `src/pages/lessons/1.mdx`, `2.mdx` (마크다운이라 문장을 바로 고칠 수 있습니다)
- 차시 목록과 4차시 반 배치: `src/data/lessons.ts`
- 준비 중인 차시의 활동 계획: `src/data/outlines.ts`
- 코랩 노트북: `public/notebooks/`
- 그리기 판 신경망 가중치: `public/models/mnist_mlp.bin` (784-128-64-10, float32)

## 내 컴퓨터에서 미리 보기 (선택)

Node.js 20 이상이 필요합니다.

```bash
npm install
npm run dev      # http://localhost:4321 에서 미리 보기
npm run build    # dist 폴더에 배포용 파일 생성
```
