# Intro to JavaScript

**1.** Which keywords are used to declare a variable in JavaScript?
<!-- enter you answer in the space below -->
```
Key words to declare variables are "let", "var", and "const". depending on the situation you would use different keywords depending on scope and if you expect the variable to be manipulated or changed.
```
**2.** What is the definition of a function?
<!-- enter you answer in the space below -->
```
 A function is code that is used to preform a specific task. In most cases JS doesnt have a built in function to preform highly specific tasks so you must create your own. This code is written and then used when you invoke it.
```
**3.** What are the `SOLID` principles?
<!-- enter you answer in the space below -->
```
S) single responsibly
  dont use one function to run more than it needs to. split up functions to do certain tasks. otherwise code can get messy and become hard to debug or modify if needs be.
O) open closed 
   an example is to make sure you can push new values into arrays and without going into the array itself and modifying it from that file specifically. The latter is highly inefficient and can waste sometime rather than writing one line of code to do it for you.
L) Liskov Sub
  Do not create strict rules on your parameters so that when you go from a class to a sub class, the parent class cannot work.
I) Interface Segregation
  users do not need to depend on interfaces that do not apply to them. An example I can think of that relates is when you are filling out a form online and it requires a field that doesnt apple to you , so you have to submit an answer yet it means nothing to you and it give them incorrect info.
D) Dependency Inversion
  high level functions should not rely on low level functions. an example is do not have a low level function called "push" that simply pushes data  to an array or database. THere is no need to create such basic functions.

```
**4.** Given this array: 
```js
let fruit = ['apple', 'banana', 'pineapple',  'orange', 'strawberry']
``` 
What index is the pineapple's current position? How do you know?
<!-- enter you answer in the space below -->
```
  Arrays start at an index of 0, thus the pineapple is at index 2
```
**5.** With these two objects: 
```js
let you = { name:"You", hair: true, friends: [] }
let them = { name:"Them", hair: false, friends: [] }
```
how would you .push the `them` object into the `you` object's array of friends?
<!-- enter you answer in the space below -->
```
you.friends.push(them)
```

**6.** Give an example of a JavaScript `Conditional`:
<!-- enter you answer in the space below -->
```
 An example would be If( x > 1 ){
   do something
 }
  saying to only run that function if the condition (x being greater than 1) is true

```
**7.** In the `for loop` below, what is the name of the piece belongs inside the empty "______" space? What would you put here to increase `i` by one on every iteration?
```js
for ( let i = 0; i < arr.length; _______ ) {
  //...
```
<!-- enter you answer in the space below -->
```
 that space is the increment sign. It allows you to iterate up the array or down the array and at what interval. like every Index would be (++) or you could iterate every other by 2+.
```
**8.** What does the `DOM` acronym stand for? Which file is first accessed to render the `DOM`?
<!-- enter you answer in the space below -->
```
Document Object Model.  HTML is the first file to render in the DOM
```

**9.** What are the `9` ECMAScript types as defined by MDN?
<!-- enter you answer in the space below -->
```

```
**10.** When it comes to functions or methods, what is the difference between a `parameter` and an `argument`?
<!-- enter you answer in the space below -->
```
 parameter is what the function requires for input, arguments are what is passed to the function to invoke it.
```
**11.** What is the difference between a `primitive` value and a `reference` value?
<!-- enter you answer in the space below -->
```
reference values refer to objects while primitives do not. example of a primitive value is let string = 'Hello, world. you cannot drill into this value like you could with an object.
```