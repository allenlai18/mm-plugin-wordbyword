import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL} from './action_types';

export const openRootModal = () => (dispatch) => {
    dispatch({
        type: OPEN_ROOT_MODAL,
    });
};

export const closeRootModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_ROOT_MODAL,
    });
};

export const postDropdownMenuAction = openRootModal;

// export const getPluginServerRoute = (state) => {
//     const config = getConfig(state);

//     let basePath = '/';
//     if (config && config.SiteURL) {
//         basePath = new URL(config.SiteURL).pathname;

//         if (basePath && basePath[basePath.length - 1] === '/') {
//             basePath = basePath.substr(0, basePath.length - 1);
//         }
//     }

//     return basePath + '/plugins/' + pluginId;
// };
