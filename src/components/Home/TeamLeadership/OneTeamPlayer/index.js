import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  content: {
    textAlign: "center"
  },
  circle: {
    width: "100px",
    height: "100px",
    verticalAlign: "middle",
    display: "table-cell"
  },
  contentCircle: {
    width: "100px",
    height: "100px,",
    margin: "0 auto 1em auto"
  },
  image: {
    width: "50%",
    height: "50%",
    borderRadius: "50px"
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

function CircleImage({image, isBackgroundTransparent}) {
  const classes = useStyles(!!isBackgroundTransparent);
  return (
    <div className={classes.contentCircle}>
      <div className={classes.circle}>
        <img src={image} alt="Team Player" className={classes.image} />
      </div>
    </div>
  );
}

export default function OneTeamPlayer({name, image, content1, content2}) {
  const classes = useStyles();
  return (
    <>
      <CircleImage image={image} />
      <Typography
        variant="overline"
        color="textSecondary"
        className={classes.title}
        display="block"
      >
        {name}
      </Typography>
      <Typography variant="caption" color="textSecondary" display="block">
        {content1}
      </Typography>
      <Typography variant="caption" color="textSecondary" display="block">
        {content2}
      </Typography>
    </>
  );
}
