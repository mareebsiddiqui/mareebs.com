# LinkedIn Post Ideas Bank (180 Topics)

Draw from this bank when planning the daily content calendar. Each idea is a scene hook — the opening of a post. Mark topics as USED once they're scheduled.

Every idea follows the same pattern as the best-performing post:
- Opens with a concrete scene (not a thesis or opinion)
- Grounded in real experience (no fabricated fashion stories)
- No forced "bridge to FashionTech" — the audience self-selects
- One story, one principle

---

## Pillar 1: Transfer Story (36 ideas)

Real scenes from engineering work. The reader walks into a room where something went wrong.

### Pain A - No CTO for AI Infrastructure (9)

1. A CTO quit. Nobody knew the database password. I've seen this play out more times than I'd like. Founder calls me in a panic. Their technical co-founder just walked. And with them went everything that wasn't written down.
2. A recommendation engine served the same results for a week. Nobody noticed. The model had stalled silently. No alerts, no monitoring. The team only found out when a customer complained on Twitter.
3. Three developers. No tech lead. Every PR merged without review. I inherited the codebase 6 months later. 400 unmonitored endpoints. Zero runbooks. The founder thought "shipping fast" meant things were going well.
4. An AI feature passed all tests in staging. In production, it took 4 seconds to respond. Nobody had load-tested with real data volume. The team blamed "AI is slow." It wasn't the model. It was the infrastructure nobody owned.
5. A founder showed me their monitoring dashboard. It had one metric: uptime. Green. 99.9%. Their customers were getting wrong recommendations for 3 weeks. Uptime is not correctness.
6. "We ship features every sprint." I asked what happens when something breaks at 2am. Silence. Shipping without operating is the new technical debt. Nobody notices until customers leave.
7. A new engineer shipped a feature with AI tools in 2 days. Worked perfectly. No monitoring, no runbook, no alerts. It broke 3 months later. Nobody knew for a week.
8. A startup spent EUR 80K on an agency. Six months later, the agency left. No documentation. No handoff. The founder couldn't explain to the next developer what was built or why.
9. I asked a founder who owns their production systems. They said "the team." I asked who gets paged at 2am. They said nobody. That's not ownership. That's an orphan with a heartbeat.

### Pain B - DPP Deadline, No Technical Leadership (9)

10. A compliance submission failed silently for 2 weeks. The regulatory schema had changed. Nobody was monitoring. The team thought "no errors" meant "everything's fine." It meant nobody was checking.
11. First month submitting to a regulatory API: 40% rejection rate. Wrong field formats. Missing required data. Schema mismatches. The regulation's documentation said one thing. The API expected another.
12. A physical chip on a product linked to a registry record. The chip was readable. The data behind it was 6 months old. Everything looked compliant. Nothing was.
13. A regulatory body changed their submission schema without notice. Submissions failed silently for 2 weeks. Nobody monitors schemas changing under you. Until they do.
14. A brand built their compliance system. Passed initial audit. Six months later, requirements updated. Nobody noticed. System kept submitting the old format. Accepted one month, rejected the next.
15. I watched a team spend 3 months building a compliance submission pipeline. Beautiful code. Then the regulatory body changed 4 fields. The whole pipeline broke because it was hardcoded to the old schema. No version monitoring.
16. A startup registered their products with internal IDs. The regulatory registry rejected everything. Required standards-based identifiers. Three months of work, wasted, because nobody read the spec.
17. A submission went through. Green light. Everyone celebrated. Two months later, an audit flagged it: the data was technically valid but factually wrong. The system validated format, not truth.
18. A team built compliance as a one-time project. Shipped it. Moved on. 8 months later, data had drifted so far from reality that the submission was effectively fiction. Compliance is an operation, not a deliverable.

### Pain C - Supply Chain Data in Spreadsheets (9)

19. I asked a founder to show me their supplier data. She opened a shared drive. 47 spreadsheets. Three naming conventions. One person in the company understood the formulas. That person was on holiday.
20. A banking partner changed their data format. No warning. Our pipeline broke silently. Transactions dropped for 18 hours before anyone noticed. The alert we didn't have would've caught it in minutes.
21. A startup's "data integration" was a person named Sarah who manually re-typed numbers from supplier emails into a master spreadsheet every Friday. Sarah quit. Nobody else knew which cells mattered.
22. I inherited a data pipeline ingesting from 50+ sources. "amount" vs "transaction_value" vs "sum." Same field, three names, twelve formats. The transformation layer was 40% of the entire codebase.
23. A supplier started sending blank rows in their weekly export. The system accepted them as valid entries. Downstream, the AI model trained on nulls. Recommendations got worse. Nobody traced it back for 3 months.
24. "Our data is fine." I asked them to open a random supplier spreadsheet and count empty cells. 23% empty. Dates in 4 formats. Three products duplicated under different codes. "Fine" usually means "never audited."
25. A partner bank sent us data in a proprietary binary format. Another sent CSV with no headers. Another used SFTP with password rotation every 30 days. Twelve partners, twelve integration headaches. The technology was the easy part.
26. One person owned the master spreadsheet. Every formula, every cross-reference, every supplier quirk lived in their head. They got COVID for two weeks. The company operated blind.
27. A startup discovered 15% of their products were registered under different IDs in different systems. Same physical thing, three database entries. They found out when a customer received duplicate orders.

### Pain D - Can't Ship AI Features Fast Enough (9)

28. A recommendation engine launched. First week: complaints. It was recommending out-of-stock products. The model was fine. The inventory feed was 3 days stale. Nobody monitored data freshness.
29. I asked an AI vendor what happens when the model is wrong. "It's 95% accurate." What about the other 5%? "Edge cases." Those edge cases were real customers getting wrong answers. Nobody owned the fallback.
30. A team spent 6 months building an AI feature. Five of those months were data preparation. Not model building. Not algorithm selection. Cleaning, validating, standardising data nobody had maintained.
31. A demand forecasting model worked great for 6 months. Then accuracy cratered. Patterns shifted. Nobody had set up retraining. The model served increasingly wrong predictions for 2 months before anyone checked.
32. "We need AI to compete." I asked what their inventory accuracy rate was. They didn't know. You don't need AI. You need clean data. AI on dirty data is just faster wrong answers.
33. A startup built three AI features in a quarter. Not because they had a large ML team. Because they'd spent the previous quarter building a unified data layer. Each new feature took weeks, not months. The shortcut was the foundation.
34. A model passed all tests in staging. 98% accuracy. In production, 72%. The training data was from 2 years ago. The world had changed. The model hadn't. Nobody had built a drift check.
35. An AI personalization feature went live. Engagement went up. Revenue went down. The model optimised for clicks, not purchases. Nobody defined the right success metric before building.
36. A founder showed me their AI roadmap: 6 features in 12 months. I asked about their data completeness. 40% of products had full attributes. With that foundation, even one feature would take 6 months.

---

## Pillar 2: Myth-Busting (36 ideas)

Each opens with a moment — something a founder said, a scene that reveals the misconception.

### Pain A - No CTO for AI Infrastructure (9)

37. "We'll hire a CTO after Series A." I keep hearing this. Then Series A comes and the due diligence reveals no documentation, no architecture, and a codebase three agencies touched. That's not a CTO hire. That's a rescue mission.
38. "Our developers are using AI tools, so we don't need technical leadership." AI tools make everyone faster at building. They don't make anyone better at deciding what to build, monitoring what's running, or owning what breaks at 2am.
39. A founder told me their agency "handles everything." I asked who gets paged when production goes down on a Saturday. Silence. Agencies build and leave. Nobody at the agency owns your 2am.
40. "More developers means faster shipping." I've seen 10-person teams ship slower than 3-person teams. The constraint is never hands. It's direction. Adding developers without architecture is adding passengers to a car with no engine.
41. "We can manage technical decisions by committee." Product, marketing, and ops all had opinions on the AI roadmap. Nobody understood the data dependencies. Decision by committee means decision by loudest voice.
42. "A fractional CTO is just a consultant." A consultant writes a report and leaves. I inherit your production systems. I get paged when things break. I sit in standups. The accountability is different.
43. "Technical leadership is expensive." You know what's more expensive? EUR 80K to an agency that builds something nobody can maintain, then EUR 80K again to fix it with someone who can.
44. "We need senior engineers." A senior React developer and a senior compliance system architect solve completely different problems. "Senior" without context means nothing.
45. "AI will replace the need for a CTO." AI builds faster. It does not make architectural decisions. It does not know your supplier relationships. It does not set up monitoring. It does not page someone at 2am when data goes stale.

### Pain B - DPP Deadline, No Technical Leadership (9)

46. "DPP is basically a QR code." A founder told me their agency quoted EUR 5K for a QR code on the swing tag. Compliance is: data model, material composition, supply chain events, registry submission, ongoing maintenance. The QR is 5% of the work.
47. "We need blockchain for traceability." You need a database. With access controls. And an audit trail. That's it. Blockchain adds complexity and cost without solving the actual problem: getting suppliers to send structured data.
48. "We'll worry about compliance when enforcement starts." The registry opens for test submissions mid-2026. If you haven't tested by then, you'll discover data problems with zero time to fix them.
49. "Our sustainability team can handle it." Sustainability teams understand the regulation. They don't understand EPCIS event structures, API rate limits, or how to build a pipeline that ingests supplier updates automatically.
50. "One vendor can solve everything." No single vendor covers: supplier data ingestion + standardisation + identifier management + data carrier creation + registry submission + ongoing monitoring. You're buying a piece, not the puzzle.
51. "If we wait, the requirements will become clearer." They'll become clearer AND the deadline will be closer. The brands that started early with incomplete requirements still have a 12-month head start on data cleanup. That's the expensive part.
52. "Small brands will get an extension." There is no size exemption for textiles. Micro-enterprises get simplification, not exemption. You still need compliant data.
53. "DPP compliance is a technology project." It's 30% technology, 70% supplier relationship management and data governance. Starting with "which software should we buy?" is starting in the wrong place.
54. A founder told me they were "DPP compliant." I asked to see their test submission. They didn't have one. They had a spreadsheet their sustainability team had filled out. A spreadsheet is not a system.

### Pain C - Supply Chain Data in Spreadsheets (9)

55. "We just need a better spreadsheet." A spreadsheet with 40 tabs, 12 supplier formats, and one person who understands the formulas is not data management. It's a single point of failure wearing a spreadsheet costume.
56. "Our ERP handles supply chain data." Your ERP handles transactions. It doesn't handle origin traceability, batch-level composition, or event formatting. Different problem, different system.
57. "We'll clean up the data later." Data cleanup for 10+ suppliers takes 3-6 months. If you're waiting until the deadline is 6 months away, you're already too late.
58. "Supplier data quality isn't our problem." The regulation holds the brand responsible, not the supplier. If your supplier sends bad data and you submit it, the non-compliance is yours.
59. A founder spent EUR 30K on a supplier portal. Two of 12 suppliers used it. Portals fail because they add work to the supplier's day. Meet suppliers where they are, then transform the data yourself.
60. "One integration project will fix our data." Your data will drift the moment you stop actively maintaining it. Suppliers change formats. Staff turns over. New products appear. Data unification is ongoing governance, not a project.
61. "Manual data entry works at our scale." Until it doesn't. The brand with 50 SKUs can manage. The one with 500 SKUs doing manual entry has a 12% error rate they've never measured.
62. "Our data is fine, we just need to format it." I asked them to open a random supplier file and count the empty cells. 23%. Inconsistent date formats. Unverified entries. "Fine" means "never audited."
63. "We don't need real-time supplier data." You don't need real-time. But you need "recent enough that your submissions aren't based on data from 6 months ago." Most brands can't even guarantee quarterly updates.

### Pain D - Can't Ship AI Features Fast Enough (9)

64. "We need AI to compete." I asked what their inventory accuracy rate was. They didn't know. You don't need AI. You need clean data first. AI on dirty data is faster wrong answers.
65. "AI is too expensive for SMEs." The models are commodity. The expensive part is the data foundation. If your data is clean, AI features cost less than you think. If it's not, no budget is enough.
66. "Our competitors are ahead because they have more engineers." They're ahead because they have unified product data. Three engineers with clean data ship faster than ten with fragmented data.
67. "We need to hire ML engineers." You need someone who'll fix data quality first. ML engineers on dirty data spend 80% cleaning and 20% doing ML. That ratio never improves.
68. "We should build AI features first, fix data later." This is like building the house first and pouring the foundation later. Every AI project on bad data either fails or gets rebuilt.
69. "AI vendors will handle our data quality issues." Vendors build models. They don't fix your upstream data problems. Garbage in, garbage out applies to every vendor at every price point.
70. A founder showed me their AI vendor's demo. Beautiful. I asked what data the vendor needed. "We'll figure that out during implementation." Implementation took 9 months. Eight of them were data work the vendor didn't do.
71. "If we ship fast, we can fix quality later." In AI, bad quality compounds. Customers who get wrong recommendations don't come back to test if you improved. You get one shot at first impression.
72. "AI personalization requires millions of data points." It requires complete, consistent data points. 500 products with 100% attribute coverage beat 5,000 products with 40% coverage every time.

---

## Pillar 3: Framework (36 ideas)

Each framework earned through repetition. Opens with why it was needed.

### Pain A - No CTO for AI Infrastructure (9)

73. After the third founder called me with the same "our CTO just left" panic, I made a checklist. The first 72 hours: reset credentials, map running services, identify what's about to expire. Here's the full list.
74. I kept getting asked "how do we know if our tech is healthy?" by founders who couldn't read a dashboard. So I built a 5-metric weekly check any non-technical person can run.
75. Every time I evaluate a technical hire for a founder, I ask the same 7 questions. The answers tell me in 15 minutes whether this person can build AND operate. Here's the scorecard.
76. After seeing 5 agencies leave without documentation, I built a handoff checklist. 12 items that must exist before any external team finishes their contract.
77. The "production readiness review" I use before any feature goes live: monitoring, alerting, runbook, owner, SLA, rollback plan. If anything is missing, it doesn't ship. Takes 2 hours. Prevents 2 weeks of firefighting.
78. I made a decision tree for "do you need a fractional CTO, a tech lead, or an agency?" Five yes/no questions. Most founders are buying the wrong thing.
79. Every AI vendor says the same things in demos. Here are the 5 questions that separate the ones who can operate from the ones who just build.
80. A framework I use for every startup I work with: the build-vs-buy matrix. Six criteria scored 1-5. Most founders over-build what they should buy and over-buy what they should build.
81. After inheriting too many codebases with invisible risk, I built a quarterly technical debt assessment. 5 questions your team should answer every 3 months.

### Pain B - DPP Deadline, No Technical Leadership (9)

82. I put together a 10-question DPP readiness checklist after seeing the same gaps everywhere. Yes/no answers. Takes 10 minutes. Tells you exactly where you stand.
83. After the third rejected registry submission, I built a pre-flight checklist. 15 items to verify before you submit anything. Would've saved weeks of back-and-forth.
84. A 6-step GS1 implementation roadmap. From "we have no standards-based identifiers" to "we're registry-ready." Most brands are stuck at step 1 without knowing it.
85. The DPP data gap analysis: map every required field against what you currently have. The gaps are your project plan. Most brands skip this and start building blind.
86. I built a DPP cost estimation framework after seeing founders shocked by real numbers. Input: brand size, supplier count, data maturity. Output: realistic budget and timeline.
87. NFC vs QR vs RFID for data carriers. I scored them on cost, durability, customer experience, and regulation requirements. The answer depends on product type and price point.
88. A compliance monitoring dashboard I set up at every engagement: submission success rate, rejection reasons, data freshness per source, upcoming requirement changes. Five metrics, reviewed weekly.
89. The DPP timeline calculator: input your current state, get a realistic deadline. Most founders think they have 18 months. They have 6.
90. After watching brands waste months on the wrong vendor, I built a DPP vendor evaluation matrix. 8 criteria weighted by what actually matters for SMEs.

### Pain C - Supply Chain Data in Spreadsheets (9)

91. The 15-minute supply chain data audit. Open your supplier folder. Count files, count formats, count suppliers who send things differently each time. That third number is your risk score.
92. After onboarding 5 suppliers at different companies, I standardised the process. Define data needs, agree on format, build validation, set up monitoring. Two weeks per supplier instead of three months of chaos.
93. A supplier data readiness scorecard I use: rate each supplier 1-5 on digital format, consistency, completeness, batch-level detail, and responsiveness. Lowest scorer is your biggest risk.
94. The data unification roadmap I follow: Phase 1 audit, Phase 2 standardise formats, Phase 3 automate ingestion, Phase 4 monitoring. Most brands try to jump to Phase 4.
95. A data quality dashboard with 5 numbers to check weekly: completeness %, format consistency %, freshness, duplicate rate, error rate. If any trend down, investigate before it compounds.
96. The supplier communication templates I've refined: how to request format changes without burning the relationship. Most brands ask wrong and suppliers ignore them.
97. How to choose between PLM, PIM, or a custom system. A decision framework based on brand size, product complexity, and supplier count. Most brands overbuy.
98. The data migration checklist I use when moving brands off spreadsheets. 20 items. The one everyone forgets: validating that the migration didn't silently drop records.
99. After seeing brands set no expectations with suppliers, I built a "supplier data SLA" template. Expected frequency, acceptable staleness, format requirements. Set it before problems start.

### Pain D - Can't Ship AI Features Fast Enough (9)

100. An AI readiness assessment I run with every founder who says "we need AI." Score yourself 0-2 on 5 criteria. Below 5? Fix data first. AI later.
101. The AI feature prioritisation matrix: score each idea on data readiness + business impact. Build the one where your data is most complete, not the most exciting.
102. 12 prerequisites that must be true before any AI project starts. I call it the data foundation checklist. Most brands meet 3 of 12.
103. A model monitoring playbook: what to track, what thresholds to set, who to page, how often to retrain. Built this after watching too many models silently degrade.
104. The AI vendor red flags list. 8 things vendors say that should make you ask harder questions. Starting with "we handle the data."
105. An AI project post-mortem template. 7 questions to ask after any AI project, success or failure. The most revealing: "who owned it in production after launch?"
106. How to measure whether your product data is ready for ML, attribute by attribute. A completeness audit that takes an afternoon and saves months.
107. The honest AI budget split: 70% data foundation, 30% actual AI features. Every founder I show this to pushes back. Every founder who ignores it blows their timeline.
108. The personalisation engine evaluation checklist. 10 criteria beyond "the demo looked good." Starting with: "show me what happens when the model is wrong."

---

## Pillar 4: Architecture Breakdown (36 ideas)

What operating systems actually looks like. The quiet, unsexy truth of keeping things running.

### Pain A - No CTO for AI Infrastructure (9)

109. What "owning production" actually looks like: on-call rotation, runbooks per service, escalation paths, post-mortem culture. Not glamorous. But the difference between "we shipped it" and "it works at 3am."
110. The three types of monitoring nobody sets up: uptime (is it running?), freshness (is data recent?), accuracy (is output correct?). Everyone checks the first. The silent failures live in the second and third.
111. How post-mortems work when done right: no blame, just "what happened, what did we miss, what do we change." Written up, shared, action items tracked. Brands that fire developers for outages instead of fixing systems keep having outages.
112. What a rollback plan looks like in practice. A model goes wrong. Within 5 minutes, you're serving the previous version. Without this, every deployment is a one-way door.
113. The alert hierarchy I set up everywhere: P1 (revenue impact, page immediately), P2 (degraded, page within 1 hour), P3 (concerning, review next day). Without this, everything is either ignored or panic.
114. What vendor due diligence looks like behind the scenes. Before integrating any third-party: review their real uptime (not marketed), incident history, escalation process, and API rate limits under load.
115. We monitored aggregate system health. Green across the board. But 200 individual components were failing. Each was a rounding error. Collectively, a 15% data gap. Monitor individual components, not just the total.
116. What "production readiness" actually takes: I spend 2 hours reviewing before any feature goes live. Monitoring exists? Alerting configured? Runbook written? Owner named? Rollback tested? If no, it doesn't ship.
117. The quiet truth about operating AI features: most of the work isn't building them. It's watching them. Checking drift. Validating inputs. Updating training data. Retraining when the world changes. The unsexy maintenance nobody budgets for.

### Pain B - DPP Deadline, No Technical Leadership (9)

118. How regulatory submission validation works in practice: every field checked against a schema before submission. If it fails, blocked. Not "flagged." Blocked. You find out before the registry does.
119. How a device registry works: unique ID assigned, device registered in central platform, physical tag links to registry entry. Scan the tag, get live data. That architecture maps to every compliance registry.
120. What regulatory schema monitoring looks like: a version checker runs daily. When fields change, it flags affected submissions automatically. No human checking manually. Because humans forget.
121. How compliance submissions assemble in practice: data pulled from 5 different internal systems, validated, assembled into one structured payload, submitted via API. The orchestration layer is the hard part.
122. What a data carrier lifecycle looks like: a physical tag links to a record. Data updates, but the tag still points to the same URL. Product discontinued, record archived. The tag is permanent. The data is living.
123. What staged rollouts look like for compliance data: update 1% of products first. Monitor registry acceptance for 24 hours. Then 10%. Then all. Never push everything at once.
124. What identifier mapping looks like behind the scenes: internal SKU for operations, standards-based ID for the registry, a mapping table between them. Two IDs per product, one source of truth.
125. What "monitoring compliance drift" means day to day: weekly automated check. Are submissions still passing? Are data sources still fresh? Have requirements changed? Five minutes a week that prevents months of rework.
126. What happens when you build compliance as a one-time project: it passes audit on day 1. By month 6, data has drifted, requirements have changed, and your "compliant" system is submitting fiction.

### Pain C - Supply Chain Data in Spreadsheets (9)

127. How data ingestion works at scale: one custom adapter per source, translating their format into your internal model. Maintained as a first-class system with tests and monitoring. Not a script someone wrote once.
128. The three-layer data architecture I use everywhere: raw (store exactly what arrives), standardised (transform to internal model), validated (confirm quality before using). Most brands jump to layer 3 with no layer 1.
129. What solving "one person understands this" looks like: documentation as code, architecture decision records, no single-owner services. If one person leaves, the system documentation exists independently.
130. How supplier onboarding works when systematised: define data schema, build ingestion adapter, write validation rules, set up monitoring. Two weeks per supplier. Not three months of emails and guessing.
131. What data quality monitoring looks like in practice: daily automated checks on completeness, consistency, freshness, and accuracy. Results on a dashboard. Trends down? Investigate before it compounds.
132. What boundary validation means: bad data rejected immediately at ingestion with a specific error message. Never let bad data enter the system. The cost of fixing it grows exponentially once it's inside.
133. What a data dictionary looks like in practice: a versioned document defining every field, its type, valid values, source, owner, and update frequency. When a new source is added, mapping to the dictionary is mandatory.
134. What "data SLAs" look like: expected update frequency per source, acceptable staleness, format stability. When a source breaches its SLA, automated alert fires. Most brands set no expectations with suppliers and wonder why data is chaotic.
135. What deduplication looks like behind the scenes: a matching algorithm runs daily, identifying the same entity registered under different IDs. Merge rules define the canonical record. It's boring. And critical.

### Pain D - Can't Ship AI Features Fast Enough (9)

136. What "AI-ready data" actually means in practice: every product has standardised categories, complete attributes, consistent naming, and a reliability score. The ML team can start any project without months of prep.
137. The three-stage ML pipeline I've seen work: feature store (pre-computed, validated data), model training (scheduled, versioned), model serving (monitored, with fallbacks). You don't need all three on day 1. But you need the first.
138. What model monitoring looks like: input distribution tracking (is data still similar to training data?), output distribution tracking (are predictions in expected ranges?), performance tracking (is accuracy above threshold?). Three checks. Automated.
139. What a "degradation plan" looks like: when the model fails, what do customers see? For recommendations, serve most-popular. For pricing, serve manual prices. Always have a fallback that isn't "broken."
140. How fast AI shipping actually works: 70% of first quarter on data infrastructure, 30% on one feature. Second quarter: 3 features in 3 weeks each because the foundation existed. The shortcut is the foundation.
141. What model retraining looks like: scheduled monthly, triggered early if drift is detected. New model trained, tested against holdout, compared to production model, promoted only if better. Not "retrain and pray."
142. What kills AI projects: not model quality. Data pipeline reliability. A recommendation engine is only as good as its freshest data. If the product feed is 3 days stale, it recommends things you can't sell.
143. What "time to AI feature" looks like before and after foundation work: 4-5 months per feature before. 3-4 weeks after. The constraint was never AI talent. Always data readiness.
144. What health checks on AI inputs look like: freshness check per data source feeding the model. If any feed lags beyond threshold, alert. Because a model with stale inputs doesn't error. It just gets quietly worse.

---

## Pillar 5: Founder Education (36 ideas)

Honest truths for non-technical founders. Each opens with a question they've asked or a scene that reveals the knowledge gap.

### Pain A - No CTO for AI Infrastructure (9)

145. "What does a fractional CTO actually do?" Three things: decide what to build vs buy, architect systems that scale, and make sure what you ship keeps working after everyone stops paying attention.
146. "How do I know if my developers are building the right thing?" Ask one question every sprint: "What breaks if this goes wrong, and how will we know?" If they can't answer, you have a monitoring gap.
147. A founder asked me "should we build or buy?" I asked what their data looked like. She didn't know. The build-vs-buy question is always a data question first.
148. "What's the difference between a CTO, a tech lead, and a senior developer?" Scope. A dev writes code. A tech lead makes team decisions. A CTO owns business outcomes through technology. Most brands hire one thinking they're getting the other.
149. "How do I evaluate technical proposals when I'm non-technical?" Three things to look for: does it explain what happens when things fail? Does it include monitoring? Is there a plan for when the agency leaves?
150. A founder asked me what questions to ask in a technical interview. I said: forget coding tests. Ask "tell me about a system you operated in production for 6+ months. What broke and how did you find out?"
151. "What does 'production-ready' mean?" Monitored, alerted, documented, owned by a named person, with a tested recovery plan. If any of those are missing, it's not production-ready. It's a demo that happens to be live.
152. "How do I know if my AI features are working?" Don't ask your dev team. Check three things yourself: is it up, is it fast, is it accurate. If you can't see those numbers on a dashboard, you're flying blind.
153. "When should I bring in technical leadership?" Three signals: spending more than EUR 5K/month on tech, more than 2 developers, or approaching a regulatory deadline. Any one means now.

### Pain B - DPP Deadline, No Technical Leadership (9)

154. "What does DPP compliance actually require?" Five layers: data model, identifiers, supply chain events, physical data carriers, registry submission. Most brands only think about the data carrier. That's layer 4 of 5.
155. A founder asked "what's GS1?" The short answer: it's the language the EU registry speaks. Your internal codes are a different language. You need a translation layer.
156. "What's EPCIS and why should I care?" It's a standard for recording supply chain events: what happened, when, where, why. Without it, you have data but no provable chain.
157. "How do I know if my agency understands this?" Ask one thing: "show me a test submission to the registry." If they can't, they're not ready. They're learning on your budget.
158. "What's the difference between a QR code and actual compliance?" A QR code is a front door. Compliance is the house behind it: data model, materials, traceability events, all structured and validated. The door alone is just decoration.
159. "When does this actually take effect?" Registry opens mid-2026 for testing. Enforcement late 2027. But data preparation takes 6-12 months. So the real deadline already passed. Now it's about damage control.
160. "Do I need to trace back to raw materials?" For textiles: to the point where materials can be identified. In practice, fabric mill or fibre producer. Not farm-level yet. But you need evidence, not claims.
161. "Can we do this incrementally?" Yes. Start with your best-selling category where data is most complete. Get it through the registry. Learn. Then expand. Don't try everything at once.
162. "What actually happens at the registry?" You submit structured data via API. The registry validates it against required fields and formats. Pass: your product gets a passport. Fail: you get an error code and try again.

### Pain C - Supply Chain Data in Spreadsheets (9)

163. "Why can't we just put everything in one spreadsheet?" Because standardisation is the hard part. Your Italian mill sends percentages. Your dyer sends colour codes as free text. Your CMT sends three different unit systems. One spreadsheet won't reconcile that.
164. "What's a data model and why do we need one?" It defines what information exists for every product, in what format, from what source. Without it, everyone invents their own structure. Nothing connects.
165. "How do we get suppliers to send data digitally?" Don't build a portal. Start with: a standardised template, clear field definitions, and one human who follows up every week. Technology comes after behaviour change.
166. "What's the difference between PLM, PIM, and ERP?" PLM tracks development. PIM stores marketing data. ERP handles transactions. For compliance you need pieces from all three. Most brands have gaps between them.
167. "How do we know if our data is good enough?" Measure four things: completeness (% filled), consistency (same format everywhere), freshness (how recently updated), accuracy (verified against source). If you can't measure it, it's not good enough.
168. "What does 'interoperability' mean?" Your systems can share data without a human re-typing it. If someone copies numbers from one system to another, you don't have interoperability. You have a person doing a computer's job.
169. "Who should own data quality?" One named person. Not a committee. Not "the ops team." Not "suppliers." One person with the mandate to reject bad data and the relationships to get it fixed.
170. "How long does this actually take?" For a brand with 10-15 suppliers: 3-6 months for the first pass. It's never truly done. Suppliers change, products change, regulations change. But the first pass is the hardest.
171. "What's the minimum viable data setup?" A structured product database, a supplier ingestion pipeline with validation, standards-based identifiers, and a submission API connection. Four systems that must connect.

### Pain D - Can't Ship AI Features Fast Enough (9)

172. "What does 'AI-ready data' mean?" Three things: complete (every product has attributes), consistent (same format across sources), connected (customer, inventory, and supplier data can talk to each other).
173. "Which AI feature should we build first?" The one where your data is most complete. Not the most exciting. Not what competitors have. The one where you can actually get a result better than random.
174. A founder asked if their data was ready for AI. I said: pick your top 100 products. Count how many have 100% of attributes filled. She counted. 34. That's your answer.
175. "What's the difference between AI, ML, and 'agentic'?" AI is the category. ML is prediction from data. Agentic means systems that take action without human approval. Each requires different data foundations.
176. "How much should an AI feature cost?" If data is clean: EUR 20-50K. If not: add EUR 50-100K for data work first. Most quotes only include the first number.
177. "Why did our AI project fail?" Check five things: was training data complete? Was it recent? Was it representative? Was the model monitored? Was there an owner? Usually 3 of these are "no."
178. "Should we use a vendor or build in-house?" Vendor if you want speed and the use case is standard. In-house if you have proprietary data advantages. Both need clean data. Neither vendor nor custom code fixes bad inputs.
179. "What's model drift?" Your model trained on historical data. The world changes. Without retraining, it gets less accurate over time. Most models drift noticeably within 3-6 months. Nobody checks.
180. "How do I talk to AI vendors without getting sold something wrong?" Three rules: ask what data they need from you, ask what happens when the model is wrong, ask who owns it in production after setup. Watch how they answer the second one.
