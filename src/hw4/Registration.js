import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Timer from '../hw4/Timer';

const Registration = ()=>{
    
    const showWinner = useSelector(store => store.showWinner.showWinner);
    const dispatch = useDispatch();
    
    const [registered, setRegistered] = useState(false);
    const [participant, setParticipant] = useState({});
    const [time, setTime] = useState('');
    const [disabledCancel, setDisabledCancel] = useState(false);
    const [disabledSave, setDisabledSave] = useState(true);


    const Winner = () =>{
        return {
            type: 'WINNER',
        }
    }

    const RegisterParticipant = (participant)=>{
    
        return{
            type: "ADD_PARTICIPANT",
            payload: participant
        }
    };

    const HandelSave = ()=>{
        if(time.length > 0) {
            const p = {...participant, time};
                dispatch(RegisterParticipant(p));
                setRegistered(false);
                setParticipant({});
            if(showWinner) dispatch(Winner());
        }else console.log('not time');
    };

    const HandelCancel = ()=>{
        setParticipant({});
        setRegistered(false);
    };

    const HandelSubmit = (e)=>{
        
        e.preventDefault();

        const {name, surname} = e.target;

        if(name.value.length > 0 && surname.value.length > 0){

            const participant = {
                id: Date.now(),
                name: name.value,
                surname: surname.value,
                time: time,
            }
            setRegistered(true);
            setParticipant(participant);
        }else{
            setRegistered(false);
            console.log('Fill rigth form!!!');
        }
    };
    
    return(
    <div className='registration'>{
        !registered ?
        <form onSubmit={HandelSubmit} className='registeredForm'>
            <input
                type='text'
                name='name'
                placeholder='Enter name...'
            />
            <input
                type='text'
                name='surname' 
                placeholder='Enter surname...'
            />
            <button type='submit'>Register participant</button>
        </form> : <div className='registeredParticipant'>
            <h4>Participant</h4>
            <p>ID: {participant.id}</p>
            <p>Participant: {`${participant.name} ${participant.surname}`}</p>
            <Timer 
                participantTime={setTime}
                setDisabledSave={setDisabledSave}
                setDisabledCancel={setDisabledCancel}
            />
            <div className='buttons'>
                <button
                    className='continue'
                    onClick={HandelCancel}
                    disabled={disabledCancel}
                >Cancel</button>
                <button
                    className='continue'
                    onClick={HandelSave}
                    disabled={disabledSave}
                >Save</button>
            </div>
        </div>
    }
    </div>);
}

export default Registration;