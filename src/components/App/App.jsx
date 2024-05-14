import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("contactList", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
