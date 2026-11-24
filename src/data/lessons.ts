// 교과서 Ⅱ-03 '인공 신경망과 딥러닝'의 소단원 구성 (교과서 쪽수 기준)

export type Section = { title: string; pages: string; kind?: string };
export type Unit = {
  n: number;          // 사이트 주소 /lessons/n/
  code: string;       // 소단원 번호
  title: string;
  pages: string;      // 교과서 쪽수
  guide: string;      // 지도서 차시
  goals: string[];    // 학습 목표
  standard: string;
  ready: boolean;
  sections: Section[];
};

export const UNITS: Unit[] = [
  {
    n: 1,
    code: '03-1',
    title: '인공 신경망의 이해',
    pages: '126~132쪽',
    guide: '지도서 20~21차시',
    goals: ['인공 신경망과 딥러닝의 특성에 대한 이해를 바탕으로 활용 분야를 탐색할 수 있다.'],
    standard: '12인기02-05',
    ready: true,
    sections: [
      { title: '딥러닝 이전의 기계학습과 딥러닝', pages: '126쪽' },
      { title: '인공 신경망과 퍼셉트론', pages: '127쪽' },
      { title: '다층 신경망, 심층 신경망, 딥러닝', pages: '128쪽' },
      { title: '신경망 모델에서 은닉층과 노드의 역할 알아보기', pages: '129쪽', kind: '활동 7' },
      { title: '딥러닝 활용 분야', pages: '130~131쪽' },
      { title: '딥러닝 기술 경험하기', pages: '132쪽', kind: '활동 8' },
    ],
  },
  {
    n: 2,
    code: '03-2',
    title: '신경망 모델 설계와 구현 과정',
    pages: '133~142쪽',
    guide: '지도서 22~24차시',
    goals: [
      '신경망 모델의 설계 과정에 대해 설명할 수 있다.',
      '신경망 모델을 구현할 수 있다.',
      '손으로 쓴 숫자 분류 모델을 신경망으로 구현할 수 있다.',
    ],
    standard: '12인기02-06',
    ready: true,
    sections: [
      { title: '모델의 구현 과정', pages: '133쪽' },
      { title: '신경망 모델 생성하기: 식품 분류 신경망', pages: '134~136쪽', kind: '예제' },
      { title: '신경망 모델 평가 및 예측하기', pages: '137쪽' },
      { title: '손으로 쓴 숫자 분류 모델 구현하기', pages: '137~140쪽', kind: '실습 5' },
      { title: '내가 쓴 숫자를 분류할 수 있을까?', pages: '141쪽', kind: '더 알아보기' },
      { title: '손으로 쓴 숫자 분류 모델 구현하기', pages: '142쪽', kind: '오렌지로 해 볼까?' },
    ],
  },
  {
    n: 3,
    code: '03-3',
    title: '컴퓨터 비전',
    pages: '143~154쪽',
    guide: '지도서 25~28차시',
    goals: [
      '컴퓨터 비전의 다양한 기술을 탐색할 수 있다.',
      '합성곱 신경망의 개념을 설명하고 모델을 구현할 수 있다.',
    ],
    standard: '12인기02-06',
    ready: true,
    sections: [
      { title: '컴퓨터 비전의 이해와 활용 사례', pages: '143~144쪽' },
      { title: '컴퓨터 비전 객체 탐지 기술 체험하기', pages: '145쪽', kind: '활동 9' },
      { title: '합성곱 신경망의 이해', pages: '146쪽' },
      { title: '합성곱 연산으로 이미지 특징을 추출하는 과정 이해하기', pages: '146쪽', kind: '활동 10' },
      { title: '합성곱 신경망(CNN) 동작 과정 이해하기', pages: '147쪽', kind: '활동 11' },
      { title: '사전 훈련된 합성곱 신경망과 전이 학습', pages: '148쪽', kind: '더 알아보기' },
      { title: '도로 균열 유무를 분류하는 합성곱 신경망 모델 구현하기', pages: '149~153쪽', kind: '실습 6' },
      { title: '도로 균열 유무 분류 모델 구현하기', pages: '154쪽', kind: '오렌지로 해 볼까?' },
    ],
  },
  {
    n: 4,
    code: '03-4',
    title: '음성 인식과 자연어 처리',
    pages: '155~161쪽',
    guide: '지도서 29~32차시',
    goals: ['음성 인식과 자연어 처리 과정을 이해할 수 있다.'],
    standard: '12인기02-06',
    ready: true,
    sections: [
      { title: '음성 인식과 자연어 처리 이해', pages: '155쪽' },
      { title: '딥러닝을 활용한 음성 인식', pages: '156쪽' },
      { title: '음성 인식 활용하기', pages: '157쪽', kind: '활동 12' },
      { title: '생성형 인공지능이란 무엇일까?', pages: '157쪽', kind: '더 알아보기' },
      { title: '딥러닝을 활용한 자연어 처리', pages: '158~159쪽' },
      { title: '음성 인식과 자연어 처리 사례', pages: '160쪽' },
      { title: '인공지능 단어 연상 게임해 보기', pages: '161쪽', kind: '활동 13' },
    ],
  },
];
