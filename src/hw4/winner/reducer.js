const InitialState = {
  showWinner: false,
};

const reducer = function (state = InitialState, action) {
  switch (action.type) {
    case "SHOW_WINNER":
      return { ...state, showWinner: action.payload };
    default:
      return state;
  }
};

export default reducer;
