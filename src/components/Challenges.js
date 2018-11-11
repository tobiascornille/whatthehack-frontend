import React from 'react';
import '../stylesheets/Challenges.css'
import Challenge from './Challenge';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

export default function Challenges(props) {
    return (
        <div className="Challenges">
            <Typography variant="h4" paragraph={true}>
                Challenges
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