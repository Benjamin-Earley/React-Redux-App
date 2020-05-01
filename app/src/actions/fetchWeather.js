import axios from "axios";

export const FETCH_WEATHER_START = "FETCH_WEATHER_START";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";

export function fetchWeather(query) {
  return dispatch => {
    dispatch({ type: FETCH_WEATHER_START });
    axios
      .get(`https://www.metaweather.com/api/location/search/?query=${query}`)
      .then(res => {
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_WEATHER_ERROR, payload: err });
      });
  };
}