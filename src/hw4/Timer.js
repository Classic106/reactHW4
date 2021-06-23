import React, { useEffect, useState } from 'react';
import { TimeToString } from '../hw4/helpers/helpers';

export default function Timer({ participantTime, setDisabledSave, setDisabledCancel }){

    const [timerValue, setTimerValue] = useState('00:00:00:00');
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    const [disabledStart, setDisabledStart] = useState(false);
    const [disabledStop, setDisabledStop] = useState(true);
    const [disabledReset, setDisabledReset] = useState(true);

    const HandelStop = ()=>{
 
        setDisabledStop(true);
        setDisabledStart(true);
        setDisabledReset(false);
        setDisabledSave(false);
        setDisabledCancel(false);

        setStart(false);
        participantTime(timerValue);

    }
    const HandelStart = ()=>{

        if(timerValue === '00:00:00:00'){
            setTime(new Date());
        }
        
        setStart(true);
        
        setDisabledSave(true);
        setDisabledStop(false);
        setDisabledCancel(false);
    }
    const HandelReset = ()=>{

        setDisabledReset(true);
        setDisabledSave(true);
        setDisabledStop(true);
        setDisabledStart(false);
        setDisabledCancel(false);

        setStart(false);
        
        setTime(0);
        setTimerValue('00:00:00:00');
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
                <button
                    className='start'
                    onClick={HandelStart}
                    disabled={disabledStart}
                >Start</button>
                <button
                    className='stop'
                    onClick={HandelStop}
                    disabled={disabledStop}
                >Stop</button>
                <button
                    className='reset'
                    onClick={HandelReset}
                    disabled={disabledReset}
                >Reset</button>
            </div>
        </div>
    </div>
    );
  }
