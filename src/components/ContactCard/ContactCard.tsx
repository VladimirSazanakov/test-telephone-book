import React, { useEffect, useState } from "react";
import style from "./ContactCard.module.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setNewContact, updateContact } from "../store/reducers/phoneBook";
import type { TContact } from "../store/reducers/phoneBook";
import { setMode } from "../store/reducers/app";
// import { ReactComponent as IcoUser } from "../../assets/img/defaultUser.svg";

const ContactCard = () => {
  const mode = useAppSelector((state) => state.mode.mode);
  const active = useAppSelector((state) => state.phoneBook.activeContact);
  const List = useAppSelector((state) => state.phoneBook.ContactList);

  let formName = "Добавить пользователя";

  const NewContact = {
    id: active,
    name: "",
    number: "",
    email: "",
    address: "",
  };

  if (mode === "edit" || mode === "view_contact") {
    const editedContact =
      List[List.findIndex((contact) => contact.id === active)];
    NewContact.name = editedContact.name;
    NewContact.number = editedContact.number ? editedContact.number : "";
    NewContact.email = editedContact.email ? editedContact.email : "";
    NewContact.address = editedContact.address ? editedContact.address : "";
    formName = "Редактировать пользователя";
    if (mode === "view_contact") {
      formName = "Просмотр пользователя";
    }
  }

  const [name, setName] = useState(NewContact.name);
  const [number, setNumber] = useState(NewContact.number);
  const [email, setEmail] = useState(NewContact.email);
  const [address, setAddress] = useState(NewContact.address);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event);

    const newContact: TContact = {
      id: active ? active : 1,
      name: name,
      number: number,
      email: email,
      address: address,
    };
    if (mode === "new") {
      dispatch(setNewContact(newContact));
    } else if (mode === "edit") {
      dispatch(updateContact(newContact));
    }
    dispatch(setMode("view"));
  };

  const handleExit = () => {
    dispatch(setMode("view"));
  };

  return (
    <div className={style.fog}>
      <div className={style.contact_card}>
        <span className={style.title}>{formName}</span>
        <div className={style.icon}></div>
        <form
          className={style.form}
          onSubmit={handleSubmit}
          onReset={handleExit}
        >
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
            {mode === "view_contact" ? null : (
              <button className={style.button} type="submit">
                Сохранить
              </button>
            )}
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
