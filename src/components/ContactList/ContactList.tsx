import React, { useState } from "react";
import style from "./ContactList.module.scss";
import Contact from "../Contact/Contact";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const ContactList = (props: any) => {
  const [activeElement, setActiveElement] = useState(0);
  const filter = useAppSelector((state) => state.filter.value);
  const contacts = useAppSelector((state) => state.phoneBook.ContactList);

  console.log(contacts);

  const handleClick = (key: number) => {
    setActiveElement(key);
  };

  const handleContext = () => {
    props.onContext();
    document.oncontextmenu = () => {
      return false;
    };
  };

  const list = contacts
    .filter((contact) => {
      return Object.values(contact).join(" ").includes(filter);
    })
    .map((contact) => {
      return (
        <li key={contact.id} onClick={() => handleClick(contact.id)}>
          {activeElement == contact.id ? (
            <Contact active contact={contact} />
          ) : (
            <Contact contact={contact} />
          )}
        </li>
      );
    });

  return (
    <div className={style.contact_list} onContextMenu={handleContext}>
      <ul>{list}</ul>
    </div>
  );
};

export default ContactList;
