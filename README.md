# MERN Full Stack App


### Instructions for how to run the program

npm install, then:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Design Notes

This Employee Directory is a Full Stack MERN (MongoDB, Express, React, Node.js) app.

Front End and Back End were kept as separate as possible. That way at a future date, they could be easily split apart into separate applications. I added configurations so that running `npm install` and `npm start` would install and run both at the same time.

In the Front End I created 2 main routes, the default route of the Employee Directory list view, and a Add New Employee view.

The design of the Employee schema includes firstName, lastName, jobTitle, email and phoneNumber. With firstName, lastName and email being required, both in UI and the back end.

The application has the ability to Read, Create and Delete Employee documents.

For the visual design I used Material-UI.

### Future Plans

Add update functionality

Add search functionality

Add additional form validations

Add error handling/displaying errors to end user

Add Jest unit tests

