# full-stack-app


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

For the visual design I used Material-UI. I spent some time styling it to make it look more production ready.

### What I would do with more time

##### Add error handling
I originally created error actions and added them to the reducer for the GET and POST methods. My plan was to create an ErrorComponent using SnackBar from Material-UI to display the error messages.

##### Update functionality
I wanted to make a fully functional CRUD app but ran out of time on the update functionality. My original plan was to create a form component that could be used in both Update and Add Employee routes but since I ran out of time, I left the form in the AddEmployee route for now.

##### Form validations
I added HTML validations for the required fields but wanted to add react/redux form validations to do that, in addition to validating on minLength and format for email and phone number.

##### Search
I worked on adding this and was real close to having it fully functional but ended up having to pull it out. 

##### Tests
I wanted to add some basic Jest unit tests.
 
