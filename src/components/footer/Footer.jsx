import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaPhoneAlt,FaPinterest} from 'react-icons/fa'
import {CiTwitter} from 'react-icons/ci';
import {footerLinks} from '../../data'
import {FaLocationDot} from 'react-icons/fa6';
import {IoMdMail} from 'react-icons/io'
import payment from '../../assets/payment.png';


function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>ReduxCart</h1>
            <p className='footer-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ullam! Voluptate commodi fugiat mollitia, reprehenderit quibusdam</p>
            <div className='social-container'>
                <div className='social-icon' style={{backgroundColor: "#3b5999"}}>
                    <FaFacebook className='icon' /> 
                </div>
                <div className='social-icon' style={{backgroundColor: "#3b5999"}}>
                    <FaInstagram className='icon' /> 
                </div>
                <div className='social-icon' style={{backgroundColor: "#3b5999"}}>
                    <CiTwitter className='icon' /> 
                </div>
                <div className='social-icon' style={{backgroundColor: "#3b5999"}}>
                    <FaPinterest className='icon' /> 
                </div>
            </div>
        </div>

        <div className='footer-center'>
            <h3>Useful Links</h3>
            <ul className='footer-list'>
                {footerLinks.map((link) =>(
                    <li key={link.id} className='footer-list-item'>{link.title}</li>
                ))}
            </ul>
        </div>

        <div className='footer-right'>
            <h3 className='footer-title'>Contacts</h3>
            <div className='contact-item'>
                <FaLocationDot style={{marginRight:"10px"}} /> 123 street. City
            </div>
            <div className='contact-item'>
                <FaPhoneAlt style={{marginRight:"10px"}} /> +999999999
            </div>
            <div className='contact-item'>
                <IoMdMail style={{marginRight:"10px"}} /> xyz@gmail.com
            </div>
            <img className='payment' src= {payment} alt="" />
        </div>
    </div>
  )
}

export default Footer