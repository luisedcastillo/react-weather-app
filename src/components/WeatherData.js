import React from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherTemperature from './WeatherTemperature';


const WeaterData = () => (
    /* jshint ignore:start */ // JSX is not supported
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherInfo></WeatherInfo>
    </div>
    /* jshint ignore:end */
);

export default WeaterData;