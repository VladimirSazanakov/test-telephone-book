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
  const sortValue = useAppSelector((state) => state.sort.value);
  const isEditMode = useAppSelector((state) => state.mode.editMode);
  const dispatch = useAppDispatch();

  // console.log(contacts);

  const sortFunc = (elA: any, elB: any) => {
    if (elA[sortValue] < elB[sortValue]) {
      return -1;
    } else if (elA[sortValue] > elB[sortValue]) {
      return 1;
    } else {
      return 0;
    }
  };

  const handleClick = (key: number) => {
    // setActiveElement(key);
    dispatch(setActiveContact(key));
    if (!isEditMode) {
      dispatch(setMode("view_contact"));
    }
  };

  const onClickEdit = () => {
    dispatch(setMode("edit"));
  };

  const list = contacts
    .filter((contact) => {
      return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(filter.toLowerCase());
    })
    .sort((first, seccond) => sortFunc(first, seccond))
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
      <ul className={style.list_container}>{list}</ul>
    </div>
  );
};

export default ContactList;
