import './App.css';
import {useEffect, useState} from 'react'
import ContainerDynamic from './Components/ContainerDynamic'

function App() {
  //Vamos a empezar a trabajar con las API's
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  //Sabemos que la API nos traerá la información en °C porque se le indicó en la url del API
  const [celsius, setCelsius] = useState(1); //1 on, 0 off
  
  useEffect(()=>{

    function success(position) {
    console.log("Imprimo position");
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

    console.log(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
    alert('Unable to retrieve your location');
    }

    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
  },[latitude, longitude])

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container-Weather-App">
          <h1>Weather App</h1>
          <ContainerDynamic latitude={latitude} longitude={longitude} />
          <button onClick={(celsius)=>{
            if(celsius===1){
              console.log("celsius amix")
            }  
            else {
              console.log("farenheigt amix")
            }
        }} >Degrees °F/°C</button>
        </div>
      </header>
    </div>
  );
}

export default App;
