import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';


const API_URL = process.env.REACT_APP_API_URL;

const ContactForm = ({ fetchContacts }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  const [isSaving, setIsSaving] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!contact.firstName || !contact.lastName || !contact.email || !contact.phoneNumber || !contact.company || !contact.jobTitle) {
      alert('Please fill in all fields!');
      return;
    }

    setIsSaving(true);

    try {
      const response = await axios.post(`${API_URL}/api/contacts`, contact);

      if (response.status === 201) {
        alert('Contact added successfully!');
        setContact({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          company: '',
          jobTitle: '',
        });

        
        if (fetchContacts) {
          fetchContacts();
        }
      } else {
        alert('Unexpected response from the server.');
      }
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('Error adding contact. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="grid" gap={2} gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}>
        <TextField
          label="First Name"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          fullWidth
          gridColumn="span 2"
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Company"
          name="company"
          value={contact.company}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
          fullWidth
        />
      </Box>
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Add Contact'}
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
