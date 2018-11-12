import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import '../stylesheets/What.css';
import ReactPlayer from 'react-player';
import Grid from "@material-ui/core/Grid/Grid";
import Chip from "@material-ui/core/Chip/Chip";

export default function What() {
    return (
        <div className="section dark">
            <Grid container spacing={40}>
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" color="textSecondary" paragraph={true}>
                        What is a hackathon?
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph={true}>
                        A hackathon is an "invention marathon" where students come together to develop a product over the course of a weekend.
                        You will work in teams of up to 5 students on one of our challenges.
                        In just 24 hours, your team will go from an idea to a prototype.
                        To encourage you to think further than just one weekend, you will also pitch a small business plan.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph={true}>
                        Now don't worry, you don't need a lot of experience to participate.
                        Our mentors and workshops will help you get there.
                        You'll learn new practical skills, collaborate intensely and have a lot of fun.
                        Best of all, we'll have nice food and goodies for everyone, all for free!
                    </Typography>
                    <Chip
                        color="secondary"
                        label="Beginner friendly"
                        className="info-chip"
                    />
                    <Chip
                        color="secondary"
                        label="Free food"
                        className="info-chip"
                    />
                    <Chip
                        color="secondary"
                        label="Cool prizes"
                        className="info-chip"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=EN6Zh87_BIU" width="100%"/>
                </Grid>
            </Grid>
        </div>
    );
};