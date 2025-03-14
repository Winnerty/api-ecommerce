# E-commerce REST API with Node.js

This project is a RESTful API for an e-commerce platform built using Node.js and Express.js. It includes user management, authentication, and various security features to ensure a robust and scalable backend.

## Features

### User Management
- **Registration & Login**: Secure user authentication using JWT (JSON Web Tokens) or OAuth.
- **User Roles**: Different roles such as Admin, Customer, and Vendor with role-based access control.
- **Profile Management**: Users can update their profiles, including personal information and preferences.

### API & Security
- **RESTful API**: Built with Express.js for handling HTTP requests and responses.
- **Middleware**: Custom middleware for authentication, authorization, and request validation.
- **Rate Limiting**: Implemented to prevent abuse and ensure fair usage.
- **Validation**: Input validation to ensure data integrity and security.

### Technologies & Resources
- **Node.js**: JavaScript runtime environment for building scalable network applications.
- **Express.js**: Web application framework for Node.js, simplifying API development.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and session management.
- **Multer**: Middleware for handling multipart/form-data, primarily used for file uploads.
- **MongoDB**: NoSQL database for storing application data, with Mongoose for schema modeling.
- **Hosting**: Deployed on Render for reliable and scalable hosting.
- **dotenv**: Manages environment variables for configuration and security.
- **Helmet & CORS**: Enhances API security by setting various HTTP headers and enabling Cross-Origin Resource Sharing.

## UML Diagram

![UML Diagram](uml.svg)