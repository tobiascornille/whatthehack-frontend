import React from 'react';
import '../stylesheets/Question.css';
import Grid from "@material-ui/core/Grid/Grid";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    panel: {
        backgroundColor: '#f8fcfe !important'
    }
};

function Challenge(props) {
    const { question, answer, classes } = props;
    return (
        <Grid item lg={4} sm={6} xs={12}>
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" color="primary">
                        {question}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="primary">
                        {answer}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    );
}

export default withStyles(styles)(Challenge);