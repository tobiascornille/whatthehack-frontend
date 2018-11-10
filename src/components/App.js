import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import AppBar from './TopAppBar';
import What from "./What";
import Challenges from "./Challenges";

import student from '../static/student.jpg';
import city from '../static/city.jpg';
import media from '../static/media.jpg';
import retail from '../static/retail.jpg';
import health from '../static/health.jpg';
import banking from '../static/banking.jpg';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.challenges = [
            {
                title: "Student Life",
                img: student
            },
            {
                title: "Smart Cities",
                img: city
            },
            {
                title: "Media",
                img: media
            },
            {
                title: "Retail",
                img: retail
            },
            {
                title: "HealthTech",
                img: health
            },
            {
                title: "Banking & Insurance",
                img: banking
            }
        ]
    }
    render() {
        return (
            <div className="App">
                <header>
                    <AppBar />
                </header>
                <Home />
                <What />
                <Challenges
                    challenges={this.challenges}
                />
            </div>
        );
    }
}
