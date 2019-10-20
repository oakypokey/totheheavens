import React, { useEffect, useState } from 'react';
import './Userprofile.css';
import { Container, Progress, Icon } from 'nes-react'
//@ts-ignore
import { Link } from 'react-router-dom'
require('dotenv').config()



const Userprofile: React.FC = () => {

  return (
    <div className="userprofile">
        <Container> 
            <h1 className="leveltitle">Level 1</h1>
            <Progress success value={10} max ={100} />

            <img className="userImage" src="octocat.gif" />

            <div className="menuBar">
            <Container>
                <Icon className="menuIcon" large icon="star" />
                <Icon className="menuIcon" large icon="trophy" />
                <Link to="/satmap">
                <Icon className="menuIcon" large icon="star" />
                </Link>
                <br />
            </Container>
            </div>

        </Container>
    </div>

  );
}

export default Userprofile;