import Reveal from '../components/Reveal';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section" style={{ paddingTop: '30px' }}>
      <Reveal className="s-head center" animation="reveal-up">
        <span className="s-tag">Client Feedback</span>
        <h2 className="s-title">Trusted by <em>Healthcare Professionals</em></h2>
      </Reveal>
      <Reveal className="section-visual" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1400&q=85&auto=format&fit=crop"
          alt="Healthcare professionals sharing feedback and collaboration"
          loading="lazy"
        />
      </Reveal>

      <div className="testi-grid">
        <Reveal className="testi-card" animation="reveal-up">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            <span className="feedback-full">
              Excellent service and always on time. We've been ordering surgical consumables from them for years. Quality is never compromised.
            </span>
            <span className="feedback-mobile">
              Excellent service and always on time. Quality is never compromised.
            </span>
          </blockquote>
          <div className="testi-author">
            <div className="tav">R</div>
            <div className="tavi"><strong>Dr. Ramesh K.</strong><small>General Surgeon, Erode</small></div>
          </div>
        </Reveal>
        <Reveal className="testi-card" animation="reveal-up">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            <span className="feedback-full">
              Best wholesale prices in the region. Billing is always GST-compliant and the team responds fast on WhatsApp. Highly recommended.
            </span>
            <span className="feedback-mobile">
              Best wholesale prices with GST-compliant billing. Quick WhatsApp support.
            </span>
          </blockquote>
          <div className="testi-author">
            <div className="tav amber">P</div>
            <div className="tavi"><strong>Priya Medical Store</strong><small>Retail Pharmacy, Perundurai</small></div>
          </div>
        </Reveal>
        <Reveal className="testi-card" animation="reveal-up" delay="0.1s">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            <span className="feedback-full">
              We procure all our IV fluids and OT supplies from here. Cold chain is maintained perfectly. A very reliable long-term partner.
            </span>
            <span className="feedback-mobile">
              Cold chain maintained perfectly. Reliable long-term supply.
            </span>
          </blockquote>
          <div className="testi-author">
            <div className="tav green">S</div>
            <div className="tavi"><strong>Sri Sakthi Nursing Home</strong><small>Hospital, Bhavani</small></div>
          </div>
        </Reveal>
        <Reveal className="testi-card" animation="reveal-up" delay="0.2s">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            <span className="feedback-full">
              Highly impressed with the genuine stock and prompt delivery. They help us maintain our pharmacy inventory without any Hassle.
            </span>
            <span className="feedback-mobile">
              Genuine stock with prompt delivery. Hassle-free inventory support.
            </span>
          </blockquote>
          <div className="testi-author">
            <div className="tav">B</div>
            <div className="tavi"><strong>Dr. Balaji R.</strong><small>Orthopedic Surgeon, Perundurai</small></div>
          </div>
        </Reveal>
        <Reveal className="testi-card" animation="reveal-up" delay="0.3s">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            <span className="feedback-full">
              Top quality surgical instruments and excellent customer support. Our hospital relies heavily on their timely deliveries.
            </span>
            <span className="feedback-mobile">
              Top quality surgical instruments. Timely deliveries and support.
            </span>
          </blockquote>
          <div className="testi-author">
            <div className="tav">K</div>
            <div className="tavi"><strong>Karthik Clinic</strong><small>Multi-Speciality, Salem</small></div>
          </div>
        </Reveal>
        <Reveal className="testi-card" animation="reveal-up" delay="0.4s">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            <span className="feedback-full">
              Consistently high standards for PPE kits and surgical masks. Highly recommended for any medical institution looking for bulk orders.
            </span>
            <span className="feedback-mobile">
              High standards for PPE kits. Perfect for bulk medical orders.
            </span>
          </blockquote>
          <div className="testi-author">
            <div className="tav">N</div>
            <div className="tavi"><strong>Dr. Naveen G.</strong><small>Chief Medical Officer, Coimbatore</small></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
