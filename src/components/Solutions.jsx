import React from 'react'

const Solutions = () => {
    const solutions = [
        {
          title: "Custom Software Development",
          description: "Tailored software solutions designed specifically for your business needs, built with cutting-edge technologies and best practices.",
          icon: "💻"
        },
        {
          title: "eCommerce Solutions",
          description: "Complete eCommerce platforms that drive sales and enhance customer experience with secure payment integration and inventory management.",
          icon: "🛒"
        },
        {
          title: "Online Store Setup (Basic to Elite)",
          description: "From simple online stores to enterprise-level eCommerce solutions, we help you establish your digital presence with style.",
          icon: "🏪"
        }
      ];

  return (
    <section id='solutions' className='py-5 bg-white'>
        <div className='container'>
            <div className='text-center mb-5'>
               <h2 className="display-5 fw-bold text-dark mb-3">Our Solutions</h2>
               <p className="lead text-muted mx-auto" style={{ maxWidth: '720px' }}>We provide comprehensive technology solutions to help your business grow and succeed in the digital world.</p>
            </div>

           <div className='row row-cols-1 row-cols-md-3 g-4'>
            {solutions.map((solution, index) => (
             <div key={index} className="col">
                <div className="card h-100 text-center shadow border-0 solution-card">
                <div className="card-body">
                  <div className="display-4 mb-3">{solution.icon}</div>
                  <h5 className="card-title">{solution.title}</h5>
                  <p className="card-text">{solution.description}</p>
                </div>
                </div>
             </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Solutions;
