import {
    FETCH_LOCATION_START,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_ERROR
  } from "../actions/fetchLocations";
  
  export const initalState = {
    consolidate_weather: [],
    isLoading: null,
    error: null
  };
  
  export function reducer(state = initalState, action) {
    switch (action.type) {
      case FETCH_LOCATION_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_LOCATION_SUCCESS:
        return {
          ...state,
          consolidate_weather: action.payload,
          isLoading: false
        };
      case FETCH_LOCATION_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }