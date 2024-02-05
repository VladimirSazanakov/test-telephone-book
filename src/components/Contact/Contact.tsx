import React from "react";
import style from "./Contact.module.scss";
import { TContact } from "../store/reducers/phoneBook";
import { useAppSelector } from "../store/hooks";
import { ReactComponent as IcoAvatar } from "../../assets/img/defaultUser.svg";

type TProps = {
  active?: boolean;
  onClickEdit?: Function;
  contact: TContact;
};

const Contact = ({
  active = false,
  onClickEdit = () => {},
  contact,
}: TProps) => {
  const { id, name, email, number, address } = contact;
  const isEditMode = useAppSelector((state) => state.mode.editMode);
  let styleAll = [style.contact];

  if (active) styleAll.push(style.active);

  return (
    <div className={styleAll.join(" ")}>
      <div className={style.avatar}>
        <IcoAvatar />
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.number}>{number}</div>
      <div className={style.address}>{address}</div>
      <div className={style.email}>{email}</div>
      {active && isEditMode ? (
        <button className={style.edit_button} onClick={() => onClickEdit(id)}>
          Редактировать
        </button>
      ) : null}
    </div>
  );
};

export default Contact;
