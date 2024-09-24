# CRUD on R-Learning Website Admin

This project is a CRUD application for managing courses on an e-learning platform, built using React for the front end and Node.js for the backend, with a PostgreSQL database for data management. The application provides a user-friendly interface for administrators to perform CRUD operations seamlessly.

## Objective

The objective of this project is to introduce server-client communication through a RESTful API while providing an efficient and user-friendly interface for managing courses.

## Features

- **CRUD Operations**: The application allows users to Create, Read, Update, and Delete courses.
- **Responsive Design**: The interface is designed to be responsive, ensuring usability across various devices.
- **Admin Dashboard**: An admin dashboard where all courses can be managed.
- **Interactive Modals**: Use of modals for creating, editing, and confirming deletion of courses.
- **User-Friendly Interface**: A clean and intuitive layout for better user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for building the server-side application.
- **Express**: A web framework for Node.js to handle API requests.
- **PostgreSQL**: A relational database management system to store course data.
- **Bootstrap**: A CSS framework for responsive design.
- **React Router DOM**: For managing navigation within the application.

## Steps Taken

1. **Create RESTful API Endpoints**: 
    - Developed API endpoints in the Node.js server to handle CRUD operations for courses.
   
2. **Develop Front-End Interface**: 
    - Created a responsive front-end using React that interacts with the RESTful API for data management.

3. **Fetch and Display Data**: 
    - Implemented functions to fetch data from the API and display it in a user-friendly format.

## How to Run

### Backend
1. Navigate to the server directory.
2. Start the server:
    ```bash
    cd server
    node app.js
    ```

### Frontend
1. Navigate to the client directory.
2. Start the React application:
    ```bash
    cd client
    npm run dev
    ```

## Video Demonstration

Here is a video demonstrating the functionality of the application:

<video width="640" height="360" controls>
  <source src="client/public/video/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Conclusion

This project successfully demonstrates the implementation of a full-stack application using React and Node.js, focusing on efficient data management through RESTful APIs. The combination of modern web technologies provides a robust solution for managing an e-learning platform.

For any questions or further information, feel free to reach out.
