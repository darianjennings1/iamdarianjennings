import React from 'react';
import '../../App.css';
//  import { Scroll2Middle} from '../scroll';
import Scroll2Top from '../scroll'
import './Services.css'

function Services() {
  return (
  <>
    <Scroll2Top></Scroll2Top>
    <h1 className='services'>EXPERIENCE</h1>
    <div className='services-wrapper'>
        <div className='services-container'>
          <h2>Research: <i class="fas fa-search-plus"></i></h2>
          <br></br>
            <p1>Drone Data Communication System (DDCS)</p1>
            <p>•	Designed and implemented a drone data communication system for St. Mary’s Unmanned 
              Aerial Systems Lab. Limited details can be released regarding this project at this time. 
              A research paper has been written up and submitted to the International Telemetry 
              Conference (ITC) for 2022. Utilized software includes but is not limited to: 
              Linux OS, Qt Creator/Designer, Redis, Python, MATLAB, NAVIO, and Raspberry Pi OS.
            </p>
            <br></br>
            <p1>Vision and Artificial Intelligence Lab (VAIL)</p1>
            <p>• During the academic semesters of my senior year of undergrad. I collaborated with 
              Dr. Amanda Fernandez’s research lab at UTSA, with the goal of optimizing deep learning 
              neural networks for image classification with natural adversarial datasets.<br></br>
              • Conducted and completed a literature survey for state-of-the-art (SOTA) adversarial 
              image classification models and their associated methodologies.
            </p>
            <br></br>
            <p1>Biomedical Engineering: Simulations, Imaging, and Modeling (BME-SIM)</p1>
            <p>• Goal: utilize functional near infrared spectroscopy (fNIRS - brain imaging device) to 
              model sensory integration during physical and cognitive tasks.<br></br>
              •	Designed and developed an effective and efficient virtual reality (VR) application 
              software to monitor subject’s visual pursuit performance during testing, utilizing Unity 
              and Tobii eye tracking software. <br></br>
              •	Intraclass correlation coefficient (ICC) model (3, 1) was used to examine the test-retest 
              reliability of the VR application; the excellent results led to the application’s use in 
              the balance control and attention study. 
              <a href="https://www.nsf.gov/awardsearch/
              showAward?AWD_ID=1950507">NSF REU Abstract Award</a>
            </p>
            <br></br>
            <p1>Software Assurance and Security in Emerging Technologies</p1>
            <p>•	Goal: Develop a testing tool with reinforcement learning (Q-learning) to crawl (walk-through)
              mobile-applications and detect & document crashes or bugs that occur. This implementation 
              was fully automated using emulators and the Appium automation tool, no manual user interaction 
              was required to crawl the applications.<br></br>
              • Successfully crawled mobile-applications from the open-source F-droid repository. Crashes 
              were documented into a SQL database and exported to text files; documentation included 
              specific events accessed/triggered that led to the bug/crash. With this an effective 
              mobile-application testing tool was designed, developed, and tested; future work will look 
              at expanding this testing tool’s application to an increased sample size.
              <a href="https://www.nsf.gov/awardsearch/
              showAward?AWD_ID=1757773">NSF REU Abstract Award</a>
            </p>
            <br></br>
            <p1>Algorithm development for hairline bone fractures utilizing MATLAB</p1>
            <p>• Applied introductory research. <br></br>
               • Utilized MATLAB image processing to process images and extract information such as 
               specific line orientation as well as color disparities. Project goal was met, develop 
               an edge detection algorithm to optimize and improve line detection capabilities and 
               efficiency in existing algorithms for hairline fractures in carpal bones. 
            </p>
        </div>
        <br></br><br></br>
        <div className='services-container'>
          <h3>Conferences: <i class="fas fa-building"></i> </h3>
          <br></br>
            <p1>International Telemetry Conference (ITC 2022)</p1>
            <p>•	Presenting research paper from senior capstone project, 
              lone capstone project (from St. Mary’s) to be submitted and accepted to a national
              conference.
            </p>
            <br></br>
            <p1>TAPIA Conference (2022)</p1>
            <p>•	Premier venue to acknowledge, promote and celebrate diversity in computing.
            </p>
            <br></br>
            <p1>Annual Biomedical Research Confernce for Minority Students (ABRCMS 2021) </p1>
            <p>•	Virual; e-Poster presentation in the Computational and Systems Biology research group.
            </p>
            <br></br>
            <p1>Biomedical Engineering Society (BMES 2021) Annual Conference</p1>
            <p>•	Virual; e-Poster presentation in the Computational and Systems Biology research group.
            </p>
            <br></br>
            <p1>St. Mary's University Summer Research Symposium (2021)</p1>
            <p>•	Virual; e-Poster presentation in the Computational and Systems Biology research group.
            </p>
            <br></br>
            <p1>East Carolina University (ECU 2021) Research Symposium</p1>
            <p>•	Research symposium held at ECU for various REU programs that took place during the 
              summer; presented my research to East Carolina University faculty of various 
              departments (engineering, kinesiology, physical therapy, neuroscience).
            </p>
            <br></br>
            <p1>Annual Biomedical Research Confernce for Minority Students (ABRCMS 2020) </p1>
            <p>•	Often referred to as ABRCMS, this conference provides networking opportunities 
              with graduate schools across the United States. This conference also provides undergraduates 
              the opportunity to communicate their research in a professional environment.
            </p>
            <p>•	Received presentation award for my research in the computational and systems biology 
              group. <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1757773">Link to award</a>
            </p>
            <br></br>
            <p1>University of North Texas (UNT 2020) Research Symposium</p1>
            <p>•	Research symposium for students awarded to the UNT Software Testing REU program.
            </p>
            <br></br>
            <p1>St. Mary's University Spring Research Symposium (2020)</p1>
            <p>•	Research symposium for undergraduate students conducting research during the 
              spring 2020 academic semester.
            </p>
        </div>
        <br></br><br></br>
        <div className='services-container'>
          <h4>Scholarships and Awards: <i class="fas fa-award"></i> </h4>
          <br></br>
          <p1>McNair Doctoral Fellowship</p1>
            <p>•	UF provides a limited number of research assistantships for McNair Scholars who are 
              entering a Ph.D. program at this institution. This assistantship program provides a 
              stipend, in-state tuition, fees, and health insurance for up to 4 years for a Ph.D. 
              or up to 3 years for an MFA degree.<br></br>
              •	As part of the program, each student will be 
              appointed to a research assistant and expected to conduct research under faculty 
              supervision.</p><br></br>
          <p1>NIG-NIGMS MARC U* STAR Trainee</p1>
            <p>•	The Maximizing Access to Research Careers (MARC) Undergraduate Student Training in 
              Academic Research (U*STAR) is a training program funded by the National Institutes of 
              Health (NIH). This training program is for underrepresented students with an earnest 
              desire to attend graduate school and obtain a Ph.D.<br></br>
              •	MARC U*STAR provides students majoring in STEM or Behavioral Science disciplines 
              opportunities to complete biomedical research training and work alongside faculty 
              mentors in the biomedical sciences.<br></br>
              •	Undergraduate students participating in MARC U*STAR are provided with academic, 
              financial and research support to become competitive applicants for Ph.D. programs. 
              </p><br></br>
          <p1>McNair Scholars Program</p1>
            <p>•	The Ronald E. McNair Post-Baccalaureate Achievement Program is designed to prepare 
              undergraduate students for doctoral studies through involvement in research and other 
              scholarly activities.</p>
            <br></br>
        </div>
        <br></br><br></br>
        <div className='services-container'>
          <h5>Non-Academic Work:  <i class="fas fa-house-user"></i></h5>
          <br></br>
            <p1>Glass Dawg Driver</p1>
            <p>•	One of few qualified drivers for a private windshield repair company located in San 
              Antonio, TX.<br></br>
               •	Plan and coordinate trips across the city to pickup and deliver consumer vehicles.<br></br>
               •	Consumers included personal customers, Enterprise, as well as various car dealerships
              throughout the city.
            </p>
            <br></br>
            <p1>CAVA / Chipotle / McDonald's Trainer</p1>
            <p>•	Maintain clean and sanitized work area and equipment.<br></br>
               •	Master all recipes - weighh ingredients, create food items, and box them appropriately
               for food output.<br></br>
               •	Take and record temperatures of food and warming & cooling areas.<br></br>
               •	Operate and maintain accurate cash registers for 8+ hour shifts.</p>
            <br></br>
            <p1>Sports Official</p1>
            <p>•	Includes time-management and positive collaboration with students, parents, and 
              coaches to ensure safety of all participants.<br></br>
              •	Communication skills are heavily required as the official has the authority on the 
              field, this often includes deescalating a wide variety of situations.<br></br>
              •	Managing official sports games that range in level from elementary to 
              high school to premier clubs in the following sports: baseball, soccer, and basketball.</p>
        </div>
    </div>
  </>
  );
}
export default Services;