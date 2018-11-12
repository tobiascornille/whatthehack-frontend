import React from 'react';
import '../stylesheets/Team.css';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import logos from '../static/logos.png';

export default function Team(props) {
    return (
        <div className="section">
            <Grid container spacing={40}>
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" color="primary" paragraph={true}>
                        Team
                    </Typography>
                    <Typography variant="body1" color="primary" paragraph={true}>
                        What The Hack is organised by <a href="https://aftleuven.be"><b>Academics For Technology</b></a> and <a href="https://tobania.be"><b>Tobania</b></a>.
                    </Typography>
                    <Typography variant="body1" color="primary" paragraph={true}>
                        AFT is a Leuven-based student organization. Our aim is to introduce students to technology and entrepreneurship.
                        We provide technical students the opportunity to further develop their technical knowledge and reach out to non-technical students to introduce them to the wonderful world of technology.
                    </Typography>
                    <Typography variant="body1" color="primary" paragraph={true}>
                        Tobania is your technology business partner at the forefront of today’s digital transformation.
                        We provide business value with a scalable offering, supported by experienced account and delivery managers who guarantee effective solutions and customer satisfaction.
                        Together with our business partners, our expert technology communities deep-dive into your business to build relevance, gain trust and lay the foundation for a long-term relationship.
                    </Typography>

                </Grid>
                <Grid item md={6} xs={12}>
                    <img src={logos} alt="logos" id="logos"/>
                </Grid>
            </Grid>
        </div>
    );
}