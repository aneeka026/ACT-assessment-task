import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer support after deployment?",
      answer: "Yes, we provide 30 days of free support after deployment. This includes bug fixes, minor adjustments, and technical assistance to ensure your project runs smoothly."
    },
    {
      question: "Can you handle big projects?",
      answer: "Absolutely! We specialize in handling large-scale projects, especially with our Elite plan. Our team has experience in enterprise-level applications and complex system integrations."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, PHP, and various databases. We choose the best technology stack based on your project requirements."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity. Basic projects typically take 2-4 weeks, Standard projects 4-8 weeks, and Elite projects can take 8-16 weeks or more depending on requirements."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we can help you with hosting solutions and can recommend the best hosting providers based on your needs. We also assist with deployment and server setup."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Frequently Asked Questions</h2>
          <p className="lead text-muted">
            Get answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-3 border rounded shadow-sm" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                <div className="accordion-body text-muted">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
