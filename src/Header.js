import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <span style={{ marginRight: 80 }}> Chef Corner </span>
            <span style={{ marginleft: 20 }}><Button color="inherit">VegOnly</Button></span>
            <span style={{ marginleft: 20 }}><Button color="inherit">NonVegOnly</Button></span>
            <span style={{ marginleft: 20 }}><Button color="inherit">Both</Button></span>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
