---
layout: post
title: "How we got started with ES6 at Devnup"
quote: "We work with a lot of Node.JS APIs in Devnup and this year we started using some harmony features from the new Node.JS v5.6+ in a Social Dating project, mainly in the Backend services. When I presented to the team our goals in this approach, I focused in the Object-Oriented goodies from the new EcmaScript 2015 (ES6), specially the Modules and Classes."
image: false
video: false
comments: true
---

We work with a lot of Node.JS APIs in [Devnup](https://devnup.solutions) and this year we started using some [*harmony features [ref]*](#) from the new Node.JS v5.6+ in a Social Dating project, mainly in the Backend services. When I presented to the team our goals in this approach, I focused in the *Object-Oriented* goodies from the new EcmaScript 2015 (ES6), specially the **Modules and Classes**. The main references in our study are listed in the end of this article, so you can follow our steps.

## Project configuration

If you're working in the Server Side, this might be the easiest part of your journey. Node.JS already supports, almost out of the box, a lot of ES6 features, as long as you code in the [*Strict Mode*](). For front-end purposes, I recommend the [Babel Compiler](https://babeljs.io/) for working with different browsers and its versions. You can also check the availability of the features natively at the [ECMAScript 6 Browser Compatibility Table](http://kangax.github.io/compat-table/es6/) from [kangax](https://kangax.github.io).

Starting by the ```package.json```, projects that use containers such as the Heroku Cedar, Docker or similar technologies may have to specify the engine that will be used.

```
{
  "name": "myapp",
  "description": "a really cool app",
  "version": "1.0.0",
  "engines": {
    "node": ">=5.6.0"
  }
}
```

For DevOps safety concerns, we also wrote a simple tool to check the current version of the engine before starting the API. The first lines of our min script as reproduced below:


```
var pkg = require('./package.json');
var EngineUtil = require('./lib/util/engine');

// Start by checking if the env support the server
EngineUtil.ensure('node', pkg.engines.node);
```

You can get the full [Engine Util module]() at the [Devnup Gitlab](http://gitlab.devnup.com/public). It requires the **[semver](https://npmjs.org/package/semver)** package, the same module NPM uses to handle dependencies versions comparisons in its CLI.

## Working with Classes

Let's start by remembering that **Javascript does not support classes like other Object-Oriented languages. Instead, Javascript can simulate classes using functions and prototype.**

Below is the new syntax to create classes, based on the *Sugar Syntax* introduced in the ES6. You will feel familiar to this way if you come from a Java background or other OO language.

```
class Project {
  constructor(name) {
    this.name = name;
  }

  start() {
    return "Project " + this.name + " starting";
  }
}

var project = new Project("Journal");
project.start(); // "Project Journal starting"
```

All the methods you declare in a class will be added to the prototype of the class.

For more information, check out these awesome resources that helped us a lot:

- [Classes Reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Learn ES2015 (Babel)](https://babeljs.io/docs/learn-es2015/)
- [ES6 Learning Guide (by ericdouglas)](https://github.com/ericdouglas/ES6-Learning)
- [ECMAScript 6 support in Mozilla (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)
