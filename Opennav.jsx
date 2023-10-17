import React ,{component} from 'react';

export default class Opennav extends component{
     openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      /* Set the width of the side navigation to 0 */
       closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
}