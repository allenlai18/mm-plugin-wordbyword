import {combineReducers} from 'redux';

import {STATUS_CHANGE, OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL, SELECTED_POST} from './action_types';

const enabled = (state = false, action) => {
    switch (action.type) {
    case STATUS_CHANGE:
        return action.data;
    default:
        return state;
    }
};

const rootModal = (state = false, action) => {
    switch (action.type) {
    case OPEN_ROOT_MODAL:
        return true;
    case CLOSE_ROOT_MODAL:
        return false;
    default:
        return state;
    }
};

const selectedPostReducer = (selectedPost = null, action) => {
    if (action.type === SELECTED_POST) {
        return action.payload;
    }
    return selectedPost;
};

export default combineReducers({
    enabled,
    rootModal,
    selectedPost: selectedPostReducer,
});
