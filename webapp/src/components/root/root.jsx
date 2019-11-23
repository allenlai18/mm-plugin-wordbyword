import React from 'react';
import PropTypes from 'prop-types';

const Root = ({visible, close, theme, post}) => {
    if (!visible) {
        return null;
    }
    const style = getStyle(theme);

    // console.log(this.props, 'adsfafdsaf'); // eslint-disable-line no-await-in-loop
    return (
        <div
            style={style.backdrop}
            onClick={close}
        >
            <div style={style.modal}>
                {post}
            </div>
        </div>
    );
};

Root.propTypes = {
    post: PropTypes.object,
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

const getStyle = (theme) => ({
    backdrop: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        zIndex: 2000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: '375px',
        width: '600px',
        padding: '1em',
        color: theme.centerChannelColor,
        backgroundColor: theme.centerChannelBg,
    },
});

export default Root;
