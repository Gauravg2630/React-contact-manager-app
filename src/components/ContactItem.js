import React, { useState } from 'react';

function ContactItem({ contact, index, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Simple validation, add yours if needed
    if (
      editedContact.name.trim().length < 2 ||
      !/^[A-Za-z ]+$/.test(editedContact.name) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editedContact.email) ||
      !/^[0-9]{10}$/.test(editedContact.phone)
    ) {
      alert('Please enter valid contact details before saving.');
      return;
    }

    onEdit(index, editedContact);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContact(contact);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="contact-item-edit">
          <input
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={editedContact.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={editedContact.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="contact-item-view">
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      )}
    </>
  );
}

export default ContactItem;
