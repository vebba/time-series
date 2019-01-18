"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var App_1 = require("./App");
require("./styles.css");
var store = createStore();
ReactDOM.render(<react_redux_1.Provider>
        <App_1.default />
    </react_redux_1.Provider>, document.getElementById('app'));
