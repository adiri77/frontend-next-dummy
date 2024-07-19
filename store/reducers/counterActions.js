import axios from 'axios';

export const setCounter = (value) => ({
  type: 'SET_COUNTER',
  payload: value,
});

export const fetchCounter = () => async (dispatch) => {
  try {
    const response = await axios.get('https://next-backend-dummy.onrender.com/value');
    dispatch(setCounter(response.data.counter.value));
  } catch (error) {
    console.error(error);
  }
};

export const incrementCounter = () => async (dispatch) => {
  try {
    const response = await axios.post('https://next-backend-dummy.onrender.com/increment');
    dispatch(setCounter(response.data.counter.value));
  } catch (error) {
    console.error(error);
  }
};

export const decrementCounter = () => async (dispatch) => {
  try {
    const response = await axios.post('https://next-backend-dummy.onrender.com/decrement');
    dispatch(setCounter(response.data.counter.value));
  } catch (error) {
    console.error(error);
  }
};
