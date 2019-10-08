---
keywords:
- javascript
- this
- code
- explanation
- front-end
- web development
- nash
- nash vail
path: "/blog/js-this-2"
title: Let’s settle this - II
description: "A huge collection of examples to help you understand JavaScript's infamous this keyword. Part Two."
date: 2016-06-22
featuredImage: ./images/cover.png
categories:
- code
---


Hey! Welcome to part two of Let’s settle ‘this’ where we are trying to demystify one of JavaScript’s least understood aspect — the ‘this’ keyword. If you haven’t checked out [part one](/blog/js-this-1) yet you might want to do so. In Part One we went over Default and Implicit binding rules through 15 different examples. We saw how the value of ‘this’ for a function changes depending on how the function is invoked. Towards the end we also familiarized ourselves with arrow functions and how they undergo lexical binding. I hope you remember everything.

In this part we will be discussing two new rules, beginning with _new_ binding, we will get into innards and see how everything works. Next we will go over explicit binding and how we can bind any object as `this` to any function through the `call(…)`, `apply(…)` and `bind(…)` methods.

Let us continue where we left off. Your task is the same, to guess what gets logged to the console. Remember WGL?

But before we dive in, let’s warm up a little.

## Example #16
<br/>

```js
function foo() {}

foo.a = 2;  
foo.bar = {  
 b: 3,  
 c: function() {  
  console.log(this);  
 }   
}

foo.bar.c();
```

I know right now you’re like “What’s going on? Why are properties being assigned to a function here? Won’t this result in an error?”. Well, no first of all this will not result in an error. Every function in JavaScript is also an object. So like any other regular objects you can assign properties to a function too!

With that out of the way let’s now figure out what gets logged to the console. If you notice, Implicit binding is at work here. The object reference directly preceding `c’`s invocation is `bar` isn’t it? Therefore `this` inside `c` is `bar` and hence `bar` is  what gets logged to the console.

The one thing you should carry away from this example is that functions in JavaScript are also objects and like any other objects they can be assigned properties.

## Example #17
<br/>

```js
function foo() {  
 console.log(this);  
}

new foo();
```

So, what gets logged? Or does anything gets logged at all?

The answer is an empty object. Yes, not `a` not `foo` just an empty object. Let us see how that works.

First of all notice **`how`** the function is invoked. It’s not a standalone invocation nor it has an object reference preceding it. What it has though is `new` in front of the call. Any function in JavaScript can be invoked with a `new` keyword in front of it. And when that happens, when a function is invoked with `new` roughly four events occur, two of which are,

1.  An empty object is created.
2.  The newly created object is bound as `this` to the function call.

And that (2.) is the reason why when you execute the piece of code shown above you get an empty object logged to the console. You might ask “How is this even useful?”. We’ll get to that it’s all a little controversial.

## Example #18
<br/>

```js
function foo(id, name) {  
 this.id = id;  
 this.name = name;  
}

foo.prototype.print = function() {  
 console.log( this.id, this.name );  
};

var a = new foo(1, "A");  
var b = new foo(2, "B");

a.print();  
b.print();
```

Intuitively it’s very easy to guess what gets logged to the console in this example, but are you right technically? Let’s see.

To recap, when a function is invoked with the `new` keyword four events occur.

1.  An empty object is created.
2.  The newly created object is bound as `this` to the function call.
3.  **The newly created object is prototypically linked to function’s prototype object.**
4.  **The function is executed normally and at the end the newly created object is returned\*.**

We have verified in the previous example that the first 2 events in fact happen, that is why we got an empty object logged to the console. Forget about 3 for now let’s focus on the 4th event. There is nothing stopping the function’s execution, the function is executed with its parameters as any other normal JavaScript function except for the fact that ‘this’ inside the function is a newly created empty object. So when inside the function, `foo` in our case, we do something like `this.id = id` **we are actually assigning properties to the newly created empty object that was bound as ‘this’ to the function on call**. Read that again. And once the function has finished executing **the same newly created object is returned**. Since in the example above we assigned an `id` and a `name` property to the object the returned object has those as well. The returned object then can be assigned to whatever we want like we did to `a` and `b` in the example above.

Every function call with `new` results in creation of a brand new empty object, its optional augmentation (`this.propName = …)` inside the function and its return at the end of function execution. Therefore in the end our variables `a` and `b` look something like this.

```js
var a = {  
 id: 1,  
 name: "A"
};

var b = {  
 id: 2,  
 name: "B"
};
```

Great! we have just learnt a new way for creating objects. But `a` and `b` have something in common, they are both **prototypically linked to `foo`’s prototype** (event 4) and therefore have access to its properties ( variables, functions e.t.c ). And just because of that we can call `a.print()` and `b.print()` since `print` is a function we created in `foo`’s prototype. Quick question, what binding occurs when I call `a.print()`? You’re absolutely right if you said Implicit. Therefore, on calling `a.print()` ‘this’ inside `print` is `a` and the first thing to get logged to the console is `1, A` and similarly when we call `b.print() 2, B` gets logged.

## Example #19
<br/>

```js
function foo(id, name) {  
 this.id = id;  
 this.name = name;

 return {  
  message: "Got you!"
 };  
}

foo.prototype.print = function() {  
 console.log( this.id, this.name );  
};

var a = new foo(1, "A");  
var b = new foo(2, "B");

console.log( a );  
console.log( b );
```

Almost everything is same as the code in the previous example except notice that `foo` now returns an object. Alright, do one thing go back to the previous example and re read the 4th event would you? Notice the **\***? When a function is called with the `new` keyword the newly created object is returned at the end of execution **unless** you return your own custom object like we are doing in this example.

So? What gets logged? It’s very obvious to see that it’s the returned object the one with the `message` property that gets logged to the console, twice. It’s so easy to break the whole construct isn’t it? Just return a meaningless object and everything fails. Moreover you now cannot call `a.print()` or `b.print()` since `a` and `b` are assigned what is returned and our returned object is not prototypically linked to `foo`’s prototype.

But wait what if instead of returning an object we returned a string like `‘abc’` or a number or a boolean value or a function or null or undefined or an array? As it turns out whether the construct breaks or not depends on what you return. See a pattern here?

```js
return {}; // Breaks  
return function() {}; // Breaks  
return new Number(3); // Breaks  
return [1, 2, 3]; // Breaks  
return null; // Doesn’t break  
return undefined; // Doesn’t break  
return "Hello"; // Doesn’t break  
return 3; // Doesn’t break  
...
```

Why this happens is a topic for another article. I mean we are already a little off course here, this example has not much to with `this` binding right?

The whole creating objects through `new` binding has been and being used (misused?) to fake traditional classes in JavaScript since long. In reality there are no classes in JavaScript the new `class` syntax in ES2015 is just that, syntax. Behind the scenes `new` binding is what happens there is no change there. I for one don’t care if you use `new` binding to fake classes until your program works and the code is extensible, readable and maintainable. But then again how can you have extensible, readable and maintainable code with all the package and fragility `new` binding brings?

That might have been a lot to take in. You should re read it if you’re still a little lost. It’s important that you understand how `new` binding works probably to never use it again :).

Enough serious talk, let’s move on.

Consider the code below. Refrain yourself from guessing what gets logged in this example, we’ll continue “the guessing game” from the next example onwards :).

```js
var expenses = {  
 data: [1, 2, 3, 4, 5],  
 total: function(earnings) {  
  return this.data.reduce( (prev, cur) => prev + cur ) — (earnings || 0);  
 }  
};

var rents = {  
 data: [1, 2, 3, 4] 
};
```

The `expenses` object has `data` and `total` properties`. data` holds some numbers whereas `total` is a function that takes in `earnings` as a parameter and returns the sum of all numbers in `data` minus the `earnings.` Very straightforward.

Now look at `rents,` just like expenses it has a `data` property too. Now say, for some reason, just being hypothetical here, you’d like to run the `total` function over `rent`’s `data` array and since we’re good programmers we don’t like repeating ourselves. We definitely can’t do `rents.total()` and have `rents` implicitly bound as ‘this’ to the `total` function since `rents.total()` is an invalid call owing to the fact that `rents` has no property called `total.` Now only if there was a way to bind `rents` as ‘this’ to the `total` function. Well guess what? There is, allow me to introduce you to `call()` and `apply().`

You see `call` and `apply` do the exact same thing, they allow you to bind the object you want to the function you want. Which means I can do this…

```js
console.log( expenses.total.call(rents) ); // 10
```

.. .and this.

```js
console.log( expenses.total.apply(rents) ); // 10
```

Which is great! Both of the above lines of code result in `total` being called with ‘this’ as the `rents` object. `call` and `apply` as far as ‘this’ binding is concerned only differ in the way you pass in arguments.

Notice that the function `total` takes in an argument `earnings,` let’s pass it.

```js
console.log( expenses.total.call(rents, 10) ); // 0 Works!  
console.log( expenses.total.apply(rents, 10) ); // Error
```

Passing arguments to the target function (`total` in our case) via `call` is simple you just pass in a comma separated list of arguments like to any other JavaScript function `.call(customThis, arg1, arg2, arg3…).` In the code above we passed in 10 for the `earnings` parameter and everything worked as expected.

`apply` though requires you to pass in arguments to the target function (`total` in our case) wrapped in an array `.apply(customThis, \[arg1,arg2, arg3…\]) W`hich notice we didn’t do in the snippet above resulting in an error. The error can definitely be fixed by wrapping arguments for the target function in an array, like so.

```js
console.log( expenses.total.apply(rents, [10]) ); // 0 Works!
```

The mnemonic I use to remember the difference between `call` and `apply` goes something like this. A is for **`a`**`pply`  and A is for **a**rray as well! So arguments to the target function via **`a`**`pply` are passed in wrapped in an **a**rray. Just a stupid little mnemonic, but it works 😬.

Now what if we pass in a number or a string or a boolean value or null/undefined instead of an object literal for ‘this’ to **`call`**`,` **`apply`**  and  **`bind`**  (discussed next)`.` What happens then? Nothing much, say if you pass in a number 2 for ‘this’ it gets wrapped in its object form `new Number(2)` similarly if you pass in a string it becomes `new String(…)` boolean values become `new Boolean(…)` so on and so forth and this new object whether String or Number or Boolean gets bound as ‘this’ to the called function. Passing in `null` and `undefined` though results in something different. If you pass in `null` or `undefined` for `this` the function is called as if it underwent Default binding which means the global object is bound as ‘this’ to the called function.

There’s yet another way to bind `this` to a function, this time through a method called, wait for it, `bind`!

Let’s see if you can figure this out. What gets logged in the example below?

## Example #20
<br/>

```js
var expenses = {  
 data: [1, 2, 3, 4, 5],  
 total: function(earnings) {  
  return this.data.reduce( (prev, cur) => prev + cur ) - (earnings   || 0);  
 }  
};

var rents = {  
 data: [1, 2, 3, 4]  
};

var rentsTotal = expenses.total.bind(rents);

console.log(rentsTotal());  
console.log(rentsTotal(10));
```

The answer to this example is 10 followed by 0. Notice what’s happening right below the declaration of `rents` object. We are creating a new function `rentsTotal` from the function `expenses.total.` That’s what `bind` does it creates a new function which when called has its ‘this’ keyword set to the provided value (`rents` in our case). Therefore when we call `rentsTotal()` which though is a standalone invocation has its ‘this’ already set to `rents` and Default Binding cannot override that. This call results in 10 getting printed to the console.

In the next line calling `rentsTotal` with a parameter (10) is exactly like calling `expenses.total` with the same paramter (10) it is only in the value of ‘this’ where they differ. The result of this call is 0.

Moreover you can also bind parameters for the target function (gexpenses.total` in our case) using `bind.` Consider this.

```js
var rentsTotal = expenses.total.bind(rents, 10);  
console.log(rentsTotal());
```

What do you think gets logged to the console? 0 of course as 10 has been bound to the target function (`expenses.total)` as `earnings` by `bind.`

Let us take a look at an example that illustrates a real life usage of `bind.`

## Example #21
<br/>

```html
<!--HTML-->
<button id=”button”>Hello</button>
```

```js
// JavaScript

var myButton = {  
 elem: document.getElementById("button"),  
 buttonName: "My Precious Button",  
 init: function() {  
  this.elem.addEventListener("click", this.onClick);  
 },  
 onClick: function() {  
  console.log(this.buttonName);  
 }  
};

myButton.init();
```

We have created a button in HTML and then we’re targeting that same button in our JavaScript code as `myButton.` Notice inside `init` we are also attaching a click event listener to the button.Your question now is what gets logged to the console when the button is clicked?

If you guessed it right `undefined` is what gets logged. The reason for this “sorcery” is that functions passed as callback (`this.onClick` in our case) to event listeners has the target element bound as ‘this’ to them. Which means when `onClick` is called ‘this’ inside it is the DOM object button (`elem`)  and not our `myButton` object and because the DOM object button has no property with the name `buttonName` it results in `undefined` being logged to the console.

But there is a way to fix this (pun intended). All we need to do is add one, just one extra line of code.

## Fix #1
<br/>

```js
var myButton = {  
 elem: document.getElementById("button"),  
 buttonName: "My Precious Button",  
 init: function() {  
  **this.onClick = this.onClick.bind(this);**  
  this.elem.addEventListener("click", this.onClick);  
 },  
 onClick: function() {  
  console.log(this.buttonName);  
 }  
};
```

Notice in the previous snippet (#21) the way function `init` is invoked. Exactly, Implicit binding binds `myButton` as `this` to the `init` function. Now notice how in the new line we are binding `myButton` to the the `onClick` function. Doing so creates a new function which is exactly `onClick` except for the fact that it has its ‘this’ as `myButton` object`.` The newly created function then is reassigned to `myButton.onClick.` That’s all, when you click the button now you’ll have “My Precious Button” logged to the console.

You could have fixed the code with arrow functions too. Here’s how. I will leave it up to you to figure why these work.

## Fix #2
<br/>

```js
var myButton = {  
 elem: document.getElementById("button"),  
 buttonName: "My Precious Button",  
 init: function() {  
  this.elem.addEventListener("click", () => {  
   this.onClick.call(this);  
  });  
 },  
 onClick: function() {  
 console.log(this.buttonName);  
 }  
};
```

## Fix #3
<br/>

```js
var myButton = {  
 elem: document.getElementById("button"),  
 buttonName: "My Precious Button",  
 init: function() {  
  this.elem.addEventListener("click", () => {  
   console.log(this.buttonName);  
  });  
 }  
};
```

That’s it. We’re done… almost. There are still questions like is there an order of precedence? What if there is a clash between two rules trying to bind a ‘this’ to the same function? This is a topic for another article. Part 3? Probably and to be honest it’s rare you’ll run into such clashes. So for now we’re done and let’s summarize what we have learnt in the two parts.

## Summary
<br/>

In the first part we saw how `this` for a function is not fixed and can change depending on how the function is invoked. We went over Default binding which applies when a function undergoes standalone invocation, Implicit binding which applies when a function is invoked with an object reference preceding it and arrow functions and how ‘this’ to them are bound lexically. Towards the end of the first part we also went over a self referencing quirk in JavaScript objects.

In this part we started out with `new` binding and how it works and how the whole construct can easily be broken. Latter half of this part was dedicated to explicitly binding ‘this’ to functions using `call, apply` and `bind.` I also embarrassingly shared my mnemonic with you about how to remember the difference between `call` and `apply.` Hope you remember it.