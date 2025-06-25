import { useEffect } from 'react';
import "./doctor.css";
import Header from './assets/doctorHeader.jpg';

export default function Doctor() {
  useEffect(() => {
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/mmosaab2002?primary_color=ff0000',
        text: 'Book Appointment Now!',
        color: '#020202',
        textColor: '#ffffff',
        branding: false,
        hide_landing_page_details: true,
        hide_gdpr_banner: true,
      });
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
        <div className='contact'>
          <h2>Contact Information</h2>
          <div className='contactDetails'>
          <p className='mainText'>Email: doctor@test.com</p>
          <p className='mainText'>Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
