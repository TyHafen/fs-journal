# Application Architecture, MVC Design Pattern

**1.** What are the Pillars of Object Oriented Programming (`OOP`)?
<!-- enter you answer in the space below -->
```
    Abstraction - show only what is needed to the users
    Encapsulation - make data private 
    Inheritance - lets an object inherit the properties and methods of another, like from controller to service
    Polymorphism - use a class just like their parents.
```
**2.** How would you access the `name` of the below object using the `property` variable?
```js
let staff = {
  name: "Tim",
  age: 26,
  job: "Code Monkey"
  }
let property = 'name'
```
<!-- enter you answer in the space below -->
```
 
```
**3.** What is Encapsulation?
<!-- enter you answer in the space below -->
```
  a way to hide data or code from users.
```
**4.** What does the S stand for in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
 Single responsibility
```
**5.** What the difference between a `class` and an instance of a `class`?
<!-- enter you answer in the space below -->
```
a class is an idea of something, like blueprint, an instance of it is the actual object. An example from tjis week is a model vs a pizza or a task or list.
```
**6.** What is a `Proxy` object?
<!-- enter you answer in the space below -->
```
 a proxy object is an object that is not available to a client or user, but as a developer its how you access an object via private functions. 
```

**7.** What is the purpose of the `MVC` pattern?
<!-- enter you answer in the space below -->
```
help manage large projects. Its easy to understand a game with 20 lines of logic in one JS file, but on large projects managing the code that way would be impossible.
```
**8.** What is the job of the `Controller` in the `MVC` Pattern?
<!-- enter you answer in the space below -->
```
it gets inputs from the user in the DOM talks to the model.
```

**9.** What is the job of the `Service` in `MVC`?
<!-- enter you answer in the space below -->
```
the service holds all logic of the private functions. it receives info from the controller and then computes the logic.
```
**10.** What is the job of the `Model` in `MVC`?
<!-- enter you answer in the space below -->
```
the model is used as a blueprint for what is going to e displayed in the DOM. basically when there is user input the model is what helps tht information get constructed correctly. If you have an input of four walls, a roof and a foundation, how will the computer know what to do with that information, we have to construct and tell the computer what to do with that. 
```
