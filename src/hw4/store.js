import { createStore, combineReducers } from 'redux';
import participantsReducer from './participants/reducer';
import showWinnerReducer from './winner/reducer';

const rootReducer = combineReducers({
  participants: participantsReducer,
  showWinner: showWinnerReducer,
})

const store = createStore(rootReducer);

export default store;