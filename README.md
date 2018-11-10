# MyReads Project by Vijay for Udacity's Frontend-Nanodegree

## Table of contents

* [Overview](#overview)
* [Features added](#features-added)
* [Instructions](#instructions)
* [Contents](#contents)
* [References](#references)

## Overview

This **MyReads** project is developed from the starter template for Udacity's Frontend-Nanodegree. 
The template provides static example of the CSS and HTML markup and we convert that to React App, 
add interactivity to the app by refactoring the static code using ReactJS.

## Features added

Per project [rubric](https://review.udacity.com/#!/rubrics/918/view), added below features

1. Make the application easy to install and start
2. Add Main page which lists books currently reading, want to read or read already
3. Add Search page to find and add books to read list
4. Ability to update shelf of books between currently reading, want to read and read
5. Ability to navigate between main and search pages

## Instructions

1. Download the application from this [link](https://github.com/vjremo/MyReads/releases), extract it to local folder.
2. In the extracted folder, install app and start Node.js server to launch the app

**NOTE** npm makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that you’re sharing, so you can build amazing things.
npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.
f you don't have npm installed, navigate to Node.js's [website](https://www.npmjs.com/get-npm) to download and install the software.

Follow steps below after installing npm:

* From Node.js command prompt, navigate to extracted folder 
* install all project dependencies with `npm install`
* start the server and launch app with `npm start`

## Contents

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html #  Main HTML page rendered from React
└── src
    ├── App.css # Styles for app. 
    ├── App.js # This is the root of app.
    ├── ListBooks.js # Main component which renders book list placed in shelves
    ├── SearchBook.js # Search component to find and add book to shelves
    ├── Shelf.js # Shelf component to render each bookshelf
    ├── Book.js # Book component to render each book
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # Used for DOM rendering using 'react-router-dom'.
```

## Backend Server

To simplify development process, Udacity has provided backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## References

* Source [repository](https://github.com/udacity/reactnd-project-myreads-starter) by Udacity
* Node package manger - [npm](https://www.npmjs.com/get-npm)
* npm sort-by[Link](https://www.npmjs.com/package/sort-by)
* react-router-dom [Link](https://reacttraining.com/react-router/core/guides/philosophy)
* Ryan Waite's project tutorial[Link](https://www.youtube.com/watch?v=acJHkd6K5kI&t=4158s)