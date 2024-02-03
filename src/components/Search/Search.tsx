import React, { useEffect, useState } from "react";
import style from "./Search.module.scss";
import { UseDispatch, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilter } from "../store/reducers/filter";

const Search = () => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value]);

  return (
    <input
      className={style.search}
      placeholder="Поиск"
      value={value}
      onChange={inputHandler}
    />
  );
};

export default Search;
