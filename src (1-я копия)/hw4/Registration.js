import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Timer from '../hw4/Timer.js';

const Registration = (props)=>{
    
    const { showWinner, RegisterParticipant, Winner } = props;
    const [registered, setRegistered] = useState(false);
    const [participant, setParticipant] = useState({});
    const [time, setTime] = useState('');
    const [disabledCancel, setDisabledCancel] = useState(false);
    const [disabledSave, setDisabledSave] = useState(true);

    const Save = ()=>{
        if(time.length > 0) {
            const p = {...participant, time};
                RegisterParticipant(p);
                setRegistered(false);
                setParticipant({});
            if(showWinner) Winner();
        }else console.log('not time');
    };

    const Cancel = ()=>{
        setParticipant({});
        setRegistered(false);
    };

    const Submit = (e)=>{
        
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
        <form onSubmit={Submit} className='registeredForm'>
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
                    onClick={Cancel}
                    disabled={disabledCancel}
                >Cancel</button>
                <button
                    className='continue'
                    onClick={Save}
                    disabled={disabledSave}
                >Save</button>
            </div>
        </div>
    }
    </div>);
}
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

const StateToProps = state => state;

const DispathToProps = dispatch =>{
    return {
        RegisterParticipant: bindActionCreators(RegisterParticipant, dispatch),
        Winner: bindActionCreators(Winner, dispatch),
    }
}

const WrapRegistration = connect(StateToProps, DispathToProps)(Registration);
  
export default WrapRegistration;