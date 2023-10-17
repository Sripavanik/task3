import React from 'react';
import './about.css';
import E1 from '../assets/e1.webp';
import E2 from '../assets/e2.webp';
import E3 from '../assets/e3.webp';
import E4 from '../assets/e4.webp';
import E5 from '../assets/hair.jpg';
import E6 from '../assets/art1.png';
const About=()=>{
    return(
        <>
         <div class="features"><h1>Our special Features</h1></div>
        <div class="about">
       
            <div class="li"><li id="li"></li><h2>Hair straightening</h2><div id="book"><button type="button" id="bt1">BOOK NOW</button></div></div>
            <div class="bi"><li id="bi"></li><h2>Bridal Makeup</h2><div id="book"><button type="button" id="bt1">BOOK NOW</button></div></div>
           <div class="ci"><li id="ci"></li><h2>Skin Care</h2><div id="book"><button type="button" id="bt1">BOOK NOW</button></div></div> 
           <div class="view"></div> <button type="button" id="view">View More</button>
        </div>
        <div id="btn">
        <button type="button" id="button1">Book My Appointment</button>
       <div class="hellos"><h1>Our Image Is to Make Your Image</h1></div> 
        </div>
        <div id="exp"><h1>20 + Years Of Experience</h1></div>
       <div class="test">
        <div id="div1">
        <img src={E1} id="img" alt=""/>
        <img src={E2}  id="img" alt=""/>
        <img src={E3} id="img" alt=""/>
        <img src={E4} id="img" alt=""/>
        </div>
        <div id="div2">
        <img src={E1} id="img" alt=""/>
        <img src={E2}  id="img" alt=""/>
        <img src={E6} id="img" alt=""/>
        <img src={E5} id="img" alt=""/>
        </div>
       </div>
      
        </>
    );
}
export default About;