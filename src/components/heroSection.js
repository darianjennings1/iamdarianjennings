import React from 'react';
import '../App.css';
import { Button } from './button';
import './heroSection.css';

function heroSection() {
  return (
    <div className='hero-container'>
      <h1>WELCOME</h1>
      <br></br><br></br>
      <p>This is my personal website that I develop in my free time!<br></br>Here 
      you can learn a little bit about me and my various work experience/projects.</p>
    </div>
  );
}

export default heroSection;