import { SET_SCENE } from '../constantsType/actionType';

const scenes = ['chillVibes', 'chillVibes2', 'cozyStudio', 'cozyRoomSunset', 'forestHouse'];

const INITIAL_STATE = {
    sceneValue: scenes[Math.floor(Math.random() * scenes.length)],
};

const sceneReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SCENE:
            return {
                ...state,
                sceneValue: action.sceneValue,
            };
        default:
            return state;
    }
};

export default sceneReducer;
