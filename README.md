# Login-Signup-logger-API
It is backend end to end project

A simple authentication system built with Node.js, Express, and MongoDB, featuring login, signup, and logout functionalities. This project securely handles user authentication with JWT (JSON Web Tokens) for session management, password hashing using bcrypt, and cookies to remember the login state. Additionally, it ensures unique usernames and emails.


Features

Signup: Users can create an account by providing a unique email and username. Passwords are securely hashed with bcrypt.

Login: Users can log in with their registered email/username and password. Upon successful login, a JWT token is issued to authenticate future requests.

Logout: A simple logout feature that clears the user's authentication cookies, invalidating the current session.

MongoDB Integration: User data is stored securely in MongoDB, including email, username, and hashed password.

Password Hashing: Passwords are hashed with bcrypt before being stored in the database for security.

JWT Authentication: JWT tokens are used for user verification, and users must provide the token in the request header to access protected routes.

Email and Username Uniqueness: The system ensures that email and username are unique during the signup process.


Technologies Used

Node.js - Backend framework for handling HTTP requests and routes.

Express - Web framework for Node.js to manage routes and middleware.

MongoDB - NoSQL database for storing user data.

Mongoose - ODM (Object Document Mapping) library to interact with MongoDB.

JWT (JSON Web Token) - Token-based authentication for securing routes and managing user sessions.

bcrypt - Library for hashing passwords.

Cookies - Used to store the JWT token on the client-side for persistent login.


Prerequisites


Before running this project, ensure you have:
Node.js installed.

MongoDB database set up (you can use MongoDB Atlas for cloud-based MongoDB).

Your JWT_SECRET key and any other environment variables stored in a .env file
