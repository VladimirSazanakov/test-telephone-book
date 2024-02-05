import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
// import Contact from "../Contact";
import ContactList from "../ContactList";
import ContactCard from "../ContactCard";
import ContextButton from "../ContextButton";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setMode } from "../store/reducers/app";
// import { AppState } from "../store/reducers/app";

// type TMode = "view" | "edit" | "context" | "new";

function App() {
  // const [mode, setMode] = useState<TMode>("edit");

  const mode = useAppSelector((state) => state.mode.mode);
  // console.log(mode);
  const dispatch = useAppDispatch();

  const handleContext = () => {
    dispatch(setMode("context"));
    document.oncontextmenu = () => {
      return false;
    };
  };

  return (
    <div className="App" onContextMenu={handleContext}>
      <Header />
      <ContactList />
      {mode === "new" ? <ContactCard /> : null}
      {mode === "edit" ? <ContactCard /> : null}
      {mode === "view_contact" ? <ContactCard /> : null}
      {mode === "context" ? <ContextButton /> : null}
    </div>
  );
}

export default App;
