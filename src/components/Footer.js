import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './Footer.css';


export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for visiting, please connect with me on one of the socials below!
        </p>
      </section>
      
      <section className='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a href="https://instagram.com/darianjennings" target="_blank" class="social-icon-link instagram">
              <i class='fab fa-instagram'> </i> </a>
            <a href="https://twitter.com/science__dj" target="_blank" class="social-icon-link twitter">
              <i class='fab fa-twitter'> </i> </a>
            <a href="www.linkedin.com/in/darianjennings" target="_blank" class="social-icon-link linkedin">
              <i class='fab fa-linkedin'> </i> </a>
            <a href="https://github.com/darianjennings1" target="_blank" class="social-icon-link github">
              <i class='fab fa-github'> </i> </a>
          </div>
        </div>
      </section>
    </div>
  );
}