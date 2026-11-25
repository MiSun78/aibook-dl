// 디지털 교과서에서 바로 내려받는 교과서 자료 (public/data)
export const DATA: Record<string, { bytes: number; desc: string; src: string; srcUrl?: string }> = {
  'penguins_size.csv': { bytes: 15015, desc: '남극 펭귄 데이터 344마리, 7개 속성 (실습 1, 실습 3, 선택 활동 4)', src: '캐글 Palmer Archipelago penguin data (CC0)', srcUrl: 'https://www.kaggle.com/datasets/parulpandey/palmer-archipelago-antarctica-penguin-data' },
  'chicken_cpi.xlsx': { bytes: 9224, desc: '치킨과 재료(닭고기, 밀가루, 식용유)의 소비자 물가 지수, 2000~2022년', src: '교과서 자료(bit.ly/chicken_data), 원자료 국가통계포털', srcUrl: 'https://bit.ly/chicken_data' },
  'earthquake.csv': { bytes: 90917, desc: '우리나라 지진 발생 목록 (선택 활동)', src: '교과서 자료(bit.ly/earthquake_data), 원자료 기상청', srcUrl: 'https://bit.ly/earthquake_data' },
  'label_labeless.zip': { bytes: 277771, desc: '라벨·무라벨 생수병 사진 (train, test 폴더) (활동 4)', src: '교과서 자료(bit.ly/label_labeless)', srcUrl: 'https://bit.ly/label_labeless' },
  'jeans.csv': { bytes: 19584, desc: '공군 신체 측정 정보 963명: neck, weight, heap, waist (실습 2, 선택 활동 2)', src: '교과서 자료(bit.ly/jeans_data), 원자료 공공데이터포털', srcUrl: 'https://bit.ly/jeans_data' },
  'abalone_original.csv': { bytes: 138952, desc: '전복 4,177개의 크기, 무게, 고리 수 (선택 활동 3)', src: '캐글 abalone-uci (UCI 기계학습 저장소, CC BY 4.0)', srcUrl: 'https://www.kaggle.com/datasets/hurshd0/abalone-uci' },
  'food.csv': { bytes: 238, desc: '식품 9가지의 당도, 아삭함, 과일·채소 (간단 실습)', src: '교과서 자료(bit.ly/food_data)', srcUrl: 'https://bit.ly/food_data' },
  'airline_passenger_satisfaction.csv': { bytes: 12875197, desc: '항공사 고객 129,880명의 서비스 만족도와 최종 만족 여부 (선택 활동 5)', src: '캐글 Airline Passenger Satisfaction', srcUrl: 'https://www.kaggle.com/datasets/mysarahmadbhat/airline-passenger-satisfaction' },
  'Mall_Customers.csv': { bytes: 3780, desc: '쇼핑몰 고객 200명: 성별, 나이, 연 소득, 쇼핑몰 점수 (실습 4)', src: '캐글 Mall Customers', srcUrl: 'https://www.kaggle.com/datasets/shwetabh123/mall-customers' },
  'caffe_menu.csv': { bytes: 23124, desc: '카페 음료 447가지의 열량, 설탕, 카페인 (선택 활동 6)', src: '교과서 자료(bit.ly/caffe_menu)', srcUrl: 'https://bit.ly/caffe_menu' },
  'food_nn.csv': { bytes: 243, desc: '식품 15가지의 당도, 아삭함, 클래스(0 과일, 1 단백질, 2 채소) (신경망 예제)', src: '교과서 자료(bit.ly/food_nn_data)', srcUrl: 'https://bit.ly/food_nn_data' },
  'mnist_dataset.zip': { bytes: 1380470, desc: '오렌지3용 손 글씨 숫자 데이터: mnist_train_small.csv, mnist_test_small.csv', src: '교과서 자료(bit.ly/MNIST_dataset)', srcUrl: 'https://bit.ly/MNIST_dataset' },
  '13.jpg': { bytes: 1692325, desc: '종이에 손으로 쓴 숫자 1과 3 사진 (더 알아보기)', src: '교과서 자료(bit.ly/13_jpg)', srcUrl: 'https://bit.ly/13_jpg' },
  'test.jpg': { bytes: 177050, desc: '객체 탐지 시험용 그림 (활동 9). 쇠라의 그림(퍼블릭 도메인)', src: '교과서 자료(bit.ly/test_jpg)', srcUrl: 'https://bit.ly/test_jpg' },
  'crack.zip': { bytes: 2536380, desc: '도로 사진 380장: train 300장, test 80장, Negative(균열 없음)·Positive(균열 있음) (실습 6)', src: '교과서 자료(bit.ly/crack_dataset), 원자료 캐글 Surface Crack Detection (CC BY 4.0)', srcUrl: 'https://bit.ly/crack_dataset' },
};
