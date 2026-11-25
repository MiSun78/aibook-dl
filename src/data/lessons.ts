// 교과서 Ⅱ '인공지능과 학습'의 소단원 구성 (교과서 쪽수 기준)

export type Section = { title: string; pages: string; kind?: string };
export type Chapter = { code: string; title: string; pages: string };
export const CHAPTERS: Chapter[] = [
  { code: '01', title: '기계학습과 데이터', pages: '60~87쪽' },
  { code: '02', title: '기계학습 알고리즘', pages: '88~125쪽' },
  { code: '03', title: '인공 신경망과 딥러닝', pages: '126~161쪽' },
];

export type Unit = {
  slug: string;       // 사이트 주소 /lessons/slug/
  chapter: string;    // 중단원 번호 (01, 02, 03)
  n?: number;         // 03 단원의 예전 번호 (1~4)
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
    slug: '01-1',
    chapter: '01',
    code: '01-1',
    title: '기계학습과 문제 정의',
    pages: '60~66쪽',
    guide: '지도서 1~2차시',
    goals: ['기계학습을 적용할 문제를 정의할 수 있다.'],
    standard: '12인기02-01',
    ready: true,
    sections: [
      { title: '기계학습의 개념', pages: '61쪽' },
      { title: '데이터로 학습하기', pages: '62쪽' },
      { title: '인공지능의 손 글씨 인식', pages: '63쪽', kind: '활동 1' },
      { title: '컴퓨터는 사람이 쓴 손 글씨를 어떻게 인식할 수 있을까?', pages: '63쪽', kind: '더 알아보기' },
      { title: '기계학습으로 해결할 수 있는 문제', pages: '64~65쪽' },
      { title: '기계학습으로 해결 가능한 문제 정의하기', pages: '66쪽', kind: '활동 2' },
    ],
  },
  {
    slug: '01-2',
    chapter: '01',
    code: '01-2',
    title: '데이터 수집하기',
    pages: '67~71쪽',
    guide: '지도서 3~4차시',
    goals: ['문제 해결에 필요한 데이터를 선정하여 수집할 수 있다.'],
    standard: '12인기02-01',
    ready: true,
    sections: [
      { title: '데이터의 개념과 유형', pages: '67~68쪽' },
      { title: '데이터 수집 방법', pages: '69쪽' },
      { title: '문제 해결에 적합한 데이터 선정', pages: '70~71쪽' },
      { title: '문제 해결에 필요한 데이터 수집하기', pages: '71쪽', kind: '활동 3' },
    ],
  },
  {
    slug: '01-3',
    chapter: '01',
    code: '01-3',
    title: '데이터 탐색과 전처리',
    pages: '72~87쪽',
    guide: '지도서 5~8차시',
    goals: ['수집한 데이터를 가공하여 핵심 속성을 추출할 수 있다.'],
    standard: '12인기02-02',
    ready: true,
    sections: [
      { title: '데이터 살펴보기', pages: '72~74쪽' },
      { title: '데이터 전처리', pages: '74~76쪽' },
      { title: '상자그림으로 이상치 확인하기', pages: '75쪽', kind: '더 알아보기' },
      { title: '핵심 속성 추출', pages: '76~78쪽' },
      { title: '남극 펭귄 데이터 탐색하기', pages: '78~83쪽', kind: '실습 1' },
      { title: '펭귄 데이터 탐색하기', pages: '84쪽', kind: '오렌지로 해 볼까?' },
      { title: '지금 듣고 있는 노래를 내가 좋아하는 가수 목소리로?', pages: '85쪽', kind: '읽기 자료' },
      { title: '우리나라의 지진 발생 현황 분석해 보기', pages: '86~87쪽', kind: '선택 활동' },
    ],
  },
  {
    slug: '02-1', chapter: '02', code: '02-1', title: '기계학습 유형', pages: '88~91쪽', guide: '지도서 9차시',
    goals: ['문제 해결에 적합한 기계학습의 유형과 알고리즘을 선정할 수 있다.'], standard: '12인기02-03', ready: true,
    sections: [
      { title: '기계학습 유형과 알고리즘', pages: '88쪽' },
      { title: '지도학습', pages: '89쪽' },
      { title: '비지도학습', pages: '90쪽' },
      { title: '강화 학습', pages: '91쪽' },
      { title: '어떤 기계학습 유형일까?', pages: '88~91쪽', kind: '확인하기' },
    ],
  },
  {
    slug: '02-2', chapter: '02', code: '02-2', title: '모델의 학습과 평가', pages: '92~95쪽', guide: '지도서 10차시',
    goals: ['훈련 데이터를 이용하여 학습을 진행하고, 테스트 데이터를 사용하여 성능을 평가할 수 있다.'], standard: '12인기02-04', ready: true,
    sections: [
      { title: '기계학습 모델의 구현 과정', pages: '92쪽' },
      { title: '생수병의 무라벨, 라벨을 분류하는 모델 구현하기', pages: '93쪽', kind: '활동 4' },
      { title: '기계학습 모델의 학습과 평가', pages: '94~95쪽' },
      { title: 'k-폴드 교차 검증', pages: '95쪽', kind: '더 알아보기' },
    ],
  },
  {
    slug: '02-3', chapter: '02', code: '02-3', title: '회귀', pages: '96~105쪽', guide: '지도서 11~12차시',
    goals: ['선형 회귀 모델을 만들고 오차 함수와 결정계수로 성능을 평가할 수 있다.'], standard: '12인기02-04', ready: true,
    sections: [
      { title: '선형 회귀 모델', pages: '96쪽' },
      { title: '선형 회귀 성능 평가', pages: '97~98쪽' },
      { title: '목둘레로 허리둘레를 예측하는 선형 회귀 모델 구현하기', pages: '98~101쪽', kind: '실습 2' },
      { title: '목둘레로 청바지 치수를 알 수 있을까?', pages: '102쪽', kind: '오렌지로 해 볼까?' },
      { title: '다중 선형 회귀로 허리둘레를 예측해 보기', pages: '103쪽', kind: '선택 활동 2' },
      { title: '전복의 나이를 예측해 해양 생태계 보존하기', pages: '104~105쪽', kind: '선택 활동 3' },
    ],
  },
  {
    slug: '02-4', chapter: '02', code: '02-4', title: '분류', pages: '106~117쪽', guide: '지도서 13~16차시',
    goals: ['분류 모델을 만들고 정확도와 혼동 행렬로 성능을 평가할 수 있다.'], standard: '12인기02-04', ready: true,
    sections: [
      { title: '분류 모델', pages: '106쪽' },
      { title: '분류 모델의 클래스 영역을 나누는 경계 확인하기', pages: '106쪽', kind: '활동 5' },
      { title: '결정트리, 로지스틱 회귀, k-최근접 이웃', pages: '107~108쪽' },
      { title: '분류 모델 성능 평가', pages: '108쪽' },
      { title: '당도와 아삭함으로 과일인지 채소인지 분류하기', pages: '109쪽', kind: '간단 실습' },
      { title: '펭귄 종 분류 모델 구현하기', pages: '110~112쪽', kind: '실습 3' },
      { title: '펭귄 종 분류 모델 구현하기', pages: '113쪽', kind: '오렌지로 해 볼까?' },
      { title: '로지스틱 회귀, 최근접 이웃으로 펭귄 종 분류하기', pages: '114~115쪽', kind: '선택 활동 4' },
      { title: '항공사의 고객 만족도를 높이기 위한 고객 서비스 모델 만들기', pages: '116~117쪽', kind: '선택 활동 5' },
    ],
  },
  {
    slug: '02-5', chapter: '02', code: '02-5', title: '군집', pages: '118~125쪽', guide: '지도서 17~19차시',
    goals: ['군집 모델을 만들고 실루엣 점수로 성능을 평가할 수 있다.'], standard: '12인기02-04', ready: true,
    sections: [
      { title: '군집 모델과 k-평균 군집화', pages: '118~119쪽' },
      { title: 'k-평균 군집화 시뮬레이션하기', pages: '119쪽', kind: '활동 6' },
      { title: '군집 모델 구현하기', pages: '120~122쪽', kind: '실습 4' },
      { title: '군집 모델 구현하기', pages: '123쪽', kind: '오렌지로 해 볼까?' },
      { title: '실루엣 점수', pages: '123쪽', kind: '더 알아보기' },
      { title: '당신의 취향에 맞는 카페 음료 추천하기', pages: '124쪽', kind: '선택 활동 6' },
      { title: '나의 꿈, 나의 미래', pages: '125쪽', kind: '나의 꿈' },
    ],
  },
  {
    slug: '1',
    chapter: '03',
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
    slug: '2',
    chapter: '03',
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
    slug: '3',
    chapter: '03',
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
    slug: '4',
    chapter: '03',
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
