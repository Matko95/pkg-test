import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import PkgTest from './pkg-test';

render((<AppContainer><PkgTest /></AppContainer>), document.getElementById('app'));
