---
layout: post
title: "Creating an Electron chat using Socket.io"
quote: "Electron is a great package, and to get started with it I created my first project based on the official Socket.io Example Chat. The goal was to create a simple, yet powerful and globally distributed chat application with basic features, such as connection and typing states for the users."
image:
      url: /media/2016-04-05-creating-electron-chat-using-socket-io/sample-chat-osx-screen.png
video: false
dark: true
comments: true
---

[Electron]() is a great package, and to get started with it I created my first project based on the [Socket.io Example Chat](). The goal was to create a simple, yet powerful and globally distributed chat application with basic features, such as **connection** and **typing** states for the users.

The Electron platform makes it easy to build the package for multiple operational systems, in this example we'll focus in the OSX and Windows binaries. I'll show you how I prepared my project to easily build new code changes to a OSX's DMG installer and a Windows Zip File (easily convertable to .exe using SFX).

You can checkout the full result and the binaries in the [GitHub repository](https://github.com/luiseduardobrito/sample-chat-electron) (don't forget to star it if you really liked)

## Project Dependencies

This project was created in NodeJS, based on the Github's Electron that powers the great Atom editor. This platform allows the developer to create a single *sort-of-web-based* project (HTML, CSS and JS), but with direct access to the NPM packages running natively using Chromium's V8 and WebKit.

All UI and graphical resources were openly available in amazing open source in the Internet and are [credited in the project's README](https://github.com/luiseduardobrito/sample-chat-electron#open-source-dependencies).

## Project Structure

```
- build/            ..........  Build system output, binaries for OSX (dmg) and Windows (zip).

- client/           ..........  Client AngularJS application based on Electron.
- - app/            ..........  Root AngularJS directory.
- - - controllers/  ..........  AngularJS controllers directory.
- - - services/     ..........  AngularJS services directory.
- - - views/        ..........  AngularJS views directory.
- - - default.js    ..........  Default constants and settings for the AngularJS application.
- - - main.js       ..........  The main AngularJS application definition.
- - css/            ..........  Stylesheets for the client application.
- - index.html      ..........  The main chat HTML document.

- config/           ..........  Configuration files for the project.
- - appdmg.json     ..........  Build configurations for OSX DMG files.
- - default.json    ..........  Default configurations for the Electron application.
- - menu.js         ..........  The main menu for the Electron application.

- docs/             ..........  Technical reference of the Socket interface for client and server.

- server/           .........   NodeJS non-graphical web server for handling the socket messages room.

```