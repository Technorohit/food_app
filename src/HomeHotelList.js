import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 290,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;


  return (
    <div><Card className={classes.card} style={{ height: 310, width:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Amber Restuarant"
          className={classes.media}
          height="160"
          image= {props.restrauntImg}
          title="Food"
        />
        <CardContent>
          <Typography variant="h6" component="h6" style={{ fontSize: '15px',fontWeight: '500' }} >
            {props.restrauntName}
          </Typography>
          <Typography component="h6">
            <Typography  style={{ fontSize: '12px', fontWeight: '500' }}>
            {props.restrauntLocation}
          </Typography>
            <Typography style={{ fontSize: '12px',fontWeight: '500' }} >
            cost for two:  {props.costForTwo}
          </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" style={{ fontSize: '14px', marginTop: 0 ,fontWeight: '400' }}>
          15-20 min {
            // calculate based on the hotel and my location
          }
        </Button>
        <Button size="small" style={{ float: 'right',marginLeft:100, fontSize: '12px', fontWeight: '400' }}>
          Veg  {// calculate based on the cuisine
          }
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
