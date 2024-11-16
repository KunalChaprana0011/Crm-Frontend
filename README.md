# Frontend: CRM Contact Management System

## Project Setup

### Prerequisites
- Node.js and npm installed.
- Your backend server should be running (ensure API URL is set correctly in `.env` file).

### Steps to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/crm.git

cd crm/frontend
npm install
# inside .env file
REACT_APP_API_URL=  https://crm-backend-lceh.onrender.com

npm start


# Backend: CRM Contact Management System

## Project Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB (local or cloud, e.g., MongoDB Atlas) for the database.

### Steps to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/crm.git
cd crm/backend

npm install

DB_URI=mongodb://<your-mongo-db-uri>  # MongoDB URI
PORT=8000  
npm start

# Mongoose Database Schema
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

# API routes
GET /api/contacts
POST /api/contacts
PUT /api/contacts/:id
DELETE /api/contacts/:id




