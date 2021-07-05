import {useEffect, useState} from 'react'
import '../App.css';

const ContainerDynamic = ({latitude, longitude}) => {
	
	let urlIconShowPage;
	const [city, setCity] = useState('');
	const [abbreviatonCity, setAbbreviatonCity] = useState('');
	const [urlIcon, setUrlIcon] = useState('');
	const [temperature, setTemperature] = useState(0);
	const [stateSky, setStateSky] = useState('');
	const [windSpeed, setWindSpeed] = useState(0);
	const [stateClouds, setStateClouds] = useState(0);
	const [pressure, setPressure] = useState(0);

	useEffect(()=>{
		console.log("véamos las variables");
		console.log(longitude);
		console.log(latitude);
		let API_key_Two = "31ab60a6f1437aea577f5ecbef2fdbc7";
	    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key_Two}`;

	    fetch(url)
	    .then(response => {
	      console.log(url);
	      return response.json();
	    })
	    .then(data => {
	      console.log("Veamos de la 2da aPI");
	      console.log("Veamos los datos arrojados");
	      console.log(data);
	      console.log("Al fin");
	      console.log("Veamos qué pinta");
			setCity(data.name);
			setAbbreviatonCity(data.sys.country);
			setUrlIcon(data.weather[0].icon);
			setTemperature(data.main.temp);
			setStateSky(data.weather[0].description);
			setWindSpeed(data.wind.speed);
			setPressure(data.main.pressure);
			setStateClouds(data.clouds.all);

			console.log("nubes, value: ",data.clouds.all);
			console.log("ciudad: ",city);
			console.log("abreviacion: ",abbreviatonCity);
			console.log("clima: ", temperature);
			console.log("cielo: ",stateSky);
			console.log("velocidad: ",windSpeed);
			console.log("Presion:", pressure);

			// console.log();
	      });
	}, [latitude, longitude, abbreviatonCity, temperature, stateSky, windSpeed, urlIcon, pressure, city])
	urlIconShowPage = `https://openweathermap.org/img/wn/${urlIcon}@2x.png`


	return (
		<div>
			<div className="NameApp">
				<h3>{city},{abbreviatonCity}</h3>
			</div>
			<div className="Weather">
				<div>
					<img src={urlIconShowPage} alt={"icon weather"} />
				</div>
				<div>
					{temperature}°C
				</div>
			</div>
			<div className="DescriptionWeather">
				<ul>
					<li>{stateSky}</li>
					<li>"Wind speed: {windSpeed} ms" </li>
					<li>"Clouds: {stateClouds}%" </li>
					<li>"Pressure: {pressure} mb"</li>
				</ul>
			</div>
			<div></div>
		</div>
	)
}

export default ContainerDynamic;