import React from 'react';
import './MainMenu.css';
import { Container, TextInput, Button, Icon } from 'nes-react';
//@ts-ignore
import { Link } from 'react-router-dom'


const Satellite: React.FC = () => {

    let handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        
    }

    return(
        <div className="login">
            <h1>Ad Caelum</h1>
            <Container title="Login">
                <TextInput label="Username" placeholder="Buzz Aldrin" />
                <TextInput label="Password" placeholder="**********" type="password" />
                <Link to="/profile">
                <Button className="sociallogin" primary>Login</Button>
                </Link>
        
                <Button className="sociallogin">Sign Up</Button>
                <br/>
                <br/>
                <br/>
                <h1>------------------------</h1>
                <h1>Social Login</h1>
                <Icon className="sociallogin" icon="facebook" />
                <Icon className="sociallogin" icon="google" />
                <Icon className="sociallogin" icon="linkedin" />
                <br />

            </Container>
        </div>
    )
}

export default Satellite;