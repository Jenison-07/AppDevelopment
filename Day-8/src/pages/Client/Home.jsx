import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
const Home = () => {



    return (

        <div className='main'>
            <Navbar/>

                <div className='home-container'>
                    <div className='home-l'>
                        <p className='home-title primary'>CATER LOGS </p>
                        <p className='home-data'>
                        About Cater Log

                    Welcome to Cater Log, your premier destination for quality furniture and home decor.
                    Our Values

                    Quality: We source our furniture from reputable manufacturers known for their craftsmanship and attention to detail. Every piece in our collection is built to last.
                    Affordability: We believe that high-quality furniture doesn't have to come with a high price tag. We strive to offer competitive prices without compromising on quality.

                    Customer Satisfaction: Our customers are at the heart of everything we do. We're committed to providing excellent customer service and a seamless shopping experience.

                    Why Choose Us?

                    Expert Guidance: Our team of knowledgeable and friendly experts is here to assist you in finding the perfect furniture pieces to suit your needs and style.

                    Convenience: Shopping with us is easy and convenient. You can explore our catalog online, place orders from the comfort of your home, and have your purchases delivered to your doorstep.

                    Sustainability: We are committed to eco-friendly practices and offer a selection of sustainable and responsibly sourced products.
                        </p>
                    </div>
                    <div className='home-r'>
                        <img src='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZXBhZ2UlMjBmb3IlMjBmdXJuaXR1cmUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' className='home-r-img'/>
                    </div>

                </div>

            <Footer/>
        </div>
    )
}
export default Home;
