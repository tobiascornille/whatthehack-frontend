import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import '../stylesheets/FAQ.css';
import ReactPlayer from 'react-player';

export default function FAQ(props) {
    return (
        <div className="FAQ">
            <div className="info">
                <Typography variant="h4" color="textSecondary" paragraph={true}>
                    What is a hackathon?
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph={true}>
                    Hackathons are awesome events full of creativity, technology and passionate students collaborating and creating.
                    Attendees work in teams to create apps, games, robots… literally anything you want to build & learn about!
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph={true}>
                    What The Hack's goal is to aims to empower students like you who are eager to learn and create by providing an environment for you to explore and build with workshops, mentorship, and hardware.
                    Let us take care of travel, food, and the details, so that you can grow your ideas beyond a vision.
                </Typography>
            </div>
            <div className="video">
                <ReactPlayer url="https://www.youtube.com/watch?v=EN6Zh87_BIU" width="40vw"/>
            </div>
        </div>
    );
};