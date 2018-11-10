import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import '../stylesheets/What.css';
import ReactPlayer from 'react-player';
import Grid from "@material-ui/core/Grid/Grid";

export default function What() {
    return (
        <div className="What">
            <Grid container spacing={40}>
                <Grid item md={6} xs={12}>
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
                </Grid>
                <Grid item md={6} xs={12}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=EN6Zh87_BIU" width="100%"/>
                </Grid>
            </Grid>
        </div>
    );
};