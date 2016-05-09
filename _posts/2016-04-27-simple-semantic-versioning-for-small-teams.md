---
layout: post
title: "Simple Semantic Versioning for small teams"
quote: "In the world of software management there exists a dread place called 'dependency hell'. The bigger your system grows and the more packages you integrate into your software, the more likely you are to find yourself, one day, in this pit of despair"
video: false
dark: false
comments: true
---

One of the greatest challenges we have in our teams at [Devnup](https://devnup.solutions) is handling multiple depending projects at once. Our architecture is based in breaking the problems into small, independent and single-purposed micro services. It's a widely embraced idea, we have different parts of the software in different machines working together, such as images servers, push notifications workers and chatting socket rooms. The whole farm of machines works as a single distributed system, delivering to our customers an unified user experience.

One of the most important protocols we are using today is the [Semantic Versioning (semver)](https://semver.org) According to the author of the specification, and succinctly put, the purpose of **semver** is to avoid “dependency hell”:

> *"In the world of software management there exists a dread place called 'dependency hell.' The bigger your system grows and the more packages you integrate into your software, the more likely you are to find yourself, one day, in this pit of despair"* - **Tom Preston-Werner**, inventor of Gravatars and cofounder of GitHub.

So in ebery an application that is required from another one, generally located outside of the its context, the package manager also specifies the module version it is looking for in the packages repository. So, if we updates the dependant package, the callers will notice it changed, and use an outdated version (for compatibility) or update the packages to use the newest available if within range. For example, if I need a version higher than v0.2.0, I can specify as "v0.2+", and if a new version is released, let's say "v0.2.5", it will be automatically updated in the next build of the package that depends on it.