export default function FAQ() {
  const faqs = [
    {
      q: "What are the technical requirements for EU Digital Product Passport compliance?",
      a: "A DPP-compliant system needs: a data carrier on each product (QR code, NFC, or RFID tag), a GS1 Digital Link URI structure, supply chain event data in EPCIS 2.0 format, connection to the EU DPP registry, and a product lifecycle data model covering materials, manufacturing, and end-of-life information.",
    },
    {
      q: "How should fashion brands prepare for DPP by 2027?",
      a: "Start with a supply chain data audit to understand where your information lives today. Then implement GS1 product identification (GTIN), build data carrier infrastructure (NFC or QR on products), design your product data model for lifecycle traceability, and plan your EU registry integration. The registry launches mid-2026, so technical foundations need to be in place before then.",
    },
    {
      q: "What is a fractional CTO for FashionTech?",
      a: "A fractional CTO is a senior technical leader who works part-time with your startup to make architecture decisions, build infrastructure, and mentor your team. You get experienced technical leadership without a full-time salary, equity grants, or 12-month contracts. I work alongside your team on a flexible basis, focused on your specific challenges around DPP compliance, AI infrastructure, and supply chain data systems.",
    },
    {
      q: "Do I need a fashion-specific CTO for DPP compliance?",
      a: "You need someone who has built compliance-critical data systems and IoT device infrastructure. DPP is fundamentally a data pipeline and device architecture challenge, identical to the regulated systems I have built across industries processing billions of events. The domain labels differ; the engineering is the same. What matters is experience with regulatory data pipelines, device-to-cloud architecture, and production systems where accuracy is non-negotiable.",
    },
    {
      q: "What does working with a fractional CTO cost compared to a full-time hire?",
      a: "A full-time CTO costs EUR 200-300K in salary plus equity, with a 3-month hiring process and 3-month ramp-up. A fractional CTO engagement starts immediately, costs a fraction of that, requires no equity, and you can cancel anytime. You pay for decisions and delivery, not a permanent seat at the leadership table.",
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <h2 className="section__title">
          Common questions about DPP compliance and fractional CTO services.
        </h2>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <details className="faq__item reveal" key={i}>
              <summary className="faq__question">{faq.q}</summary>
              <p className="faq__answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
