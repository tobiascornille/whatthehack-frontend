import React from 'react';
import Challenge from './Challenge';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

export default function Challenges(props) {
    return (
        <div className="section">
            <Typography variant="h4" color="primary" paragraph={true}>
                Challenges
            </Typography>
            <Typography variant="body1" color="primary" paragraph={true}>
                We challenge you to use technology to improve one of the following categories.<br />
                More details on the challenges will follow!
            </Typography>
            <Grid container spacing={40}>
            {props.challenges && props.challenges.map(({ title, img }) =>
                <Challenge
                    key={title}
                    title={title}
                    img={img}
                />
            )}
            </Grid>
        </div>
    );
}