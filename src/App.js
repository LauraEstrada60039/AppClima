import './App.css';
import {useEffect, useState} from 'react';
import ContainerDynamic from './Components/ContainerDynamic';

function App() {
  //Vamos a empezar a trabajar con las API's
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
    
  useEffect(()=>{

    function success(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    }

    function error() {
    alert('Unable to retrieve your location');
    }

    if(!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
  },[latitude, longitude])

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container-Weather-App">
          <h1>Weather App</h1>
          <p>Your location is: </p>
          <ContainerDynamic latitude={latitude} longitude={longitude} />
        </div>
      </header>
    </div>
  );
}

export default App;
