import React from 'react';

// const Location = ({city}) => {
//     //Destructuring

//     //const { city } = props;
//     //const city = props.city;

//     return (
//         /* jshint ignore:start */ // JSX is not supported
//         <div><h1>{city}</h1></div>
//         /* jshint ignore:end */
//     );
// };

const Location = ({city}) => (
        /* jshint ignore:start */ // JSX is not supported
        <div>
            <h1>
                {city}
            </h1>
        </div>
        /* jshint ignore:end */
    );

export default Location;