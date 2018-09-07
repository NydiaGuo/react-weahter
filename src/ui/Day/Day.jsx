import React from 'react'


const Day = (props) => {
    return (
        <div>
            <h3> Forecast </h3>
            <p>Temp: {props.temp}</p>
        </div>
    )
}

export default Day