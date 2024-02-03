import React from "react";
import style from './Contact.module.scss';

const Contact = () =>{
  let styleAll = [style.contact]
  return(
    <div className={styleAll.join(' ')}>
      <div className={style.avatar}>
      
      </div>
      <div className={style.name}>
        Александра Кукушкина
      </div>
      <div className={style.number}>
        +7909883423
      </div>
      <div className={style.adress}>
        Санкт-Петербург ул. Салова д. 4 кв 23
      </div>
      <div className={style.email}>
        12342@mail.com
      </div>
      <button className={style.edit_button}>Редактировать</button>
    </div>
  )
}

export default Contact;