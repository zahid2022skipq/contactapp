import PropTypes from "prop-types";
import { useState } from "react";

function ListContacts({ contact, onDeleteContact }) {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };
  const clearQuery = () => {
    updateQuery("");
  };
  const showingContacts =
    query === ""
      ? contact
      : contact.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>

      {showingContacts.length !== contact.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showingContacts.length} of {contact.length}
          </span>
          <button onClick={clearQuery}>Show All</button>
        </div>
      )}

      <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              className="contact-remove"
              onClick={() => onDeleteContact(contact)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

ListContacts.propTypes = {
  contact: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;
