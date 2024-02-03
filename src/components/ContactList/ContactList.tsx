import React from "react";
import style from './ContactList.module.scss';
import Contact from "../Contact/Contact";

const ContactList= () =>{
  return(
    <div className={style.contact_list}>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
      <Contact/>
    </div>
  )
};

export default ContactList;