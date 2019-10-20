import React, { useEffect } from 'react';
import './SatMap.css';
import GoogleMapReact, { ChangeEventValue } from 'google-map-react'
import Satellite from '../satellite/Satellite'
import axios from 'axios'
import { Progress } from 'nes-react';
import { objectMethod } from '@babel/types';
require('dotenv').config()

const KEY: string = process.env.GOOGLE_MAP_KEY || "";

interface SatelliteProps {
    type: Number,
    lat: Number,
    lng: Number,
    text: String,
    satinfo: any
}

const SatMap: React.FC = () => {
    const [sats, setSats] = React.useState<any>([]);
    const [counter, setCounter] = React.useState<any>(0);
    const [points, setPoints] = React.useState(0);

    useEffect(() => {
        axios.get("https://ad-caelum.au-syd.mybluemix.net/satellites/above/-33.86785/151.20732/20").then((response) => {
            setSats(response.data)
            console.log(response.data)
        })

        setTimeout(() => setCounter(counter + 1), 500)
    }, [counter])

    let onQuizComplete = (obj: any) =>{
        console.log(obj)
        setPoints(points + obj.correctPoints)
    }

    const [currentPosition, setCurrentPosition] = React.useState<any>({coords:{
        longitude: 0,
        latitude: 0
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
          center={{lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude}}
          defaultZoom={3}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={getCoords}
        >

            {sats.map((sat: any, index: number) => {return <Satellite key={index} type={0} lat={sat.satlat} lng={sat.satlng} text={sat.name} onQuizComplete={onQuizComplete} satinfo={sat}/>})}

        </GoogleMapReact>

        <Progress value={points} max={3000} success />
        </div>
    );
}

export default SatMap;