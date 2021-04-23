# tv_show_assessment

### Project Description
```
This web application which allows users to get details of their favourite TV-shows. The application makes 
use of open api: https://www.tvmaze.com/api.php to get the relevent data from the server.
On the TvShowDashboard page, it loads all popular shows and all shows based on genres. And the order of dispalying is based on average rating in descending Order. The user can use the search option to search for any particular show. On clicking the desired show, the user can view the details pertending to the particular show
The details of that tv show:
• Overview : name, Image,premiered, genres, rating and summary of the show
• Cast : photo, name of the artist, name of the caharacter, image of the artist.
.Season: All the seasons related to that particular show
```

### Technologies
```
Here you can see the tech stack used to develop this project
```

### Main Stack
```
- HTML5
- ECMAScript 6 (ES6)
```

### Vue
After working with other frameworks such as Angular.js , I've chosen VueJS because it's a framework that leads you to improve the structure of your code, it has a community that makes it better every day and because of the flexibility it has when changing the theme of the project.

Below I show you the packages I developed the application with:

- Vue cli (v4.5.0)
- HTTP client: Axios
- Unit testing: Jest
- Routes management: VueRouter
- Components design: Bootstrap
- Code formatters: ES-Linter




## Installations
## Vue CLI
```
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion refer the following pages.

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines ------------

1) Method Naming Convention, 
   variable, object declaration : camelCase
   Example : getAllShows(), mostratedShows() etc..

2) Folder, Js files Naming Convention: kabab-case
   Example :  card.spec.js, index.js , footer.spec.js

3) Vue files Naming Convention, component names : PascalCase
   Example : Search.vue 
 

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. BootStrap:
   Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, 
   coverageThreshold,etc for getting exact code coverage with reports.
