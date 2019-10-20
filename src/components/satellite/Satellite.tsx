import React, { useEffect } from 'react';
import './Satellite.css';
import Info from '../Info/Info'

//@ts-ignore
import Modal from 'react-responsive-modal'
//@ts-ignore
import Quiz from 'react-quiz-component'

import { quiz } from './quiz'

interface SatelliteProps {
    key: Number,
    type: Number,
    lat: Number,
    lng: Number,
    text: String,
    onQuizComplete: any,
    satinfo: any
}

const Satellite: React.FC<SatelliteProps> = (props) => {
    let [open, setOpen] = React.useState(false);
    let [updatedQuiz, setQuiz] = React.useState(quiz)
    let [captured, setCaptured] = React.useState("sprite");
    let [spriteResource, setSprite] = React.useState("spritesheet.png");
    let [info, setInfo] = React.useState(false);

    useEffect(() => {
        setSprite(getSprite());
    }, [])

    let handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(captured == "sprite"){
            let newQuizState = updatedQuiz;
            newQuizState.quizTitle = "Hunt me if you can: " + props.text;
            setQuiz(newQuizState);
            setOpen(true);
        } else {
            setInfo(true);
        }
       
    }

    let onCloseModal = () => {
        setOpen(false)
    }

    let onCloseModal2 = () => {
        setInfo(false)
    }

    let customResult = (obj: any) => {
        setCaptured("sprite captured")
        return (
            <>
                <h1> You won a Solar Panel!</h1>
                <img src="retroPart.png" />
            </>
        )
    }

    let getSprite = () => {
        let key = Math.floor(Math.random() * 4)
        switch(key){
            case 0:
                return "spritesheet2.png";
            case 1:
                return "sat3_small.png";
            case 2:
                return "sat4_small.png";
            default:
                return "spritesheet.png";
        }
    }

    return(
        <>
        <Modal open={open} onClose={onCloseModal} center>
            <Quiz quiz={quiz} onComplete={props.onQuizComplete} showDefaultResult={false} customResultPage={customResult} />
        </Modal>

        <Modal open={info} onClose={onCloseModal2} center>
            <Info satinfo={props.satinfo}/>
        </Modal>
        <div className={captured} onClick={handleClick}>
            <img src={spriteResource} />
        </div>
        </>
    )
}

export default Satellite;