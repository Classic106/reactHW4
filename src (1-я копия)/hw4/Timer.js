import React, { useEffect, useState } from 'react';
import {
    TimeToString,
} from '../hw4/helpers/helpers.js';

export default function Timer(props) {

    const { participantTime, setDisabledSave, setDisabledCancel } = props;

    const [timerValue, setTimerValue] = useState('00:00:00:00');
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    const [disabledStart, setDisabledStart] = useState(false);
    const [disabledStop, setDisabledStop] = useState(true);
    const [disabledReset, setDisabledReset] = useState(true);

    const Stop = ()=>{
 
        setDisabledStop(true);
        setDisabledStart(true);
        setDisabledReset(false);
        setDisabledSave(false);
        setDisabledCancel(false);

        setStart(false);
        participantTime(timerValue);

    }
    const Start = ()=>{

        if(timerValue === '00:00:00:00'){
            setTime(new Date());
        }
        
        setStart(true);
        
        setDisabledSave(true);
        setDisabledStop(false);
        setDisabledCancel(false);
    }
    const Reset = ()=>{

        setDisabledReset(true);
        setDisabledSave(true);
        setDisabledStop(true);
        setDisabledStart(false);
        setDisabledCancel(false);

        setStart(false);
        
        setTimerValue('00:00:00:00');
        setTime(0);
        participantTime('00:00:00:00');
    }

    useEffect(()=>{
        
        const setTimes = ()=>{
            const newtime = new Date();
            setTimerValue(TimeToString(newtime - time));
        }

        let timer = null;

        if(start) timer = setInterval(setTimes, 11);
        else{
            clearInterval(timer);
            timer = null;
        }

        return (()=>{
            clearInterval(timer);
            timer = null;
        });
    }, [start, time]);

    return (
    <div className='container'>
        <h2>Timer</h2>
        <div className='timer'>
            <h3>{timerValue}</h3>
            <div className='buttons'>
                <button className='start'onClick={Start} disabled={disabledStart}>Start</button>
                <button className='stop' onClick={Stop} disabled={disabledStop}>Stop</button>
                <button className='reset' onClick={Reset} disabled={disabledReset}>Reset</button>
            </div>
        </div>
    </div>
    );
  }
