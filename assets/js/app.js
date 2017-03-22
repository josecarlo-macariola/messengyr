// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"


import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ChatContainer from "./components/chat-container";
import MenuContainer from "./components/menu-container";

import DATA from './fake-data'; 

const rooms = () => {
  return DATA.rooms;
};

const store = createStore(rooms);


class App extends React.Component {

  
//     componentDidMount() {
//           fetch('/api/rooms', {
//             headers: {
//               "Authorization": "Bearer " + window.jwtToken,
//             },
//           }).then(function (response) {
//             return response.json();
//           }).then((response) => {     
//             let rooms = response.rooms;
//  console.log(response.rooms);
//             this.setState({
//               rooms: rooms,
//               messages: rooms[0].messages,
//             });
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//     }
    render() {
			
    const ROOMS = DATA.rooms;
    const MESSAGES = DATA.rooms[0].messages;

			return (
			 <div>
        <MenuContainer 
          rooms={this.state.rooms}
        />
        <ChatContainer 
          messages={this.state.messages}
        />
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