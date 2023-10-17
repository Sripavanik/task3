import React from 'react'
import './footer.css';
import  './About';
import  './Hero';
import Form from './Form';
const Footer=()=>{
    return(
        <>
        <div class="footer">
            <h2>Fancy Butterflies</h2>
            <div id="footlinks">
                <a href="./Hero" >Home</a><br/><br/><br/>
                <a href="./About" >Services</a><br/><br/><br/>
                <a href="#home">About</a><br/><br/><br/>
                <a href="#Offers">Offers</a><br/><br/><br/>
                <a href="#contact us">Contact Us</a>
            </div>
            <li>contact</li>
            <Form/>
        </div>
        </>
    )
}
export default Footer;