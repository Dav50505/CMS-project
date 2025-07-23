import heroIMG from './assets/icon.jpg'
import { IoMdArrowBack } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Particles from "react-tsparticles";
import React from 'react';

const Hero = () => {
  return (
    <section className="section" style={{textAlign: 'center', padding: '60px 0 40px'}}>
      <h1 style={{fontSize: '3rem', fontWeight: 800, marginBottom: 16, letterSpacing: '-1px', color: '#4158D0'}}>
        Welcome to Our Professional CMS
      </h1>
      <p style={{fontSize: '1.35rem', color: '#444', marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
        Build, manage, and grow your content with ease. Experience a modern, animated, and beautiful interface.
      </p>
      <button className="btn" style={{fontWeight: 600, fontSize: '1.1rem'}}>Get Started</button>
    </section>
  );
};

export default Hero
