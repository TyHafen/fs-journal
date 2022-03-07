# Intro to Server side concerns with JavaScript

**1.** What do the letters of the acronym `CRUD` stand for?
<!-- enter you answer in the space below -->
```
C- create
R - read
U - update
D - delete

```
**2.** Each action that `CRUD` represents maps to an HTTP request. What HTTP request does each `CRUD` action correspond to?
<!-- enter you answer in the space below -->
```
The C action corresponds with Post. This is when you are adding an entire new object to the database. FOr example if you had an array representing  students in a class and then sometime during the new school year you had a new student join.

The R action corresponds to get. Basically this is retrieving a specific object or even the entire array from the database. This would be like looking at an entire class list or specific students information.

The u corresponds to put. like what U stands for (update) it is updating a specific property or some information on an object in the database. Maybe a students address or age has changed and it needs to be updated.

D corresponds to delete. This is a very straight forward one. It is just simply that, when you want to erase an object or information from the database.


```
**3.** What does `ORM` stand for? Which `ORM` do we use when interacting with MongoDB
<!-- enter you answer in the space below -->
```
Object Relationship Mapping! when interacting with mongo we use is mongoose. it helps with data relationships, and helps with the translation of data objects in your code to the database.


```
**4.** Which two `HTTP` request types include a body?
<!-- enter you answer in the space below -->
```
The two requests types that need a body are post and put (create and update for CRUD). the body represents the data you are trying to move to the database via the api. the api requires your data to be formatted specifically for the database and the body is basically that formatted data you are trying to store in the DB


```
**5.** In a/an _______ coding model, when you call a function, it returns only when the action has finished and stops your program for the time the action takes. Likewise in a/an _______ coding model, multiple things are allowed to happen at one time. When you perform an action, your program continues to run.  Fill in the blanks.
<!-- enter you answer in the space below -->
```
synched codes returns when an action is finished. async code allows you to run multiple actions at one time.

```

**6.** Fill in the missing piece of this snippet of code.
```js
import ______ from "_______"
let Schema = ________.Schema;
```
<!-- enter you answer in the space below -->
``` 
import mongoose from "mongoose"
const Schema = mongoose.Schema

```
**7.** What is middleware?
<!-- enter you answer in the space below -->
```
it is between the operating system and the application running it. it allows data to be passed between the two. I am thinking of the example of the knight mick showed us and the middle wear is the paths of requesting and responses of information.


```
**8.** The ______ pipeline delivers information from the client while the ______ pipeline returns it. Fill in the blanks. 
<!-- enter you answer in the space below -->
```
The request pipeline delivers info from the client and the response pipeline returns it. 

```
**9.** 
Demonstrate the pattern that is used to include a request query with the client's `HTTP` request providing the property `tag` and the value `winter`.
<!-- enter you answer in the space below -->
```
http://www.isthisarealsite.com/something?tag=winter
```