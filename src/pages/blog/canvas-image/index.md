---
path: "/blog/canvas-image"
date: '2019-01-06'
title: "How displaying an image on HTML5 canvas works"
---

### A question occurs, "Why do we need an article for this Nash?"

Okay, grab a seat.

No, wait! First, have a look at this.

![From MDN's documentation of drawImage](./documentation.png)

Exactly. What was that?

`drawImage` is the method used to display or "draw" an image on `canvas`. You might, or not already know that it's not as simple as just passing the URI of the image to it. `drawImage` accepts a maximum of 9 parameters. They go something like this, ready? Hold your breath…

```js
(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```