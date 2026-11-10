import { useEffect, useState } from 'react';
import { projects } from './data/projects';
import { enActivities, enEducation, enProjects } from './data/en';

const isEn = new URLSearchParams(window.location.search).get('lang') === 'en';
const t = (ko, en) => (isEn ? en : ko);
const localizedProjects = isEn ? projects.map((project) => ({ ...project, ...enProjects[project.title] })) : projects;
if (isEn) document.documentElement.lang = 'en';

const email = 'jungyunji031023@gmail.com';
const githubUrl = 'https://github.com/itsmeyji';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 24);
      setScrollProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label={t('첫 화면으로 이동', 'Go to top')}>
        YJ
      </a>
      <nav className="nav" aria-label={t('주요 섹션', 'Main sections')}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <div className="lang-toggle" role="group" aria-label={t('언어 선택', 'Language')}>
          <a href="/" aria-label="한국어" aria-current={isEn ? undefined : 'true'}>
            KO
          </a>
          <a href="/?lang=en" aria-label="English" aria-current={isEn ? 'true' : undefined}>
            EN
          </a>
        </div>
      </nav>
      <span className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
    </header>
  );
}

function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="home" className="hero">
      <div className={`hero-grid ${scrolled ? 'is-faded' : ''}`} aria-hidden="true" />
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Software Developer Portfolio</p>
          <h1 className="hero-title">
            <span className="hero-title-role">{t('소프트웨어 개발자', 'Software Developer')}</span>
            <span>{t('정윤지입니다', 'Yunji Jung')}</span>
          </h1>
          <p className="hero-copy">
            {t('백엔드를 중심으로 프론트엔드, AI 연동, 배포 자동화까지', 'Centered on backend development, extending to frontend, AI integration, and deployment automation,')}
            <br />
            {t('서비스의 처음부터 운영까지 직접 만들고 있습니다', 'I build services myself from the very start through operation.')}
          </p>
          <div className="hero-links" aria-label={t('연락처 링크', 'Contact links')}>
            <a className="primary-link" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <button type="button" onClick={copyEmail} aria-label={t('이메일 주소 복사', 'Copy email address')}>
              {emailCopied ? '✓ Copied' : 'E-mail'}
            </button>
          </div>
        </div>
        <div className="hero-divider" />
      </div>
      <div className={`scroll-cue ${scrolled ? 'is-hidden' : ''}`} aria-hidden="true">
        <span className="scroll-cue-line" />
        <span className="scroll-cue-label">Scroll</span>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner two-column about-grid">
        <div className="about-heading">
          <p className="eyebrow">About</p>
          <h2>{t('배움을 멈추지 않는 개발자', 'A developer who never stops learning')}</h2>
        </div>
        <div className="lead about-copy">
          <p>{t('아이디어가 실제 서비스로 구현되는 경험을 통해 개발의 매력에 빠졌습니다.', 'I fell in love with development by seeing ideas become real services.')}</p>
          <p>{t('안정적인 백엔드 구조를 기반으로, 문제에 따라 프론트엔드 구현과 LLM 연동, 배포 자동화까지 필요한 기술을 직접 익혀 적용해 왔습니다.', 'Building on a stable backend architecture, I have learned and applied whatever each problem requires, including frontend implementation, LLM integration, and deployment automation.')}</p>
          <p>{t('기능 구현에 그치지 않고, 서비스가 실제로 운영되고 개선되는 과정까지 함께 고민합니다.', 'Beyond implementing features, I also think about how a service is actually operated and improved.')}</p>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  const skillGroups = [
    {
      title: 'Web',
      subGroups: [
        { label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'WebSocket', 'FastAPI'] },
        { label: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase'] },
        { label: 'Frontend', items: ['TypeScript', 'React'] },
      ],
    },
    {
      title: 'Data / AI',
      subGroups: [
        { label: 'Data', items: ['Python', 'Pandas', 'Excel'] },
        { label: 'LLM API', items: ['ChatGPT API', 'Perplexity API', 'Claude API'] },
      ],
    },
    {
      title: 'Infra / Tools',
      items: ['Docker', 'GitHub Actions', 'Git', 'Vercel', 'Render', 'Naver Cloud', 'AWS', 'Jira'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="eyebrow">Skills</p>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              {group.subGroups ? (
                <div className="skill-subgroups">
                  {group.subGroups.map((sub) => (
                    <div className="skill-subgroup" key={sub.label}>
                      <p className="skill-subgroup-label">{sub.label}</p>
                      <div className="tag-list">
                        {sub.items.map((item) => (
                          <span className="tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [openProjects, setOpenProjects] = useState(() => new Set());

  const toggleProject = (index) => {
    setOpenProjects((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
          </div>
        </div>

        <div className="project-grid">
          {localizedProjects.map((project, index) => {
            const isOpen = openProjects.has(index);

            return (
              <article className="project-card" key={project.title}>
                <div
                  className="project-card-head"
                  onClick={(event) => {
                    if (event.target.closest('a')) return;
                    toggleProject(index);
                  }}
                >
                  {project.logo && (
                    <img className="project-logo" src={project.logo} alt={`${project.title} logo`} />
                  )}
                  <div className="project-card-copy">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="project-card-links">
                      {project.github && (
                        <a className="project-github" href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a className="project-site" href={project.demo} target="_blank" rel="noreferrer">
                          Demo
                        </a>
                      )}
                      {project.site && (
                        <a className="project-site" href={project.site} target="_blank" rel="noreferrer">
                          Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <button
                  className="project-toggle"
                  type="button"
                  aria-label={t(`${project.title} 상세 보기`, `View ${project.title} details`)}
                  aria-expanded={isOpen}
                  onClick={() => toggleProject(index)}
                >
                  <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`project-detail ${isOpen ? 'is-open' : ''}`}>
                  <div className="project-detail-inner">
                    {project.screenshot && (
                      <img className="project-screenshot" src={project.screenshot} alt={t(`${project.title} 화면 예시`, `${project.title} screenshots`)} loading="lazy" />
                    )}
                    {project.demo && (
                      <video className="project-demo" src={project.demo} controls preload="metadata" />
                    )}
                    <dl className="project-meta">
                      {project.period && (
                        <div>
                          <dt>{t('개발 기간', 'Period')}</dt>
                          <dd>{project.period}</dd>
                        </div>
                      )}
                      {project.role && (
                        <div>
                          <dt>{t('나의 역할', 'My Role')}</dt>
                          <dd>{project.role}</dd>
                        </div>
                      )}
                    </dl>
                    <div className="project-sections">
                      {project.intro && (
                        <section className="project-subsection">
                          <h4>{t('서비스 소개', 'Overview')}</h4>
                          <p>{project.intro}</p>
                        </section>
                      )}
                      {project.features && project.features.length > 0 && (
                        <section className="project-subsection">
                          <h4>{t('주요 기능', 'Key Features')}</h4>
                          <ul>
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {project.architecture && project.architecture.length > 0 && (
                        <section className="project-subsection">
                          <h4>{t('아키텍처 특징', 'Architecture')}</h4>
                          <ul>
                            {project.architecture.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const education = isEn ? enEducation : [
    {
      title: '상명대학교',
      period: '2023.03 ~ 현재 (4학년 1학기 재학)',
      descriptions: ['빅데이터융합전공 · 컴퓨터과학 복수전공'],
    },
  ];

  const activities = isEn ? enActivities : [
    {
      title: '정보보호 연구회 Pioneer',
      period: '2023.03 ~ 현재',
      descriptions: [
        '프로그래밍·웹보안 관련 세미나 및 프로젝트 참여',
        '신입생 대상 기초 코딩 스터디 및 멘토링 진행',
        '논문 보조 수행',
        { text: '⇗  Pioneer Information Security Lab', href: 'https://isl.smu.ac.kr/' },
      ],
    },
    {
      title: '학생회 홍보부장',
      period: '2024.03 ~ 2025.02',
      descriptions: [
        '학과 행사 및 운영 전반 담당',
        '공식 SNS 운영 및 기업 협력 관련 업무 담당',
      ],
    },
    {
      title: 'Biohealth Honors Program',
      period: '2024.08 ~ 2025.01',
      descriptions: [
        '네덜란드 Fontys University of Applied Science 와 협업하여 글로벌 헬스케어 앱 구상 프로젝트 진행',
        '난임 관리 어플로 Philips 네덜란드 본사 영어 발표 및 현지 담당자/교수들과 피드백',
      ],
    },
    {
      title: 'UBC 계절 어학연수 프로그램',
      period: '2025.12 ~ 2026.02',
      descriptions: [
        '캐나다 밴쿠버 University of British Columbia 단기 어학연수 프로그램 참여',
        '언어/문화 교육 과정 이수',
      ],
    },
    {
      title: '연합 헬스케어 창업동아리 Medilux',
      period: '2026.09 ~ 현재',
      descriptions: [
        '메디컬 도메인 연합 창업동아리 활동',
        '창업, 사업 관련 강의 수강 및 프로젝트 개발팀으로 참여',
        '초기창업 팀 바이오애슬릭 결성',
      ],
    },
  ];

  const renderTimelineItems = (items) =>
    items.map((item) => (
      <article className="timeline-item" key={`${item.title}-${item.period}`}>
        <div className="timeline-dot" aria-hidden="true" />
        <div className="timeline-content">
          <h3>
            {item.title} <span>| {item.period}</span>
          </h3>
          {item.descriptions.map((description) =>
            typeof description === 'string' ? (
              <p key={description}>{description}</p>
            ) : (
              <p key={description.text}>
                <a href={description.href} target="_blank" rel="noreferrer">
                  {description.text}
                </a>
              </p>
            ),
          )}
        </div>
      </article>
    ));

  return (
    <section id="experience" className="section">
      <div className="section-inner experience-layout">
        <div>
          <p className="eyebrow">Experience / Activities</p>
        </div>
        <div className="timeline">
          <section className="timeline-group" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            {renderTimelineItems(education)}
          </section>
          <section className="timeline-group" aria-labelledby="activities-title">
            <h2 id="activities-title">Activities & Experience</h2>
            {renderTimelineItems(activities)}
          </section>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-box">
        <p className="eyebrow">Contact</p>
        <h2>{t('함께할 기회를 기다리고 있습니다.', 'I look forward to the opportunity to work together.')}</h2>
        <div className="contact-links">
          <button className="primary-link" type="button" onClick={copyEmail} aria-label={t('이메일 주소 복사', 'Copy email address')}>
            {emailCopied ? '✓ Copied' : 'E-mail'}
          </button>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="content-stack">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
      <a className="scroll-top" href="#home" aria-label={t('맨 위로 이동', 'Back to top')}>
        ↑
      </a>
    </>
  );
}

export default App;















