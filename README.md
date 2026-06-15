Employee Management System

Overview

Employee Management System is a full-stack CRUD web application that allows users to manage employee records efficiently. Users can add, view, update, and delete employee information through a clean and responsive interface.

The application is built using:

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MongoDB
* ODM: Mongoose

⸻

Features

Employee Management

* Add new employees
* View all employees
* Update existing employee details
* Delete employees

Data Validation

* Required field validation
* Proper API response handling
* Error handling for invalid requests

Responsive Design

* Mobile-friendly interface
* Clean and user-friendly layout

⸻

Tech Stack

Frontend

* HTML5
* CSS3
* JavaScript (ES6)

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

⸻

Project Structure

employee-management-system/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── employeeController.js
│   │
│   ├── models/
│   │   └── Employee.js
│   │
│   ├── routes/
│   │   └── employeeRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

⸻

Installation

Clone Repository

git clone <repository-url>

Navigate to Project

cd employee-management-system

Install Backend Dependencies

cd backend
npm install

⸻

Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URL=mongodb://localhost:27017/employeeManagementDB

⸻

Run MongoDB

Make sure MongoDB is running locally.

Connection URL:

mongodb://localhost:27017/employeeManagementDB

⸻

Start Backend Server

npm run dev

Server runs on:

http://localhost:5000

⸻

API Endpoints

Get All Employees

GET /api/employees

Get Employee By ID

GET /api/employees/:id

Create Employee

POST /api/employees

Update Employee

PUT /api/employees/:id

Delete Employee

DELETE /api/employees/:id

⸻

Employee Schema

{
  "name": "Nitin",
  "department": "IT",
  "role": "Developer",
  "salary": 50000,
  "joinDate": "2026-06-15"
}

⸻

Frontend Functionality

* Display employee records in a table
* Add employee using form submission
* Edit employee details
* Update employee information
* Delete employee records
* Dynamic table refresh after CRUD operations

⸻

Future Improvements

* Search functionality
* Pagination
* Authentication and Authorization
* Employee profile images
* Dashboard analytics
* Sorting and filtering

⸻

Author

Nitin Kumar

B.Sc. Information Technology (Honours)

⸻

License

This project is created for learning and educational purposes.
