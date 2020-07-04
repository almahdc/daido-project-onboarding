import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import * as constants from "../../utility/uiConstants";

// components
import Footer from "../../components/Navigation/Footer";
// containers
import Menu from "../../containers/Navigation/AppMenu";

// style
import {Grid, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Background from "../../assets/images/background.png";

const useStyles = makeStyles({
  container: {
    backgroundRepeat: "no-repeat",
    backgroundImage: layoutType => (layoutType ? `url(${Background})` : ""),
    background: "white",
    backgroundSize: "cover"
  },
  content: {
    minHeight: "calc(100vh - 106px - 28px)"
  },
  header: {
    height: "106px"
  },
  footer: {
    height: "28px"
  }
});

// TODO: is it smart to have menu height fixed?
// TODO: convert it to HOC for real
// TODO: It must be a better way to do change of theme - DO IT

function Layout(props) {
  const history = useHistory();
  const [layoutType, setLayoutType] = useState(
    window.location.search.includes("?theme=blue") ||
      window.location.pathname.includes("home")
      ? true
      : false
  );
  const {type, topLeft, topRight, bottom} = props;

  useEffect(() => {
    console.log("history", history);
    history.listen((location, action) => {
      setLayoutType(
        location.pathname.includes("home") ||
          window.location.pathname.includes("home") ||
          window.location.search.includes("?theme=blue") ||
          location.search.includes("?theme=blue")
          ? true
          : false
      );
    });
  }, [history]);

  useEffect(() => {
    setLayoutType(
      window.location.pathname.includes("home") ||
        window.location.search.includes("?theme=blue")
        ? true
        : false
    );
  }, []);

  const classes = useStyles(layoutType);
  return (
    <div className={classes.container}>
      <Grid container direction="column">
        <Grid item className={classes.header}>
          <Container maxWidth="lg">
            <Menu
              isUserAuthenticated={
                props.userState ? props.userState.user : null
              }
              type={layoutType}
            />
          </Container>
        </Grid>
        <Grid item container className={classes.content}>
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
        <Grid item className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
