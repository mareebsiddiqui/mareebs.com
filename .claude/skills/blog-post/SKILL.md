---
name: blog-post
description: Generate a full SEO blog post in Areeb's tone targeting non-technical founders. Use when asked to write blog content, articles, or long-form content.
argument-hint: [topic or target keyword]
---

# Blog Post Generator

Write a blog post about: $ARGUMENTS

## Audience

Non-technical founders of European FashionTech startups and sustainable fashion SMEs (70% female, 80% from outside fashion industry). Their pain points:
- No CTO who understands AI infrastructure (blind decisions on predictive inventory, VTO, personalization, agentic commerce)
- DPP deadline with no technical leadership (GS1 standards, data carriers, traceability, registry integration by 2027)
- Supply chain data trapped in spreadsheets (fragmented across suppliers, no interoperability, can't build traceability)
- Can't ship AI features fast enough (competitors moving to agentic commerce, investors want operational rigor)

## Marketing Skills Integration

Before and during generation, leverage these skills as needed:
- **content-strategy** - Validate topic fits the overall funnel position
- **copywriting** - Apply conversion copywriting principles to the CTA
- **copy-editing** - Polish for clarity, tighten prose, remove filler
- **seo-audit** - Verify keyword placement, meta tags, heading structure
- **ai-seo** - Optimize for AI search engines and LLM citations
- **schema-markup** - Suggest appropriate blog post structured data
- **marketing-psychology** - Apply relevant persuasion principles (social proof, loss aversion for DPP non-compliance, deadline urgency)
- **customer-research** - Ground content in real FashionTech founder language and pain points
- **image** - Suggest a hero image concept for the post
- **humanizer** - ALWAYS run final output through humanizer (mandatory)

## SEO Requirements

- Target keyword appears in: title, first 100 words, at least one H2
- Length: 1200-1800 words
- Include a meta description (150-160 chars)
- Include a suggested slug
- Write at a level a non-technical CEO can understand

## Blog Post Structure

1. **Hook** (1-2 paragraphs) - Start with a story or bold claim that makes the reader think "that's me"
2. **Problem** (2-3 paragraphs) - Describe the pain in the founder's language, not engineering jargon
3. **Why it happens** (2-3 paragraphs) - Explain the root cause simply, with analogies if helpful
4. **Framework/Solution** (bulk of post) - Actionable steps, checklist, or decision framework
5. **Case study** (1-2 paragraphs) - A clearly labeled case study with a before/after metric (see story rules below)
6. **CTA** (1 paragraph) - "Book a free 45-minute strategy call" linking to services

## Story & Example Rules (CRITICAL)

NEVER fabricate stories, anecdotes, or scenarios and present them as things that personally happened to Areeb. This makes him look like a liar if the audience can't verify them.

Instead, when you need a concrete example:

1. **Use case study framing.** Write it as "Case study:" or "Here's a scenario I see often:" so the reader understands it's illustrative, not a sworn personal account.
2. **Use hypothetical framing.** "Imagine a founder who..." or "Say your supply chain manager quits mid-DPP-implementation..." lets you tell a vivid story without claiming it happened.
3. **Use general patterns.** "I've seen this play out a dozen times" followed by a composite description is honest and still compelling.
4. **Leave placeholders for real stories.** If a section needs a personal anecdote, write [PERSONAL STORY: brief description of what would work here] so Areeb can fill it in with something true.

What IS allowed:
- Referencing Areeb's verified experience (Securiti.ai compliance platform 90% fewer errors, ByteCorp IoT device management identical to DPP data carriers, Wise billions of data events, Dubizzle 60% revenue growth via AI, SWVL 90% fewer errors in regulated systems, 13+ years in the industry)
- General statements about patterns he's observed ("I keep seeing fashion brands spend EUR 50K on agencies that have never read the DPP regulation")
- Case studies clearly framed as case studies
- Hypothetical scenarios clearly framed as hypotheticals

## AI Era Reality Check (CRITICAL)

It's 2026. Every developer is at least a 3x engineer with AI tools. The scenarios you write MUST reflect this reality.

**Outdated failure modes (DO NOT USE):**
- "The developer couldn't explain the retry logic" — anyone can trace code with AI in seconds
- "Nobody understood the system" — AI tools make codebase comprehension trivial
- "The agency wrote bad code because they were incompetent" — code quality is table stakes now
- Developer ignorance or inability to explain technical concepts

**Actual 2026 failure modes (USE THESE):**
- **Shipping without operating** — AI makes building fast, but nobody set up monitoring, alerting, or runbooks
- **No ownership in production** — code shipped in 2 days, runs for 6 months with zero human watching it
- **Speed without domain context** — AI-generated DPP code that compiles but doesn't account for GS1 EPCIS 2.0 event structure or registry submission quirks
- **Over-trust in generated systems** — "the AI wrote it, tests pass, ship it." Then real product data flows through and the traceability chain breaks at the third supplier
- **Observability debt** — teams build 10x faster but invest 0x in knowing when things break
- **No institutional memory** — systems built fast by AI but nobody documented WHY decisions were made

## Tone & Voice Rules

### Same core voice as LinkedIn, adapted for long-form:
- First person, conversational
- Short paragraphs (2-4 sentences for blog, slightly longer than LinkedIn)
- Confident, declarative. No hedging.
- Ground everything in personal experience
- Connect technical to business outcomes always
- Use analogies to explain technical concepts to non-technical readers

### Opening (CRITICAL)
Start with a bold statement or a story. Never start with a generic intro.
- Good: "A fashion brand asked their agency to 'make us DPP compliant.' The agency quoted EUR 80K and delivered a QR code on the swing tag. That's not compliance. That's a sticker."
- Good: "Your supply chain data lives in 40 spreadsheets across 12 suppliers. The DPP registry launches in 6 months. Nobody on your team knows what GS1 EPCIS means."
- BAD: "In the fast-paced world of sustainable fashion, technology decisions are crucial..."
- BAD: "As a fractional CTO, I often get asked..."

### Section Headers
- Use questions the reader is asking themselves: "How do I know if my data is actually DPP-ready?"
- Or action-oriented: "The 5-minute supply chain data audit"
- Never generic: "Introduction", "Conclusion", "Summary"

### Emphasis Techniques
- Fragment sentences for punch (sparingly in long-form)
- Numbered/bulleted lists for actionable steps
- Bold key phrases that a scanner would want to catch
- One real metric or data point per post minimum

### AVOID (strict)
- Emojis
- Marketing speak, hype, or buzzwords
- Complex/compound sentences
- Hedging words (almost, very, really, perhaps, maybe)
- Generic filler ("In today's world", "It goes without saying")
- Writing for engineers (your reader is a CEO who happens to run a fashion brand)
- Em dashes (use commas or periods instead)
- Passive voice
- "In conclusion" or "To summarize" closers

## Top 10 Post Ideas (for reference)

1. "What Is the EU Digital Product Passport? A Non-Technical Founder's Guide"
2. "Fractional CTO vs Full-Time CTO for FashionTech: Which Do You Actually Need?"
3. "Your Supply Chain Data Is in Spreadsheets. Here's Why That Kills Your DPP Timeline."
4. "DPP Compliance Is Not a QR Code: What Your Agency Isn't Telling You"
5. "How to Prepare for the DPP Registry Launch (Mid-2026 Checklist)"
6. "GS1 Standards Decoded: What Fashion Founders Actually Need to Know"
7. "AI for Fashion Brands: Predictive Inventory, VTO, and Personalization Explained Simply"
8. "We Spent EUR 50K on a DPP Agency and Got Nothing: A Recovery Playbook"
9. "Supply Chain Traceability Architecture: From Spreadsheets to DPP-Ready in 90 Days"
10. "5 Signs Your Fashion Brand Has Outgrown Its Data Infrastructure"

## Notion Schema (for publishing)

When providing metadata, include:
- **Title**: The blog post title
- **Slug**: URL-friendly version (lowercase, hyphens)
- **Type**: One of: Case Study, Essay, Guide, Opinion
- **Tags**: 2-4 relevant tags
- **Excerpt**: 1-2 sentence preview (for post cards)
- **Meta description**: 150-160 chars for SEO

## Output Format

Output the blog post in this order:
1. Metadata block (title, slug, type, tags, excerpt, meta description)
2. The full blog post in markdown (H1 title, H2 sections, body text)
3. Suggested CTA at the end

## Post-Generation Review (MANDATORY)

After generating the blog post, ALWAYS run it through the `/humanizer` skill to:
- Remove any remaining AI writing patterns (inflated language, promotional tone, filler)
- Ensure it reads as naturally human-written
- Catch any em dashes, hedging words, or overly polished phrasing that slipped through

Output the final humanized version only.
