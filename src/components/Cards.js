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
              src='cardImages/gator.png'
              text='University of Florida (UF)'
              label='Computer Science Ph.D.'
              path='/Services'
            />
            <CardItem
              src='cardImages/mcnair.jpeg'
              text='National Fellowship'
              label='Ronald E. McNair'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='cardImages/stmu.png'
              text="St. Mary's University Alumni, C/O 2022"
              label='B.S. Computer Engineering'
              path='/Services'
            />
            <CardItem
              src='cardImages/dronelab.jpeg'
              text="Unmanned Aerial Systems (UAS) Lab - St. Mary's University"
              label='Drone Lab'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='cardImages/utsa.jpeg'
              text="Vision and Artificial Intelligence Lab - University of Texas at San Antonio"
              label='VAIL'
              path='/Services'
            />
            <CardItem
              src='cardImages/unt.png'
              text='Software Assurance and Security in Emerging Technologies'
              label='Software Testing - REU Site'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='cardImages/ecu.png'
              text="Biomedical Engineering: Simulations, Imaging, and Modeling (BME-SIM)
                    - East Carolina University"
              label='Sensorimotor Testing and Rehabilitation (STAR) Lab'
              path='/Services'
            />
            <CardItem
              src='cardImages/marc.jpeg'
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
