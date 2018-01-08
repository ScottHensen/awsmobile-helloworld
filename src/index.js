import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
Amplify.configure(aws_exports);
