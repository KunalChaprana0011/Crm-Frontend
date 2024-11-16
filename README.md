# CRM Application

## Project Description

This is a **Contact Relationship Management (CRM)** application built with **Node.js**, **Express**, **React**, and **MongoDB**. The app allows users to manage contacts, add, edit, and delete them, with a clean and user-friendly interface built using **Material-UI** for React.

### Major Features:
- **Add Contact**: Allows users to add new contacts.
- **Edit Contact**: Enables users to update the information of an existing contact.
- **Delete Contact**: Allows for the removal of a contact.
- **Search and Sort**: Users can search and sort the contact list by various fields.
  
---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Material-UI
- **Database**: MongoDB, Mongoose for schema modeling

---

## Setup Instructions

### 1. **Clone the Repository**

Clone the project to your local machine using the following command:
```bash
git clone <repository-url>
``` 
### 2. **BACKEND SETUP**
- cd backend
- npm install
- MONGO_URI=<your-mongodb-uri>
- PORT=8000
- npm start

- ### 2. **FRONTEND SETUP**
- cd frontend
- npm install
  ``` bash
  - in .env file
  REACT_APP_API_URL=https://crm-backend-lceh.onrender.com
  ```
- PORT=8000
- npm start

## DataBase Schema
``` bash
import mongoose, { Schema } from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    company: String,
    jobTitle: String,
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", ContactSchema);
```
## API Routes
```bash
GET /api/contacts - Fetch all contacts.
POST /api/contacts - Create a new contact.
PUT /api/contacts/:id - Update a contact by ID.
DELETE /api/contacts/:id - Delete a contact by ID.
```


  

