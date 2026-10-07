I want you to adapt this existing portfolio template into my personal portfolio.

IMPORTANT:
DO NOT redesign the UI.
DO NOT change the visual language.
DO NOT introduce a new layout system.
DO NOT replace the existing components, typography, spacing, animations, navigation style, cards, sections, dark aesthetic, grids, or overall UX.

The current template/design is already exactly what I want. Your job is to preserve the design and make the CONTENT ARCHITECTURE and PERSONAL BRANDING work for me.

I am a medical student and a self-taught software developer/AI builder. I want the portfolio to represent both sides of my career without making the site feel confused or unfocused.

CORE IDEA

At the beginning of the portfolio, introduce a simple choice:

"Which side of me are you interested in?"

with three options:

[ Medicine ] [ Software ] [ Both ]

This should be implemented using the existing visual language of the template, not as a new large hero redesign.

The visitor's selection should determine which content is emphasized throughout the portfolio.

The three modes should behave as follows:

1. MEDICINE

This is the portfolio for someone primarily interested in me as a medical student / future doctor / medical academic.

Prioritize:

- Medical education
- Anatomy
- Clinical experience
- Research
- Academic achievements
- Medical projects
- Presentations
- Anatomy demonstrator experience
- Future publications/research papers
- Medical interests
- Relevant extracurricular or academic recognition

Software should not disappear completely, because it is part of my profile, but it should be secondary and should not interrupt the medical narrative.

For example, the Experience section in Medicine mode should primarily contain:

- Medical education
- Anatomy demonstrator experience
- Clinical/shadowing experience when appropriate
- Research experience
- Future medical/academic positions

Do NOT mix software development employment into the main medical Experience timeline.

2. SOFTWARE

This is the portfolio for someone primarily interested in me as a software developer / AI builder.

Prioritize:

- Full-stack development
- AI engineering
- AI agents
- RAG
- LLM integration
- Backend engineering
- React / Next.js
- Python / FastAPI
- PostgreSQL / SQLAlchemy
- Cloud / Docker / deployment
- Software projects
- GitHub / technical work
- Product building

My software development experience should be prominent here:

- Outly — Software Developer
- Granoo — Software Developer
- Independent software/AI projects

My strongest independent software/AI projects include:

- AI receptionist / appointment automation platform
- AI genomics / variant effect prediction application
- Other relevant future software projects

The AI receptionist project should be presented as a serious full-stack AI engineering project, not simply a "chatbot".

Important technologies/concepts to highlight where appropriate:

- Next.js
- React
- TypeScript
- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- RAG
- embeddings
- vector search
- semantic search
- AI agents
- tool calling
- LLM APIs
- Google Calendar integration
- authentication
- multi-tenant architecture
- Docker
- Redis / Upstash
- cloud deployment
- API integration

RAG is an important part of my technical profile and must be treated as a distinct capability rather than being buried under generic "AI".

3. BOTH

This is the most important differentiated mode.

This mode should intentionally present me as someone working at the intersection of medicine, software and AI.

However, "Both" must NOT simply dump every section from Medicine and Software into one long page.

Instead, organise the information so the relationship between the two fields becomes clear.

The narrative should communicate:

Medicine

- Software Engineering
- # AI
  Healthcare / Medical Technology

This is where projects such as AI genomics and healthcare AI should receive particularly strong emphasis.

The combined view should show:

- Medical education
- Software development experience
- Anatomy / medical education work
- AI/software projects
- Healthcare technology interests
- Research
- Technical skills
- Relevant academic and technical recognition

The purpose of "Both" is to show that medicine and software are complementary parts of my profile, not unrelated careers.

CONTENT AND BRAND POSITIONING

My identity should be presented as:

Medical student + self-taught software developer + AI builder

Do not portray me as a conventional senior software engineer.
Do not exaggerate my experience.
Do not invent companies, publications, awards, positions, technologies or achievements.

My software profile should communicate that I am a self-taught developer who has worked across frontend, mobile, backend, databases, cloud infrastructure and AI applications.

My medical profile should communicate that I am an MD student with interests in anatomy, medical education, research, healthcare technology and AI.

I study medicine at the National and Kapodistrian University of Athens in an English-taught MD programme.

I will also have experience as an anatomy demonstrator, which should eventually become an important part of the Medical and Both views.

I expect to have research papers/publications in the future. Build the content architecture so publications/research can be added later without redesigning the site.

EXISTING TEMPLATE SECTIONS

The existing design already has sections such as:

- Hero / introduction
- Featured content
- Components / blocks
- Blog
- Stack
- Experience
- Education
- Projects
- Recognition
- Community / companies / technology ecosystem
- Footer

Keep these sections visually and structurally intact.

Instead, determine which content belongs in each section for each mode.

For example:

STACK
Medicine mode:

- Medical / academic areas of interest
- Relevant medical tools or technologies only where genuinely useful

Software mode:

- React
- Next.js
- TypeScript
- Flutter
- React Native
- Python
- FastAPI
- SQLAlchemy
- PostgreSQL
- Docker
- Azure
- Firebase
- Redis
- AI / LLM technologies
- RAG / embeddings / vector search

Both mode:
Show a deliberately curated combination of technical and healthcare/AI capabilities.

EXPERIENCE

Do not create one mixed chronological timeline in every mode.

Instead, maintain separate underlying categories:

MEDICAL EXPERIENCE

- MD / medical education
- Anatomy demonstrator
- Clinical/shadowing experience
- Research
- Future academic roles

SOFTWARE EXPERIENCE

- Outly — Software Developer
- Granoo — Software Developer
- Independent development / product work

In Medicine mode, show the Medical Experience timeline.
In Software mode, show the Software Experience timeline.
In Both mode, show both, but organise them into clearly understandable categories rather than making one confusing mixed list.

PROJECTS

Create separate project categories internally:

MEDICAL / HEALTHCARE PROJECTS

- Medical education projects
- Anatomy-related work
- Healthcare research
- AI healthcare projects

SOFTWARE / AI PROJECTS

- AI receptionist / appointment automation platform
- AI genomics / variant effect prediction application
- Other software projects

BOTH mode should surface projects that demonstrate the intersection between medicine and technology first.

The AI genomics project is especially useful because it directly connects medicine, biology and software/AI.

The AI receptionist project should be positioned as an example of full-stack AI product engineering and healthcare technology.

BLOG / ARTICLES

Keep the existing Blog design.

Allow posts to be categorised internally as:

- Medicine
- Software / AI
- Healthcare Technology
- General

The selected portfolio mode should determine which posts are prioritised.

RECOGNITION

Allow recognition to be categorised by:

- Medical / Academic
- Technical
- General

Again, do not redesign the section; only organise the data.

IMPORTANT UX REQUIREMENT

The visitor should never feel like they have entered a completely different website.

They should feel like:

"This is the same person, but I can choose which part of their work I want to explore."

The choice should therefore:

- use the existing UI language
- be subtle but obvious
- persist during navigation
- affect the content shown throughout the page
- avoid visual duplication
- avoid creating three separate websites
- avoid excessive tabs, dashboards or filters

A visitor choosing "Medicine" should encounter a coherent medical portfolio.

A visitor choosing "Software" should encounter a coherent developer portfolio.

A visitor choosing "Both" should encounter a coherent interdisciplinary portfolio.

IMPLEMENTATION

Treat the three views as a content/data architecture problem rather than three separate pages.

Ideally use a central content model where items have metadata such as:

category:

- medicine
- software
- both

or appropriate tags such as:

- medical
- software
- AI
- healthcare
- research
- anatomy
- education

The UI components should remain reusable.

The same Experience component, Project component, Stack component, Recognition component, etc. should receive different filtered/ordered content depending on the selected mode.

Do not duplicate entire page implementations for the three modes unless absolutely necessary.

The default mode should be "Both" because it best represents my overall identity, but make the choice easy to change.

The URL/state architecture should also be considered so that a visitor can share a link representing a particular view in the future.

CONTENT QUALITY

Write concise, high-quality portfolio copy.

Do not use generic statements such as:
"I am passionate about technology and medicine."

Instead, communicate what I actually build and what I actually do.

Technical descriptions should focus on:

- what I built
- how I built it
- the technical problem
- the technologies used
- the result or purpose

Medical descriptions should focus on:

- academic/clinical role
- teaching
- anatomy
- research
- medical education
- healthcare technology

Do not invent metrics, users, publications, awards or clinical responsibilities.

DESIGN CONSTRAINT

The most important instruction:

PRESERVE THE EXISTING DESIGN EXACTLY.

I already like this template's:

- dark aesthetic
- typography
- grid system
- cards
- spacing
- section hierarchy
- navigation
- animations
- micro-interactions
- buttons
- visual density
- overall aesthetic

Do not redesign these.

Make the site feel like the original template, but with the content architecture and personal branding redesigned around my dual identity as a medical student and software/AI developer.

The final result should feel like a highly polished portfolio belonging to ONE PERSON with TWO PROFESSIONAL DIRECTIONS, plus a third intentional interdisciplinary view.

PORTFOLIO MODE SELECTOR

Implement the portfolio selection as a simple 3-option segmented control / button group, NOT a two-state toggle.

Place it near the top of the existing hero/introduction section without redesigning the hero.

The presentation should be:

"Which side of me are you interested in?"

[ Medicine ] [ Software ] [ Both ]

Use the existing visual language, typography, borders, spacing, hover states and interaction style of the template.

"Both" should be the default view when a visitor first lands on the site.

The selected mode should persist while navigating through the portfolio and control which content is prioritised/displayed in sections such as Experience, Projects, Stack, Blog and Recognition.

Do not create three separate websites or duplicate the entire page. Treat Medicine, Software and Both as three content views/lenses over the same portfolio.

The URLs should ideally support shareable views, for example:

/?view=medicine
/?view=software
/?view=both

A visitor should be able to switch modes at any time.

The goal is for the visitor to feel that they are viewing different sides of the same person, rather than switching between unrelated portfolios.
