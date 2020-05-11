import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import {
  initFetchState,
  dataFetchingReducer,
} from '../../../Reducer/DataFetchingReducer';

function ReducerDataFetching() {
  const [data, dispatch] = useReducer(dataFetchingReducer, initFetchState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => {
        console.log('response');
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch(() => {
        console.log('res error');
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div>
      {data.isLoading ? 'Loading' : data.post.title}
      {data.error ? data.error : null}
    </div>
  );
}

export default ReducerDataFetching;
