import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';

function ContactList({ contacts, onDelete, onEdit }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('asc');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSortToggle = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  // Map contacts to include original index
  const indexedContacts = contacts.map((contact, idx) => ({ contact, idx }));

  // Filter and sort while keeping original index
  const filteredSortedContacts = indexedContacts
    .filter(({ contact }) =>
      contact.name.toLowerCase().includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm) ||
      contact.phone.includes(searchTerm)
    )
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.contact.name.localeCompare(b.contact.name)
        : b.contact.name.localeCompare(a.contact.name)
    );

  return (
    <div className="contact-list-container">
      <h2 className="contact-list-title">Saved Contacts</h2>

      <div className="search-sort-bar">
        <input
          type="text"
          placeholder="Search by name, email, phone..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button onClick={handleSortToggle} className="sort-button">
          Sort: {sortOrder.toUpperCase()}
        </button>
      </div>

      {filteredSortedContacts.length === 0 ? (
        <p className="no-contacts">No contacts match your search.</p>
      ) : (
        <ul className="contact-list">
          {filteredSortedContacts.map(({ contact, idx }) => (
            <li key={idx} className="contact-card">
              <ContactItem
                contact={contact}
                index={idx}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
