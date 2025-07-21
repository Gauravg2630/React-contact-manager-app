✅ Day 22 – Backend: Contact Manager App using Node.js + Express + MySQL
🔥 Project Title
Full Stack Contact Manager App – Backend Integration (Day 22 of #100DaysOfReact)

📌 Description
This backend system powers the Contact Manager App by providing a RESTful API to manage contact data using a MySQL database hosted on XAMPP. The server is built with Node.js and Express, connecting to the frontend created on Day 21. It enables full CRUD operations (Create, Read, Update, Delete) for contact data and integrates cleanly with the React frontend.

🚀 Features
✅ Node.js + Express server

✅ MySQL database connection (XAMPP, phpMyAdmin)

✅ RESTful API:

GET /api/contacts – Get all contacts

POST /api/contacts – Add new contact

PUT /api/contacts/:id – Update contact

DELETE /api/contacts/:id – Delete contact

✅ Connected with React frontend via Axios

✅ Structured and scalable backend architecture

⚙️ Tech Stack
Layer	Tech Used
Backend	Node.js, Express
Database	MySQL (via XAMPP, phpMyAdmin)
Connection	mysql2, dotenv, CORS
Frontend	React + Axios (Day 21)

🗂️ Folder Structure
/backend
  ├── config/
  │   └── db.js        # DB connection
  ├── routes/
  │   └── contactRoutes.js  # All contact API endpoints
  ├── controllers/
  │   └── contactController.js
  ├── .env
  └── server.js

🛠️ How to Run

✅ Start XAMPP and run MySQL on port 3307

✅ Create a database: contact_app

✅ Create a table: contacts

✅ Set your .env file:
env configurations:
PORT=5000
DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=root
DB_PASSWORD=
DB_NAME=contact_app

✅ Install dependencies:
npm install express cors dotenv mysql2

✅ Start server:
node server.js
✅ Server runs at: http://localhost:5000

🔗 API Testing (Optional)
Use Postman or curl to test endpoints before connecting frontend.