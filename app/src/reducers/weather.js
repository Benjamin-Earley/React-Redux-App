import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR
  } from "../actions/fetchWeather";
  
  export const initialState = {
    searchResults: [],
    isLoading: false,
    error: ""
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          searchResults: action.payload,
          isLoading: false
        };
      case FETCH_WEATHER_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }