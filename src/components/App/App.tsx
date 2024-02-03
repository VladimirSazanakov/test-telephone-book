import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Contact from "../Contact";
import ContactList from "../ContactList";
import ContactCard from "../ContactCard";
import ContextButton from "../ContextButton";

type TMode = "view" | "edit" | "context" | "new";

function App() {
  const [mode, setMode] = useState<TMode>("view");

  return (
    <div className="App">
      <Header />
      <ContactList onContext={() => setMode("context")} />
      {mode === "new" ? <ContactCard /> : null}
      {mode === "edit" ? <ContactCard /> : null}
      {mode === "context" ? <ContextButton /> : null}
    </div>
  );
}

export default App;
