import {createSlice} from "@reduxjs/toolkit";

// type TCurrentState = {
  
// }

export type TContact = {
  id: number,
  name: string,
  number?: string,
  email?: string,
  address?: string,
}

type TState = {
  ContactList: Array<TContact>,
  activeContact: number|null;
}

const initialState: TState = {
  ContactList: [],
  activeContact: null,
}

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setNewContact(state, action){
      const newId = state.ContactList.length ? state.ContactList[state.ContactList.length-1].id +1: 1;
      const newContact = {
        id: newId,
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email,
        address: action.payload.address,
      }
      state.ContactList.push(newContact);
    },
    removeContact(state, action){
      const removeIndex = state.ContactList.findIndex(contact=>contact.id===action.payload.id)
      state.ContactList.splice(removeIndex,1);
    },
    updateContact(state, action){
      const removeIndex = state.ContactList.findIndex(contact=>contact.id===action.payload.id)
      state.ContactList.splice(removeIndex, 1, action.payload);
    },
    setActiveContact(state, action){
      state.activeContact = action.payload;
    }
  }
})

export const {setNewContact, removeContact, updateContact, setActiveContact} = contacts.actions;

export default contacts.reducer;