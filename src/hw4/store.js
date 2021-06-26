import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import participantsReducer from './participants/reducer';
import { reducer as participantsWinner } from './winner/reducer';

const rootReducer = combineReducers({
  participants: participantsReducer,
  winner: participantsWinner,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;