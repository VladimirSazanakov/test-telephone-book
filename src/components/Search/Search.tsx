import React from "react";
import style from "./Search.module.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilter } from "../store/reducers/filter";

const Search = () => {
  const value = useAppSelector((state) => state.filter.value);
  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

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
