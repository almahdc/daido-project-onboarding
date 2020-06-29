import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  content: {
    textAlign: "center"
  },
  circle: {
    background: isBackgroundTransparent =>
      isBackgroundTransparent ? "" : "#9DB6DF",
    borderRadius: "50px",
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
    height: "50%"
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
        <img src={image} alt="Step" className={classes.image} />
      </div>
    </div>
  );
}

export default function OneStep({
  title,
  image,
  content,
  isBackgroundTransparent
}) {
  const classes = useStyles();
  return (
    <Grid item md={2} className={classes.content} color="textPrimary">
      <CircleImage
        image={image}
        isBackgroundTransparent={isBackgroundTransparent}
      />
      <Typography
        variant="button"
        color="textSecondary"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {content}
      </Typography>
    </Grid>
  );
}
