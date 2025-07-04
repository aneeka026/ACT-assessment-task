import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Contact Us</h2>
          <p className="lead text-muted mb-3">
            Ready to start your project? Get in touch with us today!
          </p>
          <p className="fw-semibold text-primary">
            Or email us directly at: <a href="mailto:hello@act.com" className="text-decoration-underline">hello@act.com</a>
          </p>
        </div>

        <div className="bg-white rounded shadow p-4 p-md-5 border border-light">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-medium">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-medium">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-medium">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your project or ask us a question..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg shadow">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-5 pt-4 border-top">
          <p className="text-muted">
            © 2025 ACT. All rights reserved. | Smart Software for Smarter Businesses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
