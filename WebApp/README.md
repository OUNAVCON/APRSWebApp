# APRSWebApp
>Configuration and UI for APRS on a beagle bone black.

## Installation

* Install [Node.js](https://nodejs.org/)
* Clone the project:

```
$ git clone https://github.com/OUNAVCON/APRSWebApp.git
$ cd APRSWebApp
```

** File List **

```
.
├── bootstrap-customizations.scss
├── components
│   ├── App.jsx
│   ├── Body.jsx
│   ├── Container.jsx
│   ├── Footer.jsx
│   ├── Title.jsx
│   └── UserEntry.jsx
├── index.jsx
├── main.scss
├── openweathermap.example.js
├── openweathermap.js
├── pre-bootstrap-customizations.scss
└── tree.txt

```


 * LICENSE
 * README.md
 * RestService
     * Source code for Node.JS module - Contains Node REST service.
 * WebApp
     * app
         * Components - The React.JS components that this app is built from. 
         * index.jsx
         * main.scss

# Rest Server 
Starts a REST service that initiates the serial port task which monitors the GPS reciever.

# WebApp 

* Run NPM install:

```
$ npm install
```

* Get a [openweathermap](http://openweathermap.org/appid#get) API key
* Copy `app/openweathermap.example.js` to `app/openweathermap.js` and update with your key
* Run the app:

```
$ npm start
```

* Open a browser to `http://localhost:9600` 
* The port is specified in webpack.config.js

## License

https://github.com/OUNAVCON/APRSWebApp/blob/master/LICENSE

