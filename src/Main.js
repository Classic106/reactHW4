import React from 'react';

import { Provider } from 'react-redux';
import store from './hw4/store.js'

import Participants from './hw4/Participants.js';
import Registration from './hw4/Registration.js';
import TotalParticipant from './hw4/TotalParticipant.js';

import './hw4/Timer.css';

export default function Main() {
    return (
    <Provider store={store}>
        <div className='main'>
            <div className='left'>
                <Participants/>
            </div>
            <div className='right'>
                <Registration/>
                <TotalParticipant/>
            </div>
        </div>
    </Provider>);
  }
