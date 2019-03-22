import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => ({
  root: {
    width: "100%"
  },
  AppBar: {
    backgroundColor: "lightblue"
  },
  toolBar: {
    position: "flex",
    justifyContent: "flex-end"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  customWidth: {
    width: 200
  }
});

class PrimarySearchAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(PrimarySearchAppBar);
