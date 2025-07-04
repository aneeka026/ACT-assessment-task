import React from 'react'; 

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹4,999",
      period: "/month",
      features: [
        "Up to 5 pages website",
        "Basic SEO optimization",
        "Mobile responsive design",
        "Contact form integration",
        "2 rounds of revisions",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "₹9,999",
      period: "/month",
      features: [
        "Up to 15 pages website",
        "Advanced SEO optimization",
        "Custom design & branding",
        "eCommerce integration",
        "Social media integration",
        "Analytics setup",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "₹19,999",
      period: "/month",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced eCommerce features",
        "Third-party integrations",
        "Performance optimization",
        "Dedicated project manager",
        "24/7 premium support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Pricing Plans</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '720px' }}>
            Choose the perfect plan for your business needs. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {plans.map((plan, index) => (
            <div className="col" key={index}>
            <div className="card h-100 text-center shadow pricing-card position-relative">

                <div className="card-body py-4">
                  <h3 className="h4 fw-bold text-dark mb-3">{plan.name}</h3>
                  <div className="d-flex justify-content-center align-items-end mb-4">
                    <span className="fs-3 fw-bold text-dark">{plan.price}</span>
                    <span className="text-muted ms-2">{plan.period}</span>
                  </div>

                  <ul className="list-unstyled text-start px-3 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-2 d-flex align-items-start">
                        <span className="text-success me-2">&#10003;</span>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="btn w-100 btn-outline-secondary pricing-btn">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
