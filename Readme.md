npm init
npm i body-parser morgan nodemon express sequelize pg --save
json - set up start
post-man:
body - raw - json(application/json)

____________
Requirements: Create MD File
(Utilize Volleyball)
app.js

List of requirements

Express - Using models and routes
Defining Models

_______

Student Model:
First Name
-String
-Do not allow Null value
Last Name
-String
-Do not allow Null value
Email
-String
-Do not allow Null value
-Validate data is in fact email
Hook
-Before validate, capitalize first letter in first name and last name values

Instance Methods:
getInitials
-Returns students initials

_______

Test Model:
subject
-String
-Do not allow Null value
grade
-Integer
-Do not allow Null value

Class Methods:
passing
-Returns all tests with grade above 70
findByType
-Returns all tests for a particular subject

_______

Student Routes:
-Get all students, send back instance of students along with status of 200
-Post a new student - send back instance of new student along with status of 201
-update a student
-delete student
-returns student initials only
_______

Test Routes:
-Get all tests, send back instance of students along with status of 200
-Get all tests with passing grades, send back status 200 along with instances of passing tests
-Get all tests in a particular subject
-Get test by id, set status as 201 and return instance of test
-Post a new test, use route indicating the id of the student that took the test, create new test and associate / place the studentId on the table with the tst
-Delete test

