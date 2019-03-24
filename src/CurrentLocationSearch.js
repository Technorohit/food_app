import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 100,
  },
});

class TextFields extends React.PureComponent {
    state={
      location:''
    }

    onSuggestSelect = (places) =>{
      console.log('Hello');
      console.log(places)
    }
  async componentDidMount(){
   
     
    // const restrauntList = await searchHotel(position.coords.latitude,position.coords.longtitude);
  }
  handleChange = event => {
    this.setState({ location: event.target.value });
  };
  render() {
    const { classes } = this.props;
   
    return (
      <form className={classes.container} noValidate justify="end" style={{float:'right'}} autoComplete="off">
        <Grid container spacing={24}>
        <Grid item style={{ marginTop: 18, marginRight:600,fontWeight:600 }}>
            <Grid container>
              <Typography variant="h5" style={{fontWeight:100}}>
              Popular right now in your Area
              </Typography>
            </Grid> 
        </Grid>
          <i className="material-icons" onClick={this.getLocation} style={{ marginTop: 27, marginRight: 10 }}>
              my_location
          </i>

          <Grid item >
              <TextField
                id="standard-full-width"
                style={{ margin: 8, marginLeft: 0 }}
                placeholder="CurrentLocation "
                value={this.state.Location}
                InputLabelProps={{
                shrink: true,
                }}
              />
          </Grid>
        
        
          <Grid item >
          <Button color="primary" style={{ margin: 8, marginLeft: 0 }} onClick={this.fetchHotel}>Set Location</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);