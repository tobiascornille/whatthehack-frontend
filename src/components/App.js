import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import AppBar from './TopAppBar';
import What from './What';
import Challenges from './Challenges';

import { Link, Element } from 'react-scroll'

import student from '../static/student.jpg';
import city from '../static/city.jpg';
import media from '../static/media.jpg';
import retail from '../static/retail.jpg';
import health from '../static/health.jpg';
import banking from '../static/banking.jpg';
import FAQ from './FAQ';

import Drawer from '@material-ui/core/Drawer/Drawer';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            open: false
        };
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
        ];
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = (open) => () => {
        this.setState({
            open,
        });
    };

    render() {
        const sideList = (
            <div>
                <List>
                    {['Home', 'A hackathon?', 'Challenges', 'FAQ'].map((text) => (
                        <ListItem button key={text}>
                            <Link to={text} smooth={true} duration={500} delay={500} onClick={this.toggleDrawer(false)}>
                                <ListItemText primary={text}/>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div className="App">
                <header>
                    <AppBar
                        handleHamburgerClick={this.toggleDrawer(true)}
                    />
                </header>
                <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer( false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Element name="Home">
                    <Home />
                </Element>
                <Element name="What">
                    <What />
                </Element>
                <Element name="Challenges">
                    <Challenges
                        challenges={this.challenges}
                    />
                </Element>
                <Element name="FAQ">
                    <FAQ />
                </Element>
            </div>
        );
    }
}
