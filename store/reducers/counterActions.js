import axios from 'axios';

export const setCounter = (value) => ({
  type: 'SET_COUNTER',
  payload: value,
});

export const fetchCounter = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/value');
    dispatch(setCounter(response.data.counter.value));
  } catch (error) {
    console.error(error);
  }
};

export const incrementCounter = () => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/increment');
    dispatch(setCounter(response.data.counter.value));
  } catch (error) {
    console.error(error);
  }
};

export const decrementCounter = () => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/decrement');
    dispatch(setCounter(response.data.counter.value));
  } catch (error) {
    console.error(error);
  }
};
