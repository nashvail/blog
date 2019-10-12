---
keywords:
- javascript
- css
- web
- html
- coding
- inheritance
- prototypal
- prototypal inheritance
- web development
- development
- nash
- nash vail
title: "JavaScript’s Prototypal Inheritance Explained Using CSS"
date: '2017-01-22'
path: "/blog/prototypal-inheritance"
description: "Prototypal inheritance was staring right at you every time you wrote CSS."
categories:
- code
---

![](./images/1.png)

Prototypal inheritance is arguably the least understood aspect of JavaScript. Well the good news is that if you understand how CSS works, you can also understand how JavaScript prototypes work.

It’s beautiful when something simple is able to explain something seemingly complex, an analogy — like a piledriver drives a pole deep into the ground, an analogy drives the point home.

I am a lover of analogies, an analogyphile.

Here we go.

## Prototypes in CSS Buttons
<br/>

![](./images/2.png)

See the two buttons above? We’re going to design them in CSS.

Let’s go ahead and quickly write styles for these two buttons, starting with `.btn`

```css
.btn {  
 min-width: 135px;  
 min-height: 45px;  
 font-family: ‘Avenir Next’, sans-serif;  
 font-size: 18px;  
 font-weight: bold;  
 letter-spacing: 1.3px;  
 color: #4D815B;  
 background-color: #FFF;  
 border: 2px solid #4D815B;  
 border-radius: 4px;   
 padding: 5px 20px;  
 cursor: pointer;  
}
```

That’s a reasonably simple block of CSS code.

Now let’s move to the styles for `.btn-solid`

```css
.btn-solid {  
 min-width: 135px;  
 min-height: 45px;  
 font-family: ‘Avenir Next’, sans-serif;  
 font-size: 18px;  
 font-weight: bold;  
 letter-spacing: 1.3px;  
 **color: #FFF;  
 background-color: #4D815B;**  
 border: 2px solid #4D815B;  
 border-radius: 4px;   
 padding: 5px 20px;  
 cursor: pointer;  
}
```

As you might have already noticed, other than the bold ones, all the other styles in `.btn-solid` are identical to that of `.btn`. And If you are familiar with [Sass](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#extend), you may know that `.btn-solid` styles can be rewritten in SASS like so:

```sass
.btn-solid {  
 @extend .btn;  
 color: #FFF;  
 background-color: #4D815B;  
}
```

![.btn-solid is a specialized version of .btn](./images/3.png)
.btn-solid is a specialized version of .btn

As you can see, `.btn-solid` inherits styles from `.btn`, then overrides some of them (font and background color) to create itself. Which leads us to the conclusion that `.btn-solid`  is a specialized version of `.btn`_._ Or, in other words, `.btn-solid` is `.btn` but with different font and background colors. That makes sense right? But wait there’s more.

Let’s say we want to create a larger button, `.btn-lg`. We’ll use `.btn` as a **prototype** to supply base styles. Then, similar to how we modified background and font colors to create `.btn-solid`, we’ll modify the font-size property to a larger value to create a larger button.

![](./images/4.png)

Both `.btn-lg` and `.btn-solid` are specialized versions of `.btn`. `.btn` supplies base styles to `.btn-lg` and `.btn-solid` which then overwrite some of the base styles to create themselves. This tells us that a single button that we decide — `.btn` in our case — can be used as a supplier of base styles to multiple items.

![](./images/5.png)

In this section, we tried to define the concept of **prototypes** for CSS buttons. A Prototype is an entity that supplies base styles, which can be extended to create different instances of buttons. This definition of a prototype is very close to what prototypes actually mean in programming terms.

In programming terms, a prototype is an object that supplies base behavior to a second object. The second object then extends this base behavior to form its own specialization. Let’s see in the next section how our knowledge of prototypes in CSS buttons maps to JavaScript.

## Prototypes in JavaScript
<br/>

Consider the following JavaScript object:

```js
let obj = {  
 a: 1  
};
```

We know that the value of `a` can be accessed by `obj.a`, given that `a` is clearly a property of `obj`. But there’s more, you can also call `obj.hasOwnProperty('a')` to check if `obj` actually has a property named `a`.

Now wait a second — from what we can see, `obj` has no property called `hasOwnProperty` defined on it. Where did `hasOwnProperty` come from? To answer this question we’ll have to go back to the buttons we just finished creating.

`.btn-solid` just has background and font colors defined on it. Where is it getting, for example, `border-radius` from? We know that `.btn-solid` is a specialization of `.btn`, so we can see that `.btn-solid` is getting styles like `border-radius`, `width`, `height`, and `padding` from `.btn`. Could it be the same with `obj`?

Just like `.btn-solid` and `.btn-lg` get their base styles from `.btn`, `obj` or any other JavaScript object for that matter receive their base behavior from **another object — **`Object.prototype`. And this `Object.prototype` has `hasOwnProperty` defined on it. And as a result, this gives `obj` access to the `hasOwnProperty` method — just like `.btn-solid` had access to `.btn`'s `border-radius` property.

![obj is a specialization of Object.Prototype](./images/6.png)

This — **an object** (obj) **inheriting its properties and base-behavior from another object** (Object.prototype) — is what we call prototypal inheritance. Notice that there is no `class` involved in the interplay.

The actual inner workings of JavaScript prototypes and our CSS “prototypes” are way different. But for the purpose of our analogy, we can ignore how they work behind the scenes.

`Object.prototype` isn’t the only prototype available in JavaScript. There’s `Array.prototype`, `Function.prototype`, `Number.prototype` and several others. The job of all these prototypes is to supply base behavior or utility methods to their instances.

For example every array declared in JavaScript has access to `.push`, `.sort`, `.forEach`, and `.map` only because of the prototypal linkage. And for the same reason every function has access to `.call`, `.apply`, `.bind`.

Prototypes and prototypal inheritance aren’t JavaScript specific. They’re a construct that JavaScript uses internally that allows us to use it in our own programs. Before we look at how exactly we can do that, we need to understand what prototypal chaining is.

## Prototypal Chaining
<br/>

We’ll need to get back to the buttons analogy for once. Let’s say I want to create a large solid button, `.btn-solid-lg`:

![](./images/7.png)

The base styles to `.btn-solid-lg` are supplied by `.btn-solid`, and `.btn-solid-lg` overwrites the font-size property to create itself.

Take a closer look though. `.btn-solid` has just two styles background-color and color (font) defined on it. This means `.btn-solid-lg` has just 3 styles for itself: background-color, color, and font-size. Where are `width`, `height`, `border-radius` coming from?

Ok, here’s a hint:

![An indecipherable hint.](./images/8.png)

If you wanted to create an extra large button `.btn-solid-xlg` you could do so with `.btn-solid-lg` as prototype. But how does all of this map to JavaScript?

In JavaScript, you’re allowed to create prototype chains too. Once you understand this, you unlock a whole set of tools to write amazingly powerful code. Yes, _amazingly powerful_.

Let’s see how prototype chains in JavaScript work.

Remember the object we created in the previous section? The one we carefully named `obj`? Did you know that you can create as many objects as you want with `obj` as a prototype?

[`Object.create`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create) lets you create a new object from a specified prototype object. This means that you can create another object, `obj2`, which has `obj` as its first prototype:

```js
let obj2 = Object.create(obj);

// Add a property 'b' to obj2  
obj2.b = 2;
```

If you have been following so far, you should realize that even though `obj2` doesn’t have a property `a` defined on it, doing `console.log(obj2.a)` won’t result in an error, but instead `1` getting logged to the console. Kind of like this:

![](./images/9.png)

When `obj2` looks for `a`, it first searches its own properties. If it can’t find the corresponding property, it asks its prototype (obj), where it finally finds `a`. If such was the case that it still couldn’t find `a`, the search would continue up the prototype chain until it reaches the last link, `Object.prototype`.

On the other hand, if `a` was defined on `obj2`, it would override all other `a`s if defined on any of its prototypes. Similar to how `.btn-solid` overrode `.btn`'s `color` and `background-color` properties. This is called **property overshadowing**.

But what about the length of prototype chain? Is there a limit?

There’s no limit to the length of prototype chain. There also aren’t any limits on branching. This means you can create multiple instances with `Object.prototype`, `obj`, or `obj2` as prototype.

![You can branch at each object as many times as you need to.](./images/10.png)

So how will this new knowledge of prototypes and prototypal chaining help you write better code?

## Writing better code with Prototypes
<br/>

The goal of this article was to explain to you what prototypes are, and how prototypal inheritance works. I hope I’ve succeeded in this.

For this last section, I’ll allow myself to go on a little rant. I hope you don’t mind.

If you look at the JavaScript code available online — whether in open source projects on Github or in pens on Codepen — you’ll find that a majority of them use the constructor pattern for creating objects.

```js
function Circle(radius) {  
  this.radius = radius;  
}

Circle.prototype.area = function() {  
  return Math.PI * this.radius * this.radius;  
}

// Constructor pattern for creating new objects  
let circ = new Circle(5);
```

The constructor pattern looks like classes. In the early days, when JavaScript was far less popular than what it is today, the `new` keyword was added as a marketing strategy.

This indirection was intended to make JavaScript seem more familiar to classically trained programmers. Though it’s debatable how successful it was in doing so, it unintentionally also obscured the true prototypal nature of the language.

The reality is that although constructors look like classes, they don’t behave like classes at all. In JavaScript, there are objects, and objects extending from other objects. Constructors and classes never come into picture. The constructor pattern unnecessarily complicates things, there’s a lot that happens [behind the scenes](https://medium.com/@nashvail/lets-settle-this-part-two-2d68e6cb7dba#.ba3x9f34o).

I implore you — now that you have a solid understanding of prototypes — to stop using the constructor pattern.

Why not do this instead?

```js
let Circle = {  
  create(radius) {  
    // Creating prototypal linkage using Object.create  
    let obj = Object.create(this);  
    obj.radius = radius;  
    return obj;  
  },  
  area() {  
    return Math.PI * this.radius * this.radius;  
  }  
};

let circ = Circle.create(5);
```

I hope this analogy has helped you better understand prototypes, prototypal chaining and prototypal inheritance with `Object.create`. Now you can write better code, and stop using pretentious classes.

Thanks for reading! If my article was helpful, click the little green heart below to recommend it, and please share this with your fellow devs.

And for further reading, check out Aadit Shah’s [Why Prototypal Inheritance Matters](http://aaditmshah.github.io/why-prototypal-inheritance-matters/).
