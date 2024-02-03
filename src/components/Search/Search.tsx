import React, { useState } from "react";
import style from "./Search.module.scss";

const Search = () =>{
  const [value, setValue] = useState('');
  
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value);
  }

  return(
    <input
      className={style.search}
      placeholder="Поиск"
      value={value}
      onChange={inputHandler}/>
  )
};

export default Search;