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
        <a href="#skills">Skill</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background" aria-hidden="true" />
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Backend Developer Portfolio</p>
          <h1>
            백엔드 개발자
            <br />
            정윤지입니다
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
            <a href={`mailto:${email}`}>E-mail</a>
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
      <div className="section-inner two-column">
        <div>
          <p className="eyebrow">About</p>
          <h2>기본을 탄탄히 쌓는 개발자</h2>
        </div>
        <p className="lead">
          문제를 단순히 해결하는 것에서 그치지 않고, 왜 그런 구조가 필요한지 이해하려고 합니다.
          팀과 함께 일할 때는 읽기 쉬운 코드, 명확한 소통, 꾸준한 기록을 중요하게 생각합니다.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Data / AI',
      items: ['Python', 'Pandas', 'TF-IDF'],
    },
    {
      title: 'Infra / Tools',
      items: ['Docker', 'GitHub Actions', 'Naver Cloud'],
    },
  ];

  return (
    <section id="skills" className="section muted">
      <div className="section-inner">
        <p className="eyebrow">Skill</p>
        <h2>현재 다루고 있는 기술</h2>
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
            <h2>프로젝트</h2>
          </div>
          <p>프로젝트 내용은 src/data/projects.js 파일에서 수정할 수 있습니다.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const isOpen = openProject === index;

            return (
              <article className="project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <button
                  className="text-button"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenProject(isOpen ? null : index)}
                >
                  {isOpen ? '접기' : '자세히 보기'}
                </button>
                {isOpen && (
                  <div className="project-detail">
                    <ul>
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        프로젝트 링크
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const activities = [
    '공모전, 수상, 교육 과정 등 주요 실적을 간단한 문장으로 작성하세요.',
    '동아리나 팀 프로젝트에서는 맡은 역할, 협업 방식, 결과를 중심으로 정리하면 좋습니다.',
    '기간이나 기관명이 있다면 문장 앞에 함께 적어두면 이력 흐름을 파악하기 쉽습니다.',
  ];

  return (
    <section id="experience" className="section muted">
      <div className="section-inner two-column">
        <div>
          <p className="eyebrow">Experience / Activities</p>
          <h2>경험과 활동</h2>
        </div>
        <div className="activity-list">
          {activities.map((activity) => (
            <p key={activity}>{activity}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-box">
        <p className="eyebrow">Contact</p>
        <h2>함께 성장할 기회를 기다리고 있습니다.</h2>
        <div className="contact-links">
          <a className="primary-link" href={`mailto:${email}`}>
            E-mail
          </a>
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
    </>
  );
}

export default App;
