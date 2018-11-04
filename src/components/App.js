import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import AppBar from './TopAppBar';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <AppBar />
                </header>
                <Home />
            </div>
        );
    }
}
