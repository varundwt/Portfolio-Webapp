import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="profile">
            <img className="profile" src="./assets/images/profile.png" alt="react" />
          </div>
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="react" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="js" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="html" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/tailwind.png" alt="tailwind" />
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Hero;
