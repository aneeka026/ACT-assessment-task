import React from 'react'

const Home = () => {
  const scrollToSolutions = () => {
    const element = document.querySelector("#solutions");
    if(element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <section id='home'className="min-vh-100 d-flex align-items-center py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-4 fw-bold text-primary mb-4">AVYUKT CORE TECHNOLOGIES</h1>
            <h2 className="h1 fw-semibold text-dark mb-3">Welcome to ACT </h2>
            <p className="lead text-muted mb-5">Smart Software for Smarter Businesses</p>
          </div>
          <div>
           <button className="btn btn-primary btn-lg px-4 py-2 shadow hover-button"
            onClick={scrollToSolutions}>
             Discover Our Solutions
           </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
