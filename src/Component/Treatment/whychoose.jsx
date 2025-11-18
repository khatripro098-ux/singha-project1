import { div, h1 } from "framer-motion/client";
import useScrollAnimation from './treatani'

function WhyChoose() {

    
    useScrollAnimation()

  return (

    
      <section className="why-us">
        <div className="container">
          <div className="section-title animate-on-scroll text-center">
            <h2>Why Choose Gods Life Health Care</h2>
            <p>We are committed to providing the highest quality healthcare experience</p>
          </div>

          <div className="features stagger-animation">
            <div className="feature">
              <i className="fas fa-user-md"></i>
              <h3>World-Class Doctors</h3>
              <p>Our network includes internationally trained and experienced medical professionals.</p>
            </div>

            <div className="feature">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Affordable Pricing</h3>
              <p>High-quality treatments at 30-70% lower costs compared to Western countries.</p>
            </div>

            <div className="feature">
              <i className="fas fa-notes-medical"></i>
              <h3>Comprehensive Care</h3>
              <p>End-to-end assistance from consultation to recovery and follow-up care.</p>
            </div>

            <div className="feature">
              <i className="fas fa-globe"></i>
              <h3>Global Destinations</h3>
              <p>Access to premium healthcare facilities in world-renowned medical tourism destinations.</p>
            </div>
          </div>
        </div>
      </section>
   
  );
}

export default WhyChoose;
