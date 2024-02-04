import React from "react";
import style from "./ContextButton.module.scss";
import { ReactComponent as ImageSVG } from "../../assets/img/Intersect.svg";
import { ReactComponent as IcoAdd } from "../../assets/img/ADD.svg";
import { ReactComponent as IcoImport } from "../../assets/img/Import.svg";
import { ReactComponent as IcoExport } from "../../assets/img/export.svg";
import { ReactComponent as IcoEdit } from "../../assets/img/edit.svg";
import { setMode } from "../store/reducers/app";
import { useAppDispatch } from "../store/hooks";

const ContextButton = () => {
  const dispatch = useAppDispatch();

  const onClickAround = () => {
    dispatch(setMode("view"));
  };

  const onClickNew = (event: any) => {
    dispatch(setMode("new"));
    event.stopPropagation();
  };

  const onClickExport = (event: any) => {
    console.log("clicExport");
    window.alert("Sory... This function is not relase eat");
    // dispatch(setMode("new"));
    event.stopPropagation();
  };

  const onClickImport = (event: any) => {
    console.log("clickImport");
    window.alert("Sory... This function is not relase eat");
    // dispatch(setMode("new"));
    event.stopPropagation();
  };

  const onClickEditList = () => {
    console.log("click Edit List");
    window.alert("Sory... This function is not relase eat");
  };

  return (
    <div className={style.fog} onClick={onClickAround}>
      <div className={style.wrapper}>
        <ImageSVG className={style.imageUp} onClick={onClickNew} />
        <IcoAdd className={style.ico_add} />
        <div className={style.text_add}>Добавить пользователя</div>
        <ImageSVG className={style.imageRight} onClick={onClickExport} />
        <IcoExport className={style.ico_export} />
        <div className={style.text_export}>Экспортировать контакты</div>
        <ImageSVG className={style.imageDown} onClick={onClickEditList} />
        <IcoEdit className={style.ico_edit} />
        <div className={style.text_edit}>Редактировать список</div>
        <ImageSVG className={style.imageLeft} onClick={onClickImport} />
        <IcoImport className={style.ico_import} />
        <div className={style.text_import}>Импортировать контакты</div>
      </div>
    </div>
  );
};

export default ContextButton;
