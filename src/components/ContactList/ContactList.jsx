import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFiltersName } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectFiltersName);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact contactInfo={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
