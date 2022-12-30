# React Weather App

<img src="https://user-images.githubusercontent.com/100300441/209625526-35b4074c-011d-446e-844b-739613d43dfc.png" width="400"> <img src="https://user-images.githubusercontent.com/100300441/209625593-366f9c9e-2fac-4a3e-9874-9195b5c290bd.png" width="400">


Weather App built with React 
[Live Demo](https://net-reactweather.netlify.app/)

## Tech Stack Used

**React, JavaScript, HTML, CSS, API**

## Features

- **Live Weather for any city or place**
- **Find Detailed Weather of any city in understandable units**
- **Check the Humidity of any place**
- **Check the Wind Speed and Cloudiness of any place**
- **Detail Description of current weather**
## Getting Started

First you have to Install **"axios"**<br>

```bash
npm install axios
```
- **Axios allows you to communicate with the APIs in your React project.**
- **Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.**

Then you need an API key from OpenWeatherMap API, you can get one by creating an account on their website [OpenWeatherMap](https://openweathermap.org/) <br>
Click on Current weather data section in website and learn how to make API call and After you got your API key, copy the line below to the file and replace **"API key"** with your OpenWeatherMap API Key in *appid*.

```bash
https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid={API key}
```

Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/Rishav-02/react-weather-app.git
```

```bash
cd reactweather
npm install
npm start
```

## Credits

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap') (Weather data API)


[unsplash.com](https://unsplash.com/ 'unsplash.com') (Background Image)