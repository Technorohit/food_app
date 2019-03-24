import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeHotelList from './HomeHotelList'
import searchHotel from './do_request/searchHotel';
import getGeoLocation from './do_request/geoLocation'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

let position;
let restrauntResult;
async function renderHotel(){
  position = await getGeoLocation();
  console.log('inside gridHotel', position.coords)
     restrauntResult = await searchHotel(position.coords.latitude,position.coords.longtitude);
    console.log(restrauntResult);
    // return restrauntResult
};

function NestedGrid(props) {
  const { classes } = props;
  const restrauntList = renderHotel();
  console.log(restrauntList);
  return (
      <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12} style={{}}>
          <Grid container justify="center" spacing={40}>
              <Grid item >
                <HomeHotelList />
              </Grid>
              <Grid item >
                <HomeHotelList />
              </Grid>
              <Grid item>
                <HomeHotelList />
              </Grid>
              <Grid item>
                <HomeHotelList />
              </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);
