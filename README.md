# MERN full-stack-app


### Instructions for how to run the program

npm install, then:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Design Notes

This Employee Directory is a Full Stack MERN (MongoDB, Express, React, Node.js) app.

I kept the front end and back end as separate as possible. That way at a future date, they could be easily split apart into separate applications. I also added configuration so that running `npm install` and `npm start` would install and run both applications.

In the UI I created 2 main routes, the default route of the Employee Directory view, and a form to add a new employee to the directory.

The design of the Employee model included firstName, lastName, jobTitle, email and phoneNumber. I made firstName, lastName and email required, both on UI and backend.

The application has the ability to Read, Create and Delete Employee documents.

For the visual design I used Material-UI.
 
