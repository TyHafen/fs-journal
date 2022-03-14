# Single Page Applications with Vue

**1.** What is the entrypoint of an application?
<!-- enter you answer in the space below -->
```
 the entrypoint of your app is the main.js file. It starts your vue app and ties everything together (bootstrap, mdi, touter, app.vue, and global components)

```
**2.** What is the difference between a vue `component` and `page`?
<!-- enter you answer in the space below -->
```
a page is just a page. It can hold hold information and you can add whatever data you want from your appstate. However components are little bts of code tht you can inject into a page, this can be a bootstrap card with information and with styling attached as well. what is really powerful is that a component can be a child of a page, meaning it can live on a page and be passed data from that parent page.

```
**3.** What feature of Vue can be used to repeat an element using a collection of data?
<!-- enter you answer in the space below -->
```
 you can use a v-for to repeat an element with an array of information from your appstate. If you had an array full of students, with names, ages, grades, etc you could create a component for a student and use a v-for to iterate over that information and render it to the page. 


```
**4.** What are the three tags that make up a Vue component?
<!-- enter you answer in the space below -->
```
template- this is your html that youd like to display. You can bring in Js data with binding or {{}} depending on what you are doing.

script - this is your JS and logic for things like get requests or for calling to functions in your services. Extremely handy and easier to use than MVC js files.

style- this is your css styling tag. What is cool about this tag is that all of that styling can be scoped to only apply to that compnent or page, meaning you can reuse created classes. for instance if you wanted to use 
'.background' on one page you could also do it on another page and they wouldnt effect each other if the style tag was scoped.

```
**5.** What does the `L` represent in the `SOLID` principles?
<!-- enter you answer in the space below -->
```
Liskov substitution principle- a childs properties should still be inline with the parents properties. An example would be a circle could be a subclass of ellipses, however an ellipses can be stretched along any access and in doing so would make the circle (child) requirements break.

```
**6.** Which component in Vue does the vue-router use to mount pages onto?
<!-- enter you answer in the space below -->
```
 it uses the loadpage component. When that route is selected whatever name you attached to the router link it will take that information to the router.js and find the path and then load whatever page you asked that path to follow.

```
**7.** What is the difference between the `AppState` and the state object within a component?
<!-- enter you answer in the space below -->
```
state objects within components stores values of that component. Appstate values arent local in that way. however with a v-model you can two way bind the state information to the information you have in your appstate. That way if you wanted a client to update their own profile information thats stored in the database they could do soo, without accessing anything else stored there. 

```
**9.** What is the responsibility of `Services` in our Vue projects?
<!-- enter you answer in the space below -->
```
A service is a JS file that can export information or import information using apis to get data from a database. You can also manipulate data and then go onto store it in your appstate. basically major logic components of your apps belongs in services.

```
**10.** Which file contains the root element of your Vue project?
<!-- enter you answer in the space below -->
```
your app.js contains your root element for all of your project. This is simply because it is considered the top level of your app. Everything you do will be within this file from your header, to main, and footer. your homepage will be in here, your other page routes will exist in here, and any child components that live on your pages.


```
**11.** The ______ tag is used to alter the styling of your entire Vue project.  Adding the ______ attribute to this tag will limit it to just the component it exists.  Fill in the blank.
<!-- enter you answer in the space below -->
```
style tag alters style. the scope attribute will limit the styles to only that file.

```
**12.** What is the Vue method used to create watchable objects such as `state` or `AppState`?
<!-- enter you answer in the space below -->
```
The vue method is called watchEffect. It watches every change when that data is manipulated and updates it immediately on the page. for example in the checkpoint when editing profile information before you close the modal you can see the live changes happening.

```