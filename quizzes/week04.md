# UnderStanding Asynchronous Code, and API's

**1.** What is the difference between `asynchronous` code and `synchronous` code?
<!-- enter you answer in the space below -->
```
Synchronous code is when one task is done at a time. One task must end before another one starts. Asynchronous code however creates efficiency because you can deal with multiple tasks all at the same time. This help s you finish tasks far sooner than with synched code. Asynch is only used when you are performing individual tasks however. knowing what task depends on another is huge. once again the rice crispy analogy, the task of eating it has to come after it iss fetched.

```
**2.** What is an event listener?
<!-- enter you answer in the space below -->
```
An event listener is a function that waits for an action from a client or user. for example a button on the page being pressed. it has to requirements, one being something to listen for and a function to be called when the targeted event happens. 


```
**3.** What does the `O` represent in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
The O stands for Open closed principle. It is open for extension, but closed for modification. To my understanding when you are modifying a function to expand its ability, it can trow errors and bugs into the workings of the function. The example I saw explained it as a function trying to calculate the area of a triangle. then modifying it to try and find the area of a square. when all along it could be created to find the area of a shape in general.

```
**4.** What is a callback / higher order function?
<!-- enter you answer in the space below -->
```
A callback is a function that is passed ino a function as an argument. A higher order function is one that takes a function in as an argument, a first order function is one that doesnt take in a function as an argument. this is used when one fucntion needs to be triggered after another one but also relies on the first. It a way to tiethem together.

```
**5.** What is a `promise`? How do you capture an error from a `promise`?
<!-- enter you answer in the space below -->
```
A promise is an operation that isnt complete yet. using a try catch you can try an operation, and if it doesnt work you can 'catch' it. This means throwing a specific error if the operation cant take place. Basically the promise is an operation says 'yes I can do that maybe, hold on!' and it comes back and says 'here is what you needed' (try) or 'hey I couldnt do that for you and here is why' (catch)

```
**6.** Name three processes used to make requests over `HTTP`?
<!-- enter you answer in the space below -->
```
Post- Post is when you are pushing something into the API with all of the requirements it is asking for. For example wwith our own personal pokedex we posted those captured pokemon into our API to save them


Put-This is when you are 'updating' or changing a property on an object or array in an API. like if a pokemon has leveled up you would 'put' its level up to 2 from 1. Just updating really.


get- This is when you are pulling information down from the API. for example this weeks checkpoint we got information from a weather API and it had tons of information to choose from. If you want to get just one bit of information, or all of it, this allows you to do so.

```
**7.** What does the `API` acronym stand for?
<!-- enter you answer in the space below -->
```
it stands for Application Programming Interface. Its a way for your app to be used by others without them knowing how it works. For an example I have no idea how the weather API gets its own information, but that not something I care about. I care about using the information of the said application.
```
**8.** In the `MVC` design pattern, who is responsible for making calls to `APIs`?
<!-- enter you answer in the space below -->
```
The service is responsible for making calls to the APIs. The service is in the controller part of the MVC pattern, which is part of the controller. It basically dictates what the viewer sees and interacts with the model.



```
**9.** What is the purpose of encapsulation in programming?
<!-- enter you answer in the space below -->
```
It is keeping all data, and the methods that manipulate that data in the same bits of code. Kind of in hand with the single responsibility, which means have one function to every operation, like if you have a clock function dont calculate a total for something else in the code, like tallying tasks or something. The encapsulation is the opposite in the fact that you dont spread out operations of certain functions or data. It makes it harder to move around the code and see whats going on.


```
**10.** What is `HTTP` response code for a successful request?
<!-- enter you answer in the space below -->
```
a 200s message is the response to a good request, each one means something different. typically youll get a 200 OK message that means you are good to go.
```
**11.** What is a 500 error?
<!-- enter you answer in the space below -->
```
a 500 message means the server failed to complete a task for you. it could be something like the server is down, to timesouts, to not being able to fulfill the request.


```