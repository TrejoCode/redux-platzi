/**
 *  @version 1.1.0
 *  @author Trejocode - Sergio
 *  @description Punto de Entrada de React
 * 	@process 1
*/

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App      from './app';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';
import './sass/style.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import ReduxThunk from 'redux-thunk';

/**
 * @description Instancia globlal del Store 
*/
const globalStore = createStore(
	reducers, 
	{}, 
	applyMiddleware(ReduxThunk)
);


/**
 * @description WebFontLoader nos permite cargar la fuente de Google de manera asíncrona.
 * @url https://github.com/typekit/webfontloader
*/
WebFont.load({
	google: {
		families: ['IBM Plex Sans:400,500,600,700', 'sans-serif']
	}
});


ReactDOM.render(
	<StrictMode>
		<Provider store = { globalStore } >
			<App />
		</Provider>
	</StrictMode>, 
	document.getElementById('root')
);


/**
 * @description Registra el Service Worker para una PWA
 * @url https://create-react-app.dev/docs/making-a-progressive-web-app
*/
serviceWorker.register();
