import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import ChatContainer from "./components/chat-container";
import MenuContainer from "./components/menu-container";

import DATA from './fake-data';
import rooms from './reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rooms);

class App extends React.Component {

    render() {
      return (
			 <div>
        <MenuContainer />
        <ChatContainer />
      </div>
				)
    }
}

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('app'),
);
