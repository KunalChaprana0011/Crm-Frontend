import React from 'react';
import ContactForm from './components/ContactForm.js';
import ContactsTable from './components/ContactsTable.js';

const App = () => {
  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm />
      <ContactsTable />
    </div>
  );
};

export default App;
