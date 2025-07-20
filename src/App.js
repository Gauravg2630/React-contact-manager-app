import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = (index) => {
    setContacts(prev => prev.filter((_, i) => i !== index));
  };

  const editContact = (index, updatedContact) => {
    setContacts(prev => prev.map((contact, i) => (i === index ? updatedContact : contact)));
  };

  return (
    <Router>
      <div>
        <Navbar /> {/* Use Navbar here */}

        <Routes>
          <Route
            path="/"
            element={<ContactForm onSave={addContact} />}
          />
          <Route
            path="/contacts"
            element={
              <ContactList
                contacts={contacts}
                onDelete={deleteContact}
                onEdit={editContact}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
