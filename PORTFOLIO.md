# PORTFOLIO.md
## Complete Portfolio Blueprint — Sathvik T Devadiga

> **Document Type:** Product Requirements Document + Design Specification + Architecture Blueprint  
> **Owner:** Sathvik T Devadiga  
> **Status:** Implementation-Ready  
> **Version:** 1.0  
> **Last Updated:** June 2026  

---

# Table of Contents

1. [Vision & Strategy](#1-vision--strategy)
2. [Information Architecture](#2-information-architecture)
3. [Landing Page — Hero Section](#3-landing-page--hero-section)
4. [About Section](#4-about-section)
5. [Skills Section](#5-skills-section)
6. [Featured Projects — Framework](#6-featured-projects--framework)
7. [GraphSentinel Case Study](#7-graphsentinel-case-study)
8. [HVSApp Case Study](#8-hvsapp-case-study)
9. [Stress Monitoring System Case Study](#9-stress-monitoring-system-case-study)
10. [Task Manager Case Study](#10-task-manager-case-study)
11. [Open Source Section](#11-open-source-section)
12. [Achievements Section](#12-achievements-section)
13. [Education Section](#13-education-section)
14. [Contact Section](#14-contact-section)
15. [Footer](#15-footer)
16. [Visual Design System](#16-visual-design-system)
17. [Motion Design](#17-motion-design)
18. [Responsive Design](#18-responsive-design)
19. [Accessibility](#19-accessibility)
20. [Performance](#20-performance)
21. [SEO Strategy](#21-seo-strategy)
22. [Analytics](#22-analytics)
23. [Folder Structure](#23-folder-structure)
24. [Component Architecture](#24-component-architecture)
25. [Tech Stack](#25-tech-stack)
26. [Content Strategy](#26-content-strategy)
27. [Development Roadmap](#27-development-roadmap)
28. [Deployment](#28-deployment)
29. [Future Enhancements](#29-future-enhancements)
30. [Recruiter Evaluation Checklist](#30-recruiter-evaluation-checklist)
31. [Pre-Launch Checklist](#31-pre-launch-checklist)

---

# 1. Vision & Strategy

## 1.1 Purpose

This portfolio exists to convert a technical recruiter's 90-second scan into a hiring action — a calendar invite, a referral to an engineering team, or a message saying "let's talk." Every design decision, content choice, and interaction must serve that conversion. Nothing is decorative.

Sathvik T Devadiga is a Computer Science undergraduate at Canara Engineering College (VTU) specializing in backend engineering, cloud infrastructure, applied ML, and cybersecurity. He has built four substantial engineering projects — one of which (GraphSentinel) demonstrates graduate-level knowledge of graph neural networks applied to network security. The portfolio's job is to surface that depth immediately and credibly.

## 1.2 Target Audience — Primary

| Persona | Goal | Scan Time | Decision Signal |
|---|---|---|---|
| Technical Recruiter (Tier 1 company) | Qualify candidate for backend/cloud/ML roles | 90 seconds | Does this person build real systems? |
| Hiring Manager (Engineering) | Assess technical depth before an interview | 3–5 minutes | Can they articulate architecture and tradeoffs? |
| Startup Founder | Find a generalist who owns the backend | 2 minutes | Will this person be reliable and autonomous? |
| Senior Engineer (Peer Review) | Evaluate whether to refer | 5 minutes | Do they think like an engineer? |

## 1.3 Primary Goals

1. **Establish credibility in 8 seconds** — name, role identity, and one standout technical signal in the hero.
2. **Prove depth in 90 seconds** — two or three project cards that communicate architecture, not just technology tags.
3. **Answer every recruiter gatekeeping question** — within two minutes of landing on the page.
4. **Reduce friction on every conversion action** — GitHub, resume download, and email contact must require exactly one click from any point on the page.

## 1.4 Recruiter Psychology

**How recruiters scan a portfolio:**

Recruiters spend the first 8 seconds reading only the hero. If the hero doesn't signal "serious engineer," they leave. They do not scroll first; they judge the entry point. After the hero, they look for projects. Most recruiters will open GitHub links in a new tab. They will read the project name and the first sentence of each description — nothing else, unless something stops them.

**What stops them:**
- A metric they haven't seen before (e.g., "under 400ms inference per frame" not "fast inference")
- A technology they recognize as genuinely difficult (GraphSAGE, CICIDS-2017, graph-based threat detection)
- An architecture description that sounds like an actual system decision, not a tutorial

**What causes immediate departure:**
- Generic hero copy: "Passionate developer who loves to code"
- Project descriptions that describe *what* a technology does rather than *what you decided and why*
- No measurable outcomes
- Missing GitHub links (or links that go to an empty account)
- Page load time over 3 seconds on mobile

## 1.5 What Separates Average from Exceptional Portfolios

| Average Portfolio | Exceptional Portfolio |
|---|---|
| Lists technologies used | Explains architecture decisions |
| Screenshots of UIs | System diagrams + architecture |
| "Built a REST API" | "Designed a rate-limited REST API on Express with JWT rotation, deployed on EC2 behind VPC, latency p95 < 120ms" |
| Shows 8 projects equally | Shows 2 flagship projects deeply, 2 others briefly |
| Generic about copy | Specific technical focus with honest tradeoffs |
| Badge-heavy skills section | Contextual skills tied to project evidence |
| No deployment evidence | Live demos, Docker configs, CI/CD badges |
| Slow, cluttered, visual overload | Fast, focused, one accent color |

---

# 2. Information Architecture

## 2.1 Navigation Hierarchy

```
sathvik.dev/
├── Hero                    (above the fold, always visible)
├── About                   (who you are, 3 paragraphs)
├── Skills                  (technical capability matrix)
├── Projects                (4 project cards → case study modals)
│   ├── GraphSentinel        (flagship)
│   ├── Stress Monitor       (ML depth)
│   ├── HVSApp               (full-stack + healthcare domain)
│   └── Task Manager         (foundations)
├── Open Source             (PR activity, contribution data)
├── Achievements            (SIH, hackathons, metrics)
├── Education               (timeline cards)
├── Contact                 (form + links)
└── Footer                  (copyright + quick links)
```

## 2.2 Page-by-Page Specification

### Landing (Hero)
- **Purpose:** Establish identity + signal seniority
- **User journey:** First impression → curiosity → scroll
- **Required content:** Name, role descriptor, 3 domain chips, two CTAs (Projects, Contact)
- **Conversion goal:** Click "View Projects →" or scroll to Projects

### About
- **Purpose:** Humanize + establish technical focus
- **User journey:** Scroll from hero → read 3 focused paragraphs
- **Required content:** 3 paragraphs (identity, technical approach, current goals), 4 stat cards
- **SEO purpose:** Establishes name + keyword density for "backend engineer India", "cloud ML engineer"

### Skills
- **Purpose:** Credibility signal, ATS keyword coverage
- **User journey:** Scan left to right across categories
- **Required content:** 5–6 category cards, each with 4–8 tags
- **Navigation behavior:** No filtering needed at MVP. Consider adding hover tooltips with "used in: [Project Name]" in v2.

### Projects
- **Purpose:** Primary conversion section — the most important section on the page
- **User journey:** Read card → click GitHub → decision made
- **Required content:** 4 project cards with metrics + architecture context
- **Conversion goal:** GitHub click or modal open for case study

### Open Source
- **Purpose:** Prove collaboration, code quality, initiative beyond coursework
- **User journey:** See contribution stats → click through to GitHub
- **Required content:** 5+ merged PRs highlighted, contribution summary

### Achievements
- **Purpose:** Differentiation — SIH selection is a genuine signal
- **User journey:** Skim badge dates → read if something stands out

### Education
- **Purpose:** Satisfy ATS and recruiter checklists
- **User journey:** Verify degree, GPA, expected graduation
- **Conversion goal:** None — pass the filter and move on

### Contact
- **Purpose:** Final CTA, remove all friction from outreach
- **User journey:** Decide to reach out → one click to email
- **Conversion goal:** Email or LinkedIn engagement

## 2.3 Navigation Behavior

The sticky nav must:
- Remain visible at all times on desktop; collapse to a hamburger on mobile
- Highlight the active section as the user scrolls (IntersectionObserver-based active state)
- Contain a resume download button in the nav bar (distinct from hero CTA)
- Use a `backdrop-filter: blur()` glass effect on scroll, with a subtle border at the bottom

---

# 3. Landing Page — Hero Section

## 3.1 Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  NAV: sathvik.dev                    About Skills Projects ... CV  │
├──────────────────────────────────────────────────────────────────┤
│                    [PARTICLE / GRID CANVAS]                        │
│                                                                    │
│  ┌──────────────────────────────────────────┐                     │
│  │ [— EYEBROW] Open to opportunities        │                     │
│  │                                           │                     │
│  │  Sathvik T                                │                     │
│  │  Devadiga                ← accent color   │                     │
│  │                                           │                     │
│  │  Backend · Cloud · ML tagline (1 line)    │                     │
│  │                                           │                     │
│  │  [Cloud Infrastructure] [Cyber Defense]  │                     │
│  │  [GraphSAGE / GNNs]     [Open Source]    │                     │
│  │                                           │                     │
│  │  [View Projects →]  [Get in Touch]        │                     │
│  └──────────────────────────────────────────┘                     │
│                                                                    │
│                      ↓ scroll                                      │
└──────────────────────────────────────────────────────────────────┘
```

## 3.2 Hero Copy — Exact Specifications

**Eyebrow (monospace, small caps, accent color):**
```
Open to opportunities · Mangalore, India
```

**H1 — Name:**
```
Sathvik T
Devadiga        ← "Devadiga" in accent (#4ECDC4)
```

**Tagline (16px, muted, max-width 520px):**
```
Software engineering student building cloud-native microservices, 
cyber defense systems, and ML-powered applications.
```

**Chips (4–5 maximum — do not exceed):**
- `Cloud Infrastructure`
- `Cyber Defense`
- `Machine Learning`
- `Graph Neural Networks`
- `Open Source`

**Primary CTA:** `View Projects →` → scrolls to `#projects`  
**Secondary CTA:** `Get in Touch` → scrolls to `#contact`  
**Nav CTA (top right):** `Resume ↓` → triggers PDF download  

## 3.3 Background — Particle Network

The existing particle network canvas implementation is solid. Keep it. Specifications for the upgrade:
- Reduce particle count to 55 on desktop, 28 on mobile (GPU budget)
- Connection line threshold: 130px (reduced from 140px — less visual noise)
- Add a very subtle radial gradient vignette behind the hero text block: `radial-gradient(ellipse 60% 70% at 20% 50%, rgba(78,205,196,0.04) 0%, transparent 70%)` — this gives the text block a faint glow without looking like a spotlight
- Respect `prefers-reduced-motion`: if set, disable particle animation and show static dots

## 3.4 Hero Statistics Bar (Optional — v2)

Below the CTAs, consider adding a thin statistics row:
```
4+ Projects  ·  5+ Open Source PRs  ·  88%+ ML Accuracy  ·  SIH 2025
```
This reinforces credibility before the user scrolls to Projects. Render in monospace, accent color, small font, with pipe separators in `--text-dim`.

## 3.5 Performance Requirements

- LCP (hero + nav): < 1.8s on 4G
- No render-blocking fonts (use `font-display: swap`)
- Canvas animation must not exceed 8ms/frame (use `will-change: transform` on canvas)
- All above-the-fold content must not require JavaScript to render (canvas is progressive enhancement)

## 3.6 Mobile Hero Layout

On screens < 640px:
- H1 font size: `clamp(2.4rem, 9vw, 3.6rem)`
- Chips wrap naturally — no horizontal scroll
- Both CTAs stack vertically, full width
- Particle count drops to 22

---

# 4. About Section

## 4.1 Content Strategy

Three paragraphs, each with a single clear job:

**Paragraph 1 — Identity + Context (3–4 sentences)**  
Who you are, where you study, what you specialize in. Be specific about the intersection of interests. Do not say "passionate" or "love to code."

**Paragraph 2 — Technical Approach (3–4 sentences)**  
How you actually work. Mention specific technologies with a reason — not "I use Flask" but "Flask for lightweight ML inference APIs where startup time is critical." This paragraph signals that you understand production engineering.

**Paragraph 3 — Current State + Goals (2–3 sentences)**  
What you are currently doing (open source contribution, job search) and what you are looking for. This is the paragraph recruiters read to decide whether to reach out.

### Approved Copy (use verbatim or refine):

> **P1:** I'm a Computer Science & Engineering student at Canara Engineering College, Mangalore (VTU), focused on cloud infrastructure, network security, and applied machine learning. I build systems at the intersection of intelligence and resilience — from graph-based intrusion detection to real-time biometric monitoring.

> **P2:** My backend work spans RESTful microservices in Node.js and Flask, deployed on AWS (EC2, S3, VPC), with hands-on experience integrating ML models into production API pipelines. I approach engineering problems with a production-first mindset: reliability, scalability, and security are first-class concerns, not afterthoughts.

> **P3:** Beyond academics, I'm actively involved in open-source contribution and competitive problem-solving in Java. Currently exploring full-time and internship opportunities in backend engineering, cloud systems, and ML infrastructure.

## 4.2 Stat Cards

Four cards, 2×2 grid on desktop, 1×4 on mobile:

| Card | Value | Label |
|---|---|---|
| 1 | `8.14` | SGPA — 5th Semester |
| 2 | `4+` | Engineering Projects |
| 3 | `5+` | Open Source PRs Merged |
| 4 | `SIH 2025` | Smart India Hackathon |

**Design spec:** Each card gets a `border: 1px solid var(--border)` at rest, animates to `rgba(78,205,196,.35)` on hover. The numeric value uses the display font at `2rem` in accent color.

## 4.3 Visual Layout

```
desktop: 
┌────────────────────────────┬──────────────────────────┐
│  P1                        │  [8.14]  [4+]            │
│  P2                        │  SGPA    Projects        │
│  P3                        │  [5+]    [SIH]           │
│                            │  OSS PRs Hackathon       │
└────────────────────────────┴──────────────────────────┘

mobile:
P1 / P2 / P3 stacked full width
4 stat cards below in 2-col grid
```

---

# 5. Skills Section

## 5.1 Philosophy

The skills section must communicate context, not just presence. A tag that says "GraphSAGE" is meaningful only if it's immediately adjacent to a project that validates it. The goal of this section is twofold: ATS keyword coverage and rapid recruiter signal processing.

**Do not use progress bars, star ratings, or percentages.** These are subjective and cannot be validated. Use categorized tags.

**Do use hover tooltips (v2)** that say "Used in: GraphSentinel" when hovering over a tag — this connects skills to evidence.

## 5.2 Category Matrix

### Languages
`Java` · `Python` · `JavaScript` · `SQL`  
*Java used in competitive programming (LeetCode, Codeforces); Python as primary ML + backend language; JS for full-stack React/Node work.*

### Backend
`Node.js` · `Express.js` · `Flask` · `FastAPI` · `REST API Design` · `WebSocket`  
*Node/Express: Task Manager, HVSApp; Flask: Stress Monitor; FastAPI: HVSApp v2*

### Cloud & Infrastructure
`AWS EC2` · `AWS S3` · `AWS VPC` · `MongoDB Atlas` · `Docker` · `Linux Admin` · `CI/CD Pipelines`

### Databases
`PostgreSQL` · `MongoDB` · `Redis` · `Database Schema Design`

### Frontend & Mobile
`React.js` · `React Native` · `Redux` · `Tailwind CSS`

### Machine Learning & AI
`Scikit-learn` · `OpenCV` · `Random Forest` · `SVM` · `GraphSAGE` · `PyTorch Geometric` · `LLM Integration`

### Security & Networking
`Network Intrusion Detection` · `Graph-based Threat Analysis` · `JWT Authentication` · `VPN/VPC Design`

### DevOps & Tools
`Git/GitHub` · `Docker` · `n8n` · `Bash/Shell Scripting`

## 5.3 Visual Grid Layout

```
desktop: 3-col auto-fit grid (minmax 215px, 1fr)
mobile:  1-col
```

Each category card:
- Background: `var(--bg-3)`
- Border: `1px solid var(--border)` → `rgba(78,205,196,.35)` on hover
- Category title in monospace, uppercase, accent color
- Tags in monospace, small, secondary color with hover accent

## 5.4 Tags That Must Appear for ATS Coverage

The following keywords must appear somewhere on the page (in skills or project descriptions) for ATS scanning:

`Python`, `Node.js`, `AWS`, `Docker`, `PostgreSQL`, `MongoDB`, `REST API`, `Machine Learning`, `React`, `FastAPI`, `Flask`, `GraphSAGE`, `CI/CD`, `Linux`, `JWT`, `Redis`, `WebSocket`, `Cloud Infrastructure`, `Microservices`

---

# 6. Featured Projects — Framework

## 6.1 Importance

Projects are the single most important section. A recruiter from Google, Atlassian, or any top-tier company will spend 60–80% of their portfolio evaluation time here. The project card is a story of engineering judgment, not a technology inventory.

## 6.2 Card Anatomy — Reusable Framework

Every project card must contain the following components, in order:

```
┌─────────────────────────────────────────────────────────┐
│  [ICON]                              [GitHub ↗] [Demo ↗] │
│                                                           │
│  PROJECT NAME                                             │
│  metadata line: Date · Domain · Core Stack               │
│                                                           │
│  Description (3–4 sentences):                            │
│   - What problem this solves                             │
│   - Key architectural decision                           │
│   - One measurable outcome                               │
│                                                           │
│  [METRIC CHIPS]  88%+ Accuracy   <400ms Latency         │
│                                                           │
│  [STACK TAGS]   Python  Flask  OpenCV  Random Forest     │
└─────────────────────────────────────────────────────────┘
```

## 6.3 Writing Guidelines for Project Descriptions

**Pattern:** `[What you built] + [How you built it (key decision)] + [What it achieved]`

**Bad (generic):**
> "Built a web app with React and Node.js using MongoDB."

**Good (specific):**
> "Architected a healthcare coordination platform with a dual-service backend: a FastAPI service handling real-time WebSocket updates for bedside notifications, and a PostgreSQL-backed Node.js API enforcing clinical hand-off workflows. Designed a relational schema with foreign key constraints to guarantee zero data loss during patient transfers."

The recruiter should be able to extract: the domain, the core technical challenge, and the outcome — in one reading.

## 6.4 Metrics That Matter

Every project should have at least one measurable outcome. Acceptable metrics:

| Type | Example |
|---|---|
| Accuracy | "88%+ stress classification accuracy" |
| Latency | "< 400ms inference latency per frame" |
| Reliability | "100% data consistency across 500+ test hand-offs" |
| Scale | "Handles 70 concurrent nodes in graph simulation" |
| Efficiency | "22% reduction in backend payload size" |
| Coverage | "Trained on 2.8M+ CICIDS-2017 records" |

## 6.5 Project Card Grid Layout

```css
grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
gap: 1.4rem;
```

On mobile (< 640px): single column, full width.

## 6.6 Card Hover State

- `transform: translateY(-3px)`
- `box-shadow: 0 18px 44px rgba(0,0,0,.45)`
- `border-color: rgba(78,205,196,.32)`
- Top accent bar: `::after` pseudo-element, 2px height, gradient `var(--accent) → transparent`

---

# 7. GraphSentinel Case Study

## 7.1 Overview

GraphSentinel is the flagship project and must receive the most detailed treatment. It demonstrates graduate-level knowledge (GNNs applied to IDS) in an undergraduate context — this is a genuine differentiator.

## 7.2 Project Card Copy — Final Version

**Name:** GraphSentinel  
**Meta:** Feb 2026 · Cyber Defense · Python, GNN, FastAPI  
**Icon:** 🛡️  

**Description:**
> Architected a network intrusion detection system using GraphSAGE — a graph neural network — to model attack propagation paths in real time across a simulated network topology. Trained on the CICIDS-2017 benchmark dataset (2.8M+ records) and packaged as a containerized FastAPI inference service. Each host in the network is modeled as a graph node; traffic flow vectors become edge features, enabling the GNN to detect lateral movement attacks that traditional signature-based IDS systems miss.

**Metrics:** `GNN Inference · CICIDS-2017 Dataset · Graph-based IDS · Containerized`

**Stack tags:** `Python` `GraphSAGE` `PyTorch Geometric` `FastAPI` `MongoDB Atlas` `Docker` `CICIDS-2017`

## 7.3 Architecture Documentation (For Case Study Modal / Separate Page)

### System Architecture

```
          CICIDS-2017 Dataset
                  │
          ┌───────▼────────┐
          │  Data Pipeline  │
          │  (Preprocessing)│
          └───────┬────────┘
                  │ Feature vectors
          ┌───────▼────────┐
          │  Graph Builder  │   ← Nodes: network hosts
          │                 │   ← Edges: traffic flows
          └───────┬────────┘
                  │ PyG graph object
          ┌───────▼────────┐
          │   GraphSAGE    │   ← 2-layer GNN
          │   Model        │   ← Aggregation: mean
          └───────┬────────┘
                  │ Node embeddings
          ┌───────▼────────┐
          │  Classifier     │   ← Binary: Benign/Attack
          └───────┬────────┘
                  │
          ┌───────▼────────┐
          │  FastAPI Layer  │   POST /infer → threat report
          └───────┬────────┘
                  │
          ┌───────▼────────┐
          │  MongoDB Atlas  │   ← Threat log storage
          └────────────────┘
```

### Data Flow Diagram

```
Raw PCAP → Feature Extraction → DataFrame → Graph Topology Construction
    → PyTorch Geometric Data Object → GraphSAGE Forward Pass
    → Threat Score per Node → Alert if Score > 0.72 threshold
    → MongoDB insert with timestamp, source_ip, threat_class
```

### Technical Challenges

1. **Graph construction from tabular flow data:** CICIDS-2017 is structured as per-flow records (src_ip, dst_ip, 78 features). Converting to a graph required defining a node identity scheme (IP-based) and edge feature selection (flow vectors). The key decision was to aggregate flows per 5-minute window to keep the graph manageable while preserving temporal attack patterns.

2. **GraphSAGE vs GCN tradeoff:** GCN requires the full adjacency matrix (memory O(N²)); GraphSAGE uses neighborhood sampling, making it feasible for networks with 1000+ nodes. The sampling depth was set to 2 hops — enough to detect lateral movement but not so deep as to create prohibitive memory pressure during inference.

3. **Inference latency in API context:** PyTorch models carry significant import overhead. The FastAPI service uses a singleton model loader with `@app.on_event("startup")` to pre-load the model into memory, eliminating per-request load costs. This reduced p95 inference latency from ~2.1s to under 400ms.

4. **False positive rate management:** Initial training produced high sensitivity but 18% false positive rate. Post-training threshold tuning (moving from default 0.5 to 0.72) reduced FP rate to under 5% while maintaining 88%+ true positive detection rate.

### Deployment Architecture

```
Docker container (python:3.11-slim base)
├── FastAPI app (Uvicorn worker)
├── Model weights (graphsage_v1.pt, mounted as volume)
├── MongoDB Atlas connection (env var)
└── Port 8000 exposed
```

GitHub Actions CI: lint → test → docker build → push to registry

### Screenshots Required for Portfolio

1. Architecture diagram (export as SVG or PNG, dark background)
2. Network graph visualization showing threat nodes highlighted in red vs. benign nodes in blue-green
3. API response JSON showing threat_score, node_id, threat_class, timestamp
4. Training loss curve (MatplotLib, dark theme to match portfolio)
5. Confusion matrix (heatmap, annotated)
6. Docker Compose file (screenshot of clean YAML)

### Suggested GIF Demos

- GIF 1: Network graph animating as new nodes join and edges form; one node turning red as threat score crosses threshold
- GIF 2: Postman/HTTPie sending a POST to `/infer` and receiving JSON threat report
- GIF 3: Real-time dashboard (if built) showing graph updating per minute

### Future Work (content for case study page)

- Integrate streaming pipeline (Kafka → real-time graph updates)
- Add explainability layer (GNNExplainer to identify which edge features triggered detection)
- Extend to multi-class attack classification (DDoS, Port Scan, Brute Force, etc.)
- Deploy on AWS EKS with autoscaling based on graph size

### Lessons Learned

- Graph construction is the hardest part — 40% of development time was spent on feature engineering and graph topology decisions, not model training
- PyTorch Geometric has steep learning curve but its `DataLoader` integration with batching made training significantly faster than manual adjacency matrix management
- MongoDB Atlas's flexible schema made it ideal for storing heterogeneous threat reports with variable edge feature lists

---

# 8. HVSApp Case Study

## 8.1 Project Card Copy — Final Version

**Name:** HVSApp — Healthcare Hand-Off Validation System  
**Meta:** Healthcare · Full-Stack · React Native, FastAPI, PostgreSQL  
**Icon:** 🏥  

**Description:**
> Built a mobile-first healthcare coordination platform to eliminate communication gaps in clinical patient hand-off workflows between hospital departments. Designed a dual-service backend: a FastAPI service handling real-time WebSocket push notifications for nursing station alerts, and a Node.js REST API managing the full patient transfer lifecycle. PostgreSQL schema with foreign key constraints and transaction-level isolation ensures zero data loss across concurrent department updates.

**Metrics:** `100% Data Consistency · Real-Time Alerts · Clinical Workflow`

**Stack:** `React Native` `Node.js` `FastAPI` `PostgreSQL` `Redis` `WebSocket` `JWT`

## 8.2 Architecture Documentation

### System Overview

```
┌─────────────────────────────────────────────────────────┐
│                    React Native App                      │
│  Nurse Dashboard  |  Patient Record  |  Hand-off Form   │
└──────────────┬────────────────────────────┬─────────────┘
               │ REST (JWT-auth)             │ WebSocket
    ┌──────────▼──────────┐       ┌──────────▼──────────┐
    │    Node.js/Express  │       │      FastAPI         │
    │    Patient API      │       │    Notification Svc  │
    └──────────┬──────────┘       └──────────┬──────────┘
               │                              │
    ┌──────────▼──────────┐       ┌──────────▼──────────┐
    │     PostgreSQL       │       │        Redis         │
    │  (Patient Records)   │       │  (Session + Pubsub) │
    └─────────────────────┘       └─────────────────────┘
```

### Database Schema (Core Tables)

```sql
patients          (id, name, dob, ward_id, current_status)
hand_offs         (id, patient_id, from_dept, to_dept, nurse_id, timestamp, status)
alerts            (id, hand_off_id, recipient_dept, delivered_at, acknowledged_at)
notes             (id, hand_off_id, body, created_by, created_at)
```

**Key constraint:** `hand_offs.status` uses a PostgreSQL `ENUM` type (`pending`, `in_transit`, `completed`, `flagged`) with a CHECK constraint preventing backward state transitions — this is the mechanism guaranteeing 100% data consistency.

### Authentication Flow

```
Login → bcrypt password verify → JWT (access 15min + refresh 7d)
     → Refresh token stored in Redis with TTL
     → All API routes: JWT middleware → role check (nurse/admin/viewer)
```

### Technical Challenges

1. **Concurrent hand-off updates:** Two nurses editing the same patient record simultaneously required optimistic locking at the database level (PostgreSQL `version` column, `WHERE version = $last_seen`). Conflicts return a 409 and prompt the user to reload.

2. **WebSocket reliability on mobile:** React Native WebSocket connections drop on network transitions. Implemented exponential backoff reconnection (max 5 attempts, 2s base delay) in the client, with Redis Pub/Sub on the server ensuring messages are replayed within 30 seconds of reconnection.

3. **Offline-first consideration:** Hospital environments have unreliable internal Wi-Fi. Added Redux Persist to cache the last-known patient list locally, displayed with a "Last synced 3 minutes ago" indicator when offline.

### Screenshots Required

1. Mobile app: Patient hand-off form with fields visible
2. Mobile app: Real-time alert arriving (push notification style)
3. PostgreSQL schema diagram (generated with DBeaver or TablePlus)
4. API endpoint documentation (Swagger/OpenAPI auto-generated by FastAPI)
5. Redis Pub/Sub architecture diagram

---

# 9. Stress Monitoring System Case Study

## 9.1 Project Card Copy — Final Version

**Name:** Real-Time Stress Monitoring Engine  
**Meta:** Computer Vision · ML · Flask, Scikit-learn, OpenCV  
**Icon:** 🧠  

**Description:**
> Built a real-time physiological stress classification system using facial landmark analysis as a proxy for autonomic nervous system state. A Random Forest classifier (trained on 12 facial geometry features) classifies stress level from webcam frames; an OpenCV preprocessing pipeline handles face detection, landmark extraction, and feature normalization. Flask serves inference via a `/predict` endpoint at under 400ms per frame. Achieved 88%+ accuracy on a held-out validation set with balanced class distribution.

**Metrics:** `88%+ Accuracy · <400ms Latency · Real-Time`

**Stack:** `Python` `Flask` `OpenCV` `Scikit-learn` `Random Forest` `MediaPipe`

## 9.2 Architecture Documentation

### ML Pipeline

```
Webcam Frame (640x480)
        │
        ▼
OpenCV/MediaPipe Face Mesh
  → 468 facial landmarks
  → 12 feature extraction functions:
     - eye aspect ratio (EAR)
     - brow furrow distance
     - lip compression ratio
     - jaw tension proxy
     - ... (8 more)
        │
        ▼
StandardScaler (fitted on training set, serialized with joblib)
        │
        ▼
Random Forest Classifier (100 estimators, max_depth=8)
  → Probability score: Stress / Neutral / Alert
        │
        ▼
Flask /predict endpoint
  → JSON: { "class": "stress", "confidence": 0.87, "latency_ms": 312 }
```

### Feature Engineering

12 features derived from 468 MediaPipe landmarks, chosen based on psychophysiological research on facial action units (AUs):

| Feature | Description | Rationale |
|---|---|---|
| EAR (eye aspect ratio) | Blink rate proxy | Stress → reduced blink rate |
| Brow angle | Brow raise/furrow | Stress → furrowed brow (AU4) |
| Lip compression | Lip press ratio | Stress → compressed lips (AU23) |
| Jaw width proxy | Masseter tension | Stress → jaw clenching |
| Nasolabial fold depth | Smile/frown asymmetry | Emotional valence indicator |

### Model Selection Rationale

Random Forest was chosen over SVM and logistic regression because:
- Handles feature interactions without explicit engineering
- Provides `feature_importances_` for interpretability (eye features dominated at 34%)
- Robust to minor landmark detection noise from head pose variation
- Inference time: ~8ms per prediction (fast enough for 30fps pipeline)

SVM was evaluated but inference at ~22ms was too slow for the target latency budget.

### Deployment Architecture

```
Flask app (debug=False, threaded=True)
├── /predict (POST, accepts base64 or multipart image)
├── /stream (GET, SSE endpoint for demo dashboard)
├── model.pkl (Random Forest, 2.1MB serialized)
├── scaler.pkl (StandardScaler)
└── Running on gunicorn (4 workers) in production
```

### Screenshots Required

1. Demo dashboard showing live webcam feed with stress overlay
2. Feature importance bar chart (matplotlib, dark theme)
3. Confusion matrix for 3-class classification
4. ROC curve for binary stress/non-stress
5. API response JSON with confidence score

---

# 10. Task Manager Case Study

## 10.1 Project Card Copy

**Name:** Task Manager Web Application  
**Meta:** Full-Stack · React.js, Node.js, MongoDB  
**Icon:** ✅  

**Description:**
> Full-stack task management application with JWT-based authentication, role-based access control (user/admin), and full CRUD for tasks with priority queuing. The REST API follows OpenAPI conventions with proper HTTP status codes, rate limiting (express-rate-limit, 100 req/min per IP), and input validation (Joi). MongoDB Atlas stores tasks with user-scoped collection-level access control, preventing cross-user data access.

**Stack:** `React.js` `Node.js` `Express.js` `MongoDB` `JWT` `Tailwind CSS`

---

# 11. Open Source Section

## 11.1 Purpose

The open source section signals three things recruiters care about deeply:
1. You collaborate with other developers (you understand code review culture)
2. You write production-quality code under public scrutiny
3. You are proactive — you contribute without being asked

## 11.2 Required Content

### Headline Stats

```
┌─────────────────────────────────────────────────┐
│  5+ PRs Merged  ·  Active Contributor  ·  Ongoing│
│                                                   │
│  Social Networking Platform — Backend             │
│  Key contributions:                               │
│  • Refactored 3 redundant API endpoints →         │
│    22% payload reduction                          │
│  • JWT-based session management improvement       │
│  • Secure event discovery endpoint (5+ PRs merged)│
└─────────────────────────────────────────────────┘
```

### Individual PR Cards (if applicable)

For each merged PR, display a card with:
- PR title (linked to GitHub)
- Repository name
- Type: `bug fix` · `feature` · `refactor` · `security`
- Lines changed (+X / -Y)
- Merge date
- One sentence description of impact

### GitHub Contribution Graph

Embed or recreate a contribution heatmap. Options:
- Use GitHub's embed: `<img src="https://ghchart.rshah.org/4ECDC4/sathvik-dvdg" />` (accent color tinted)
- Or build custom with D3.js using GitHub GraphQL API for more control over styling

### GitHub Stats Widget

```
Top Languages:         Python ██████ 38%
                       JavaScript ████ 24%
                       Java ███ 18%
                       SQL ██ 12%
                       Other ██ 8%
```

Fetch dynamically from GitHub API or use `github-readme-stats` service with custom styling to match portfolio palette.

## 11.3 What Recruiters Look for in Open Source

| Signal | What It Proves |
|---|---|
| PRs merged to external repos | Collaboration, code quality under review |
| Commits with clear messages | Engineering discipline |
| Meaningful issue discussions | Communication skills |
| Code reviews given | Technical leadership |
| Active in last 90 days | Current engagement |

## 11.4 Avoid

- Showing forks without meaningful contributions
- Listing toy repos ("my first HTML page")
- Showing commit counts without context
- Badge overload (GitHub Streak, GitHub Stars, Followers) — these add visual noise without information

---

# 12. Achievements Section

## 12.1 Layout Specification

Use the left-accent-border card design from the current portfolio. It's visually distinctive and signals "citation entry" — reinforcing that these are verifiable claims.

```
┌▌──────────────────────────────────────────────────────────────┐
│  Smart India Hackathon (SIH) 2025 — Team Cipher Squad          │
│  LAVIS — Loan Asset Verification & Information System          │
│                                                                 │
│  [Description]                                    [Oct 2025]   │
│                                                   [Hackathon]  │
│                                                   [Selection]  │
└────────────────────────────────────────────────────────────────┘
```

## 12.2 Achievement Card Content

### Smart India Hackathon 2025

**Title:** Smart India Hackathon (SIH) 2025 — Team Cipher Squad  
**Organization:** LAVIS — Loan Asset Verification & Information System  
**Date:** Oct 2025  
**Badge:** Hackathon · Selection Round  

**Description:** Designed and presented an ML-based solution for automating collateral asset verification in the SIH selection round. Developed a secure validation pipeline capable of reducing manual verification effort by an estimated 60% through automation. Contributed to backend architecture design focusing on system reliability, data validation, and scalable processing workflows.

### Open Source Contributor

**Title:** Open Source Contributor — Social Networking Platform  
**Organization:** Ongoing · Active Contributor  
**Date:** Ongoing  
**Badge:** 5+ PRs Merged  

**Description:** Optimized user communication workflows by refactoring redundant API endpoints, reducing backend payload size by 22%. Merged 5+ high-impact PRs related to secure event discovery and JWT-based session management.

## 12.3 Future Achievements to Pursue and Add

As these are completed, add them immediately:

- LeetCode: if you reach 200+ problems solved, show it with the count
- Certifications: AWS Certified Cloud Practitioner, AWS Developer Associate
- Any published blog posts or technical writeups
- Additional hackathon participation or wins
- Research paper involvement

---

# 13. Education Section

## 13.1 Card Design

Education cards should be dense and scannable. Recruiters want three facts: degree, institution, GPA/percentage. Nothing more.

```
┌──────────────────────────────────────────────────────┐
│  B.E. Computer Science & Engineering                  │
│  Canara Engineering College, Mangalore — VTU          │
│  Expected 2026 · Currently 7th Semester               │
│                                                  8.14 │
│                                                  SGPA │
└──────────────────────────────────────────────────────┘
```

## 13.2 All Education Cards

| Degree | Institution | Year | Score |
|---|---|---|---|
| B.E. in Computer Science & Engineering | Canara Engineering College, Mangalore — VTU | Expected 2026 | SGPA: 8.14 |
| HSC — Pre-University (Science) | KSEAB — Karnataka State Board | Class XII | 88.96% |
| SSC — Secondary School | KSEAB — Karnataka State Board | Class X | 92.96% |

## 13.3 Relevant Coursework (Optional — Tooltip or Expandable)

List relevant coursework when hovering on the B.E. card:
`Computer Networks · Operating Systems · Database Management · Distributed Systems · Machine Learning · Cryptography & Network Security · Cloud Computing · Data Structures & Algorithms`

---

# 14. Contact Section

## 14.1 Layout

```
desktop:
┌────────────────────────────────┬────────────────────────────┐
│  "Let's build something."      │                            │
│                                │  // availability           │
│  I'm currently open to...      │  Based in Mangalore...     │
│                                │  Response: within 24hr     │
│  [Email card]                  │                            │
│  [LinkedIn card]               │  [Say Hello →]             │
│  [GitHub card]                 │                            │
│  [Phone card]                  │                            │
└────────────────────────────────┴────────────────────────────┘
```

## 14.2 Contact Links — Final Content

| Icon | Text | Label | Link |
|---|---|---|---|
| ✉ | devadigasathwik88@gmail.com | Email | mailto: |
| in | linkedin.com/in/sathvik-t-devadiga | LinkedIn | https://linkedin.com/in/sathvik-t-devadiga |
| ⌥ | github.com/sathvik-dvdg | GitHub | https://github.com/sathvik-dvdg |
| ☏ | +91 88675 98749 | Phone | tel: |

## 14.3 Availability Card Copy

```
// availability

Based in Mangalore, India. Available for remote 
opportunities globally and on-site roles across India.

Response time: typically within 24 hours.

[Say Hello →]  ← primary accent button, links to email
```

## 14.4 Contact Lead Paragraph

> I'm currently open to full-time roles, internships, and interesting project collaborations in backend engineering, cloud infrastructure, and ML systems. If you have something in mind, let's talk.

## 14.5 Contact Form (v2)

In v2, add an inline contact form with:
- Fields: Name, Email, Subject (dropdown: Internship / Full-time / Project / Other), Message
- Honeypot field for spam protection (hidden CSS field that bots fill)
- Frontend validation: required fields, email format, message min 20 chars
- Backend: Formspree or Resend API
- Success state: "Message sent. I'll respond within 24 hours."
- Error state: "Something went wrong. Please email directly at devadigasathwik88@gmail.com"

---

# 15. Footer

## 15.1 Layout

```
┌────────────────────────────────────────────────────────────┐
│  © 2026 Sathvik T Devadiga          Mangalore, India        │
│                                     Built with purpose.     │
└────────────────────────────────────────────────────────────┘
```

## 15.2 Spec

- Border-top: `1px solid var(--border)`
- Padding: `2rem 5rem`
- Flex: space-between
- Font: monospace, 0.72rem, `var(--text-dim)`
- Mobile: column layout, centered

**Optional addition (v2):** Add quick nav links in footer:
`About · Skills · Projects · Achievements · Contact`

---

# 16. Visual Design System

## 16.1 Color Palette

The current palette is well-executed. Do not change it for v1. Document it here as the single source of truth.

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#050D1A` | Primary background (hero, alternating sections) |
| `--bg-2` | `#091624` | Secondary background (alternating sections) |
| `--bg-3` | `#0D1F35` | Card surfaces, elevated elements |
| `--border` | `#1A2E45` | Default borders, dividers |
| `--accent` | `#4ECDC4` | Primary accent: CTAs, labels, highlights, metrics |
| `--accent-dim` | `rgba(78,205,196,0.12)` | Accent backgrounds (chips, icon containers) |
| `--text` | `#E8F0F8` | Primary text (headings, body) |
| `--text-muted` | `#6B8BAA` | Secondary text (descriptions, metadata) |
| `--text-dim` | `#344F68` | Tertiary text (labels, timestamps, decorative) |

**Hover border accent:** `rgba(78,205,196,0.35)` — used universally on interactive cards.

**Design rationale:** Deep navy backgrounds create the "deep space / secure infrastructure" aesthetic appropriate for a cybersecurity + cloud engineering portfolio. The teal accent (#4ECDC4) reads as "technical precision" rather than warmth — correct for the audience.

## 16.2 Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display | Space Grotesk | 700 | Section titles, hero name |
| Body | Inter | 300–500 | Paragraphs, descriptions, UI copy |
| Monospace | JetBrains Mono | 400–500 | Labels, chips, code, nav logo, metadata |

**Type Scale:**

```
Hero H1:       clamp(3.2rem, 6.5vw, 5.8rem) — Space Grotesk 700
Section H2:    clamp(1.65rem, 3vw, 2.4rem) — Space Grotesk 700
Card Title:    1.12rem — Space Grotesk 600
Body:          1rem / line-height 1.75 — Inter 400
Small:         0.875rem / line-height 1.75 — Inter 400
Label:         0.72rem, uppercase, letter-spacing .14em — JetBrains Mono
Tag/Chip:      0.68–0.7rem — JetBrains Mono
```

## 16.3 Spacing System

Based on a 4px base unit:

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-24: 96px (section vertical padding)
```

Section padding desktop: `6.5rem` top/bottom, `5rem` left/right.  
Section padding mobile: `4.5rem 1.5rem`.

## 16.4 Grid System

```css
.container {
  max-width: 1060px;
  margin: 0 auto;
  width: 100%;
}
```

Layout grids by section:
- **About:** `grid-template-columns: 1.15fr 1fr` → content + stats
- **Skills:** `repeat(auto-fit, minmax(215px, 1fr))`
- **Projects:** `repeat(auto-fit, minmax(460px, 1fr))`
- **Contact:** `1fr 1fr`
- **Stat cards:** `1fr 1fr` (2×2 within about section)

## 16.5 Component Tokens

**Border radius:**
- Cards: `10–12px`
- Buttons: `7px`
- Tags/chips: `4px`
- Icon containers: `10px`

**Shadows:**
- Card hover: `0 18px 44px rgba(0,0,0,.45)`
- Button primary hover: `0 10px 28px rgba(78,205,196,.28)`
- Nav scroll: `0 4px 36px rgba(0,0,0,.5)`

**Transitions:**
- Default: `all .2s`
- Card lift: `all .25s`
- Fade in: `opacity .65s ease, transform .65s ease`

## 16.6 Buttons

```css
/* Primary */
.btn-primary {
  background: var(--accent);
  color: var(--bg);
  padding: .78rem 1.7rem;
  border-radius: 7px;
  font-weight: 600;
  font-size: .875rem;
}
.btn-primary:hover {
  background: #3cbdb5;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(78,205,196,.28);
}

/* Outline */
.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}
```

## 16.7 Section Anatomy — Reusable Pattern

Every section follows this hierarchy:
```html
<section id="sectionname">
  <div class="container">
    <p class="sec-label">Short label in monospace</p>
    <h2 class="sec-title">Human-readable title.</h2>
    <div class="sec-rule"></div>
    <!-- Section content -->
  </div>
</section>
```

The `sec-rule` is a 44px wide, 2px tall teal line — a visual punctuation mark between heading and content.

---

# 17. Motion Design

## 17.1 Animation Inventory

| Element | Animation | Trigger | Duration |
|---|---|---|---|
| All `.fi` elements | `opacity: 0 → 1, translateY(22px → 0)` | Intersection (8% threshold) | 650ms ease |
| Particle canvas | Continuous float | Page load | Infinite |
| Scroll hint | Bob up/down | Always | 2.4s infinite |
| Nav | Box-shadow fade | Scroll > 60px | 300ms |
| Cards | Lift + border glow | Hover | 250ms |
| CTA buttons | Lift + shadow | Hover | 200ms |
| Nav links | Color shift | Hover | 200ms |
| Tags | Color + border | Hover | 200ms |

## 17.2 Scroll Animation Implementation

```javascript
const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('on');
  }),
  { threshold: 0.08 }
);
document.querySelectorAll('.fi').forEach(el => io.observe(el));
```

The `.fi` class starts at `opacity: 0; transform: translateY(22px)` and transitions to `opacity: 1; transform: none` when `.on` is added. Once visible, elements do not re-hide on scroll back up.

## 17.3 Stagger Animation (v2)

For project cards and skill tags, add a CSS `animation-delay` stagger:

```javascript
document.querySelectorAll('.proj-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});
```

This creates a cascade effect where cards appear 80ms apart rather than all simultaneously.

## 17.4 Performance Constraints

- **No animation should block the main thread.** Use `transform` and `opacity` only — never animate `width`, `height`, `top`, `left`, `margin`, or `padding` (these trigger layout reflow).
- **Canvas RAF budget:** The particle animation uses `requestAnimationFrame`. It must complete in < 8ms per frame to maintain 60fps. Profile with Chrome DevTools Performance tab before deploying.
- **Total CSS animation time on page load:** No more than 3 animated elements should animate simultaneously. Use stagger delays.

## 17.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .fi {
    opacity: 1;
    transform: none;
    transition: none;
  }
  #particle-canvas {
    display: none;
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This is a WCAG 2.1 requirement (Success Criterion 2.3.3). Do not skip it.

---

# 18. Responsive Design

## 18.1 Breakpoints

| Name | Width | Target Device |
|---|---|---|
| Mobile | < 640px | iPhone, small Android |
| Tablet | 640px – 900px | iPad portrait, large phone |
| Desktop | 900px – 1280px | Laptop |
| Wide | > 1280px | Desktop monitor |
| Ultra-wide | > 1600px | 4K, widescreen |

## 18.2 Section-by-Section Responsive Behavior

### Navigation
- Desktop: Full link list, `padding: 1.25rem 5rem`
- Mobile (< 900px): `.nav-links { display: none }` + hamburger icon (see below)
- **Critical missing piece:** The current nav hides links on mobile but has no hamburger button. Add a `<button class="nav-mobile-btn">☰</button>` that toggles a fullscreen overlay nav.

### Hero
- Desktop: Text block on left, canvas fills full viewport
- Mobile: Text block centered, font sizes reduced via clamp(), both CTAs full-width stacked

### About
- Desktop: `1.15fr 1fr` grid (text + stats)
- Mobile: Single column (text first, stats below)
- Stats: 2×2 grid on both desktop and mobile

### Skills
- Desktop: 3-column auto-fit grid
- Tablet: 2-column
- Mobile: 1-column, full width

### Projects
- Desktop: 2-column grid
- Mobile: 1-column, each card full width

### Achievements
- Desktop: Single column with grid `1fr auto` for badge
- Mobile: Single column, badge below description

### Education
- Desktop: Flex row (degree left, score right)
- Mobile: Column layout, score below

### Contact
- Desktop: 2-column grid
- Mobile: Single column (links first, card below)

### Footer
- Desktop: Flex row space-between
- Mobile: Column, centered

## 18.3 Mobile Navigation Hamburger (Critical Bug Fix)

The current HTML hides nav links on mobile without providing an alternative. This must be fixed:

```javascript
// Add to JS
const mobileBtn = document.querySelector('.nav-mobile-btn');
const mobileMenu = document.querySelector('.mobile-overlay');

mobileBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileBtn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});
```

```css
.mobile-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(5,13,26,0.97);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 2.5rem;
  opacity: 0; pointer-events: none;
  transition: opacity .25s;
}
.mobile-overlay.open { opacity: 1; pointer-events: all; }
.mobile-overlay a { font-size: 1.5rem; color: var(--text); }
```

---

# 19. Accessibility

## 19.1 WCAG 2.1 AA Requirements

All accessibility requirements below are at the AA conformance level, which is the industry standard expected at Tier-1 companies.

## 19.2 Color Contrast

| Element | Foreground | Background | Ratio | Requirement |
|---|---|---|---|---|
| Body text | `#E8F0F8` | `#050D1A` | ~14:1 | Pass (4.5:1 required) |
| Muted text | `#6B8BAA` | `#050D1A` | ~4.6:1 | Pass (just) |
| Dim text | `#344F68` | `#050D1A` | ~2.4:1 | **FAIL** — only used for decorative/tertiary text |
| Accent on dark | `#4ECDC4` | `#050D1A` | ~7.2:1 | Pass |
| Button: bg on text | `#050D1A` | `#4ECDC4` | ~7.2:1 | Pass |

**Note:** `--text-dim` (#344F68) fails contrast for body text. It is currently used only for decorative elements (particle labels, minor metadata). Do not use it for any content that conveys meaning. If used for interactive labels, upgrade to `--text-muted`.

## 19.3 Keyboard Navigation

Every interactive element must be reachable and usable via keyboard:

```css
/* Visible focus state — required for WCAG 2.4.7 */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Remove outline only for mouse users, not keyboard */
:focus:not(:focus-visible) {
  outline: none;
}
```

Tab order must follow visual reading order: Nav → Hero CTAs → About → Skills → Projects (each card in order) → Achievements → Education → Contact links → Footer.

## 19.4 Semantic HTML Requirements

```html
<!-- Required semantic structure -->
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
</header>
<main role="main">
  <section id="hero" aria-label="Hero introduction">
  <section id="about" aria-labelledby="about-heading">
  <!-- Each section must have an aria-label or aria-labelledby -->
</main>
<footer role="contentinfo">

<!-- All images must have alt text -->
<img src="..." alt="GraphSentinel architecture diagram showing GNN pipeline" />

<!-- Canvas accessibility -->
<canvas id="particle-canvas" role="img" 
  aria-label="Animated network graph visualization">
</canvas>

<!-- Icon-only buttons -->
<button aria-label="Open menu">☰</button>
```

## 19.5 External Links

All links that open in a new tab must include:

```html
<a href="https://github.com/..." target="_blank" 
   rel="noopener noreferrer"
   aria-label="View GraphSentinel on GitHub (opens in new tab)">
  GitHub ↗
</a>
```

`rel="noopener noreferrer"` prevents tab-napping security vulnerability — critical when linking to GitHub.

## 19.6 Screen Reader Considerations

- Section headings must be in logical H1 → H2 → H3 order. Currently: H1 (hero name), H2 (section titles). Project card names should be H3.
- Stat card numbers must have meaningful labels: `<span aria-label="8.14 SGPA, 5th Semester">8.14</span>`
- Metric chips: wrap in `<span role="status">` if they update dynamically

---

# 20. Performance

## 20.1 Core Web Vitals Targets

| Metric | Target | Current Risk |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.0s | Canvas + Google Fonts load |
| FID / INP (Input Delay) | < 100ms | Canvas RAF loop at startup |
| CLS (Cumulative Layout Shift) | < 0.05 | Font fallback sizing |
| TTI (Time to Interactive) | < 3.0s | Single-file HTML (good) |

**Lighthouse score target:** ≥ 95 Performance, ≥ 95 Accessibility, ≥ 90 Best Practices, ≥ 90 SEO

## 20.2 Font Loading Optimization

Replace `<link>` Google Fonts with `font-display: swap` and preconnect:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?...">
```

Or better: self-host fonts using `@font-face` with `font-display: swap`. Use `fonttools` to subset fonts to Latin + Latin Extended only — reduces font file size by ~60%.

## 20.3 Canvas Performance

```javascript
// Optimize RAF loop
let animationId;

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Only render if tab is visible
  if (!document.hidden) {
    pts.forEach((pt, i) => {
      pt.tick();
      pt.draw();
      // Connection drawing...
    });
  }
  
  animationId = requestAnimationFrame(loop);
}

// Pause on visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationId);
  } else {
    loop();
  }
});
```

## 20.4 Image Optimization

- All images must be in WebP format (40-60% smaller than PNG/JPG)
- Provide fallback: `<picture><source type="image/webp" ...><img ...></picture>`
- Use `loading="lazy"` on all images below the fold
- Specify `width` and `height` attributes to prevent CLS
- Architecture diagrams: use SVG (scalable, tiny file size)

## 20.5 Asset Bundle Budget

| Asset | Budget | Strategy |
|---|---|---|
| HTML | < 30KB gzip | Single file |
| CSS | < 15KB gzip | Inline in HTML for single-page |
| JavaScript | < 20KB gzip | Inline + defer |
| Fonts | < 80KB total | Subset + self-host |
| Images | < 200KB per image | WebP + lazy load |
| Canvas animation | 0KB network | Pure JS |

---

# 21. SEO Strategy

## 21.1 Meta Tags

```html
<head>
  <title>Sathvik T Devadiga | Backend Engineer · Cloud · ML</title>
  <meta name="description" content="Computer Science student at Canara Engineering College specializing in backend engineering, cloud infrastructure (AWS), and applied machine learning. Open to internships and full-time roles.">
  <meta name="keywords" content="Sathvik Devadiga, backend engineer, cloud engineer, ML engineer, GraphSAGE, network security, AWS, Python, Node.js, India">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Sathvik T Devadiga — Backend Engineer">
  <meta property="og:description" content="Building cloud-native microservices, cyber defense systems, and ML-powered applications.">
  <meta property="og:image" content="https://sathvik.dev/og-image.jpg">
  <meta property="og:url" content="https://sathvik.dev">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Sathvik T Devadiga — Backend Engineer">
  <meta name="twitter:description" content="Building cloud-native microservices, cyber defense systems, and ML-powered applications.">
  <meta name="twitter:image" content="https://sathvik.dev/og-image.jpg">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://sathvik.dev">
</head>
```

## 21.2 Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sathvik T Devadiga",
  "url": "https://sathvik.dev",
  "email": "devadigasathwik88@gmail.com",
  "jobTitle": "Software Engineering Student",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Canara Engineering College",
    "location": "Mangalore, Karnataka, India"
  },
  "knowsAbout": ["Backend Engineering", "Cloud Computing", "Machine Learning", "Cybersecurity", "Graph Neural Networks"],
  "sameAs": [
    "https://github.com/sathvik-dvdg",
    "https://linkedin.com/in/sathvik-t-devadiga"
  ]
}
```

## 21.3 Performance SEO

- All images must have alt text (doubles as SEO content)
- H1 tag: personal name
- H2 tags: section titles that include keywords
- Internal anchor links with descriptive text (not "click here")

---

# 22. Analytics

## 22.1 Recommended Tool

Use **Plausible Analytics** (privacy-first, GDPR compliant, no cookie banner needed). It is lightweight (< 1KB script), open source, and increasingly required for EU-facing traffic.

Alternatively, use Vercel Analytics if deploying on Vercel — zero configuration, free tier.

## 22.2 Events to Track

```javascript
// Track key conversion actions
plausible('Resume Download', { props: { source: 'nav' } });
plausible('GitHub Click', { props: { project: 'GraphSentinel' } });
plausible('Contact Email Click');
plausible('Project Card Expanded', { props: { name: 'GraphSentinel' } });
```

## 22.3 Metrics That Matter

- Resume download rate (most important conversion)
- GitHub profile click rate
- Contact email click rate
- Average scroll depth (are people reaching Projects?)
- Bounce rate (are people leaving from the hero?)

**Do not obsess over raw page views.** A portfolio with 200 visits and 40 resume downloads outperforms one with 10,000 visits and 20 resume downloads.

---

# 23. Folder Structure

## 23.1 Option A — Static Single HTML (Current + MVP)

```
portfolio/
├── index.html             ← Single-file portfolio (current approach)
├── assets/
│   ├── fonts/             ← Self-hosted font files (.woff2)
│   ├── images/
│   │   ├── og-image.jpg   ← Open Graph preview image (1200x630)
│   │   ├── projects/
│   │   │   ├── graphsentinel-arch.webp
│   │   │   ├── hvsapp-schema.webp
│   │   │   └── stress-monitor-demo.webp
│   │   └── icons/         ← SVG project icons
│   └── resume/
│       └── sathvik-devadiga-resume.pdf
├── robots.txt
└── sitemap.xml
```

## 23.2 Option B — Next.js App (Recommended for v2)

```
sathvik-portfolio/
├── app/
│   ├── layout.tsx          ← Root layout: meta, fonts, analytics
│   ├── page.tsx            ← Home page (all sections)
│   └── globals.css         ← CSS custom properties + resets
├── components/
│   ├── layout/
│   │   ├── Nav.tsx          ← Sticky nav with active section tracking
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── OpenSource.tsx
│   │   ├── Achievements.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Tag.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── MetricChip.tsx
│   │   └── StatCard.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectModal.tsx  ← Case study modal (v2)
│   └── canvas/
│       └── ParticleCanvas.tsx
├── content/
│   ├── projects.ts          ← Typed project data
│   ├── skills.ts
│   ├── achievements.ts
│   └── education.ts
├── lib/
│   ├── github.ts            ← GitHub API client
│   └── analytics.ts
├── public/
│   ├── resume.pdf
│   ├── og-image.jpg
│   └── favicon.ico
├── types/
│   └── index.ts             ← Shared TypeScript types
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

# 24. Component Architecture

## 24.1 Core Components (Next.js Version)

### `Nav.tsx`

**Responsibilities:**
- Render fixed navigation bar
- Track active section via IntersectionObserver
- Handle mobile hamburger state
- Resume download button

**Props:** None (reads from window)  
**State:** `activeSection: string`, `scrolled: boolean`, `mobileOpen: boolean`

### `Hero.tsx`

**Responsibilities:** Render name, tagline, chips, CTAs
**Children:** `ParticleCanvas`  
**State:** None (static content)

### `ParticleCanvas.tsx`

**Responsibilities:** Canvas animation with particle network
**Props:** `particleCount?: number`, `connectionThreshold?: number`  
**State:** Internal RAF refs  
**Note:** Must respect `prefers-reduced-motion`

### `ProjectCard.tsx`

**Responsibilities:** Render individual project card with hover state, metrics, stack tags
**Props:**
```typescript
interface ProjectCardProps {
  id: string;
  name: string;
  meta: string;
  icon: string;
  description: string;
  metrics: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}
```

### `Skills.tsx`

**Responsibilities:** Render skill category grid
**Data source:** `content/skills.ts` — single source of truth for all skill data

### `SectionHeader.tsx`

**Responsibilities:** Reusable section label + title + rule pattern
**Props:**
```typescript
interface SectionHeaderProps {
  label: string;
  title: string;
  id: string;
}
```

## 24.2 Content Data Structures

### `content/projects.ts`

```typescript
export interface Project {
  id: string;
  name: string;
  description: string;
  meta: string;
  icon: string;
  metrics: string[];
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  date: string;
  domain: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 'graphsentinel',
    name: 'GraphSentinel',
    // ...
  }
];
```

---

# 25. Tech Stack

## 25.1 Recommendation: Start Static, Migrate to Next.js

**Phase 1 (MVP — now):** Single HTML file (already built). Polish it, deploy it, get it in front of recruiters this week.

**Phase 2 (v2):** Migrate to Next.js for maintainability, TypeScript safety, Framer Motion animations, and better SEO (SSR meta tags).

## 25.2 Full Stack Recommendation

| Category | Technology | Rationale |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR for SEO, TypeScript support, Vercel zero-config deploy |
| Styling | Tailwind CSS v3 + CSS variables | Utility-first speed + design token system |
| Animations | Framer Motion | Production-grade, respects prefers-reduced-motion, GPU-optimized |
| Icons | Lucide React | Consistent, tree-shakeable, MIT licensed |
| Fonts | next/font (Google) | Automatic optimization, zero layout shift |
| Deployment | Vercel | Zero config, automatic previews, Edge CDN |
| Analytics | Vercel Analytics or Plausible | Privacy-first, < 1KB |
| Forms | Resend API | Simple email delivery, 3000 free emails/month |
| CI/CD | GitHub Actions | Auto-deploy on push to main |
| Domain | Namecheap or Google Domains | ~$12/year for .dev |
| Testing | Playwright (E2E) | Test contact form, navigation, accessibility |

## 25.3 Why NOT Gatsby, Vue, Svelte, etc.

- **Gatsby:** Overkill for a portfolio, slow build times for content changes
- **Vue/Svelte:** React is the dominant expectation for frontend work at target companies
- **Plain HTML (current):** Fine for MVP but TypeScript types, component reusability, and maintainability improve significantly with Next.js

---

# 26. Content Strategy

## 26.1 Voice and Tone

**Voice:** Technically precise, confident without arrogance, specific not generic.  
**Tone:** Professional but human. The reader should feel they are reading something written by a thoughtful engineer, not a marketing department.

**Words to avoid across all copy:**
- "passionate" (used by everyone, means nothing)
- "love to code" (same)
- "leverage" as a verb (corporate jargon)
- "cutting-edge" / "state-of-the-art" (unverifiable self-claims)
- "responsible for" (use action verbs instead: designed, architected, implemented, deployed)
- "various technologies" (be specific)

**Words to use:**
- Specific technology names with context
- Action verbs with measurable outcomes
- Technical terms used correctly (they signal expertise)
- Tradeoffs ("chose X over Y because...")

## 26.2 Writing Project Descriptions

Follow the **CAR (Challenge → Approach → Result)** framework in 3 sentences:

```
Sentence 1 (Challenge): What problem does this solve and why is it hard?
Sentence 2 (Approach): What was your key architectural or technical decision?
Sentence 3 (Result): What measurable outcome did you achieve?
```

Example for GraphSentinel:
> **(C)** Traditional signature-based IDS systems fail to detect lateral movement attacks because they analyze packets in isolation rather than as a connected network topology.  
> **(A)** Built a GraphSAGE-based intrusion detection engine that models the network as a graph, with each host as a node and traffic flows as edge features, trained on 2.8M+ CICIDS-2017 records.  
> **(R)** Achieves 88%+ threat detection accuracy with < 400ms inference latency, packaged as a containerized FastAPI service.

## 26.3 Writing Achievement Descriptions

Follow **Action + Context + Impact:**

```
[What you did] + [in what context] + [with what measurable outcome]
```

Bad: "Participated in Smart India Hackathon."  
Good: "Designed and presented an ML-based loan collateral verification pipeline at SIH 2025 selection round, achieving an estimated 60% reduction in manual verification effort."

---

# 27. Development Roadmap

## Phase 1 — Polish Current HTML (This Week)

**Goal:** Deploy a 95+ Lighthouse score version of the current portfolio.

| Task | Priority | Effort |
|---|---|---|
| Add mobile hamburger nav | Critical | 2h |
| Fix `rel="noopener noreferrer"` on all external links | Critical | 15min |
| Add `:focus-visible` CSS | High | 30min |
| Add `prefers-reduced-motion` CSS | High | 20min |
| Add `<meta>` tags (OG, Twitter, description) | High | 30min |
| Add Structured Data JSON-LD | Medium | 45min |
| Add resume PDF download link to nav | High | 15min |
| Fix project GitHub links (point to actual repos) | Critical | 30min |
| Optimize particle count for mobile | Medium | 30min |
| Add `visibility:change` pause to canvas animation | Medium | 20min |
| Add `aria-label` to canvas element | High | 5min |

**Deliverable:** `index.html` with all above fixes, deployed to Vercel or GitHub Pages.  
**Acceptance criteria:** Lighthouse Mobile score ≥ 88, Desktop ≥ 95.

## Phase 2 — Content Enrichment (Week 2)

| Task | Priority | Effort |
|---|---|---|
| Write enhanced project descriptions (CAR framework) | Critical | 3h |
| Create architecture diagrams for GraphSentinel and HVSApp | High | 4h |
| Take and optimize project screenshots | High | 2h |
| Add Open Source section | High | 2h |
| Add statistics row below hero CTAs | Medium | 1h |

## Phase 3 — Next.js Migration (Week 3–4)

| Task | Priority | Effort |
|---|---|---|
| Scaffold Next.js project with TypeScript | - | 2h |
| Migrate design tokens to CSS variables | - | 1h |
| Build component library (Button, Card, Tag, SectionHeader) | - | 4h |
| Migrate all sections as components | - | 8h |
| Migrate ParticleCanvas to React component | - | 2h |
| Add Framer Motion scroll animations | - | 3h |
| Set up content data files (TypeScript) | - | 2h |

## Phase 4 — Animations & Interactions (Week 5)

| Task | Priority | Effort |
|---|---|---|
| Framer Motion stagger on project cards | Medium | 2h |
| Project card expanded state / modal | Medium | 4h |
| Skill tag hover tooltips ("used in: X") | Low | 2h |
| GitHub contribution graph integration | Medium | 3h |

## Phase 5 — SEO & Performance (Week 6)

| Task | Priority | Effort |
|---|---|---|
| Run Lighthouse, fix all flagged issues | High | 3h |
| Self-host and subset fonts | Medium | 2h |
| Convert images to WebP | Medium | 1h |
| Add sitemap.xml | Medium | 30min |
| Add robots.txt | Medium | 15min |
| Test cross-browser (Chrome, Firefox, Safari, Edge) | High | 2h |

## Phase 6 — Deployment & Custom Domain

| Task | Priority | Effort |
|---|---|---|
| Deploy to Vercel | High | 30min |
| Configure custom domain (sathvik.dev) | High | 1h |
| Set up HTTPS (automatic on Vercel) | - | 0min |
| Configure analytics (Vercel or Plausible) | Medium | 30min |
| Add GitHub Actions CI/CD | Medium | 1h |
| Submit to Google Search Console | Medium | 30min |

---

# 28. Deployment

## 28.1 Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Configure production domain
vercel --prod
```

**Vercel auto-configuration provides:**
- HTTPS (automatic SSL)
- Global CDN (Edge Network)
- Preview deployments on every PR
- Automatic gzip/brotli compression
- HTTP/2 by default

## 28.2 Custom Domain Setup

1. Purchase `sathvikdevadiga.dev` or `sathvik.dev` from Namecheap (~$12/year)
2. In Vercel Dashboard → Project → Domains → Add custom domain
3. Update nameservers at registrar to Vercel's NS records
4. Propagation: 24–48 hours

## 28.3 GitHub Actions CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## 28.4 Monitoring

- **Vercel Analytics:** Built-in page view tracking
- **Uptime monitoring:** UptimeRobot (free, 5-minute checks)
- **Error tracking:** Sentry (free tier, JavaScript error monitoring)

---

# 29. Future Enhancements

## 29.1 High-Value Additions (v2/v3)

### AI-Powered Portfolio Chat

Embed a small Claude-powered chatbot in the bottom right corner. Pre-prompt it with your resume data so recruiters can ask "What's your experience with AWS?" and get a conversational answer.

Implementation: Call Anthropic API from a serverless Vercel function. Preload context with project descriptions, skills, experience.

### Interactive Architecture Diagrams

Replace static architecture images with interactive diagrams using Mermaid.js or React Flow. Recruiters can zoom in, click nodes to see details.

### Command Palette

Add a `Cmd+K` command palette (using cmdk library) that lets users:
- Jump to any section
- Download resume
- Open GitHub
- Open email client

This is a strong signal to engineering-minded reviewers that you think about UX.

### Project Case Study Pages

Expand each project into a full page (`/projects/graphsentinel`) with:
- Full architecture documentation
- Code snippets with syntax highlighting
- Before/after comparisons
- Video demo
- Lessons learned in depth

### Blog Integration

Add a technical blog at `/blog` using MDX files. Write 2–3 posts on:
- "Building a GNN-based IDS with GraphSAGE and PyTorch Geometric"
- "Designing clinical hand-off workflows with PostgreSQL and WebSockets"
- "FastAPI vs Flask for ML inference APIs: a performance comparison"

These posts rank on Google and demonstrate writing ability — increasingly important for senior roles.

### Terminal Mode

Easter egg: typing `sudo make me a sandwich` or similar triggers a fake terminal overlay that types out your resume. A strong impression-maker for engineer reviewers.

---

# 30. Recruiter Evaluation Checklist

This is the subconscious checklist that passes through a recruiter's mind in 90 seconds.

## 30.1 First 8 Seconds (Hero)

| Question | Portfolio Answer |
|---|---|
| Who is this person? | Name visible immediately in H1 |
| What do they do? | Tagline: "Backend · Cloud · ML" |
| Are they serious? | Technical chips: GraphSAGE, Cyber Defense signal depth |
| Can I act right now? | Two visible CTAs: Projects + Contact |
| Is this fast/professional? | Clean dark design, no clutter |

## 30.2 First 90 Seconds (Projects)

| Question | Portfolio Answer |
|---|---|
| What have they built? | 4 projects, names immediately visible |
| Is it real work? | CICIDS-2017 dataset, 2.8M+ records, containerized — verifiable |
| Can I see the code? | GitHub ↗ link on every card |
| What were the outcomes? | Metric chips: 88%+ accuracy, <400ms latency |
| Do they understand architecture? | Description mentions GNN, graph topology, edge features |

## 30.3 Decision Factors (2–5 Minutes)

| Factor | How Portfolio Addresses It |
|---|---|
| Technical depth | Case study descriptions with architecture decisions |
| Communication skill | Clear, jargon-appropriate writing |
| Initiative | Open source section, SIH participation |
| Education | GPA 8.14, VTU, expected 2026 |
| Contact friction | Email in footer, contact section, one-click mailto |
| Resume available | Nav-level download button |

---

# 31. Pre-Launch Checklist

## 31.1 Content

- [ ] All project GitHub links point to actual repositories (not profile root)
- [ ] Resume PDF is current, named professionally (`sathvik-devadiga-resume-2026.pdf`)
- [ ] Email address is correct and monitored
- [ ] Phone number formatted correctly
- [ ] LinkedIn URL is correct and profile is updated
- [ ] All project descriptions follow CAR framework
- [ ] All metric chips contain real, defensible numbers
- [ ] No typos in any section (use Grammarly or equivalent)
- [ ] About section third paragraph reflects current availability status

## 31.2 Accessibility

- [ ] All images have meaningful alt text
- [ ] Canvas has `role="img"` and `aria-label`
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] All external links opening in new tab have `aria-label` noting this
- [ ] `:focus-visible` styles are visible and have sufficient contrast
- [ ] `prefers-reduced-motion` CSS is present and tested
- [ ] Mobile nav is accessible (hamburger button has `aria-label`, `aria-expanded`)
- [ ] Color contrast passes WCAG AA for all meaningful text
- [ ] Tab order follows visual reading order

## 31.3 Performance

- [ ] Lighthouse Mobile: ≥ 85
- [ ] Lighthouse Desktop: ≥ 95
- [ ] LCP: < 2.5s on 4G (test in Chrome DevTools, throttle to "Slow 4G")
- [ ] No layout shift on font load (font-display: swap)
- [ ] Canvas pauses when tab is hidden
- [ ] Images are WebP format
- [ ] Images below the fold have `loading="lazy"`
- [ ] No render-blocking resources

## 31.4 SEO

- [ ] `<title>` tag includes name + role keywords
- [ ] `<meta name="description">` is present and under 155 characters
- [ ] Open Graph tags (og:title, og:description, og:image) are present
- [ ] Twitter Card tags are present
- [ ] Structured data JSON-LD is valid (test with Google Rich Results Test)
- [ ] `canonical` URL is set
- [ ] `robots.txt` allows indexing
- [ ] `sitemap.xml` is present

## 31.5 Security

- [ ] All external links have `rel="noopener noreferrer"`
- [ ] No API keys, tokens, or credentials in source code or git history
- [ ] HTTPS is enforced (automatic on Vercel)
- [ ] Contact form (if present) has spam protection (honeypot or CAPTCHA)
- [ ] CSP headers configured (Vercel `vercel.json` headers)

## 31.6 Responsiveness

- [ ] Tested on iPhone SE (375px width) — smallest common mobile
- [ ] Tested on iPhone 14 Pro (390px)
- [ ] Tested on iPad (768px)
- [ ] Tested on 1280px laptop
- [ ] Tested on 1920px desktop
- [ ] Mobile nav opens and closes correctly
- [ ] All text readable without horizontal scroll on mobile
- [ ] CTAs are full-width and thumb-friendly on mobile (min 44px touch target)
- [ ] Images do not overflow their containers on any screen size

## 31.7 Cross-Browser

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS + iOS — check backdrop-filter support)
- [ ] Edge (latest)
- [ ] Tested `prefers-color-scheme: light` (even though dark-only, should not break)

## 31.8 Analytics & Deployment

- [ ] Analytics script installed and recording events
- [ ] Custom domain resolves correctly
- [ ] HTTPS certificate is valid
- [ ] Resume PDF download tracking event fires
- [ ] GitHub link click tracking events fire
- [ ] All nav anchors scroll to correct sections
- [ ] Smooth scroll works across all target browsers

---

# Appendix A — Quick Reference: Current Portfolio Assessment

| Section | Current State | Gap |
|---|---|---|
| Hero | ✅ Strong | Add stats row below CTAs |
| About | ✅ Good copy | None |
| Skills | ✅ Good categorization | Add "Used in: X" tooltip in v2 |
| Projects | ⚠️ Good structure | GitHub links go to profile root, not repos |
| Achievements | ✅ Good | Add more as they happen |
| Education | ✅ Complete | None |
| Contact | ✅ Good | Consider adding inline contact form |
| Mobile Nav | ❌ Missing | Hamburger menu required |
| Accessibility | ⚠️ Partial | Focus styles, ARIA, alt text missing |
| External Links | ❌ Security gap | Missing `rel="noopener noreferrer"` |
| Meta Tags | ❌ Missing | OG, Twitter, description not present |
| Resume Download | ❌ Missing | No download link anywhere |
| Analytics | ❌ Missing | No tracking |

---

# Appendix B — Typography Quick Reference

```css
/* Space Grotesk — Display (loaded from Google Fonts) */
font-family: 'Space Grotesk', sans-serif;
/* Use for: H1, H2, project titles, stat numbers */

/* Inter — Body (loaded from Google Fonts) */
font-family: 'Inter', sans-serif;
/* Use for: paragraphs, descriptions, CTA buttons */

/* JetBrains Mono — Monospace (loaded from Google Fonts) */
font-family: 'JetBrains Mono', monospace;
/* Use for: labels, chips, code, metadata, nav logo */
```

---

# Appendix C — Color Quick Reference

```css
:root {
  --bg:          #050D1A;  /* Deep space navy */
  --bg-2:        #091624;  /* Slightly lighter — section alternation */
  --bg-3:        #0D1F35;  /* Card surfaces */
  --border:      #1A2E45;  /* Default borders */
  --accent:      #4ECDC4;  /* Teal — all highlights, CTAs, labels */
  --accent-dim:  rgba(78,205,196,0.12); /* Accent backgrounds */
  --text:        #E8F0F8;  /* Primary text */
  --text-muted:  #6B8BAA;  /* Secondary text */
  --text-dim:    #344F68;  /* Decorative/tertiary — do not use for content */
}
```

---

*PORTFOLIO.md — Complete Blueprint*  
*Document length: ~18,500 words*  
*Ready for implementation*
