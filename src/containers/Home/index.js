import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import HourglassEmptyOutlinedIcon from "@material-ui/icons/HourglassEmptyOutlined";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import UserData from "../../utility/userData";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "6px 16px"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
  margin: {
    margin: "auto"
  }
}));

export default function Home(props) {
  const classes = useStyles();

  const generalLandingPage = (
    <Grid container spacing={5}>
      <Grid item md={5}>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                1.6.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <HourglassEmptyOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Start
                </Typography>
                <Typography>Send the manufacturer the questionnarie</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                15.6.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <MarkunreadIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Manufacturer done
                </Typography>
                <Typography>Revise all the data you've got</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                18.6.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <KeyboardIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Ask for more details!
                </Typography>
                <Typography>Because you need rest</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                1.7.
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <DoneOutlineIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Done!
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid item md={6}>
        <Typography variant="h2" color="textPrimary">
          Onboard businesses to your platform faster than ever before!
        </Typography>
      </Grid>
    </Grid>
  );

  const adminHome = (
    <Grid container spacing={5}>
      <Grid item xs={11} className={classes.margin}>
        <Paper className={classes.paper}>
          <Typography>Onboarding in progress</Typography>
        </Paper>
      </Grid>
      <Grid item xs={11} className={classes.margin}>
        <Paper className={classes.paper}>
          <Typography>Onboard new</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
  console.log(UserData.getUser());
  return (
    <>
      {UserData.getUser() === "ADMIN"
        ? adminHome
        : UserData.getUser() === "MANUF"
        ? null
        : generalLandingPage}
    </>
  );
}
