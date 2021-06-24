import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import participantsReducer from './participants/reducer';
import showWinnerReducer from './winner/reducer';

const rootReducer = combineReducers({
  participants: participantsReducer,
  showWinner: showWinnerReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;