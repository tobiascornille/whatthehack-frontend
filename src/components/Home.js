import React from 'react';
import '../stylesheets/Home.css'
import Typography from '@material-ui/core/Typography';
import Typing from 'react-typing-animation';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/es/styles/withStyles";

const buttonStyles = {
    root: {
        background: 'linear-gradient(45deg, #67E7E2 0%, #3D99F5 100%)',
        borderRadius: '24px !important',
        color: '#fff !important',
        width: '200px !important',
        margin: '0 auto !important',
        fontWeight: '700 !important'
    },

};

const Home = (props) => {
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
                    <div className="register-button">
                        <Button variant="contained" className={props.classes.root}>
                            Register Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img alt="hero" src="https://staging.hackjunction.com/wp-content/uploads/2018/10/jellysfish.png"/>
            </div>
        </div>
    );
};

export default withStyles(buttonStyles)(Home);
