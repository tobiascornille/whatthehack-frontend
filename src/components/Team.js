import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";

export default function Team(props) {
    return (
        <div className="section">
            <Grid container spacing={40}>
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" color="primary" paragraph={true}>
                        Team
                    </Typography>
                    <Typography variant="body1" color="primary" paragraph={true}>
                        What The Hack is organised by <b>Academics For Technology</b> and <b>Tobania</b>.<br/>
                        AFT is a Leuven-based student organization. Our aim is to introduce students to technology and entrepreneurship and inspire in them a sense of entrepreneurship, a quintessential skill in today’s economy.
                        We provide technical students the opportunity to further develop their technical knowledge and reach out to non-technical students to introduce them to the wonderful world of technology.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}