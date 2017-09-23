import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import { register as registerServiceWorker } from '~/util';

import Styles from '~/assets/stylesheets/application.sass';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
