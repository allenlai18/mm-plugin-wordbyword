import {getPost} from 'mattermost-redux/selectors/entities/posts';

import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL} from './action_types';

export const openRootModal = (postId) => (dispatch, getState) => {
    const post = getPost(getState(), postId);

    dispatch({
        type: OPEN_ROOT_MODAL,
        payload: post,
    }, getState);
};

export const closeRootModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_ROOT_MODAL,
    });
};

export const postDropdownMenuAction = openRootModal;
