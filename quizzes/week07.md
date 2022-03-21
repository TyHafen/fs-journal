# Advanced Front-End Frameworks


**1.** Describe the two ways to bind Data in Vue?
<!-- enter you answer in the space below -->
```

for one way data binding you can use {{}} or in html attributes you put a colon to bind the data. for two way binding you use a v-model in one spot and the {{}} in another and it becomes reactive. A good example of this is in a form. You are typing in the form and you can see somewhere else on the page, the variable is changing.

```

**2.** The `SPA` acronym stands for what?
<!-- enter you answer in the space below -->
```
Single Page Application

```
**3.** What are some of the advantages/uses of a `SPA` over a traditional one?
<!-- enter you answer in the space below -->
```
 SPA is great because unlike MPAs, you dont need to do a reload of pages every request. They are responsive and are much faster. This is becasue instead of a reload of all the data, if something on the page changes, only that data gets reloaded. Its quick and responsive.
```
**4.** What does the `onMounted` method in Vue do?
<!-- enter you answer in the space below -->
```
 onMounted invokes functions when a page is loaded up. Basically when this page is landed on, automatically invoke these functions. For us in these last few weeks thats mostly been get function to call data from the api.
```
**5.** What is the `v-model` attribute in Vue for, and when might you use it?
<!-- enter you answer in the space below -->
```

V-model is used in two way data binding. basically it binds information in a template or form, like an input, and and when it is being typed in, basically taking in data, it is displaying it to the page in real time because the input form directly correspond to the variable on the page.

```
**6.** The `v:on` (`@`) directive can be used for what?
<!-- enter you answer in the space below -->
```
This can be used for invoking a function on a click in the dom. for example if a button is clicked, or a photo is clicked on. it can invoke a certain function for you. For instance if you clicked on a card in your dom and it took you to a details page of said card image that you clicked on.

```
**7.** Which Vue attributes(directives) could you use to conditionally render elements on a page?
<!-- enter you answer in the space below -->
```
the v-if, v-else, and v-else-if. These are conditional that dictate if something will be displayed, changed, or hidden. If you clicked on an RSVP button then maybe the page would display some indication of you having RSVPd. 


```
**8.** What is the purpose of the `key` attribute when using `v-for` on an element?
<!-- enter you answer in the space below -->
```

The key is used to give each iteration of you v-for a unique property. for instance if Im using the v-for to iterate over a collection of cars, for each card Id give the key a specific variable to know what car has what cars data. usually this ends up being an id that is unique to each item in the array.

```
**9.** What is the `<slot>` element and what is it used for?
<!-- enter you answer in the space below -->
```
Slots allow you to make generic reusable components. For example with modals and forms through our last applications, The slots have allowed us to give our modals, a header, a body, and a footer,> in the footer I usually have a button. Then I can reuse the modal with the slots on each unique form, yet I still get all the elements I need while being able to change out what is unique.


```