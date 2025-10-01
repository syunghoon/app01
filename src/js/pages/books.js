const books = [
  {
    "title": "해설 경제학 총론",
    "price": 28284,
    "category": "it"
  },
  {
    "title": "심화 고전 소설 이론",
    "price": 14372,
    "category": "science"
  },
  {
    "title": "데이터로 보는 중세 유럽 사전",
    "price": 12048,
    "category": "history"
  },
  {
    "title": "글로벌 시대의 진화 입문",
    "price": 25270,
    "category": "literature"
  },
  {
    "title": "실험으로 증명된 고대 로마 이론",
    "price": 16078,
    "category": "it"
  },
  {
    "title": "인공지능과 중세 유럽 연구",
    "price": 22764,
    "category": "science"
  },
  {
    "title": "탐구 세계 대전 총론",
    "price": 29798,
    "category": "history"
  },
  {
    "title": "통합 소프트웨어 연구",
    "price": 29440,
    "category": "literature"
  },
  {
    "title": "현대인의 윤리학 전망",
    "price": 13926,
    "category": "literature"
  },
  {
    "title": "글로벌 시대의 중세 유럽 가이드",
    "price": 19085,
    "category": "history"
  },
  {
    "title": "심화 인간 본성 연구",
    "price": 12955,
    "category": "it"
  },
  {
    "title": "비밀 문명 가이드",
    "price": 13852,
    "category": "history"
  },
  {
    "title": "필수 인간 본성 사전",
    "price": 17390,
    "category": "history"
  },
  {
    "title": "철학으로 풀어본 디지털 혁명 가이드",
    "price": 24023,
    "category": "it"
  },
  {
    "title": "해설 고전 소설 분석",
    "price": 29692,
    "category": "it"
  },
  {
    "title": "비밀 문명 교과서",
    "price": 23277,
    "category": "it"
  },
  {
    "title": "현대인의 윤리학 길잡이",
    "price": 14094,
    "category": "it"
  },
  {
    "title": "탐구 정치 사상 분석",
    "price": 19346,
    "category": "it"
  },
  {
    "title": "미래의 소프트웨어 분석",
    "price": 12273,
    "category": "history"
  },
  {
    "title": "역사 속의 디지털 혁명 전망",
    "price": 18159,
    "category": "it"
  },
  {
    "title": "고전으로 읽는 철학 입문",
    "price": 19865,
    "category": "it"
  },
  {
    "title": "데이터로 보는 인간 본성 탐험",
    "price": 25113,
    "category": "science"
  },
  {
    "title": "심화 수학 가이드",
    "price": 17832,
    "category": "it"
  },
  {
    "title": "실험으로 증명된 인간 본성 핵심",
    "price": 13952,
    "category": "literature"
  },
  {
    "title": "미래의 근대 과학 사례집",
    "price": 16369,
    "category": "literature"
  },
  {
    "title": "철학으로 풀어본 정치 사상 강의",
    "price": 16246,
    "category": "it"
  },
  {
    "title": "현대인의 문화 길잡이",
    "price": 21935,
    "category": "history"
  },
  {
    "title": "미래의 근대 과학 가이드",
    "price": 17339,
    "category": "history"
  },
  {
    "title": "초보자를 위한 경제학 가이드",
    "price": 12954,
    "category": "literature"
  },
  {
    "title": "역사 속의 철학 핵심",
    "price": 24821,
    "category": "literature"
  },
  {
    "title": "철학으로 풀어본 진화 컬렉션",
    "price": 24308,
    "category": "history"
  },
  {
    "title": "실험으로 증명된 진화 핵심",
    "price": 13838,
    "category": "history"
  },
  {
    "title": "실전 디지털 혁명 탐험",
    "price": 17406,
    "category": "science"
  },
  {
    "title": "숨겨진 고전 소설 핵심",
    "price": 21805,
    "category": "literature"
  },
  {
    "title": "숨겨진 근대 과학 이론",
    "price": 18832,
    "category": "history"
  },
  {
    "title": "통합 소프트웨어 탐험",
    "price": 19042,
    "category": "literature"
  },
  {
    "title": "실험으로 증명된 중세 유럽 강의",
    "price": 19041,
    "category": "it"
  },
  {
    "title": "역사 속의 근대 과학 가이드",
    "price": 18300,
    "category": "it"
  },
  {
    "title": "비밀 근대 과학 사전",
    "price": 24014,
    "category": "it"
  },
  {
    "title": "필수 윤리학 총론",
    "price": 24999,
    "category": "literature"
  },
  {
    "title": "비밀 문화 분석",
    "price": 14963,
    "category": "it"
  },
  {
    "title": "미래의 세계 대전 강의",
    "price": 28534,
    "category": "it"
  },
  {
    "title": "미래의 정치 사상 가이드",
    "price": 15850,
    "category": "history"
  },
  {
    "title": "탐구 문명 가이드",
    "price": 21947,
    "category": "science"
  },
  {
    "title": "글로벌 시대의 인간 본성 사례집",
    "price": 15401,
    "category": "history"
  },
  {
    "title": "현대인의 고대 로마 사전",
    "price": 16753,
    "category": "it"
  },
  {
    "title": "숨겨진 디지털 혁명 총론",
    "price": 29489,
    "category": "it"
  },
  {
    "title": "비밀 예술 핵심",
    "price": 22317,
    "category": "history"
  },
  {
    "title": "심화 진화 사례집",
    "price": 19754,
    "category": "science"
  },
  {
    "title": "철학으로 풀어본 중세 유럽 길잡이",
    "price": 14467,
    "category": "science"
  },
  {
    "title": "데이터로 보는 예술 실전편",
    "price": 22038,
    "category": "history"
  },
  {
    "title": "고전으로 읽는 근대 과학 탐험",
    "price": 23506,
    "category": "history"
  },
  {
    "title": "글로벌 시대의 근대 과학 총론",
    "price": 12343,
    "category": "it"
  },
  {
    "title": "초보자를 위한 진화 사전",
    "price": 16276,
    "category": "literature"
  },
  {
    "title": "철학으로 풀어본 소프트웨어 가이드",
    "price": 29803,
    "category": "science"
  },
  {
    "title": "미래의 문명 총론",
    "price": 20147,
    "category": "literature"
  },
  {
    "title": "통합 근대 과학 연구",
    "price": 16365,
    "category": "literature"
  },
  {
    "title": "철학으로 풀어본 미래 사회 에세이",
    "price": 13128,
    "category": "history"
  },
  {
    "title": "심리학과 수학 분석",
    "price": 14931,
    "category": "literature"
  },
  {
    "title": "미래의 경제학 길잡이",
    "price": 23040,
    "category": "it"
  },
  {
    "title": "탐구 윤리학 연구",
    "price": 12139,
    "category": "science"
  },
  {
    "title": "필수 근대 과학 사례집",
    "price": 27233,
    "category": "history"
  },
  {
    "title": "심리학과 언어학 사례집",
    "price": 13590,
    "category": "literature"
  },
  {
    "title": "역사 속의 경제학 전망",
    "price": 22866,
    "category": "history"
  },
  {
    "title": "철학으로 풀어본 진화 탐험",
    "price": 12861,
    "category": "literature"
  },
  {
    "title": "고전으로 읽는 윤리학 실전편",
    "price": 17125,
    "category": "literature"
  },
  {
    "title": "실전 미래 사회 컬렉션",
    "price": 21973,
    "category": "science"
  },
  {
    "title": "고전으로 읽는 언어학 사례집",
    "price": 27333,
    "category": "history"
  },
  {
    "title": "해설 문명 총론",
    "price": 22978,
    "category": "history"
  },
  {
    "title": "숨겨진 경제학 이론",
    "price": 23597,
    "category": "science"
  },
  {
    "title": "인공지능과 미래 사회 실전편",
    "price": 26064,
    "category": "it"
  },
  {
    "title": "숨겨진 소프트웨어 가이드",
    "price": 25845,
    "category": "literature"
  },
  {
    "title": "초보자를 위한 철학 사전",
    "price": 16106,
    "category": "it"
  },
  {
    "title": "비밀 고대 로마 교과서",
    "price": 29641,
    "category": "it"
  },
  {
    "title": "현대인의 경제학 실전편",
    "price": 21221,
    "category": "literature"
  },
  {
    "title": "미래의 소프트웨어 총론",
    "price": 17213,
    "category": "science"
  },
  {
    "title": "초보자를 위한 디지털 혁명 실전편",
    "price": 29388,
    "category": "it"
  },
  {
    "title": "실전 세계 대전 강의",
    "price": 15197,
    "category": "literature"
  },
  {
    "title": "탐구 수학 교과서",
    "price": 23763,
    "category": "it"
  },
  {
    "title": "숨겨진 문화 핵심",
    "price": 27513,
    "category": "it"
  },
  {
    "title": "숨겨진 철학 이론",
    "price": 24061,
    "category": "science"
  },
  {
    "title": "실전 고대 로마 실전편",
    "price": 23410,
    "category": "it"
  },
  {
    "title": "미래의 미래 사회 교과서",
    "price": 20120,
    "category": "it"
  },
  {
    "title": "숨겨진 우주 사례집",
    "price": 25299,
    "category": "history"
  },
  {
    "title": "숨겨진 진화 에세이",
    "price": 12913,
    "category": "science"
  },
  {
    "title": "탐구 수학 컬렉션",
    "price": 17601,
    "category": "it"
  },
  {
    "title": "글로벌 시대의 디지털 혁명 길잡이",
    "price": 22716,
    "category": "literature"
  },
  {
    "title": "현대인의 미래 사회 입문",
    "price": 16356,
    "category": "history"
  },
  {
    "title": "글로벌 시대의 윤리학 이론",
    "price": 19983,
    "category": "it"
  },
  {
    "title": "숨겨진 인간 본성 사례집",
    "price": 16713,
    "category": "literature"
  },
  {
    "title": "실험으로 증명된 언어학 전망",
    "price": 12569,
    "category": "history"
  },
  {
    "title": "초보자를 위한 문화 에세이",
    "price": 28185,
    "category": "literature"
  },
  {
    "title": "탐구 근대 과학 총론",
    "price": 29129,
    "category": "it"
  },
  {
    "title": "미래의 우주 교과서",
    "price": 15080,
    "category": "it"
  },
  {
    "title": "심리학과 문화 교과서",
    "price": 23486,
    "category": "it"
  },
  {
    "title": "철학으로 풀어본 진화 강의",
    "price": 26764,
    "category": "literature"
  },
  {
    "title": "실험으로 증명된 문화 실전편",
    "price": 27534,
    "category": "it"
  },
  {
    "title": "미래의 우주 교과서",
    "price": 27784,
    "category": "it"
  },
  {
    "title": "통합 정치 사상 분석",
    "price": 24428,
    "category": "science"
  },
  {
    "title": "역사 속의 예술 에세이",
    "price": 15575,
    "category": "literature"
  }
];

localStorage.setItem('books', JSON.stringify(books));