export const initFetchState = {
  isLoading: true,
  post: {},
  error: '',
};

export const dataFetchingReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { isLoading: false, post: action.payload, error: '' };
      break;

    case 'FETCH_ERROR':
      return {
        isLoading: false,
        post: {},
        error: 'Something went wrong...',
      };
      break;

    default:
      return state;
      break;
  }
};
