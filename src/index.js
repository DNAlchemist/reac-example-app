import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import "bootstrap/fonts/glyphicons-halflings-regular.ttf";
// import "jquery/dist/jquery.js";
// import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import App from './componens/App';
import registerServiceWorker from './services/registerServiceWorker';
import './styles/style.scss';

/*
function setText() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

}
setInterval(setText, 1000);
*/

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
