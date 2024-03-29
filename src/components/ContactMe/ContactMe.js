import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{ flex: 1}}>                
                <ContactInfoCard iconUrl='./assets/images/mail.png' text='varundwt@gmail.com' link="mailto:varundwt@gmail.com"/>
                <ContactInfoCard iconUrl='./assets/images/linkedin.png' text='@semiintrovert' link='https://www.linkedin.com/in/semiintrovert/'/>
                <ContactInfoCard iconUrl='./assets/images/whatsapp.png' text='+919627385102' link="https://wa.me/919627385102 "/>
            </div>
            <div style={{ flex: 1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe