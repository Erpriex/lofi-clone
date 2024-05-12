import { combineReducers } from 'redux';

import modeReducer from './modeReducer';
import rainReducer from './rainReducer';
import volumeReducer from './volumeReducer';
import sceneReducer from "./sceneReducer";

export const rootReducer = combineReducers({
  modeState: modeReducer,
  rainState: rainReducer,
  volumeState: volumeReducer,
  sceneState: sceneReducer,
});