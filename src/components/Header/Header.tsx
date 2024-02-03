import React from "react";
import style from "./Header.module.scss";
import Search from "../Search";

const Header = () => {
return (
  <div className={style.header}>
    <div className={style.search_wrapper}>
      <Search/>
    </div>
    <div className={style.fields_name_bar}>
      <span className={style.avatar}>****</span>
      <span className={style.name}>Имя</span>
      <span className={style.number}>Телефон</span>
      <span className={style.address}>Адрес</span>
      <span className={style.email}>Электронная почта</span>

    </div>

  </div>
)
} ;

export default Header;