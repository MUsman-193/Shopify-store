import React from 'react'
import './footer.css'
import logo from '../../assets/image/Home_images/logo/brand_logo.png'
import { HiLocationMarker } from "react-icons/hi"
import {FiMail} from 'react-icons/fi'
import {IoMdCall} from 'react-icons/io'
function Footer() {
    return (
        <>
            <footer className='footer_main_container'>
                <div className="footer_container">
                    <div className="footer_logo">
                        <div className="footer_logo"> <img src={logo} alt="" />  </div>
                    </div>
                    <div className="footer_input_container">
                        <div className="footer_input">
                            <input type="text" placeholder='Enter Your email' />
                        </div>
                        <button className='footer_btn_container' >
                            <div className="footer_btn">SUBSCRIBE</div>
                        </button>
                    </div>
                </div>
                {/* ------ */}
                <section className="footer_disc_container">
                    <div className="footer_disc">
                        <div className="footer_text">About Us</div>
                        <ul>  <li id='footer_text'> CarftVilla is Pakistan New ever global e-commerce leader that connects millions of buyers and sellers around the country and the world. CarftVilla offers a wide selection of cosmetics in Pakistan.#CarftVilla.pk</li>
                        </ul>
                    </div>
                    <div className="footer_disc">
                        <div className="footer_text">About Us</div>
                        <ul>
                            <li>Huda Beauty</li>
                            <li> Maybelline Pakistan</li>
                            <li> Loreal Paris Makeup</li>
                            <li> The Ordinary</li>
                            <li> LA Girl</li>
                        </ul>
                    </div>
                    <div className="footer_disc">
                        <div className="footer_text">About Us</div>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Refund and Returns Policy</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>FAQs CarftVilla Pakistan</li>
                        </ul>
                    </div>
                    <div className="footer_disc">
                        <div className="footer_text">About Us</div>
                        <ul>
                            <li>Face</li>
                            <li>Eyes</li>
                            <li>Lips</li>
                            <li>Nails</li>
                        </ul>
                    </div>
                    <div className="footer_disc">
                        <div className="footer_text">About Us</div>
                        <ul>
                            <li id='footer_logo'>
                                <div className="footer_icon"> <HiLocationMarker/> </div>
                                <div >22 A Model Colony, Model Town Lahore</div>
                            </li>
                            <li id='footer_logo'>
                                <div className="footer_icon"> <FiMail/> </div>
                                <div>Support@CarftVilla.pk</div>
                            </li>
                            <li id='footer_logo'>
                                <div className="footer_icon"> <IoMdCall/> </div>
                                <div>+923148618871</div>
                            </li>
                        
                        </ul>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer