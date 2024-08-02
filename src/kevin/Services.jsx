import React from 'react'  
import Navbar from '../components/Navbar2' 
import Footer from '../kevin/Footer'
import Servicepage from '../kevin/Servicepage'
import ContactUs from './ContactUs'
export default function Services() {
    return (
        <div className=''>
            <Navbar/>
            <Servicepage/>
            <ContactUs />
             <Footer />         
        </div>
    )
}