import { useEffect } from 'react';

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
    <div>
      <h1>Doctor</h1>
      <p>Doctor's information will be displayed here.</p>
    </div>
  );
}
