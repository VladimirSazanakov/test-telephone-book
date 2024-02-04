import React, { useState } from "react";
import style from "./ContactList.module.scss";
import Contact from "../Contact/Contact";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveContact } from "../store/reducers/phoneBook";
import { setMode } from "../store/reducers/app";

const ContactList = (props: any) => {
  // const [activeElement, setActiveElement] = useState(0);

  const activeElement = useAppSelector(
    (state) => state.phoneBook.activeContact
  );
  const filter = useAppSelector((state) => state.filter.value);
  const contacts = useAppSelector((state) => state.phoneBook.ContactList);
  const dispatch = useAppDispatch();

  console.log(contacts);

  const handleClick = (key: number) => {
    // setActiveElement(key);
    dispatch(setActiveContact(key));
  };

  const onClickEdit = () => {
    dispatch(setMode("edit"));
  };

  const list = contacts
    .filter((contact) => {
      return Object.values(contact).join(" ").includes(filter);
    })
    .map((contact) => {
      return (
        <li key={contact.id} onClick={() => handleClick(contact.id)}>
          {activeElement === contact.id ? (
            <Contact active contact={contact} onClickEdit={onClickEdit} />
          ) : (
            <Contact contact={contact} />
          )}
        </li>
      );
    });

  return (
    <div className={style.contact_list}>
      <ul>{list}</ul>
    </div>
  );
};

export default ContactList;
