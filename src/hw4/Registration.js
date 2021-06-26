import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Timer from '../hw4/Timer';

const Registration = ()=>{
    
    const dispatch = useDispatch();
    
    const [registered, setRegistered] = useState(false);
    const [participant, setParticipant] = useState({});
    const [time, setTime] = useState('');
    const [disabledCancel, setDisabledCancel] = useState(false);
    const [disabledSave, setDisabledSave] = useState(true);

    const RegisterParticipant = (participant)=>{
    
        return{
            type: "ADD_PARTICIPANT",
            payload: participant
        }
    };

    const HandleSave = ()=>{
        if(time.length > 0) {
            const p = {...participant, time};
                dispatch(RegisterParticipant(p));
                setRegistered(false);
                setParticipant({});
        }else console.log('not time');
    };

    const HandleCancel = ()=>{
        setParticipant({});
        setRegistered(false);
    };

    const HandleSubmit = (e)=>{
        
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
        <form onSubmit={HandleSubmit} className='registeredForm'>
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
                    onClick={HandleCancel}
                    disabled={disabledCancel}
                >Cancel</button>
                <button
                    className='continue'
                    onClick={HandleSave}
                    disabled={disabledSave}
                >Save</button>
            </div>
        </div>
    }
    </div>);
}

export default Registration;