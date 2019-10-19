import React from 'react';
import './Satellite.css';

interface SatelliteProps {
    type: Number,
    lat: Number,
    lng: Number,
    text: String
}

const Satellite: React.FC<SatelliteProps> = (props) => {

    let handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        alert(props.text)
    }

    return(
        <div className="sprite" onClick={handleClick}>
            <img src="spritesheet.png" />
        </div>
    )
}

export default Satellite;