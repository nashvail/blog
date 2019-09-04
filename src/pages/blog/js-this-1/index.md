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
path: "/blog/js-this-1"
title: Let’s settle this — Part One
description:
  Can’t we all relate to this? At some point ‘this’ has been a thing to think
  about for almost all JavaScript developers. For me, whenever…
date: 2016-06-22
featuredImage: ./cover.png
---
https://twitter.com/bendhalpern/status/578925947245633536

Can’t we all relate to this? At some point `this` has been a thing to think about for almost all JavaScript developers. For me, whenever `this` started to rear its ugly head I somehow managed to make things work and then forgot about it, and I’d like think you did the same, at some point. But let’s be done with it, today, once and for all *dramatic drumroll* let’s settle `this`.

A couple of days ago while in a library I had an unexpected encounter.

https://twitter.com/nashvail/status/737555366846730244

The second chapter of the book is all about `this`, I read it through, felt confident, couple of pages down a scenario pops up where I need to guess what `this` is, and I mess up. That was one hell of a moment for introspection for my dumb self. I reread the chapter and then some and figured this is something every JS developer should know about.

This therefore is my attempt to present the rules [Kyle](http://getify.me/) describes in [the book](https://github.com/getify/You-Dont-Know-JS), but in a more thorough manner and with a lot more examples.

Now I am not all about theory, I will right away start with examples that tripped me and I hope they trip you too. Whether you get tripped or not I will provide an explanation and that way, one by one I will introduce you to all the rules and some bonus ones as well.

Before we start, I assume you already have some knowledge of JavaScript and know what I mean when I say `global`, `window`, `this`, `prototype` e.t.c. In this article I will be using `global` and `window` interchangeably, they necessarily are the same thing for our intents and purposes.

In all of the code examples presented below your task is to guess what will be printed to the console. If you guess right add 1 to your score. Ready? Let’s begin.

## Example #1

```js
function foo() {  
 console.log(this);   
 bar();  
}

function bar() {  
 console.log(this);   
 baz();  
}

function baz() {  
 console.log(this);   
}

foo();
```

Did you trip? For testing, you can of course copy the code and fire it in a browser or in your terminal using node. Again, did you trip? Okay I will stop asking that. But seriously, if you didn’t trip add one to your score.

If you run the code above you get the global object logged to the console, thrice. To explain this let me introduce **the very first rule,** **Default Binding.** The rule says that when a function undergoes standalone invocation i.e just `funcName();`, `this` for such functions resolves to the global object.

One thing to understand is that `this` is not bound to a function until the function is invoked, therefore, to find `this` you should pay a close attention to **how the function is called or invoked and not where**. All the three function invocations `foo(); bar();` and `baz();` are standalone invocations hence `this` for all the three functions is the global object.

## Example #2
```js
`use strict`;

function foo() {  
 console.log(this);   
 bar();  
}

function bar() {  
 console.log(this);   
 baz();  
}

function baz() {  
 console.log(this);   
}

foo();
```
Notice the `use strict` at the very top. What do you think gets printed to the console in this case? Well of course if you are aware of `strict mode` you’d know that in strict mode the global object is not eligible for default binding. So instead of `global` getting printed thrice, you get `undefined` printed thrice.

To recap, inside a function that is invoked plainly i.e standalone invocation `this` refers to the global object. Except in strict mode, where global object's default binding is not allowed hence `this` in strict mode inside such functions is `undefined`.

To make our concept of Default binding more concrete, here are a few more examples.

## Example #3
```js
function foo() {  
  function bar() {  
    console.log(this);   
  }   
  bar();  
}

foo();
```
