import React, { useEffect, useState } from 'react';
import './Info.css';
import { Container, Progress, Icon, Table, List} from 'nes-react'
//@ts-ignore
import { Link } from 'react-router-dom'
require('dotenv').config()

interface InfoProps {
    satinfo: any
}

const Info: React.FC<InfoProps> = (props) => {
    console.log(props)

  return (
    <div className="userprofile">
        <Container title={props.satinfo.name}> 
            <List>
                <li>Purpose 🔧: {props.satinfo.detailed_purpose} </li>
                <li>Launch Site 🚀: {props.satinfo.launch_site} </li>
                <li>Launch Date 📅: {props.satinfo.date_of_launch} </li>
                <li>Country 🌎: {props.satinfo.owner_operator_country} </li>
                <li><a href={props.satinfo.dataUrl}> More Info 🔗 </a></li>
            </List>
        </Container>
    </div>

  );
}

export default Info;