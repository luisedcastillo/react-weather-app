import React from 'react';

const WeatherInfo = ({humidity, wind}) => (
    /* jshint ignore:start */ // JSX is not supported
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`}</span>
    </div>
    /* jshint ignore:end */
);

export default WeatherInfo;