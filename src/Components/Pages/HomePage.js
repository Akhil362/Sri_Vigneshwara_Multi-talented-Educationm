import React from "react";
import { Link } from "react-router-dom";
import '../HomePage.css';
import  logo from '../assets/logo.jpg';
import liveImg from "../assets/LiveProject.jpg"; 
import trainerImg from "../assets/Traning.jpg";
import guidanceImg from "../assets/Guidance.avif";


export default function HomePage() {
  return (
    <div className="page">

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Sri Vigneshwara 
            <br />Multi-Talented Education</h1>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         
        </ul>

        <div className="contact-box">
          <p>Mobile : 8328025905</p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h4>Technical Training</h4>
          <h1>
            Practical Oriented <br />
            Project Based Training
          </h1>
          <p>
            Industry-focused training programs designed to build real-world
            skills with hands-on projects and expert mentorship.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>

        <div className="hero-image">

  <div className="card">
    <img src={liveImg} alt="Live Projects" />
    <h3>Live Projects</h3>
  </div>

  <div className="card">
    <img src={trainerImg} alt="Expert Trainers" />
    <h3>Expert Trainers</h3>
  </div>

  <div className="card">
    <img src={guidanceImg} alt="100% Guidance" />
    <h3>100% Guidance</h3>
  </div>

</div>

      </section>
    </div>
  );
}
