import React, { useState } from "react";
import style from "./ContactCard.module.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setNewContact } from "../store/reducers/phoneBook";
import type { TContact } from "../store/reducers/phoneBook";

const ContactCard = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newContact: TContact = {
      id: 123,
      name: name,
      number: number,
      email: email,
      address: address,
    };
    dispatch(setNewContact(newContact));
  };

  return (
    <div className={style.fog}>
      <div className={style.contact_card}>
        <span className={style.title}>Добавить пользователя</span>
        <div className={style.icon}></div>
        <form onSubmit={handleSubmit}>
          <input
            className={style.name}
            type="text"
            value={name}
            pattern="[A-Za-zА-Яа-яЁё\s]{3,}"
            required
            placeholder="Имя"
            onChange={(event) => setName(event.target.value)}
          />

          <input
            className={style.number}
            type="tel"
            placeholder="Номер"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />

          <input
            className={style.email}
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className={style.address}
            type="text"
            placeholder="Адрес"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
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
