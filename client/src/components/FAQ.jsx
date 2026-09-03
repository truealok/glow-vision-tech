import React, { useState } from 'react';
import './FAQ.css';
import { faqs } from '../data/faqs';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="gv-section gv-faq">
      <div className="gv-container">
        <span className="gv-badge">FAQ</span>
        <h2 className="gv-section-title">Frequently Asked Questions</h2>
        <p className="gv-section-subtitle">
          Quick answers to common questions about partnering with Glow Vision Tech.
        </p>

        <div className="gv-faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`gv-faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <button className="gv-faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <FiChevronDown
                  size={20}
                  className={`gv-faq-chevron ${openIndex === index ? 'rotated' : ''}`}
                />
              </button>
              <div className="gv-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
