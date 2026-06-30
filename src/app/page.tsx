import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Nav } from "@/components/Nav";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactGrid } from "@/components/ContactGrid";
import {
  aboutParagraphs,
  achievements,
  education,
  footerLinks,
  heroChips,
  heroStats,
  openSourceHighlights,
  profileJsonLd,
  projects,
  skillGroups,
  stats
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <Nav />
      <main>
        <section id="hero" className="hero-section" aria-label="Hero introduction">
          <ParticleCanvas />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow">
              <MapPin size={15} />
              Open to opportunities - Mangalore, India
            </p>
            <h1>
              Sathvik T
              <span>Devadiga</span>
            </h1>
            <p className="hero-copy">
              Software engineering student building cloud-native microservices, cyber defense systems,
              and ML-powered applications.
            </p>
            <div className="chip-row" aria-label="Technical focus areas">
              {heroChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a className="btn btn-outline" href="#contact">
                Get in Touch
                <Mail size={18} />
              </a>
            </div>
            <div className="hero-stats" aria-label="Portfolio highlights">
              {heroStats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container">
            <SectionHeader
              label="01 - About"
              title="Backend discipline, cloud context, and applied ML depth."
              intro="A concise view of what I build and how I approach engineering work."
            />
            <div className="about-grid">
              <div className="about-copy">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="stats-grid" aria-label="Profile statistics">
                {stats.map((stat) => (
                  <article key={stat.label} className="stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionHeader
              label="02 - Skills"
              title="Capability matrix tied to project evidence."
              intro="No ratings, no filler: just the stack I can explain through shipped work."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="skill-card">
                    <div className="skill-title">
                      <Icon size={18} />
                      <h3>{group.title}</h3>
                    </div>
                    <p>{group.note}</p>
                    <div className="tag-row">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <SectionHeader
              label="03 - Projects"
              title="Systems with architecture, tradeoffs, and measurable signals."
              intro="The flagship work leads with GraphSentinel, then broadens into healthcare, ML inference, and full-stack foundations."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="open-source" className="section">
          <div className="container open-source-grid">
            <div>
              <SectionHeader
                label="04 - Open Source"
                title="Public collaboration with practical backend impact."
                intro="Contribution work focused on smaller payloads, secure event discovery, and maintainable API surfaces."
              />
            </div>
            <div className="oss-panel">
              {openSourceHighlights.map((item) => (
                <div key={item.label} className="oss-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
              <p>
                Refactored redundant API endpoints and supported JWT-based session management in a social
                networking platform, with merged PRs that improved communication workflows.
              </p>
              <a
                className="btn btn-outline"
                href="https://github.com/sathvik-dvdg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open GitHub
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="achievements" className="section section-alt">
          <div className="container">
            <SectionHeader
              label="05 - Achievements"
              title="Signals beyond coursework."
              intro="Hackathon, contribution, and engineering ownership signals that are easy to verify."
            />
            <div className="achievement-list">
              {achievements.map((achievement) => (
                <article key={achievement.title} className="achievement-card">
                  <div>
                    <p className="project-meta">{achievement.organization}</p>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                  <div className="achievement-badges" aria-label={`${achievement.title} metadata`}>
                    <span>{achievement.date}</span>
                    <span>{achievement.badge}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHeader
              label="06 - Education"
              title="Academic foundation."
              intro="Degree, institution, timeline, and scores kept compact for recruiter scanning."
            />
            <div className="education-grid">
              {education.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.degree} className="education-card">
                    <Icon size={22} />
                    <div>
                      <h3>{item.degree}</h3>
                      <p>{item.institution}</p>
                      <span>{item.year}</span>
                    </div>
                    <strong>{item.score}</strong>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container">
            <SectionHeader
              label="07 - Contact"
              title="Let's build something."
              intro="I am open to full-time roles, internships, and focused collaborations in backend engineering, cloud infrastructure, and ML systems."
            />
            <ContactGrid />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Built with Next.js - Sathvik T Devadiga - 2026</p>
          <div>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
