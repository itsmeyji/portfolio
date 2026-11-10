// English copy. Project keys are the Korean titles in projects.js; links and media come from there.
export const enProjects = {
  '바이오애슬릭 (BioAthletic)': {
    title: 'BioAthletic',
    summary: 'A rule-based mobile web app that recommends weight training to baseball players aged 14 and over who train 3 to 5 times a week.',
    period: '2026.09 ~ Present',
    role: 'Development team lead. Sole backend developer, infrastructure setup, admin dashboard development',
    intro:
      'A rule-based mobile web app that recommends weight training to baseball players aged 14 and over who train 3 to 5 times a week. It connects condition check-in, workout planning, logging, and the next session into a single flow, leaving coaches free to focus on final decisions. The same input always produces the same recommendation, so every recommendation can be explained. The second MVP is now live and used by about 20 beta testers.',
    features: [
      'Rule-based training recommendations: Using data on more than 200 exercises, recommendations are built in order of block and week, daily goal, exercise selection, and prescription, and 14 invariants automatically validate the results.',
      'Training session management: Supports the entire workout process, including condition checks, session creation, set logging, reports, and stopping a session.',
      'Coach notes and max attempts: Explains why weight or sets were reduced and lets athletes attempt a new 1RM.',
      'Admin dashboard: Restricts access with an email whitelist and provides user statistics and an "athletes who trained" metric.',
      'Authentication and user management: Provides Google login, terms consent, profiles, and 1RM management.',
    ],
    architecture: [
      'Separated recommendation engine: A Gradle multi-module build splits app, which handles the API and database, from engine, the recommendation engine. engine is a pure Java module with no dependency on Spring or the database, so domain logic can be tested on its own.',
      'Configuration changes without redeployment: Engine values are versioned as JSON in a config_versions table. New configurations are validated before being applied, failures fall back to the last valid version, and training blocks in progress keep their existing version.',
      'Schema and data model: Flyway manages the database schema history, and the model uses PostgreSQL 17 jsonb and enum array columns.',
      'Testing and CI: 105 tests are written with JUnit, Testcontainers PostgreSQL, and MockMvc, and GitHub Actions runs the build and tests on every PR.',
      'Error tracing: A traceId is included in the common error response so that errors can be traced.',
      'Deployment: The frontend runs on Vercel, the Docker-packaged backend on Render, and the database on Supabase.',
    ],
  },
  'To-Dog': {
    summary: 'An MSA-based care platform connecting socially isolated people with abandoned dogs through AI conversational matching and voice counseling.',
    period: '2025.06 ~ 2025.10',
    role: 'Partial backend development, building and managing the CI/CD pipeline',
    intro:
      'An AI-based foster matching service created to address both the social isolation of single-person households and overcrowding in animal shelters. An AI conversational system matches users with abandoned dogs, while daily voice counseling, photo-based letter generation, and automated reports continuously monitor the emotional and physical condition of guardians and pets. It is designed so administrators can step in immediately when risk signals appear, and it is built on a cloud-native MSA architecture.',
    features: [
      'AI conversation-based matching between users and abandoned animals (feature vector similarity + constraint filtering + human-in-the-loop review)',
      'Daily AI voice counseling (STT/TTS integration, automatic collection of health and emotional status)',
      'Daily letters from pets (automatically generated from the animal\'s point of view using image captioning)',
      'Automated reports and risk keyword detection (administrator alerts by minor, caution, and severe levels)',
    ],
    architecture: [
      'Services separated with MSA (8 repositories in total) for independent deployment and fault isolation, with a cloud-native design following the 12-Factor App principles (stateless APIs, environment-based config, asynchronous processing, and more).',
      'Built an automated CI/CD pipeline of Git Push → Source Commit → Build → Deploy → NKS (Kubernetes), with commit message conventions and deployment and rollback processes for the test, staging, and production stages.',
      'Automated Docker image builds with Ncloud Container Registry integration, and designed deployments for service stability, including graceful shutdown with Spring Actuator and FastAPI lifespan.',
      'Separated the user PWA and the administrator web app so that each role has an independent workflow.',
    ],
  },
  '자취 도우미': {
    title: 'MoveOut Planner',
    summary: 'An AI housing finance planner that predicts when young adults can afford to live on their own by combining MyData-based income and spending analysis with regional market data.',
    period: '2026.07 ~ 2026.08',
    role: 'Idea development, frontend design, overall backend, simulation and financial planning features, move-out date prediction, DSR-based safe limit design',
    stack: ['React', 'Spring Boot', 'MySQL', 'Perplexity API (Sonar)', 'MyData / Public Data Integration'],
    intro:
      'An AI housing finance planning service inspired by the problem that young single-person households want to live independently but struggle to set concrete goals and act on them. It brings together features previously scattered across real estate platforms, budgeting apps, and government policy sites. Calculating required funds, working backward to a target date, verifying safe limits, and matching policies are all designed around the single goal of living independently, with the aim of connecting to KB financial products so that users can follow through on savings and loans.',
    features: [
      'Works backward from salary and spending patterns to estimate a savings-only move-out date, and compares the time saved by using a loan.',
      'Calculates DSR-based safe limits to prevent excessive borrowing and automatically determines an affordable repayment range.',
      'Automatically determines eligibility for youth policies by age, income, and region, and provides a checklist timed backward from application dates.',
      'Automatically recommends KB savings products matched to the target date and visualizes the savings gap against the goal.',
    ],
    architecture: [
      'Designed as a three-tier structure of frontend (React), backend (Spring Boot), and data and external integration layers.',
      'Areas where reproducibility matters, such as required funds, backward date calculation, and DSR, use deterministic formulas, while areas that need persuasive wording, such as spending coaching and result summaries, are handled separately by Perplexity Sonar (LLM), which presents its sources.',
      'Separating the roles of rule-based formulas and the LLM achieves both the accuracy and the explainability (XAI) that a financial service requires.',
    ],
  },
  'Solve Up': {
    summary: 'An AI-based coding study service that analyzes Baekjoon solving history to recommend personalized problems and motivates learners through gamification.',
    period: '2025.09 ~ 2025.12',
    role: 'Backend and infrastructure development, recommendation algorithm design, deployment pipeline setup',
    intro:
      'Solve Up is an AI-based web service that analyzes a user\'s problem-solving history to recommend problems suited to their skill level and weak areas.\n Baekjoon Online Judge (BOJ) assigns problem numbers independently of difficulty, making it hard for learners to find problems at their level. The service analyzes user history to recommend problems with reasons, raises motivation through growth analysis reports and a mini-game, and was implemented end to end, from recommendation model design to deployment.',
    features: [
      'Hybrid recommendations based on solving history (70% TF-IDF similarity + 30% popularity), with weak-tag and new-user logic to recommend personalized problems and explain why (about 25% better fit than random recommendations in offline validation).',
      'Growth analysis reports showing basic statistics, top 5 strong and weak tags, and trends by difficulty and week.',
      'A mini-game (solving-time competition) built on solved.ac API integration and three-step verification using crawled Baekjoon submission status.',
    ],
    architecture: [
      'Containerized services with Docker and split deployment across free plans (FE-Vercel / BE·ML-Render / MySQL-Upstash / Redis-Aiven).',
      'A Spring Boot backend handles all business logic with JWT authentication and authorization and an API Gateway, and health-check logic addresses free-tier sleep (shutdown after 15 minutes without access).',
    ],
  },
  'Dino Go': {
    summary: 'A location-based NFT collecting game built on the Sui blockchain.',
    period: '3 days (Hackathon)',
    role: 'Google Maps and Three.js 3D map integration, frontend design',
    intro:
      'A location-based NFT collecting game built on the Sui blockchain during a 3-day hackathon. Users collect virtual dinosaur NFTs by moving around in the real world and can trade them on a marketplace.',
    features: [
      'Virtual dinosaur NFT collecting based on real-world movement, with marketplace trading.',
      '3D map interface combining the Google Maps API and Three.js.',
    ],
    architecture: [
      'NFT metadata storage on Walrus decentralized storage, with data protected by Seal threshold encryption.',
      'Composed of a Next.js, TypeScript, Three.js, and Tailwind CSS frontend, four Move smart contract modules, and a Web3 communication layer based on the Sui SDK.',
    ],
  },
};

export const enEducation = [
  {
    title: 'Sangmyung University',
    period: '2023.03 ~ Present (Senior, 1st semester)',
    descriptions: ['Major in Big Data Convergence · Double Major in Computer Science'],
  },
];

export const enActivities = [
  {
    title: 'Information Security Research Club Pioneer',
    period: '2023.03 ~ Present',
    descriptions: [
      'Participated in seminars and projects on programming and web security',
      'Led introductory coding study groups and mentoring for first-year students',
      'Assisted with research papers',
      { text: '⇗  Pioneer Information Security Lab', href: 'https://isl.smu.ac.kr/' },
    ],
  },
  {
    title: 'Head of Public Relations, Student Council',
    period: '2024.03 ~ 2025.02',
    descriptions: [
      'Managed department events and overall operations',
      'Ran official social media channels and handled corporate partnership work',
    ],
  },
  {
    title: 'Biohealth Honors Program',
    period: '2024.08 ~ 2025.01',
    descriptions: [
      'Developed a global healthcare app concept in collaboration with Fontys University of Applied Sciences in the Netherlands',
      'Presented a fertility care app in English at Philips headquarters in the Netherlands and received feedback from local representatives and professors',
    ],
  },
  {
    title: 'UBC Seasonal English Language Program',
    period: '2025.12 ~ 2026.02',
    descriptions: [
      'Participated in a short-term language program at the University of British Columbia in Vancouver, Canada',
      'Completed language and culture coursework',
    ],
  },
  {
    title: 'Medilux, Intercollegiate Healthcare Startup Club',
    period: '2026.09 ~ Present',
    descriptions: [
      'Active member of an intercollegiate startup club in the medical domain',
      'Took courses on startups and business and joined a project as a member of the development team',
      'Formed BioAthletic, an early-stage startup team',
    ],
  },
];
