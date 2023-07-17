import React, {useState} from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0881bb4088aed1b106a47f79d7281353`

  const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }
  }




  return (
  //   <div className="App">
  //     <div className="container">
  //       <h1> Weather React App</h1>
  //       <Weather/>

  //    </div>
  //  </div>

  <div className="container">
     <Container fluid>
    {/* NAVBAR */}
    <Navbar expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#">Search for current weather</Navbar.Brand>
      </Container>
    </Navbar>

    <Form>
  <div className="search">
    <Form.Control size="sm" className="mt-2"
  value={location}
  onChange={event => setLocation(event.target.value)}
  placeholder="Enter Location"
  onKeyPress={searchLocation}
    type="text"/>
  </div>
  </Form>


    <div className="container">
   {/* TOP */}
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
        {data.main ? <h1>{data.main.temp}</h1> : null }
        </div>
        <div className="descriptionr">
          {data.weather? <p>{data.weather[0].main}</p> : null }

          {data.weather? <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      /> : null }
        </div>
      </div>

      {/* BOTTOM */}
      {data.name != undefined &&
        <footer className="bg-dark text-light">
        <div className="row">
        <div className="col">
        <p>Feels like</p>
          {data.main ? <p>{data.main.feels_like}</p> : null }
        </div>
        <div className="col">
        <p>Humidity</p>
          {data.main ? <p>{data.main.humidity}%</p> : null }
        </div>
        <div className="col">
        <p>Wind speed</p>
          {data.wind ? <p>{data.wind.speed} MPH</p> : null}
        </div>
      </div>
          </footer>
      }

    </div>
</Container>
    </div>
  );
}

export default App;
