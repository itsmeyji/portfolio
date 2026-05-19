import { useState } from 'react';
import { projects } from './data/projects';

const email = 'jungyunji031023@gmail.com';
const githubUrl = 'https://github.com/itsmeyji';

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="첫 화면으로 이동">
        YJ
      </a>
      <nav className="nav" aria-label="주요 섹션">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
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
    <section id="home" className="hero">
      <div className="hero-background" aria-hidden="true" />
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Backend Developer Portfolio</p>
          <h1 className="hero-title">
            <span className="hero-title-role">백엔드 개발자</span>
            <span>정윤지입니다</span>
          </h1>
          <p className="hero-copy">
            자바 기반의 웹 백엔드 개발로
            <br />
            합리적이고 안정적인 구조의 서비스를 개발하고 있습니다
          </p>
          <div className="hero-links" aria-label="연락처 링크">
            <a className="primary-link" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <button type="button" onClick={copyEmail} aria-label="이메일 주소 복사">
              {emailCopied ? '✓ Copied' : 'E-mail'}
            </button>
          </div>
        </div>
        <div className="hero-divider" />
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
          <h2>배움을 멈추지 않는 개발자</h2>
        </div>
        <div className="lead about-copy">
          <p>여러 프로젝트를 진행하며 아이디어가 실제 서비스로 구현되는 경험을 통해 개발의 매력에 빠지게 되었고,</p>
          <p>특히 서비스 규모가 커질수록 이를 안정적으로 지탱하는 백엔드 구조의 중요성을 체감했습니다.</p>
          <p>단순 기능의 구현을 넘어 안정성과 확장성을 고려한 아키텍처에 관심을 가지며 백엔드 역량을 깊이 있게 키워왔습니다.</p>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  const skillGroups = [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'MySQL', 'mongoDB'],
    },
    {
      title: 'Data / AI',
      items: ['Python', 'Pandas', 'TensorFlow'],
    },
    {
      title: 'Infra / Tools',
      items: ['Docker', 'Git', 'Naver Cloud', 'AWS'],
    },
  ];

  return (
    <section id="skills" className="section muted">
      <div className="section-inner">
        <p className="eyebrow">Skills</p>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article className="project-card" key={project.title}>
                <div className="project-card-head">
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
                  aria-label={`${project.title} 상세 보기`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenProject(isOpen ? null : index)}
                >
                  <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`project-detail ${isOpen ? 'is-open' : ''}`}>
                  <div className="project-detail-inner">
                    {project.demo && (
                      <video className="project-demo" src={project.demo} controls preload="metadata" />
                    )}
                    <dl className="project-meta">
                      {project.team && (
                        <div>
                          <dt>참여 인원</dt>
                          <dd>{project.team}</dd>
                        </div>
                      )}
                      {project.role && (
                        <div>
                          <dt>나의 역할</dt>
                          <dd>{project.role}</dd>
                        </div>
                      )}
                    </dl>
                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Demo
                        </a>
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
  const education = [
    {
      title: '상명대학교',
      period: '2023.03 ~ 현재 (휴학)',
      descriptions: ['빅데이터융합전공 · 컴퓨터과학 복수전공'],
    },
  ];

  const activities = [
    {
      title: '정보보호 연구실 산하 동아리 Pioneer',
      period: '2023.03 ~ 현재',
      descriptions: [
        '프로그래밍·웹보안 관련 세미나 및 미니 프로젝트 참여',
        '신입생 대상 기초 코딩 스터디 및 멘토링 진행',
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
      period: '2025.01',
      descriptions: [
        '네덜란드 "Fontys University of Applied Science"학생들과 글로벌 헬스케어 앱 구상 프로젝트 진행',
        '난임 관리 어플로 Philips 본사 발표 및 현지 담당자/교수들과 피드백',
      ],
    },
    {
      title: 'UBC 계절 어학연수 프로그램',
      period: '2025.12 ~ 2026.01',
      descriptions: [
        '캐나다 밴쿠버 University of British Columbia 단기 어학연수 프로그램 참여',
        '언어 교육 과정 이수',
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
    <section id="experience" className="section muted">
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
        <h2>함께 성장할 기회를 기다리고 있습니다.</h2>
        <div className="contact-links">
          <button className="primary-link" type="button" onClick={copyEmail} aria-label="이메일 주소 복사">
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
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <a className="scroll-top" href="#home" aria-label="맨 위로 이동">
        ↑
      </a>
    </>
  );
}

export default App;















