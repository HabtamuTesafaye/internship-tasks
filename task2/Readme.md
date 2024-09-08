# Profile Form with File Upload and Validation

## Purpose

This project develops a web application where users can fill out a profile form and optionally upload a photo. It ensures the data is validated both client-side and server-side, and displays the submitted information along with the uploaded photo as a small, circular image.

## Technologies Used

- **HTML**: Markup language for structuring web content.
- **CSS**: Styling language for designing the layout and appearance.
- **JavaScript**: Programming language used on the server-side (Node.js) and for form handling.

## Packages Used

- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for rendering dynamic HTML.
- **Multer**: Middleware for handling file uploads.
- **Connect-Flash**: Middleware for flash messages, used for displaying validation errors.

## Key Features

- **Profile Form**: Collects user details including first name, last name, grandfather's name, email, birth date, and bio. Supports file uploads with validation.
- **File Upload Handling**: Uses Multer to manage file uploads with size limits (1 MB).
- **Validation**: 
  - **Client-side Validation**: Ensures required fields are filled out before submission.
  - **Server-side Validation**: Checks for valid email addresses, birth dates in the past, and required bio fields.
- **Photo Styling**: Displays the uploaded photo in a circular, small format using CSS.

## What I Learned

- Setting up an Express server with EJS for rendering dynamic views.
- Handling file uploads using Multer with size restrictions.
- Implementing both client-side and server-side validation to ensure data integrity.
- Styling images with CSS to create a visually appealing profile card.

## Video Demonstration

Here is a video demonstrating the functionality of the application:

<video width="640" height="360" controls>
  <source src="public/video/demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

You can download the video demonstration of the application using the link below:

[Click here to download the video](public/video/demo.mp4)

## Objective

The objective of this task is to enhance the profile form with validation features and improve user interaction:

### Steps:

1. **Extend HTML Forms**: 
   - Create a detailed profile form to capture user information and allow for file uploads.
   
2. **Client-side Validation**:
   - Use inline JavaScript to validate form fields before submission, ensuring required fields are filled out correctly.
   
3. **Server-side Validation**:
   - Implement server-side checks for form data to validate email addresses, ensure birth dates are in the past, and confirm that the bio field is not empty.
   
4. **Store Validated Data**:
   - Store the validated user data temporarily on the server-side and render it using EJS templates.
