---
name: linkedin-post
description: Generate a LinkedIn post in Areeb's tone targeting non-technical founders. Use when asked to write LinkedIn content, social posts, or thought leadership.
argument-hint: [topic or pillar]
---

# LinkedIn Post Generator

Write a LinkedIn post about: $ARGUMENTS

## Audience

Non-technical founders of European FashionTech startups and sustainable fashion SMEs (70% female, 80% from outside fashion industry). Their pain points:
- No CTO who understands AI infrastructure (blind decisions on predictive inventory, VTO, personalization, agentic commerce)
- DPP deadline with no technical leadership (GS1 standards, data carriers, traceability, registry integration by 2027)
- Supply chain data trapped in spreadsheets (fragmented across suppliers, no interoperability, can't build traceability)
- Can't ship AI features fast enough (competitors moving to agentic commerce, investors want operational rigor)

## Marketing Skills Integration

Before and during generation, leverage these skills as needed:
- **content-strategy** - Validate topic fits the overall funnel position
- **copywriting** - Apply conversion copywriting principles if CTA is needed
- **copy-editing** - Polish for clarity, tighten prose, remove filler
- **seo-audit** - Ensure post is discoverable (LinkedIn SEO best practices)
- **ai-seo** - Optimize for AI search engines and LLM citations
- **marketing-psychology** - Apply relevant persuasion principles (social proof, loss aversion for DPP non-compliance, deadline urgency)
- **customer-research** - Ground content in real FashionTech founder language and pain points
- **social-content** - Apply platform-specific best practices for LinkedIn engagement
- **humanizer** - ALWAYS run final output through humanizer (mandatory)

## Content Pillars (pick the most relevant)

1. **War Stories** - "I walked into this mess..." (anonymized client situations, see story rules below)
2. **Myth-Busting** - Contrarian takes that challenge conventional startup wisdom
3. **Frameworks & Playbooks** - Checklists, decision frameworks, interview questions
4. **Behind-the-Scenes** - What a fractional CTO week actually looks like
5. **Founder Education** - Teach non-technical founders to ask the right questions

## Story & Example Rules (CRITICAL)

NEVER fabricate stories or anecdotes and present them as things that personally happened to Areeb. This makes him look like a liar if the audience can't verify them.

Instead, when you need a concrete example:

1. **Use pattern framing.** "I've seen this play out a dozen times:" followed by a composite description is honest and compelling.
2. **Use hypothetical framing.** "Say your CTO quits mid-fundraise..." lets you tell a vivid story without claiming it happened.
3. **Use case study framing.** "Here's a scenario I see constantly:" makes it clear this is illustrative.
4. **Leave placeholders for real stories.** If the post needs a personal anecdote, write [PERSONAL STORY: brief description of what would work here] so Areeb can fill it in with something true.

What IS allowed:
- Referencing Areeb's verified experience (Securiti.ai compliance platform 90% fewer errors, ByteCorp IoT device management identical to DPP data carriers, Wise billions of data events, Dubizzle 60% revenue growth via AI, SWVL 90% fewer errors in regulated systems, 13+ years in the industry)
- General statements about patterns he's observed ("I keep seeing fashion brands spend EUR 50K on agencies that have never read the DPP regulation")
- Composite scenarios clearly framed as patterns, not personal one-off stories
- Hypothetical scenarios clearly framed as hypotheticals

## AI Era Reality Check (CRITICAL)

It's 2026. Every developer is at least a 3x engineer with AI tools. The scenarios you write MUST reflect this reality.

**Outdated failure modes (DO NOT USE):**
- "The developer couldn't explain the retry logic" — anyone can trace code with AI in seconds
- "Nobody understood the system" — AI tools make codebase comprehension trivial
- "The agency wrote bad code because they were incompetent" — code quality is table stakes now
- "Nobody knew what PCI-DSS requires" — any LLM can explain compliance requirements instantly
- Developer ignorance or inability to explain technical concepts

**Actual 2026 failure modes (USE THESE):**
- **Shipping without operating** — AI makes building fast, but nobody set up monitoring, alerting, or runbooks. The system works until it doesn't, and nobody knows it broke.
- **No ownership in production** — code shipped in 2 days, runs for 6 months with zero human watching it. Nobody owns the 2am failure.
- **Speed without domain context** — AI-generated payment code that compiles and passes tests but doesn't account for settlement windows, banking partner quirks, or real-world edge cases that only come from operating payment systems at scale.
- **Over-trust in generated systems** — "the AI wrote it, tests pass, ship it." Then real money flows through and the idempotency logic handles the happy path but not the timeout-then-retry-then-partial-success scenario.
- **Observability debt** — teams build 10x faster but invest 0x in knowing when things break. The gap between "shipped" and "operated" is the new technical debt.
- **No institutional memory** — systems built fast by AI but nobody documented WHY decisions were made. The code exists but the reasoning is gone.

The bottleneck has shifted from "can we build it" to "do we know when it breaks and who fixes it." Write scenarios that reflect this.

## Tone & Voice Rules

### Opening (CRITICAL)
The hook must be a **micro-story in 1-2 sentences** — a concrete scene the reader can instantly visualize, not an abstract claim or opinion. Paint a situation, not a thesis.
- BEST: "A CTO quit. Nobody knew the database password." (scene — immediate tension, specific, visual)
- Good: "I ditched multithreading and multiprocessing to make my program faster." (action taken — creates curiosity)
- Good: '"What makes a good software engineer?" I was asked this in an interview.' (scene — puts you in a moment)
- BAD: "The $30K agency quote is the most expensive number on the table." (abstract claim — no scene, no character, no tension)
- BAD: "'PCI-compliant' is the most dangerous phrase an agency can put in a proposal." (opinion — tells instead of shows)
- BAD: "In today's world of software engineering..."
- BAD: "I've been thinking about..."
- BAD: "Here are 5 tips for..."

The best hooks make the reader feel like they just walked into a room where something went wrong.

### Structure
- Short paragraphs (1-3 sentences MAX)
- Line break between EVERY thought shift
- Numbered lists ONLY when listing concrete items (costs, steps). Never for the main argument flow.
- Build the post as: scene/crisis -> visceral detail of being in it -> one broader principle
- **ONE story, ONE point.** Do not meander into multiple arguments or sub-topics.
- Total length: 100-200 words. Shorter wins. The CTO post was ~170 words. The underperformers were 250+.

### Engagement Hierarchy (what performs best to worst)
1. **Narrative crisis** — drop the reader into a specific, chaotic moment ("The first 72 hours are ugly.")
2. **Universal fear** — scenarios every founder can imagine happening to them
3. **Show the mess** — concrete details of being in the trenches ("resetting credentials through hosting providers directly")
4. **Intimate human moments** — one quiet line that reveals what it's really like ("You document as you go because nobody else will.")
5. **Logical arguments** — explaining why X is bad (AVOID as primary structure — this is lecture territory)

What DOESN'T work:
- Explaining a concept intellectually and expecting people to feel urgency
- Multiple cost breakdowns and numbered consequences (reads like a sales pitch)
- Posts that could be summarized as "here's why cheap is expensive" or "here's why X is important" — these are abstract claims, not stories

### Voice
- First person, conversational ("tbh", "And tbh, for a few years it did")
- Confident declarative statements. No hedging.
- Reflective and philosophical about engineering as a craft
- ALWAYS connect technical decisions to product/business outcomes
- **Observer in the trenches**, not lecturer at a podium. You're describing what you saw, not explaining why something is true.
- Ground every point in personal experience, not theory
- Include at least one "quiet human moment" — a line that reveals what it actually feels like to be in the situation ("You document as you go because nobody else will.")

### Emphasis Techniques
- Fragment sentences for punch: "No thread overhead. No shared memory issues. Just a clean event loop."
- Contrast patterns: "Instead of X, I started to Y"
- End with a punchy reframe that elevates the story into a principle: "If your entire technical operation lives in one person's head, that's not a system. That's a liability."
- The closing line should redefine the problem, not summarize it. Don't repeat what you said. Flip the frame.

### AVOID (strict)
- Emojis
- Hashtags
- Exclamation marks
- Marketing speak, hype, or clickbait
- Complex/compound sentences
- Hedging words (almost, very, really, perhaps, maybe)
- Starting with "In today's world" or filler preamble
- Generic advice without a personal story backing it
- Self-promotion or CTAs (unless specifically asked)
- Em dashes (use commas or periods instead)
- **Cost breakdowns as the core structure** (listing $X + $Y + $Z reads like a sales pitch, not a story)
- **"Here's why X is actually Y" posts** (logical arguments without narrative don't get engagement)
- **Multiple sub-points or tangents** (one story, one lesson, done)
- **Teaching/explaining mode as the primary posture** (show a situation, don't explain a concept)

## Output Format

Output ONLY the LinkedIn post text, ready to copy-paste. No preamble, no "Here's your post:", no explanation after. Just the post.

## Post-Generation Review (MANDATORY)

After generating the post, ALWAYS run it through the `/humanizer` skill to:
- Remove any remaining AI writing patterns (inflated language, promotional tone, filler)
- Ensure it reads as naturally human-written
- Catch any em dashes, hedging words, or overly polished phrasing that slipped through

Output the final humanized version only.
