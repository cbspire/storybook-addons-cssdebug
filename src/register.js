import React from 'react';
import addons, { types } from '@storybook/addons';

import { ADDON_ID } from './constants';

import Debug from './Debug';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'cssdebug',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <Debug />,
  });
});
