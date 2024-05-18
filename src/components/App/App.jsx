import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contactsOps";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const contacts = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
