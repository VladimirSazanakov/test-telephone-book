import React from "react";
import style from "./ContactCard.module.scss";

const ContactCard = () => {
  return (
    <div className={style.fog}>
      <div className={style.contact_card}>
        <span className={style.title}>Добавить пользователя</span>
        <div className={style.icon}></div>
        <form>
          <input
            className={style.name}
            type="text"
            pattern="[A-Za-zА-Яа-яЁё\s]{3,}"
            required
            placeholder="Имя"
          />

          <input className={style.number} type="tel" placeholder="Номер" />

          <input
            className={style.email}
            type="email"
            placeholder="Электронная почта"
          />

          <input className={style.address} type="text" placeholder="Адрес" />
          <div className={style.button_wrapper}>
            <button className={style.button} type="submit">
              Сохранить
            </button>
            <button className={style.button} type="reset">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
