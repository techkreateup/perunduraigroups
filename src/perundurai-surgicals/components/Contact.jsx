import { useState } from 'react';
import Reveal from '../components/Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const nameMap = {
      'f-name': 'name',
      'f-phone': 'phone',
      'f-email': 'email',
      'f-cat': 'category',
      'f-msg': 'message'
    };
    setFormData(prev => ({ ...prev, [nameMap[id]]: value }));
  };

  const sendWA = () => {
    const { name, phone, category, message } = formData;
    const text = `Hello Perundurai Surgicals!%0A%0AName: ${encodeURIComponent(name || 'Not provided')}%0APhone: ${encodeURIComponent(phone || 'Not provided')}%0ACategory: ${encodeURIComponent(category || 'Not specified')}%0AMessage: ${encodeURIComponent(message || 'Not specified')}`;
    window.open('https://wa.me/919865271371?text=' + text, '_blank');
  };

  const sendEmail = () => {
    const { name, phone, category, message } = formData;
    const subject = encodeURIComponent('Product Enquiry – ' + category);
    const body = encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\nCategory: ' + category + '\nMessage: ' + message);
    window.location.href = 'mailto:perunduraisurgicals@gmail.com?subject=' + subject + '&body=' + body;
  };


  return (
    <section id="contact" className="section alt" style={{ paddingTop: '30px' }}>
      <Reveal className="s-head center" animation="reveal-up">
        <span className="s-tag">Get In Touch</span>
        <h2 className="s-title">Enquire or <em>Place an Order</em></h2>
        <p className="s-sub" style={{ margin: '0 auto' }}>Reach us for product enquiries, bulk orders, or to schedule a visit. We respond within 2 business hours.</p>
      </Reveal>
      <Reveal className="section-visual contact" animation="reveal-up" delay="0.05s">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=85&auto=format&fit=crop"
          alt="Medical customer support and consultation desk"
          loading="lazy"
        />
      </Reveal>

      <Reveal id="contact-form" className="contact-wrap" animation="reveal-up">
        <div className="contact-left">
      {/* Branch Office Card */}
      <Reveal animation="reveal-up" delay="0.1s" style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
        <div style={{
          background: '#fff',
          border: '1.5px solid #e8ecf0',
          borderRadius: '20px',
          padding: '28px 28px 20px',
          maxWidth: '360px',
          width: '100%',
          position: 'relative',
          marginBottom: '32px',
          boxShadow: '0 4px 24px rgba(4,44,83,0.07)'
        }}>



          <div style={{ marginBottom: '16px', paddingTop: '8px' }}>
            <h5 style={{ fontSize: '20px', fontWeight: 700, color: '#042C53', margin: '0 0 4px' }}>K.S. Sathishkumar</h5>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#e74c3c', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Branch Office — Tiruppur</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Phone */}
            <a href="tel:+919344044462" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fdecea', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <span style={{ fontSize: '17px', fontWeight: 700, color: '#042C53' }}>93440 44462</span>
            </a>

            {/* Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fdecea', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p style={{ fontSize: '14px', color: '#4a6080', lineHeight: '1.6', margin: 0 }}>
                3/931/B6, M.P.S. Complex, Manickapuram,<br />
                Palladam, TIRUPPUR – 641 664.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

          <h2>Let's work together</h2>
          <p>We supply to hospitals, clinics, nursing homes, and retail pharmacies. Reach us on any channel — we're here to help.</p>
          <div className="contact-facts">
            <div className="cf">
              <div className="cf-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
              <div>
                <div className="cf-lbl">Proprietor</div>
                <div className="cf-val">K. Ragavendran B.E.</div>
              </div>
            </div>
            <Reveal className="cf" animation="reveal-up" threshold={0.1}>
              <div className="cf-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg></div>
              <div>
                <div className="cf-lbl">Direct Phone</div>
                <div className="cf-val"><a href="tel:+919865271371">+91 98652 71371</a></div>
              </div>
            </Reveal>
            <Reveal className="cf" animation="reveal-up" delay="0.1s" threshold={0.1}>
              <div className="cf-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div>
                <div className="cf-lbl">Visit Us</div>
                <div className="cf-val">88/10, Thendral Nagar, Chenniyavalasu Road, Perundurai - 638052</div>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal className="contact-form-wrap" animation="reveal-right" delay="0.4s">
          <h3>Send an Enquiry</h3>
          <div className="form-row">
            <div className="fg"><label>Your Name</label><input type="text" placeholder="Full name" id="f-name" value={formData.name} onChange={handleChange} /></div>
            <div className="fg"><label>Phone</label><input type="tel" placeholder="+91 XXXXX XXXXX" id="f-phone" value={formData.phone} onChange={handleChange} /></div>
          </div>
          <div className="fg"><label>Email (optional)</label><input type="email" placeholder="you@email.com" id="f-email" value={formData.email} onChange={handleChange} /></div>
          <div className="fg">
            <label>Product Category</label>
            <select id="f-cat" value={formData.category} onChange={handleChange}>
              <option value="">Select a category...</option>
              <option>Surgical Instruments</option>
              <option>Wound Care</option>
              <option>IV & Infusion</option>
              <option>Diagnostic Supplies</option>
              <option>PPE & Protection</option>
              <option>Pharmaceutical</option>
              <option>Multiple / Mixed</option>
            </select>
          </div>
          <div className="fg"><label>Products Needed & Quantity</label><textarea placeholder="e.g. 500 pairs nitrile gloves (M), 100 IV sets..." id="f-msg" value={formData.message} onChange={handleChange}></textarea></div>
          <div className="form-btns">
            <button className="btn-wa" onClick={sendWA}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send via WhatsApp
            </button>
            <button className="btn-mail" onClick={sendEmail}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </button>
          </div>
        </Reveal>
      </Reveal>

    </section>
  );
};

export default Contact;
