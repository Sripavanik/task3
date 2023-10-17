import React from 'react';
import './form.css';
const Form=()=>{
    return(
        <>
        <form>
        Username:<br/><br/>
        <input type="text"/><br/><br/>
        Password:<br/><br/>
        <input type="password"/><br/><br/>
        Your Problem:<br/><br/>
        <input type="text"/><br/><br/>
        <button type="submit" id="send">Send</button>
        </form>
        <p>If no account,Then<a href="#register">Regiter here</a></p>
        </>
    )
}
export default Form;