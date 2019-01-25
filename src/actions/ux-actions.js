import axios from 'axios';

import { 
  SEARCH_BAR_VALUE_CHANGE,
  SERVER_RESULT,
  WORD_COUNT_CHANGE
} from './types'

export const changeSearchBarValue = (value, wordCount) => async dispatch => {
  const { length: count } = value.split(' ');
  dispatch({ type: WORD_COUNT_CHANGE, payload: count });
  dispatch({ type: SEARCH_BAR_VALUE_CHANGE, payload: value });


  if (count > wordCount) {
    console.log('action fired')
    const { data } = await axios.get(`http://localhost:5000?text=${value}`);
    
    dispatch({ type: SERVER_RESULT, payload: data });
  }
}