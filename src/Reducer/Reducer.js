export const initState = 0;
export const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
      break;

    case 'decrement':
      return state - 1;
      break;

    case 'reset':
      return initState;
      break;

    default:
      return state;
      break;
  }
};
