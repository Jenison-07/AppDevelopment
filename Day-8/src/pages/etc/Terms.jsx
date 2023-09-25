import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import PrivacySVG from '../../assets/ico/privacy.webp';
export const Terms = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    <h1 className='primary etc-title shadow'> Terms & Conditions</h1>
                    <img src={PrivacySVG} alt="login-img" className='auth-svg' />
                    <p className='etc-data'>

                    <b>1. Introduction</b><br/><br/>
                    1.1. These terms and conditions (the "Terms") govern your use of [Your Furniture Store Website] (the "Website") and your purchase of products from [Your Furniture Store Name] (the "Company").
                    
                    1.2. By accessing the Website and/or making a purchase, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Website and making purchases.
                        <br /><br />
                       <b> 2. Use of the Website</b><br/><br/>

                        2.1. You may use the Website for personal, non-commercial purposes only. You must not use the Website for any unlawful or prohibited purpose.

                        2.2. The Company reserves the right to modify or discontinue any part of the Website at any time without notice.
                        <br /><br />
                        <b>3. Product Information</b><br/><br/>

                        3.1. While the Company strives to provide accurate product descriptions and images, we do not guarantee the accuracy, completeness, or reliability of product information on the Website. Product images are for illustrative purposes and may not reflect the exact appearance of the product.
                        <br /><br />
                        <b>4. Ordering and Payment</b><br/><br/>

                        4.1. To place an order, you must provide accurate and complete information, including your name, shipping address, and payment details.

                        4.2. All prices on the Website are in [Currency] and are subject to change without notice. You are responsible for any applicable taxes, customs duties, or fees associated with your purchase.

                        4.3. The Company accepts payment through [Payment Methods]. Payment processing is handled by a secure third-party payment processor.
                        <br />
                        <br/>
                        <b>5. Shipping and Delivery</b><br/><br/>

                        5.1. The Company will make reasonable efforts to ship orders in a timely manner. However, delivery times may vary and are not guaranteed. The Company is not responsible for delays due to unforeseen circumstances or third-party carriers.

                        5.2. You are responsible for providing accurate shipping information. The Company is not liable for any delays or losses resulting from incorrect shipping details provided by the customer.
                        <br /><br />
                        <b>6. Returns and Refunds</b><br/><br/>

                        6.1. For information on returns and refunds, please refer to our [Return and Refund Policy] available on the Website.
                        <br />
                        <br/>
                        <b>7. Privacy</b><br/><br/>

                        7.1. Your use of the Website and the Company's treatment of your personal information are governed by our [Privacy Policy] available on the Website.


                        <br /><br />
                        <b>8. Intellectual Property</b><br/><br/>

                        8.1. All content on the Website, including text, images, logos, and trademarks, is the property of the Company and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Website without prior written consent from the Company.
                        <br />
                        <br/>
                        <b>9. Limitation of Liability</b><br/><br/>

                        9.1. To the extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Website or your purchase of products.
                        <br /><br />
                        <b>10. Governing Law</b><br/><br/>

                        10.1. These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].

                        11. Changes to Terms and Conditions

                        11.1. The Company reserves the right to modify these Terms at any time without notice. You are responsible for reviewing these Terms regularly to stay informed of any changes.
                        <br />
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
