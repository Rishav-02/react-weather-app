// Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  //API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3becf42b4cbff88b7b328e8bdf77c687`;

  /* Axios allows you to communicate with the APIs in your React project. The same tasks can also be performed by using AJAX, but Axios provide you more functionality and features and that helps you in building your application quickly. 

  Axios is a promise-based library, so you need to implement some promise-based asynchronous HTTP requests. jQuery and AJAX also perform the same job but in React project React handles each and everything in its own virtual DOM, so there is no need to use jQuery at all.    */
  // Using Axios we make API requests in our application. Once the request is made we get the data in Return, and then we use this data in our project. 
  //if "Enter" key pressed then data fetch.
  //'data': Here, You receive data from the server in payload form. This data is returned in JSON form and parse back into a JavaScript object to you.
  // Using the .get() method to make a GET request to your endpoint, and using .then() callback to get back all of the response data.
  // The response is returned as an 'object'. Note that you can always find the requested data from the .data property in the response.

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);//update state
        console.log(response.data);
      }).catch(error => console.log(error));
      
      setLocation("");//pass empty string to reset the search option to default
    }
  };

  return (
    <div className="app">
    
      <div className="search">
        <input 
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Search Location" />
      </div>

      <div className="container">

        {/* These all dynamic JSON data comes from Weather API  */}
        <div className="top">    
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">

            <div className="feels">
              {data.main ? 
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? 
                <p className="bold">{(data.wind.speed * 1.6).toFixed()} km/h</p>: null}
              <p>Wind Speed</p>
            </div>
            <div className="clouds">
              {data.clouds ? 
                <p className="bold">{data.clouds.all.toFixed()}%</p>: null}
              <p>Cloudiness</p>
            </div>
          </div>
        )}
          <p className="name">Developed By  
          <a href="https://github.com/Rishav-02"> Rishav Raj</a></p>
      </div>
    </div>
  );
}

export default App;
