import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import Header from "../Header";
import ContactList from "../ContactList";
import ContactCard from "../ContactCard";
import ContextButton from "../ContextButton";

import { setMode } from "../store/reducers/app";
import { appMode } from "../../types_test/types";
import "./App.css";

function App() {
  const mode = useAppSelector((state) => state.mode.mode);
  const dispatch = useAppDispatch();

  const handleContext = () => {
    dispatch(setMode(appMode.context));
    document.oncontextmenu = () => {
      return false;
    };
  };

  return (
    <div className="App" onContextMenu={handleContext}>
      <Header />
      <ContactList />
      {mode === appMode.new ? <ContactCard /> : null}
      {mode === appMode.edit ? <ContactCard /> : null}
      {mode === appMode.view_contact ? <ContactCard /> : null}
      {mode === appMode.context ? <ContextButton /> : null}
    </div>
  );
}

export default App;
