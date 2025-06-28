import React, { useEffect } from 'react';
import "./doctor.css";
import MapWithMarker from './MapWithMarker';
import Header from './assets/doctorHeader.jpg';

export default function Doctor() {
  useEffect(() => {
    if (!document.getElementById('calendly-widget-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className='doctor'>
      <div className='header'>
        <img src={Header} alt='Doctor Header' className='headerImage'/>
      </div>
      <div className='body'>
        <h1>Dr. John Smith</h1>
        <p className='mainText'>
          Dr. John Smith is a board-certified family physician stationed at City Health Clinic in downtown Sydney. 
          With over 15 years of experience in primary care, Dr. Smith is dedicated to providing comprehensive healthcare to patients of all ages.
        </p>
        <p className='mainText'>
          He specializes in preventive medicine, chronic disease management, and patient education. 
          Dr. Smith is known for his compassionate approach and commitment to personalized care, ensuring each patient receives the attention they deserve.
        </p>
        <p className='mainText'>
          To schedule an appointment, please use the booking button or contact Dr. Smith directly using the information above.
        </p>
        {/* <!-- Calendly inline widget begin --> */}
        <div className="calendly-inline-widget" data-url="https://calendly.com/mmosaab2002"></div>
        
        {/* <!-- Calendly inline widget end --> */}

        <div className='contactMap'>
          <MapWithMarker />
          <div className='contact'>
            <h2>Contact Information</h2>
            <div className='contactDetails'>
            <p className='contactText'>Email: doctor@test.com</p>
            <div className='contactSeparator'></div>
            <p className='contactText'>Phone: +1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
