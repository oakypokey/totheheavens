import React from 'react';
import './SatMap.css';
import GoogleMapReact, { ChangeEventValue } from 'google-map-react'
import Satellite from '../satellite/Satellite'
require('dotenv').config()

const KEY: string = process.env.GOOGLE_MAP_KEY || "";

interface SatelliteProps {
    type: Number,
    lat: Number,
    lng: Number,
    text: String
}

const SatMap: React.FC = () => {

    const [currentPosition, setCurrentPosition] = React.useState<any>({coords:{
        longtitude: 0,
        lattitude: 0
      }});

    let defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
      };

      const getCoords = () => {
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position) => {
            setCurrentPosition(position);
          }, (error) => {alert(error.message)})
        }
      }

    return(
        <div className="maparea">
        <GoogleMapReact 
          bootstrapURLKeys={{key: KEY}}
          defaultCenter={defaultProps.center}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={getCoords}
        >
          <Satellite type={0} lat={currentPosition.coords.latitude} lng={currentPosition.coords.longitude} text="WOooP!" />
        </GoogleMapReact>
        </div>
    );
}

export default SatMap;