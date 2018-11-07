import React from 'react';
import '../stylesheets/Home.css'
import Typography from '@material-ui/core/Typography';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import hero from '../static/hero.png';
export default function Home(props) {
    return (
        <div className="Home">
            <div className="hero-text">
                <div className="typing-title">
                    <Typing loop={true} speed={20}>
                        <Typography variant="h4" color="primary">
                            Build your ideas
                        </Typography>
                        <Typing.Backspace count={16} delay={1000}/>
                        <Typography variant="h4" color="primary">
                            Learn new skills
                        </Typography>
                        <Typing.Backspace count={16} delay={1000}/>
                        <Typography variant="h4" color="primary">
                            Get inspired
                        </Typography>
                        <Typing.Backspace count={12} delay={1000}/>
                        <Typography variant="h4" color="primary">
                            Have fun
                        </Typography>
                        <Typing.Backspace count={8} delay={1000}/>
                    </Typing>
                    <Typography variant="h4" color="primary">
                        at What The Hack
                    </Typography>
                </div>
                <Typography variant="h6" color="secondary">
                    MARCH 1-2 • LEUVEN
                </Typography>
                <div className="description">
                    <Typography variant="body1" color="primary">
                        What The Hack is Belgium's biggest student hackathon. Gather with 250 students to collaborate
                        and bring your ideas to life in 24 hours.
                    </Typography>
                    <div className="register-button-container">
                        <Button variant="contained" className="register-button">
                            Register Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img alt="hero" src={hero}/>
            </div>
        </div>
    );
};
