---
layout: post
title: "Creating an Electron chat using Socket.io"
quote: "[Electron]() is a great package, and to get started with it I created my first project based on the [Socket.io Example Chat](). The goal was to create a simple, yet powerful and globally distributed chat application with basic features, such as connection and typing states for the users."
image:
      url: /media/2016-04-05-creating-electron-chat-using-socket-io/sample-chat-osx-screen.png
video: false
comments: true
---

[Electron]() is a great package, and to get started with it I created my first project based on the [Socket.io Example Chat](). The goal was to create a simple, yet powerful and globally distributed chat application with basic features, such as **connection** and **typing** states for the users.

The Electron platform makes it easy to build the package for multiple operational systems, in this example we'll focus in the OSX and Windows binaries. I'll show you how I prepared my project to easily build new code changes to a OSX's DMG installer and a Windows Zip File (easily convertable to .exe using SFX).

You can checkout the full result and the binaries in the [GitHub repository](https://github.com/luiseduardobrito/sample-chat-electron) (don't forget to star it if you really liked)

## Project Dependencies

This project was created in NodeJS, based on the Github's Electron that powers the great Atom editor. This platform allows the developer to create a single *sort-of-web-based* project (HTML, CSS and JS), but with direct access to the NPM packages running natively using Chromium's V8 and WebKit.


## Project Structure