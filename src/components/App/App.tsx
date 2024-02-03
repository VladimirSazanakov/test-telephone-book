import React from "react";
import "./App.css";
import Header from "../Header";
import Contact from "../Contact";
import ContactList from "../ContactList";
import ContactCard from "../ContactCard";
import ContextButton from "../ContextButton";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactList />
      {/* <ContactCard/> */}
      <ContextButton />
    </div>
  );
}

export default App;
