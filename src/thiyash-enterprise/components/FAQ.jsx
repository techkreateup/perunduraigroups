import { useState } from 'react';
import Reveal from '../components/Reveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "Do you supply to individual offices?", a: "Yes — we supply to individual retail offices as well as bulk institutional buyers such as corporate parks and nursing homes. Minimum order quantities may apply." },
    { q: "What is the minimum order value?", a: "Our minimum order value is ₹2,000 for retail clients. For large corporate or institutional buyers, the minimum is ₹5,000." },
    { q: "Do you offer credit terms?", a: "Yes, we offer 15–30 day credit terms for established institutional clients. New clients start on cash/advance basis." },
    { q: "Are all products genuine and properly stored?", a: "Absolutely. All cleaning products are stored in our secure warehouse, following proper chemical handling guidelines." },
    { q: "Do you deliver outside Perundurai?", a: "Yes. We deliver across Erode district and can arrange transport to other parts of Tamil Nadu for bulk orders." }
  ];

  return (
    <section id="faq" className="section alt" style={{ paddingTop: '15px' }}>
      <Reveal className="s-head center" animation="reveal-up">
        <span className="s-tag">FAQ</span>
        <h2 className="s-title">Frequently Asked <em>Questions</em></h2>
      </Reveal>
      <Reveal className="section-visual" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85&auto=format&fit=crop"
          alt="Cleaning FAQ frequently asked questions"
          loading="lazy"
        />
      </Reveal>
      <Reveal className="faq-wrap" animation="reveal-up">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div className="faq-item visible" style={{ transitionDelay: `${idx * 0.1}s` }} key={idx}>
              <button className={`faq-q ${isOpen ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
                {faq.q}
                <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className={`faq-a ${isOpen ? 'open' : ''}`}>{faq.a}</div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
};

export default FAQ;
