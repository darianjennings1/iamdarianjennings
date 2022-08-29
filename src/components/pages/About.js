import React from 'react';
import '../../App.css';
import Scroll2Top from '../scroll';
import './About.css'


function About() {
  return (
  <>
    <Scroll2Top></Scroll2Top>
    <h1 className='about'>ABOUT</h1>
    <div className='about-wrapper'>
        <div className='about-container'>
          <h2>Education: </h2>
            <br></br>
            <p1>B.S. Computer Engineering</p1> 
            <p>I earned my B.S. in Computer Engineering from St. Mary's University in San Antonio, Texas in 
               May of 2022. Here I was able to accepted and enrolled in the dual-degree program which allowed qualified
               students to take courses that counted towards a graduate degree. A few clubs that I was a
               part of include: NIH National Institute of General Medical Sciences (NIGMS) - MARC U* STAR 
               Program, Ready SET Research!, The National Society of Leadership and Success (NSLS), and the
               Society of Mathmeticians.
                </p> 
            <br></br>
            <p1>Ph.D. Computer Science</p1> 
            <p>Currently, I am enrolled in the Department of Computer Information Science and Technology at
              The University of Florida towards a Computer Science Ph.D. I am wokring under the supervision of
              Dr. Juan Gilbert in the Human-Experience Research (HXR) Lab.
            </p>
          <br></br><br></br>
          <h3>Hobbies:</h3>
            <p>In my free time I enjoy various activities this includes sports such as basketball,
              soccer, tennis, and ping-pong, cooking new meals, coding personal projects of various degrees,
              and also playing video games with friends.
            </p>
          <br></br><br></br>
          <h4>Inspiration:</h4>
            <p>This website was originally partially developed as a course project for EG6328 - Software Engineering - at
              St. Mary's University. Since then I have completely revamped the content to a functional personal site.
            </p>
          <br></br><br></br><br></br>
        </div>
    </div>
  </>
  );
}
export default About;