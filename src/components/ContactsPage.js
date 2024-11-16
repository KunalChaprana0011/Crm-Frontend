import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactsTable from './ContactsTable';


const API_URL = process.env.REACT_APP_API_URL;

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/contacts`);
      setContacts(response.data); 
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact Management</h1>
      {}
      <ContactForm fetchContacts={fetchContacts} />
      {}
      <ContactsTable contacts={contacts} fetchContacts={fetchContacts} />
    </div>
  );
};

export default ContactsPage;
