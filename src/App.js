import "./Css/App.css";
import ListContacts from "./Components/Css/ListContacts";
import { useEffect, useState } from "react";
import * as ContactsApi from "./utils/ContactsAPI";

function App() {
  const removeContact = (contact) => {
    ContactsApi.remove(contact);
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsApi.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);
  return (
    <div>
      <ListContacts contact={contacts} onDeleteContact={removeContact} />
    </div>
  );
}

export default App;
