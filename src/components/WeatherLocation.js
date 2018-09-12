import React from 'react';
import Location from './Locartion';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    /* jshint ignore:start */ // JSX is not supported
    <div>
        Weather Location
        <Location city={'Chihuahua'}></Location>
        <WeatherData></WeatherData>
    </div>
    /* jshint ignore:end */
);

export default WeatherLocation;
