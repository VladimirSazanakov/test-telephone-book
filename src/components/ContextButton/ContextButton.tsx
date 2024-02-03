import React from "react";
import style from "./ContextButton.module.scss";
import { ReactComponent as ImageSVG } from "../../assets/img/Intersect.svg";
import { ReactComponent as IcoAdd } from "../../assets/img/ADD.svg";
import { ReactComponent as IcoImport } from "../../assets/img/Import.svg";
import { ReactComponent as IcoExport } from "../../assets/img/export.svg";
import { ReactComponent as IcoEdit } from "../../assets/img/edit.svg";

const ContextButton = () => {
  return (
    <div className={style.fog}>
      <div className={style.wrapper}>
        <ImageSVG
          className={style.imageUp}
          onClick={() => console.log("clickUp")}
        />
        <IcoAdd className={style.ico_add} />
        <div className={style.text_add}>Добавить пользователя</div>
        <ImageSVG
          className={style.imageRight}
          onClick={() => console.log("clickRight")}
        />
        <IcoExport className={style.ico_export} />
        <div className={style.text_export}>Экспортировать контакты</div>
        <ImageSVG
          className={style.imageDown}
          onClick={() => console.log("clickDown")}
        />
        <IcoEdit className={style.ico_edit} />
        <div className={style.text_edit}>Редактировать список</div>
        <ImageSVG
          className={style.imageLeft}
          onClick={() => console.log("clickLeft")}
        />
        <IcoImport className={style.ico_import} />
        <div className={style.text_import}>Импортировать контакты</div>
      </div>
    </div>
  );
};

export default ContextButton;
