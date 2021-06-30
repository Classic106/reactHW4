import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import participantsReducer from './participants/reducer';
import { reducer as participantsWinner } from './winner/reducer';
import { SetLocalStorage } from './helpers/helpers.js';

const rootReducer = combineReducers({
  participants: participantsReducer,
  winner: participantsWinner,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const newstore = store.getState();
  const { participants } = newstore.participants;
  const { winner } = newstore.winner;

  participants.length !== 0 ?
    SetLocalStorage('participants', participants) :
    (()=>{
      SetLocalStorage('participants');
      SetLocalStorage('winner');
    })();
    
  winner !== null ?
    SetLocalStorage('winner', winner) :
    SetLocalStorage('winner');
});

export default store;