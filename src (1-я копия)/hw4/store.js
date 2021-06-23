import { createStore } from 'redux';
import reducer from './reducer';

import { GetLocalStorage } from './helpers/helpers.js';

const InitialState = {
    participants: GetLocalStorage('participants'),
    winner: null,
    showWinner: false,
};

const store = createStore(reducer, InitialState);

export default store;

/*{
        id: 1,
        name: 'ddd',
        time: '00:35:55:900',
    },
    {
        id: 2,
        name: 'vv',
        time: '08:35:55:050',
    },
    {
        id: 3,
        name: 'ff',
        time: '00:50:55:800',
    }
*/