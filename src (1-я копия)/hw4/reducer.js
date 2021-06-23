import InitialState from './store.js';
import { TimeToDigit } from './helpers/helpers.js';
import { SetLocalStorage } from './helpers/helpers.js';

const reducer = function(state = InitialState, action) {

    switch (action.type) {
      case "ADD_PARTICIPANT": {
        
        if(state.participants.find((item)=>{
          if(item.id === action.payload.id) return true;
          return false;
        })) return state;

        let newParticipants = [...state.participants];
          newParticipants.push(action.payload);
          SetLocalStorage('participants', newParticipants);
        return {...state, participants: newParticipants};
      }

      case "REMOVE_PARTICIPANT": {
        let newParticipants = [...state.participants].filter((item)=>{
            if(item.id !== +action.payload) return item;
            return false;
          });
        SetLocalStorage('participants', newParticipants);
        return {...state, participants: newParticipants};
   
        /*return {...state, participants: state.participants.filter((item)=>{
          if(item.id !== +action.payload) return item;
          return item;
        })};*/
      }
    
      case "WINNER":{
        const winner = [...state.participants].sort((a, b)=>{
            return TimeToDigit(a.time) - TimeToDigit(b.time);
          });
        return {...state, winner: winner[0]};
      }
      case "SHOW_WINNER":
        return {...state, showWinner: action.payload}

      default: return state;
    }
  }

export default reducer;