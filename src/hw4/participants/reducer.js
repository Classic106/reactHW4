import { GetLocalStorage } from '../helpers/helpers.js';

const InitialState = {
  participants: GetLocalStorage('participants'),
};

const reducer = function(state = InitialState, action) {

    switch (action.type) {
      case "ADD_PARTICIPANT": {
        
        if(state.participants.find((item)=>{
          if(item.id === action.payload.id) return true;
          return false;
        })) return state;

        let newParticipants = [...state.participants];
          newParticipants.push(action.payload);
        return {...state, participants: newParticipants};
      }
      case "REMOVE_PARTICIPANT": {
        let newParticipants = [...state.participants].filter((item)=>{
            if(item.id !== +action.payload) return item;
            return false;
          });
        return {...state, participants: newParticipants};
      }
      default: return state;
    }
  }

export default reducer;