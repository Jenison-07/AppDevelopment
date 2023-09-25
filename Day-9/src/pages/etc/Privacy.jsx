import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import PrivacySVG from '../../assets/ico/privacy.webp';
export const Privacy = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='etc-wrapper'>
        <div className='etc-container shadow'>
          <h1 className='primary etc-title shadow'> Privacy Policy</h1>
          <img src={PrivacySVG} alt="login-img" className='auth-svg' />
          <p className='etc-data'>

          <b>1. Introduction</b><br/><br/>

          1.1. This Privacy Policy governs the manner in which [Your Furniture Store Name] ("we," "us," "our") collects, uses, maintains, and discloses information collected from users ("you," "your") of the [Your Furniture Store Website] (the "Website").
          
          1.2. By accessing and using the Website, you consent to the practices described in this Privacy Policy.
            <br /><br />
            <b>2. Information We Collect</b><br/><br/>

            2.1. Personal Information: We may collect personal information, including but not limited to, your name, email address, mailing address, phone number, and payment information when you interact with the Website, make a purchase, or contact us.
            
            2.2. Non-Personal Information: We may also collect non-personal information such as your browser type, IP address, and the pages you visit on the Website. This information is used for analytical purposes to improve our services.
            <br /><br />
            <b>3. How We Use Collected Information</b><br/><br/>

            3.1. We may use your personal information for the following purposes:<br/>

            To process and fulfill your orders.
            To send you order-related notifications and updates.
            To respond to your inquiries, requests, or comments.
            To improve customer service and personalize your experience.
            To send periodic emails about promotions, products, or other updates, with your consent.
            3.2. We may use non-personal information to analyze user behavior and trends to enhance the Website's functionality and user experience.
            <br /><br />
            <b>4. Protecting Your Information</b><br/><br/>

            4.1. We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission or storage system can be guaranteed to be 100% secure, and we cannot ensure or warrant the security of your information.
            <br />
            <b>5. Sharing Your Information</b><br/><br/>

            5.1. We do not sell, trade, or rent your personal information to third parties except as described below:

            We may share your information with trusted service providers who assist us in operating the Website, processing payments, and delivering products to you.
            We may disclose your information if required by law or to protect our legal rights, property, or safety, or the rights, property, or safety of others.
            <br /><br />
            <b>6. Cookies and Tracking Technologies</b><br/><br/>

            6.1. The Website may use "cookies" and other tracking technologies to enhance your user experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. However, this may affect certain functions of the Website.
            <br />
            <b>7. Third-Party Websites</b><br/><br/>

            7.1. The Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
            <br /><br />
            <b>8. Children's Privacy</b><br/><br/>

            8.1. The Website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take appropriate action to remove such information.


            <br />
            <br/>
            <b>9. Changes to this Privacy Policy</b><br/><br/>

            9.1. We reserve the right to update or change this Privacy Policy at any time. Any revisions will be posted on this page along with the date of the last update. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
             <br />
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
