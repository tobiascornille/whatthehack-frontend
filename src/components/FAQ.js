import React from 'react';
import questions from '../static/questions';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Question from "./Question";

export default function FAQ(props) {
    return (
        <div className="section dark">
            <Typography variant="h4" paragraph={true} color="textSecondary">
                FAQ
            </Typography>
            <Grid container spacing={40}>
                {questions.map(({ question, answer}) =>
                    <Question
                        key={question}
                        question={question}
                        answer={answer}
                    />
                )}
            </Grid>
        </div>
    );
}