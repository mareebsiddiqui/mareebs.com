# LinkedIn Post Ideas Bank (180 Topics)

Draw from this bank when planning the daily content calendar. Mark topics as USED once they're scheduled.

---

## Pillar 1: War Stories (36 ideas)

"I walked into this mess..." - FashionTech situations showing what goes wrong without technical leadership.

### Pain A - No CTO for AI Infrastructure (9)

1. A brand shipped a predictive inventory model. It ran for 4 months. Nobody checked its accuracy. When I looked, it was predicting demand based on 8-month-old data because the pipeline feeding it had silently broken.
2. Thursday call with the founder: "Our AI recommendation engine went down last night. Nobody noticed until a customer tweeted." The code was fine. The monitoring was zero.
3. I keep seeing fashion brands evaluate AI vendors by watching demos. Nobody asks: "What happens when this fails at 2am on Black Friday? Who gets paged?"
4. A brand's AI personalization was serving the same recommendations to everyone for 3 weeks. The model had stalled. No alerts. No monitoring. Just quietly wrong.
5. The founder hired a machine learning engineer. Six months later: a beautiful model that works in notebooks. Zero production deployment. No runbooks. No alerting. No owner.
6. Say a brand launches VTO with a vendor. It works for 6 months. The vendor changes their API. Nobody notices for 3 weeks because nobody monitors third-party dependencies.
7. A fashion brand's entire technical operation lived in one developer's head. That developer left. The next morning, nobody knew how to deploy or where the credentials were stored.
8. The agency delivered an AI feature in 8 weeks. Impressive speed. Six months later: no monitoring, no runbooks, no documentation of why architectural decisions were made. Speed without ownership.
9. A brand's demand forecasting model kept recommending more stock of a discontinued line. Nobody reviewed its output. They ordered EUR 40K of dead inventory before a human spotted the error.

### Pain B - DPP Deadline, No Technical Leadership (9)

10. A fashion brand paid an agency EUR 80K for "DPP compliance." They got a QR code on a swing tag. No data model, no registry connection, no traceability chain. Just a sticker.
11. A brand built their entire DPP system on custom identifiers. Six months in, they discovered the EU registry requires GS1 GTINs. Every product link, every data carrier, every supplier mapping had to be redone.
12. I keep seeing brands that started DPP "early" but built on assumptions from 2024 guidance. The final regulation changed three key fields. Their system can't accommodate the change because nobody designed for flexibility.
13. A brand's DPP vendor assured them the registry API was "handled." First submission: rejected. Wrong identifier format. Second submission: rejected. Missing material composition field. Nobody had tested against the actual registry spec.
14. Say your agency delivers a DPP system in Q3 2026. The registry launches with updated requirements in Q4. Who adapts your system? The agency's contract ended. Your internal team doesn't understand GS1 EPCIS. Nobody owns it.
15. A sustainable brand discovered their "compliant" DPP system stored material composition as free text. The registry requires standardised codes. 2,000 products needed manual re-categorisation.
16. The founder asked their developers to "build DPP." They built a database and a QR code generator. No GS1 identifiers. No EPCIS event structure. No registry API integration. They built 5% of a system and thought they were done.
17. I keep seeing fashion brands treat DPP as a one-time project. It's an ongoing operation. Product data changes. Suppliers change. Regulations update. Without someone owning it in production, compliance decays.
18. A brand's DPP data passed validation in staging. In production, 30% of submissions failed because real supplier data had inconsistencies the test data didn't. Nobody built monitoring for submission failure rates.

### Pain C - Supply Chain Data in Spreadsheets (9)

19. Say a sustainable brand wants to trace cotton from farm to garment. They ask their 8 suppliers for origin data. Two send Excel files. One sends a PDF scan. Three don't respond. Two send data in formats that contradict each other.
20. A brand with 15 suppliers tried to build traceability. Each supplier had their own system. SAP, custom ERP, Excel, paper. Nobody spoke the same data language. Four months just mapping field names across systems.
21. Week 2 of a supply chain data audit. Video call with a Tier 2 supplier in Bangladesh. They track batch information in a paper ledger. The brand needs digital traceability by 2027. Nobody discussed this with the supplier until today.
22. The operations team spent 6 months building a "unified product database." It worked for 3 months. Then suppliers started sending updated data that didn't match the original structure. Nobody built ingestion validation.
23. I keep seeing fashion brands with a "master spreadsheet" that one person maintains manually. That person goes on holiday. The data drifts. Suppliers keep sending updates. By the time they're back, the sheet is 3 weeks stale.
24. A brand discovered their Tier 1 supplier was sourcing from a Tier 2 supplier they'd never heard of. The traceability chain they'd reported was incomplete. This came out during a DPP data audit, not proactively.
25. Data mapping session. Row 847 of a supplier spreadsheet. Column says "origin" but half the entries are country names, a quarter are city names, the rest are factory codes. Nobody knows which is which. The creator left in 2024.
26. The brand's product data was split across: ERP for pricing, PLM for specs, spreadsheets for supplier info, email threads for compliance certs. Five systems, zero integration, nobody responsible for consistency.
27. A brand tried to automate supplier data collection by building a portal. After EUR 30K, only 2 of 12 suppliers used it. The rest kept sending email attachments because the portal was harder than their existing process.

### Pain D - Can't Ship AI Features Fast Enough (9)

28. I keep hearing: "Our competitors raised EUR 5M for AI." The panic is about money. The real gap is that the competitor has clean, unified product data. You can build the same features in weeks if your foundation is solid.
29. A brand's AI personalization project failed. Not because of the model. Because 30% of product attributes were missing. The model couldn't recommend products it couldn't describe.
30. The brand shipped an AI feature in 2 weeks using the latest tools. Nobody set up monitoring. It broke on day 12. Nobody knew until customer complaints hit support on day 15.
31. A fashion brand hired an AI consultancy. EUR 150K later: a proof of concept that works on clean sample data. Their actual data has 40% gaps, inconsistent categories, and three naming conventions. The POC is useless in production.
32. I keep seeing brands try to build AI features on top of fragmented data. The ML team spends 80% of their time cleaning data and 20% doing ML. That ratio never improves because nobody fixes the upstream data quality.
33. The competitor shipped AI-powered size recommendations in 3 months. The brand has been trying for 9 months. Difference: the competitor had standardised product measurements across all SKUs. The brand still uses freetext size descriptions.
34. A brand's demand forecasting model worked for 6 months then slowly degraded. Sales patterns shifted with seasons. Nobody retrained the model because nobody owned model maintenance. It was "built" but never "operated."
35. Say a brand builds an AI recommendation engine. Works great in testing. In production, response times hit 3 seconds because nobody load-tested with real catalogue size. The feature ships, users bounce, and the team blames "AI doesn't work."
36. The head of ecommerce wanted AI personalization by Q4. The data team said "our product data isn't ready." Leadership overruled them. The feature shipped on dirty data. Recommendations were embarrassingly wrong. It got pulled in 2 weeks.

---

## Pillar 2: Myth-Busting (36 ideas)

Contrarian takes that challenge conventional FashionTech wisdom.

### Pain A - No CTO for AI Infrastructure (9)

37. "We'll hire a CTO after Series A." I keep seeing fashion brands delay technical leadership until the DPP deadline is 9 months away and their data is in 40 spreadsheets. By then you're not hiring a CTO. You're hiring a firefighter.
38. "AI will replace the need for a CTO." AI makes building faster. It does not make architectural decisions. It does not know your supplier relationships. It does not page someone at 2am when your traceability data goes stale.
39. "Our agency can handle AI infrastructure." Agencies build and leave. Nobody at the agency gets paged when your recommendation engine serves stale results to 10,000 customers at midnight.
40. "We need senior engineers." What you need is someone who's operated regulated systems. A senior React developer and a senior compliance system architect solve completely different problems.
41. "More developers means faster AI shipping." Adding developers to a brand that has no data architecture is like adding passengers to a car with no engine. The constraint isn't hands. It's direction.
42. "Technical leadership is expensive." You know what's more expensive? EUR 80K to an agency that builds something nobody can maintain, then EUR 80K again to fix it with someone who can.
43. "We can manage technical decisions by committee." I keep seeing brands where product, marketing, and ops all have opinions on the AI roadmap but nobody understands the data dependencies. Decision by committee means decision by loudest voice.
44. "Our developers are using AI tools, so we don't need technical leadership." AI tools make every developer faster at building. They don't make anyone better at deciding what to build, monitoring what's running, or owning what breaks.
45. "A fractional CTO is just a consultant." A consultant writes a report and leaves. I inherit your production systems. I get paged when things break. The accountability is different.

### Pain B - DPP Deadline, No Technical Leadership (9)

46. "DPP is just for luxury brands." The ESPR regulation covers all textile products sold in the EU. Every t-shirt, every pair of jeans, every dress. If you sell apparel in Europe, this applies to you.
47. "DPP is basically a QR code." A QR code is a data carrier. Compliance is: product data model, material composition, supply chain events in EPCIS format, registry API submission, ongoing data maintenance. The QR is 5% of the work.
48. "We need blockchain for traceability." You need a database. With proper access controls. And an audit trail. That's it. Blockchain adds complexity and cost without solving the actual problem: getting suppliers to send structured data.
49. "We'll worry about DPP when enforcement starts." The registry launches mid-2026. If you haven't tested submissions by then, you'll discover data problems with no time to fix them. Enforcement isn't the deadline. Registry readiness is.
50. "Our sustainability team can handle DPP compliance." Sustainability teams understand the regulation. They don't understand GS1 EPCIS event structures, API rate limits, or how to build a data pipeline that ingests supplier updates automatically.
51. "Small brands will get an extension." There is no size exemption in ESPR for textiles. Micro-enterprises get simplification, not exemption. You still need compliant data. You might get a simpler submission process.
52. "One DPP vendor can solve everything." No vendor covers: supplier data ingestion + data standardisation + GS1 identifier management + data carrier creation + registry submission + ongoing monitoring. You're buying a piece, not the whole puzzle.
53. "DPP compliance is a technology project." DPP is 30% technology, 70% supplier relationship management and data governance. The brands that start with "which software should we buy?" fail. The ones that start with "what data do we have?" succeed.
54. "If we wait, the requirements will become clearer." They'll become clearer AND the deadline will be closer. The brands that started in 2025 with incomplete requirements still have a 12-month head start on data cleanup. That's the expensive part.

### Pain C - Supply Chain Data in Spreadsheets (9)

55. "We just need a better spreadsheet." You need a data architecture. A spreadsheet with 40 tabs, 12 supplier formats, and one person who understands the formulas is not data management. It's a single point of failure.
56. "Our ERP handles supply chain data." Your ERP handles transactions. It doesn't handle: supplier origin traceability, batch-level material composition, or EPCIS event formatting. Those require a separate data layer.
57. "We'll clean up data during DPP implementation." Data cleanup for 10+ suppliers takes 3-6 months. DPP implementation takes 3-6 months. These aren't sequential. Start data cleanup now or miss the deadline.
58. "Supplier data quality isn't our problem." The DPP regulation holds the brand responsible, not the supplier. If your Tier 2 supplier sends bad data and you submit it, the non-compliance is yours.
59. "We'll build a supplier portal and they'll use it." I keep seeing brands spend EUR 30K on portals that 2 of 12 suppliers actually use. Portals fail because they add work to the supplier's day. Meet suppliers where they are, then transform the data.
60. "One integration project will fix our data." Your data will drift the moment you stop actively maintaining it. Suppliers change formats. Staff turnover. New products. Data unification is ongoing governance, not a one-time project.
61. "Our data is fine, we just need to format it for DPP." Open a random supplier spreadsheet. Count the empty cells, inconsistent formats, and unverified entries. "Fine" usually means "nobody's audited it."
62. "Manual data entry works at our scale." Until it doesn't. The brand with 50 SKUs and 3 suppliers can manage manually. The brand with 500 SKUs and 15 suppliers that manual-enters data has 12% error rates they've never measured.
63. "We don't need real-time supplier data." You don't need real-time. But you need "recent enough that your DPP submission isn't based on data from 6 months ago." Most brands can't even guarantee quarterly updates from all suppliers.

### Pain D - Can't Ship AI Features Fast Enough (9)

64. "We need AI to compete." I keep hearing this from fashion founders who can't tell me what their inventory accuracy rate is. You don't need AI. You need clean data. AI on dirty data is just faster wrong answers.
65. "AI is too expensive for SMEs." The models are commoditised. The expensive part is the data foundation. If your data is clean and unified, AI features cost less than you think. If it's not, no budget is enough.
66. "Our competitors are ahead because they have more engineers." They're ahead because they have unified product data. Three engineers with clean data ship faster than ten engineers with fragmented data.
67. "We need to hire ML engineers." You need to hire someone who'll fix your data quality first. ML engineers on dirty data spend 80% of their time cleaning and 20% doing ML. That ratio never improves.
68. "AI personalization requires millions of data points." It requires complete, consistent data points. A brand with 500 products and 100% attribute coverage will get better recommendations than one with 5,000 products and 40% coverage.
69. "We should build AI features first, fix data later." This is like saying "let's build the house first, pour the foundation later." Every AI project built on bad data either fails or gets rebuilt. There is no shortcut.
70. "AI vendors will handle our data quality issues." Vendors build models. They don't fix your upstream data problems. "Garbage in, garbage out" applies to every vendor, every model, every price point.
71. "We can't afford to wait on data cleanup before shipping AI." You can't afford to ship AI that embarrasses your brand. A recommendation engine that serves wrong sizes or irrelevant products actively damages customer trust.
72. "If we ship fast, we can fix quality later." In AI, bad quality compounds. Customers who get bad recommendations don't come back to test if you improved. You get one shot at first impression. Ship on clean data or don't ship.

---

## Pillar 3: Frameworks & Playbooks (36 ideas)

Checklists, decision frameworks, evaluation matrices.

### Pain A - No CTO for AI Infrastructure (9)

73. The AI Vendor Evaluation Matrix: 5 questions to score any vendor before signing. Focus on operational readiness, not demo quality.
74. The "Do I Need a CTO?" Decision Tree: 5 yes/no questions that tell you whether you need a fractional CTO, a lead developer, or an agency.
75. The Technical Hire Interview Scorecard: 7 questions non-technical founders should ask every technical candidate, with red-flag answers.
76. The Production Readiness Checklist: 12 items that must exist before any AI feature goes live (monitoring, alerting, runbooks, ownership, SLAs).
77. The Weekly CTO Health Check: 5 metrics a non-technical founder should review every Monday to know if their tech is healthy.
78. The Build vs Buy Decision Framework for Fashion AI: when to use a vendor, when to build in-house, scored on 6 criteria.
79. The Agency RFP Scorecard: how to evaluate agency proposals when you don't have technical expertise, 8 questions with scoring rubric.
80. The AI Roadmap Prioritisation Matrix: how to decide which AI feature to build first based on data readiness + business impact.
81. The Technical Debt Assessment: 5 questions to ask your dev team quarterly to know if you're accumulating invisible risk.

### Pain B - DPP Deadline, No Technical Leadership (9)

82. The DPP Readiness Checklist: 10 yes/no questions that tell you exactly where you stand (data model, identifiers, traceability, carriers, registry).
83. The DPP Vendor Evaluation Matrix: 8 criteria for scoring DPP vendors, weighted by what matters most for fashion SMEs.
84. The GS1 Implementation Roadmap: 6-step process from "we have no GS1 identifiers" to "we're registry-ready."
85. The DPP Data Gap Analysis Template: map every required field against your current data sources, identify gaps, estimate effort to fill.
86. The "Are We Ready to Submit?" Pre-Flight Checklist: 15 items to verify before your first registry submission.
87. The DPP Cost Estimation Framework: how to budget for compliance based on brand size, supplier count, and current data maturity.
88. The Data Carrier Decision Matrix: NFC vs QR vs RFID, scored on cost, durability, customer experience, and regulation requirements.
89. The DPP Compliance Monitoring Dashboard: 5 metrics to track weekly once your system is live (submission success rate, data freshness, supplier response times).
90. The DPP Timeline Calculator: input your current state, get a realistic timeline for compliance readiness based on typical patterns.

### Pain C - Supply Chain Data in Spreadsheets (9)

91. The 15-Minute Supply Chain Data Audit: open your supplier folder, count formats, count gaps, score your DPP risk.
92. The Supplier Data Readiness Scorecard: rate each supplier 1-5 on 5 criteria (digital format, consistency, completeness, batch-level, responsiveness).
93. The Data Unification Roadmap: 4-phase plan from "spreadsheet chaos" to "single queryable source of truth."
94. The Supplier Onboarding Playbook: how to get reluctant suppliers sending structured digital data, step by step.
95. The Data Quality Metrics Dashboard: 5 numbers to track weekly (completeness %, consistency %, freshness, duplicate rate, error rate).
96. The PLM/PIM Selection Framework: how to choose the right system for your brand size and complexity, scored on 7 criteria.
97. The Supply Chain Data Dictionary Template: how to standardise field names and formats across all suppliers.
98. The Data Migration Checklist: 20 items to verify when moving from spreadsheets to a structured system.
99. The Supplier Communication Template Pack: email templates for requesting data format changes, explaining DPP requirements, and escalating non-response.

### Pain D - Can't Ship AI Features Fast Enough (9)

100. The AI Readiness Assessment: score yourself 0-2 on 5 criteria to know if you're ready for AI or need to fix data first.
101. The AI Feature Prioritisation Matrix: score each potential AI feature on data readiness + business impact + effort, pick the top right quadrant.
102. The Data Foundation Checklist for AI: 12 prerequisites that must be true before any AI project starts.
103. The ML Model Monitoring Playbook: what to track, what thresholds to set, who to page, how often to retrain.
104. The AI Vendor Red Flags List: 8 things AI vendors say that should make you ask harder questions.
105. The "AI Project Post-Mortem" Template: 7 questions to ask after any AI project (success or failure) to improve the next one.
106. The Data Completeness Audit for AI: how to measure whether your product data is ready for machine learning, attribute by attribute.
107. The AI Budget Planning Framework: how to split budget between data foundation (70%) and AI features (30%) for first-time brands.
108. The Personalisation Engine Evaluation Checklist: 10 criteria for choosing a recommendation vendor beyond "the demo looked good."

---

## Pillar 4: Behind-the-Scenes (36 ideas)

What a fractional CTO week at a FashionTech startup actually looks like.

### Pain A - No CTO for AI Infrastructure (9)

109. Monday 9am: reviewing last week's AI model performance metrics. One model drifted 12% from baseline. Deciding whether to retrain now or investigate the data shift first.
110. Wednesday standup: the ML engineer shipped a feature in 2 days with AI tools. I'm now asking "where's the monitoring?" and "who owns this at 3am?" Not popular questions.
111. A 30-minute call that saved the brand EUR 50K: the founder was about to sign with an AI vendor. I asked 3 questions about production support. The vendor couldn't answer. We walked away.
112. Thursday afternoon: writing a runbook for the recommendation engine. What to do when it returns stale results. Who to page. How to roll back. Boring? Yes. Essential? Ask any brand whose AI broke on Black Friday.
113. End of week: documenting why we chose architecture X over Y. Not for today. For the next engineer who inherits this system and needs to know why decisions were made.
114. The part nobody sees: reviewing a vendor contract's SLA section. "99.9% uptime" means 8 hours of downtime per year. For a fashion brand doing EUR 2M online, that's EUR 44K at risk. One paragraph in a contract. Real money.
115. Tuesday morning: a model I deployed 3 months ago just triggered an alert. Output distribution shifted. Investigating whether it's seasonal or a data pipeline issue. This is what "owning production" means.
116. Week 3 with a new client. Building the observability stack. Not glamorous. No new features. Just dashboards, alerts, and on-call rotations. The founder asks "when do we build AI features?" After this.
117. Friday 4pm: running a fire drill. What happens if the AI recommendation service goes down? Who notices? How fast? Answer today: nobody, never. Answer in 2 weeks: Slack alert within 5 minutes. That's progress.

### Pain B - DPP Deadline, No Technical Leadership (9)

118. Monday: mapping which product data fields the registry will require. Tuesday: discovering 60% of that data doesn't exist in any system. Wednesday: calling suppliers to ask "do you track fibre composition by batch?" Silence.
119. Testing a DPP registry submission. First attempt: rejected. Missing field. Second attempt: rejected. Wrong identifier format. Third attempt: accepted but flagged. This is what compliance actually looks like.
120. Wednesday: writing a GS1 identifier mapping for 500 SKUs. Each product needs a GTIN. The brand has internal product codes, supplier codes, and marketplace codes. None of them are GTINs. Mapping takes a full day for 500 items.
121. Thursday: on a call with a data carrier vendor. They're explaining NFC chip capabilities. I'm asking: "What happens when the data behind the chip changes? How do we push updates? What if the registry rejects the linked data?"
122. The unglamorous part of DPP: writing validation rules. If material composition doesn't sum to 100%, flag it. If country of origin is blank, block submission. If fibre type isn't in the EU codelist, reject. 47 rules. One at a time.
123. Friday: reviewing the DPP architecture diagram with the founder. Their face when they realise "DPP compliance" is 8 interconnected systems, not one app. That's the moment they understand why an agency quote was either too cheap or too vague.
124. Week 1 discovery: the brand has 4 product categories that fall under different ESPR requirements. Nobody mapped which products need which data fields. Building that matrix: 3 hours. Should have happened 6 months ago.
125. Tuesday afternoon: debugging why 12% of DPP submissions fail. Tracing back through the pipeline: the supplier changed their fibre code format without telling us. No validation caught it because nobody wrote a check for format changes.
126. End of month: DPP compliance dashboard review with the founder. 87% submission success rate. 13% failing. Three root causes: stale supplier data, missing traceability events, and one field that changed in the latest regulation update.

### Pain C - Supply Chain Data in Spreadsheets (9)

127. Monday morning: opening a supplier spreadsheet. 47 columns. No documentation. Column headers like "notes2" and "temp_fix_march." The person who created this left 18 months ago.
128. Video call with a supplier in Portugal. I'm explaining what "batch-level origin data" means. They track it on paper. We need it digital by 2027. The gap between where they are and where we need them is 18 months of change management.
129. Wednesday: building a data transformation pipeline. Supplier A sends CSV with semicolons. Supplier B sends XLSX with merged cells. Supplier C sends XML with a custom schema. All need to become the same format.
130. The moment the brand realises their "product data" exists in 5 systems that never sync. ERP for pricing. PLM for design specs. A spreadsheet for supplier contacts. Email threads for compliance certs. A shared drive for lab reports.
131. Thursday: writing the data dictionary. What does "composition" mean? For Supplier A it's "100% cotton." For Supplier B it's "CO 100%." For Supplier C it's a code: "14." Same data, three languages. Standardisation takes weeks.
132. Week 2 of data migration. Found duplicate products: same garment, two different SKUs, different data in each. Which is correct? Nobody knows. Calling the product team. They'll check with the supplier. Expected answer: next week.
133. Friday standup: reporting data quality metrics to the founder. Completeness: 67%. Consistency: 54%. Freshness: 40% of supplier data older than 3 months. These numbers make DPP risk visible for the first time.
134. The most common question from founders: "How long will this take?" My honest answer: "Your 12 suppliers send data in 8 different formats. Standardising that alone is 6 weeks. Then we build the pipeline. Then we validate. Four months minimum."
135. Supplier meeting: trying to convince a fabric mill to send composition data as structured JSON instead of PDF certificates. Their response: "We've been doing it this way for 20 years." The DPP doesn't care how long you've done it differently.

### Pain D - Can't Ship AI Features Fast Enough (9)

136. Monday: the product team wants AI recommendations live by Q4. I'm looking at the product data: 30% missing attributes, 3 different category taxonomies, no standard size mapping. We can't train a model on this.
137. Wednesday architecture review: evaluating whether to build a recommendation engine in-house or use a vendor. Both paths require the same thing first: unified, complete product data. The choice doesn't matter until the data does.
138. The data readiness assessment I run with every new client. Average result: 3 out of 10. Most common gaps: incomplete product attributes, no standardised categories, supplier data never validated against source.
139. Thursday: a competitor just launched AI-powered size recommendations. The founder panics. I look at what it would take us: 3 weeks if our measurement data was standardised. 4 months because it's not. The data gap is the feature gap.
140. Running an AI feature post-mortem. The personalisation engine launched 2 months ago. Conversion: flat. Investigation: the model was trained on 6-month-old browse data. Nobody set up a retraining schedule. It's recommending last season's styles.
141. Friday: setting up model monitoring. If recommendation click-through drops below 2%, alert. If response time exceeds 1s, alert. If the model hasn't retrained in 14 days, alert. This takes 2 hours and most brands never do it.
142. The conversation that always surprises founders: "Your AI budget should be 30% AI, 70% data." Their expectation: buy a vendor, plug it in, done. Reality: the vendor needs clean, complete, structured data that doesn't exist yet.
143. Week 4 sprint planning: the team wants to build 3 AI features this quarter. I'm pushing back to 1 feature + data foundation work. It's slower now but means we ship 5 features next quarter instead of rebuilding the same one three times.
144. Tuesday: reviewing a demand forecasting vendor's integration requirements. They need: daily sales data, inventory levels, lead times by supplier, and product attributes. The brand has 2 of 4 in a structured format. The other 2 are in spreadsheets and email threads.

---

## Pillar 5: Founder Education (36 ideas)

Teach non-technical founders to ask the right questions.

### Pain A - No CTO for AI Infrastructure (9)

145. "What does a fractional CTO actually do at a fashion brand?" Three things: decide what to build vs buy, architect data systems across suppliers, and make sure what you ship keeps working in production.
146. "How do I know if my developers are building the right thing?" Ask one question every sprint: "What breaks if this goes wrong, and how will we know?" If they can't answer, you have a monitoring gap.
147. "Should we build VTO in-house or buy a vendor?" The answer depends on your product data. Do you have standardised measurements and 3D-ready attributes? If not, no VTO solution works well, build or buy.
148. "What's the difference between a CTO, a tech lead, and a senior developer?" Scope of responsibility. A dev writes code. A tech lead makes team decisions. A CTO owns business outcomes through technology.
149. "How do I evaluate technical proposals when I'm not technical?" Three things to look for: does it explain what happens when things fail? Does it include monitoring? Is there a handoff plan for when the agency leaves?
150. "What questions should I ask in a technical interview?" Forget coding tests. Ask: "Tell me about a system you operated in production for 6+ months. What broke and how did you find out?"
151. "What does 'production-ready' actually mean?" It means: monitored, alerted, documented, owned by a named person, with a tested recovery plan. If any of those are missing, it's not production-ready.
152. "How do I know if my AI features are working?" Don't ask your dev team. Check three metrics yourself: is it up? Is it fast? Is it accurate? If you can't see these numbers on a dashboard, you're flying blind.
153. "When should I bring in technical leadership?" Three signals: you're spending more than EUR 5K/month on technology, you have more than 2 developers, or you're approaching a regulatory deadline. Any one of these means now.

### Pain B - DPP Deadline, No Technical Leadership (9)

154. "What does DPP compliance actually require?" Five layers: product data model, GS1 identifiers, supply chain events, physical data carriers, and registry submission. Most brands only think about the data carrier (QR/NFC).
155. "What's GS1 and why does the EU require it?" GS1 is a global standard for identifying products. The EU chose it so every product in every country has one consistent identifier. Your internal SKU codes won't work.
156. "What's EPCIS and why should I care?" EPCIS is a standard for recording supply chain events (what happened, when, where, why). DPP uses it to prove traceability. Without EPCIS events, you have data but no chain.
157. "How do I know if my agency understands DPP?" Ask: "Show me a test submission to the registry." If they can't, ask: "What identifier standard are you using?" If they say anything other than GS1, they're not ready.
158. "What's the difference between a QR code and a DPP?" A QR code is a link. A DPP is the data that link points to: materials, origin, care instructions, repairability scores, all structured and validated. The QR is the front door, not the house.
159. "When does the DPP regulation actually take effect?" The registry launches mid-2026 (test submissions). Full enforcement for textiles is late 2027. But the data preparation takes 6-12 months. So the real deadline is now.
160. "Do I need to trace back to raw materials?" For textiles, you need to trace materials to the point where they can be identified. In practice: fabric mill or fibre producer. Not farm-level (for now). But you need evidence, not claims.
161. "What happens at the registry? What do we actually submit?" You submit product-level data in a structured format via API. The registry validates it against required fields and formats. If it passes, your product gets a DPP. If it fails, you get an error.
162. "Can we do DPP incrementally or do we need everything at once?" You can phase by product category. Start with your best-selling category where data is most complete. Get it through the registry. Learn. Then expand.

### Pain C - Supply Chain Data in Spreadsheets (9)

163. "Why can't we just put all supplier data in one spreadsheet?" Because standardisation is the hard part. Your Italian mill sends percentages, your Portuguese dyer sends colour codes as free text, and your Turkish CMT sends three different unit systems.
164. "What's a data model and why do we need one?" A data model defines what information exists for every product, in what format, from what source. Without it, everyone invents their own structure and nothing connects.
165. "How do we get suppliers to send data digitally?" Don't build a portal. Start with: standardised templates, clear field definitions, and one human who follows up consistently. Technology comes after behaviour change.
166. "What's the difference between a PLM, PIM, and ERP?" PLM tracks product development. PIM stores product marketing data. ERP handles transactions. For DPP you likely need all three to talk to each other. Most brands have gaps.
167. "How do we know if our supply chain data is 'good enough'?" Measure four things: completeness (% of fields filled), consistency (same format everywhere), freshness (how recently updated), and accuracy (verified against source).
168. "What does 'data interoperability' mean?" It means your systems can share data without manual translation. If someone has to re-type data from one system into another, you don't have interoperability.
169. "Who should own supply chain data quality?" One named person. Not a committee, not "the operations team," not "suppliers." One person with the mandate to reject bad data and the relationships to get it fixed.
170. "How long does supply chain data unification actually take?" For a brand with 10-15 suppliers: 3-6 months for the first pass. It's never truly "done" because suppliers change, products change, and regulations change.
171. "What's the minimum viable data infrastructure for DPP?" A structured product database, a supplier data ingestion pipeline with validation, a GS1 identifier registry, and an API connection to the EU registry. Four systems that must connect.

### Pain D - Can't Ship AI Features Fast Enough (9)

172. "What does 'AI-ready data' mean?" Three things: complete (every product has all attributes), consistent (same format across suppliers), and connected (customer, inventory, and supplier data can talk to each other).
173. "Which AI feature should we build first?" The one where your data is most complete. Not the most exciting. Not what competitors are doing. The one where you have enough clean data to get a result that's better than random.
174. "How do we know if our data is ready for AI?" Run this check: pick your top 100 products. Count how many have 100% of attributes filled. If that number is below 80, fix data before starting AI.
175. "What's the difference between AI, ML, and 'agentic' in fashion?" AI is the category. ML is prediction from data (demand forecasting, recommendations). Agentic means systems that take action without human approval (auto-reorder, dynamic pricing).
176. "How much should an AI feature cost to build?" If your data is clean: EUR 20-50K for a first feature. If your data isn't clean: EUR 20-50K for the feature + EUR 50-100K to fix the data first. Most quotes only include the first number.
177. "Why did our AI project fail?" Almost always: data quality. Check: was the training data complete? Was it recent? Was it representative? Was the model monitored after launch? Was there an owner? Usually 3 of these are "no."
178. "Should we use a vendor or build AI in-house?" Vendor if: you want speed and the use case is standard (recommendations, forecasting). In-house if: you have proprietary data advantages and want the model to be your moat. Both need clean data.
179. "What's model drift and why should I care?" Your AI model was trained on historical data. The world changes. If nobody retrains the model, it gets less accurate over time. Most fashion AI models drift within 3-6 months without monitoring.
180. "How do I talk to AI vendors without getting sold something I don't need?" Three rules: 1) Ask what data they need from you. 2) Ask what happens when the model is wrong. 3) Ask who owns the model in production after setup.
