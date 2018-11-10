import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import '../stylesheets/Challenge.css'
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Grid from "@material-ui/core/Grid/Grid";

export default function Challenge(props) {
    return (
            <Grid item lg={4} sm={6} xs={12}>
                <Card>
                    <CardActionArea>
                        <div className="card-image">
                            <CardMedia
                                component="img"
                                alt={props.title}
                                image={props.img}
                            />
                        </div>
                        <Typography variant="h4" className="center-text" color="textSecondary">
                            {props.title}
                        </Typography>
                    </CardActionArea>
                </Card>
            </Grid>
    );
}