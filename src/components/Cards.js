import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


export default function Cards() {
  return (
    <div className='cards'>
      <h1>AFFILIATIONS: </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png'
              text='University of Florida (UF)'
              label='Computer Science Ph.D.'
              path='/Services'
            />
            <CardItem
              src='https://files.nc.gov/dncr-moh/Ron-McNair%20web_0.png'
              text='National Fellowship'
              label='Ronald E. McNair'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.stmarytx.edu/wp-content/themes/stmu-parent/images/header-logo.svg'
              text="St. Mary's University Alumni, C/O 2022"
              label='B.S. Computer Engineering'
              path='/Services'
            />
            <CardItem
              src='https://cdn.stmarytx.edu/wp-content/uploads/2020/09/Drone-lab-rendering-1.jpg'
              text="Unmanned Aerial Systems (UAS) Lab - St. Mary's University"
              label='Drone Lab'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='http://www.utsa.edu/today/images/graphics/newrr.jpg'
              text="Vision and Artificial Intelligence Lab - University of Texas at San Antonio"
              label='VAIL'
              path='/Services'
            />
            <CardItem
              src='https://identityguide.unt.edu/sites/default/files/20brandeddesktopbackground.jpg'
              text='Software Assurance and Security in Emerging Technologies'
              label='Software Testing - REU Site'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.wnct.com/wp-content/uploads/sites/99/2018/05/NEW-ECU-LOGO_1527192530205_43378313_ver1.0.jpg?w=900'
              text="Biomedical Engineering: Simulations, Imaging, and Modeling (BME-SIM)
                    - East Carolina University"
              label='Sensorimotor Testing and Rehabilitation (STAR) Lab'
              path='/Services'
            />
            <CardItem
              src='https://pbs.twimg.com/profile_images/1305584241955102720/R2ZCd9Id_400x400.jpg'
              text="MARC U* STAR Alumni - St. Mary's University"
              label='Undergraduate Research Trainee'
              path='/Services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
