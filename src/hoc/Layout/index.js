import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import * as constants from "../../utility/uiConstants";

// containers
import Menu from "../../containers/Navigation/AppMenu";

// style
import {Grid, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Background from "../../assets/images/background.png";

const useStyles = makeStyles({
  container: {
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundImage: layoutType => (layoutType ? `url(${Background})` : "")
  }
});

// TODO: convert it to HOC for real
// TODO: It must be a better way to do change of theme - DO IT

function Layout(props) {
  const history = useHistory();
  const [layoutType, setLayoutType] = useState(
    window.location.pathname.includes("home") ? true : false
  );
  console.log("layoutType", layoutType, window.location.pathname);
  const {type, topLeft, topRight, bottom} = props;

  useEffect(() => {
    history.listen((location, action) => {
      console.log("location.pathname", location.pathname);
      setLayoutType(
        location.pathname.includes("home") ||
          window.location.pathname.includes("home")
          ? true
          : false
      );
    });
  }, [history]);

  useEffect(() => {
    setLayoutType(window.location.pathname.includes("home") ? true : false);
  }, []);

  const classes = useStyles(layoutType);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="column">
        <Grid item>
          <Menu
            isUserAuthenticated={props.userState ? props.userState.user : null}
            type={layoutType}
          />
        </Grid>
        <Grid item container>
          {type === constants.LAYOUT_LEFT_RIGHT_NEW_WINDOW_PAGE_BOTTOM ? (
            <>
              <Grid item xs={0} sm={2} />
              <Grid item xs={12} sm={9}>
                {topLeft}
              </Grid>
              <Grid item xs={12} sm={3}>
                {topRight}
              </Grid>
              <Grid item>{bottom}</Grid>
              <Grid item xs={0} sm={2} />
            </>
          ) : (
            props.children
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
