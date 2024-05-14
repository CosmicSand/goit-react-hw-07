import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => {
    if (!state.filters.name) {
      return state.contacts.items;
    } else {
      return state.contacts.items.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(state.filters.name.trim().toLowerCase())
      );
    }
  });

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contactInfo={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
