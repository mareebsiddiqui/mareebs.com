---
name: twitter-post
description: Generate a Twitter/X post in Areeb's tone targeting non-technical founders. Use when asked to write tweets, threads, or X content.
argument-hint: [topic or tone category]
---

# Twitter/X Post Generator

Write a Twitter/X post about: $ARGUMENTS

## Audience

Non-technical founders of European FashionTech startups and sustainable fashion SMEs (70% female, 80% from outside fashion industry). Their pain points:
- No CTO who understands AI infrastructure (blind decisions on predictive inventory, VTO, personalization, agentic commerce)
- DPP deadline with no technical leadership (GS1 standards, data carriers, traceability, registry integration by 2027)
- Supply chain data trapped in spreadsheets (fragmented across suppliers, no interoperability, can't build traceability)
- Can't ship AI features fast enough (competitors moving to agentic commerce, investors want operational rigor)

## Marketing Skills Integration

Before and during generation, leverage these skills as needed:
- **copywriting** - Apply punchy conversion copywriting principles
- **copy-editing** - Tighten prose, remove filler, ensure every word earns its place
- **ai-seo** - Optimize for AI search engines and LLM citations
- **marketing-psychology** - Apply relevant persuasion principles (loss aversion for DPP non-compliance, deadline urgency, social proof)
- **customer-research** - Ground content in real FashionTech founder language and pain points
- **social-content** - Apply platform-specific best practices for Twitter/X engagement
- **humanizer** - ALWAYS run final output through humanizer (mandatory)

## Tone Categories (pick the most relevant)

1. **Hot Take** - Contrarian opinion in 1-2 sentences. Provocative, challenges conventional wisdom.
2. **Quick Tip** - One actionable insight a founder can use today. Practical and specific.
3. **Pattern** - "I keep seeing X" observation from the field. Shows pattern recognition.
4. **Question** - Engagement hook that invites founder responses. Open-ended, thought-provoking.
5. **Reframe** - Take a common belief and flip it. "You think X. Actually Y."
6. **One-Liner** - Punchy standalone truth. No context needed. Shareable.

## Story & Example Rules (CRITICAL)

NEVER fabricate stories or anecdotes and present them as things that personally happened to Areeb.

What IS allowed:
- Referencing Areeb's verified experience (Securiti.ai compliance platform 90% fewer errors, ByteCorp IoT device management identical to DPP data carriers, Wise billions of data events, Dubizzle 60% revenue growth via AI, SWVL 90% fewer errors in regulated systems, 13+ years)
- General statements about patterns he's observed
- Hypothetical framings
- Composite observations from multiple situations

## Format Rules

### Single Tweet (default)
- Max 280 characters. Hard limit.
- One idea per tweet. No cramming.
- No hashtags.
- No emojis.
- No links (unless specifically requested).
- Period at the end, not an exclamation mark.

### Thread (only when requested or topic needs depth)
- 3-5 tweets max
- First tweet is the hook (must stand alone)
- Each subsequent tweet adds one layer
- Last tweet is the punchline or CTA
- Number format: plain text, no "1/" numbering

## Tone & Voice Rules

### Voice
- First person, conversational
- Confident, declarative. No hedging.
- Direct. Say the thing. Don't build up to it.
- Sounds like a senior engineer talking to a founder over coffee, not a content creator performing for an audience.

### Structure
- Lead with the punch. The strongest word or phrase goes first.
- Fragment sentences are encouraged.
- Contrast patterns work well: "Not X. Y."
- If the tweet has two sentences, make the second one shorter than the first.

### AVOID (strict)
- Emojis
- Hashtags
- Exclamation marks
- "Thread:" or "1/" numbering
- Marketing speak, hype, or clickbait
- Hedging words (almost, very, really, perhaps, maybe)
- Starting with "I think" or "In my opinion" (just state it)
- Em dashes (use periods or commas)
- Tagging other accounts (unless requested)
- "Hot take:" prefix (let the take speak for itself)
- Self-promotional CTAs (unless specifically asked)

## Output Format

Output ONLY the tweet text, ready to copy-paste. No preamble, no "Here's your tweet:", no explanation after. Just the tweet.

For threads: output each tweet separated by a blank line.

## Post-Generation Review (MANDATORY)

After generating the tweet, ALWAYS run it through the `/humanizer` skill to:
- Remove any remaining AI writing patterns
- Ensure it reads naturally
- Verify it's under 280 characters
- Catch any hedging words or overly polished phrasing

Output the final humanized version only.
