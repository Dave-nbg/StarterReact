import React, { useState } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('London'); // Default city is London
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const fetchWeather = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error); // Set error state with the caught error
            setLoading(false);
        }
    };

    const handleFetchWeather = () => {
        setError(null);
        fetchWeather();
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city" />
            <button onClick={handleFetchWeather}>Fetch Weather</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {weatherData && (
                <div>
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
