export const projects = [
  {
    title: 'To-Dog',
    summary: 'AI 대화형 매칭과 음성 상담으로 고립 인구와 유기견을 연결하는 MSA 기반 돌봄 플랫폼.',
    period: '2025.06 ~ 2025.10',
    role: '백엔드 일부 개발, 배포 파이프라인(CI/CD) 구축 및 관리',
    stack: ['Java', 'Spring Boot', 'Python', 'TypeScript', 'NCloud'],
    logo: '/assets/projects/ToDog.png',
    demo: '',
    github: 'https://github.com/K-PaaS-2025',
    site: '',
    intro:
      '1인 가구의 사회적 고립과 유기동물 보호소 과밀 문제를 함께 해결하기 위해 개발한 AI 기반 임시보호 매칭 서비스. AI 대화형 시스템으로 사용자와 유기견을 매칭하고, 일일 음성 상담, 사진 기반 편지 생성, 자동 리포트를 통해 보호자와 반려동물의 정서 및 건강 상태를 지속적으로 모니터링합니다. 위험 신호 발생 시 관리자가 즉시 개입할 수 있도록 설계했으며, MSA 기반의 클라우드 네이티브 아키텍처로 구현했습니다.',
    features: [
      'AI 대화 기반 사용자-유기동물 매칭 (Feature Vector 유사도 계산 + 제약 필터링 + 휴먼 검토(HITL))',
      '일일 AI 음성 상담 (STT/TTS 연동, 건강·정서 상태 자동 수집)',
      '반려동물 일일 편지 생성 (이미지 캡셔닝 기반 동물 시점 편지 자동 생성)',
      '자동 리포트 및 위험 키워드 탐지 (경미/주의/심각 등급별 관리자 알림)',
    ],
    architecture: [
      'MSA 기반 서비스 분리(총 8개 레포지토리)로 독립 배포 및 장애 격리, 12 Factor App 원칙을 적용한 클라우드 네이티브 설계(Stateless API, 환경변수 기반 Config, 비동기 처리 등).',
      'Git Push → Source Commit → Build → Deploy → NKS(Kubernetes) 자동 배포 CI/CD 파이프라인 구축, 커밋 메시지 규칙 적용 및 테스트/스테이징/운영 단계별 배포·롤백 체계 마련.',
      'Docker 이미지 빌드 자동화 및 Ncloud Container Registry 연동, Spring Actuator·FastAPI lifespan 기반 Graceful Shutdown 등 서비스 안정성을 고려한 배포 설계.',
      '사용자용 PWA 앱 / 관리자용 웹을 분리 운영해 역할별 워크플로우를 독립적으로 구성.',
    ],
  },
  {
    title: '자취 도우미',
    summary: '마이데이터 기반 소득·소비 분석과 지역 시세 데이터를 결합해 청년의 자취 가능 시점을 예측하는 AI 주거자금 설계 서비스.',
    period: '2026.07 ~ 2026.08',
    role: '아이디어 구상, 프론트엔드 설계, 백엔드 전반, 시뮬레이션 및 자금설계 기능, 자취 시작 가능 시점 예측 기능, DSR 기반 안전한도 설계 기능',
    stack: ['React', 'Spring Boot', 'MySQL', 'Perplexity API(Sonar)', '마이데이터/공공데이터 연동'],
    logo: '/assets/projects/kb-logo.png',
    demo: '/assets/projects/kb.mp4',
    github: 'https://github.com/2026KBcontest',
    site: '',
    intro:
      '청년 1인가구의 독립 의향은 높으나 목표 설정 능력 부족으로 실행이 어려운 문제 해결에 착안한 AI 주거자금 설계 서비스. 부동산 플랫폼, 가계부 앱, 정부 정책 사이트 등 기존 서비스가 분산 제공하던 기능을 하나로 통합했습니다. 필요자금 산출부터 시점 역산, 안전한도 검증, 정책 매칭까지 자취라는 하나의 목표 아래 통합 설계했으며, 최종적으로 KB 금융상품과 연계해 저축·대출 실행까지 이어지는 구조를 지향합니다.',
    features: [
      '급여·소비패턴 분석 기반 순수 저축 시점 역산 및 대출 활용 시 단축 기간 비교 제공.',
      'DSR 기반 안전한도 계산으로 무리한 대출 방지 및 상환 가능 범위 자동 산출.',
      '연령·소득·지역 조건 기반 청년정책 자동 판정 및 신청 시점 역산 체크리스트 제공.',
      '목표 시점에 맞춘 KB 적금 상품 자동 추천 및 목표 대비 저축 격차 시각화.',
    ],
    architecture: [
      '프론트엔드(React)-백엔드(Spring Boot)-데이터/외부연동 계층의 3단 구조로 설계.',
      '필요자금 산출, 시점 역산, DSR 계산 등 재현성이 중요한 영역은 결정론적 산식으로 처리하고, 소비 코칭 문구·결과 요약 등 설득력이 필요한 영역은 근거 출처를 함께 제시하는 Perplexity Sonar(LLM)로 분리 처리.',
      '규칙 기반 산식과 LLM의 역할을 분리해 금융 서비스에 필요한 정확성과 설명가능성(XAI)을 동시에 확보.',
    ],
  },
  {
    title: 'Mirae',
    summary: 'AI 기반 백준 풀이 이력 분석으로 개인화 문제를 추천하고 게이미피케이션으로 학습 동기를 부여하는 코딩 학습 서비스.',
    period: '2025.09 ~ 2025.12',
    role: 'BE/Infra 구축, 추천 알고리즘 설계 및 배포 파이프라인 구성',
    stack: ['Java', 'Spring Boot', 'FastAPI', 'MySQL', 'Redis', 'React'],
    logo: '/assets/projects/Mirae.png',
    demo: '/assets/projects/MiraeVid.mp4',
    github: 'https://github.com/Mirae-2025',
    site: '',
    intro:
      'Mirae은 사용자의 문제 풀이 기록을 분석해 실력과 취약 유형에 맞는 문제를 추천하는 AI 기반 웹서비스.'+'\n'+' 백준(BOJ)은 문제 번호와 난이도가 무관하게 부여되어 있어 학습자가 자신의 수준에 맞는 문제를 찾기 어렵습니다. 사용자 히스토리를 분석하여 추천 이유를 함께 제공하고, 성장 분석 리포트와 미니게임을 통해 학습 동기를 높였으며, 추천 모델 설계부터 서비스 배포까지 전 과정을 직접 구현했습니다.',
    features: [
      '풀이 이력 기반 하이브리드 추천(TF-IDF 유사도 70% + 인기도 30%)과 약점 태그·신규 사용자 대응 로직으로 개인화 문제를 추천하고 추천 이유를 함께 제시 (오프라인 검증 결과 랜덤 추천 대비 적합도 약 25% 향상).',
      '기본 통계, 강점/약점 태그 Top5, 난이도별·주간 추이를 보여주는 성장 분석 리포트 제공.',
      'solved.ac API 연동과 백준 제출 현황 크롤링 기반 3단계 검증 로직으로 구현한 미니게임 (풀이 시간 경쟁).',
    ],
    architecture: [
      'Docker 기반 서비스 컨테이너화 및 무료 플랜 활용 분할 배포 (FE-Vercel / BE·ML-Render / MySQL-Upstash / Redis-Aiven).',
      'Spring Boot 백엔드에서 JWT 인증/인가와 API Gateway로 전체 비즈니스 로직을 처리하는 구조, 무료 인프라 슬립 이슈(15분 미접속 시 다운) 대응 헬스체크 로직 적용.',
    ],
  },
  {
    title: 'Dino Go',
    summary: 'Sui 블록체인 기반 위치 기반 NFT 수집 게임.',
    period: '3일 (해커톤)',
    role: 'Google Maps Three.js 3D 맵 통합, 프론트엔드 디자인',
    stack: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Move', 'Sui SDK'],
    logo: '/assets/projects/DinoGo.png',
    demo: '',
    github: 'https://github.com/Dino-Go',
    site: 'https://dinogo.vercel.app/',
    intro:
      '3일간의 해커톤에서 진행한 Sui 블록체인 기반 위치 기반 NFT 수집 게임. 사용자의 실제 위치 이동을 기반으로 가상 공룡 NFT를 수집하고 마켓플레이스에서 거래할 수 있다.',
    features: [
      '실제 위치 이동 기반 가상 공룡 NFT 수집 및 마켓플레이스 거래 기능.',
      'Google Maps API와 Three.js를 결합한 3D 맵 인터페이스.',
    ],
    architecture: [
      'Walrus 분산 스토리지 기반 NFT 메타데이터 저장 및 Seal 임계값 암호화를 통한 데이터 보호.',
      'Next.js·TypeScript·Three.js·Tailwind CSS 프론트엔드, Move 스마트 컨트랙트 4개 모듈, Sui SDK 기반 Web3 통신 레이어로 구성.',
    ],
  },
];
