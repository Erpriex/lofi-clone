import {
  SET_MODE,
  SET_RAIN,
  SET_VOLUME,
  SET_SCENE,
} from '../constantsType/actionType';

export const setMode = (payload) => ({
  type: SET_MODE,
  mode: payload,
});

export const setRain = (payload, value) => ({
  type: SET_RAIN,
  rainMode: payload,
  rainValue: value,
});

export const setVolume = (payload) => ({
  type: SET_VOLUME,
  volumeValue: payload,
});

export const setScene = (payload) => ({
  type: SET_SCENE,
  sceneValue: payload,
});

export function changeDayNight(currentStatus) {
  let status;
  if (currentStatus === 'day') status = 'night';
  else if (currentStatus === 'night') status = 'day';
  return (dispatch) => {
    dispatch(setMode(status));
  };
}

export function changeRainStatus(currentStatus, value) {
  let rainStatus;
  if (currentStatus === 'rain') rainStatus = 'clear';
  else if (currentStatus === 'clear') rainStatus = 'rain';
  return (dispatch) => {
    dispatch(setRain(rainStatus, value));
  };
}

export function changeVolume(currentStatus) {
  return (dispatch) => {
    dispatch(setVolume(currentStatus));
  };
}

export function changeScene(currentStatus) {
  return (dispatch) => {
    dispatch(setScene(currentStatus));
  };
}