import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import AppBar from './TopAppBar';
import FAQ from "./FAQ";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <AppBar />
                </header>
                <Home />
                <FAQ />
            </div>
        );
    }
}
