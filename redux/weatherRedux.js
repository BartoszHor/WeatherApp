import axios from 'axios';
import {initialState} from './initialState'

/* SELECTORS */
export const getWeather = ({ weather }) => weather.data
export const getLoadingState = ({weather}) => weather.loading

/* ACTIONS */

// action name creator
const reducerName = 'weather';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

/* THUNKS */
export const loadWeather = (city, navigation) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=809ba083b096792c9c5d24c09bbf0ea9`);
      if(res) {
        setTimeout(()=> {
        dispatch(endRequest(res.data));
        navigation.navigate('WeatherGeneral', {res})
      }, 1500)
      }
      
    } catch(e) {
      dispatch(errorRequest({ error: e.message }));
    }

  };
};

/* INITIAL STATE */

/* REDUCER */

export const reducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case START_REQUEST: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
