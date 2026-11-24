export type Lesson = {
  n: number;
  slug: string;
  title: string;
  question: string; // 차시를 여는 질문
  ready: boolean;
  standard: string; // 성취기준
  four: string; // 4차시 반에서의 위치
};

export const LESSONS: Lesson[] = [
  {
    n: 1,
    slug: '1',
    title: '뉴런에서 딥러닝까지',
    question: '선 하나로 풀리지 않는 문제를 신경망은 어떻게 풀까?',
    ready: true,
    standard: '12인기02-05',
    four: '1차시',
  },
  {
    n: 2,
    slug: '2',
    title: '신경망으로 숫자 알아보기',
    question: '컴퓨터는 내가 쓴 숫자를 어떻게 알아볼까?',
    ready: true,
    standard: '12인기02-06',
    four: '2차시',
  },
  {
    n: 3,
    slug: '3',
    title: '이미지를 보는 신경망, CNN',
    question: '신경망은 사진에서 무엇을 찾아낼까?',
    ready: false,
    standard: '12인기02-06',
    four: '3차시 (4차시 내용과 합침)',
  },
  {
    n: 4,
    slug: '4',
    title: '사전 학습 모델로 우리 문제 풀기',
    question: '데이터가 적어도 쓸 만한 모델을 만들 수 있을까?',
    ready: false,
    standard: '12인기02-06',
    four: '3차시에 교사 시연으로',
  },
  {
    n: 5,
    slug: '5',
    title: '말을 듣고 글을 이해하는 AI',
    question: 'AI는 정말 말뜻을 이해하는 걸까?',
    ready: false,
    standard: '12인기02-06',
    four: '4차시 (6차시 내용과 합침)',
  },
  {
    n: 6,
    slug: '6',
    title: '연구소 발표: 딥러닝으로 문제 풀기',
    question: '우리 주변의 어떤 문제를 딥러닝으로 풀 수 있을까?',
    ready: false,
    standard: '12인기02-05, 02-06',
    four: '4차시에 과제로',
  },
];
