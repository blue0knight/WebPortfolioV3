# Bootstrap 4.3.1 with Sass and Gulp 4 Boilerplate
A Bootstrap 4.3.1 boilerplate with sass, gulp 4 tasks, browserSync

## Pre-requisite
- [Node.js](https://nodejs.org/en/download/ "Node Js")
- NPM (Comes with Node.js)
- [Gulp](https://gulpjs.com/ "Gulp")

## Dev Dependencies
    "autoprefixer": "^9.5.1",
    "bootstrap": "^4.3.1",
    "browser-sync": "^2.26.5",
    "cssnano": "^4.1.10",
    "gulp": "^4.0.1",
    "gulp-postcss": "^8.0.0",
    "gulp-rename": "^1.4.0",
    "gulp-sass": "^4.0.2",
    "gulp-sourcemaps": "^2.6.5",
    "gulp-uglify": "^3.0.2",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0"

Install Gulp Globally

    $ npm -g install gulp

## Getting started

1. Clone repository:
`git clone https://github.com/blue0knight/bootstrap-4.3.1-sass-gulp4-boilerplate`

2. Change directory:
`cd bootstrap-4.3.1-sass-gulp4-boilerplate`
    
3. Install all dependencies and libraries:
`npm install`

4. Run Gulp Task:
  - `gulp style`      - To move scss files from node_modules, compile scss to css, minify css, and rename styles.css to    styles.min.css folder.
  
  - `gulp script`     - To move js files from node_modules to js

  - `gulp watch`      - To start a local server with browserSync and hot reloading on changes to files (HTML, SCSS, JS).

  - `gulp`            - To run style, script and watch parallel tasks
   
