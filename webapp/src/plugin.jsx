import React from 'react';

import {FormattedMessage} from 'react-intl';

import {id as pluginId} from './manifest';

import Root from './components/root';

import {postDropdownMenuAction} from './actions';

export default class WordByWordPlugin {
    initialize(registry, store) {
        registry.registerRootComponent(Root);
        registry.registerPostDropdownMenuAction(
            <FormattedMessage
                id='plugin.name'
                defaultMessage='Read Word by Word'
            />,
            () => store.dispatch(postDropdownMenuAction()),
        );
    }

    uninitialize() {
        //eslint-disable-next-line no-console
        console.log(pluginId + '::uninitialize()');
    }
}
