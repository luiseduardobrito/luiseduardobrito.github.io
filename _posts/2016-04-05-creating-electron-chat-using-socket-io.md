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

[Electron](http://electron.atom.io){:target="_blank"} is a great package, and to get started with it I created my first project based on the [Socket.io Example Chat](http://socket.io){:target="_blank"}. The goal was to create a simple, yet powerful and globally distributed chat application with basic features, such as **connection** and **typing** states for the users.

The Electron platform makes it easy to build the package for multiple operational systems, but in this example we'll focus only in the OSX and Windows binaries. I'll show you how I prepared my project to easily build new code changes to a OSX's DMG installer and a Windows Zip File (easily convertable to .exe using SFX).

You can checkout the full result and the binaries in the [GitHub repository](https://github.com/luiseduardobrito/sample-chat-electron){:target="_blank"} (don't forget to star it if you really liked)


## Features

Based on the official example in the Socket.io Documentation, we can easily create a rich chat experience, with connectivity status of the participants and typing indicators, all in real time and with low amount of data handled.

<!-- TODO: link for images in full size -->
<img src="/media/2016-04-05-creating-electron-chat-using-socket-io/sample-chat-osx-screen.png" style="max-height: 200px; max-width: 45%;" alt="Mac OSX Chat Screenshot">
<img src="/media/2016-04-05-creating-electron-chat-using-socket-io/sample-chat-win-screen.png" style="max-height: 200px; max-width: 45%;" alt="Windows Chat Screenshot">

The Socket.io also have a lot of fallback pre-implemented in the platform, such as ```flashsocket```, ```htmlfile```, ```xhr-polling``` and ```jsonp-polling``` for old browsers clients within the same room as the desktop one's.


## Project Structure

All code needed to testing is bundled in the same repository for educational purposes, both the client and the server.

Its structure is specified below:

```
- build/            ..........  Binaries for OSX (dmg) and Windows (zip).

- client/           ..........  Client AngularJS application based on Electron.
- - app/            ..........  Root AngularJS directory.
- - - controllers/  ..........  AngularJS controllers directory.
- - - services/     ..........  AngularJS services directory.
- - - views/        ..........  AngularJS views directory.
- - - default.js    ..........  Default settings for the AngularJS application.
- - - main.js       ..........  The main AngularJS application definition.
- - css/            ..........  Stylesheets for the client application.
- - index.html      ..........  The main chat HTML document.

- config/           ..........  Configuration files for the project.
- - appdmg.json     ..........  Build configurations for OSX DMG files.
- - default.json    ..........  Default configurations for the Electron application.
- - menu.js         ..........  The main menu for the Electron application.

- docs/             ..........  Technical reference of the socket interfaces.

- server/           .........   NodeJS non-graphical web server for hosting a room.

```


## Project Dependencies

This project was created in NodeJS, based on the Github's Electron that powers the great Atom editor. This platform allows the developer to create a single *sort-of-web-based* project (HTML, CSS and JS), but with direct access to the NPM packages running natively using Chromium's V8 and WebKit.

The NodeJS project dependencies are listed in the [package.json](https://github.com/luiseduardobrito/sample-chat-electron/blob/master/package.json) file in the root, and they are explained below:

```
- bower: Package manager for the browser-based dependencies,
- electron-prebuilt: Pre-built platform for running the Electron applications
- electron-rebuild: Module for building the Electron application
- electron-packager: Module for creating packages for the Electron applications
- express: Web server for the chat.
- socket.io: Socket server for the chat.
- hat: Utility for generating unique session ids
- appdmg: DMG packager (Available only under OSX environments)
```


The user interface has some Bower dependencies as well, all defined in the [bower.json](https://github.com/luiseduardobrito/sample-chat-electron/blob/master/bower.json) file. They are listed below:

```
- socket.io-client: Main socket client
- angular: Main client framework
- angular-route": Main client router
- ngstorage: Session manager for the client
- angular-socket-io: Socket client integration for AngularJS
- jquery": User interface dependency
- jquery.nicescroll": User interface dependency
- smalltalk: Nice alerts and prompt for the client
- moment: Utility for handling
```


All UI and graphical resources were openly available in amazing open source in the Internet and are [credited in the project's README](https://github.com/luiseduardobrito/sample-chat-electron#open-source-dependencies){:target="_blank"}.


## Creating binary packages

The build system is based in NPM Scripts, defined in the [package.json](https://github.com/luiseduardobrito/sample-chat-electron/blob/master/package.json) file in the root. The outputs will be placed in the ```build/``` directory.

### Installing project dependencies

To start the build process, make sure you have all needed packages by running the command:

```
npm install
```


### Building the project binaries

Now that you have all the project dependencies, run the *pack* command to create your binaries.

- Mac OSX (.app):

```
npm run pack:darwin
```

- Windows (.zip):

```
npm run pack:win32
```

If you're running in an OSX platform you can run the shortcut *pack:all* to build for both platforms at once.

```
npm run pack:all
```


### Distributing the project packages (OSX)

After the build process you should be able to create a DMG file for OSX platforms using:

```
npm run dist:darwin
```


## Download full source

The full source and docs are available in the [GitHub repository](https://github.com/luiseduardobrito/sample-chat-electron){:target="_blank"}. You can download the latest source directly from the repository using the link below:

- [Download full source (zip)](https://github.com/luiseduardobrito/sample-chat-electron/archive/master.zip){:target="_blank"}

## Download binaries

To easily test it now using the [public server hosted in Heroku](https://radiant-river-70847.herokuapp.com/api){:target="_blank"}, just grab these pre-built binaries:

- [Sample Chat for Mac OSX (.dmg)](https://github.com/luiseduardobrito/sample-chat-electron/blob/master/build/SampleChat.dmg?raw=true){:target="_blank"}
- [Sample Chat for Windows (.zip)](https://github.com/luiseduardobrito/sample-chat-electron/blob/master/build/SampleChat.zip?raw=true){:target="_blank"}