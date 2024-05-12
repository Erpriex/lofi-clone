import { SET_SCENE } from '../constantsType/actionType';

const INITIAL_STATE = {
    sceneValue: 'chillVibes',
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
