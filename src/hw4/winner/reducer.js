import { TimeToDigit } from "../helpers/helpers.js";

const InitialState = {
  showWinner: false,
  winner: null,
};

const Winner = (winner) =>{
 
  return {
      type: 'SET_WINNER',
      payload: winner,
  }
}

const ShowWinner = () =>{
  return {
      type: 'SHOW_WINNER',
      payload: true,
  }
}

const SetWinner = () => {
  return (dispatch, getState) => {
      const { participants } = getState().participants;
      let winner = null;

      if(participants.length !== 0)
        winner = participants.reduce((acc, curItem)=>{
          const time = TimeToDigit(curItem.time);
          return (TimeToDigit(acc.time) < time) ? acc : curItem; 
        }, participants[0]);
      
      dispatch(Winner(winner));
      dispatch(ShowWinner(true));
  };
}

const reducer = function (state = InitialState, action){
  
  switch (action.type) {
    case "SHOW_WINNER":
      return { ...state, showWinner: action.payload };
    case "SET_WINNER": 
      return {...state, winner: action.payload };
    default:
      return state;
  }
};

export {
  reducer,
  SetWinner,
};
