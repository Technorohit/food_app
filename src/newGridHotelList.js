import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import HomeHotelList from './HomeHotelList'
import searchHotel from './do_request/searchHotel';
import getGeoLocation from './do_request/geoLocation'

class newGridHotelList extends Component{

    state={
        areaLocation:'',
        cityName:'', //City name
        nearbyRestaurants:[],
        avgCostForTwo:0,
        cuisuine:'',
        hotel_image:'',
        hotelLocation:'',
        hotelName:'',
        userRating:0
         }
    async componentDidMount(){
    const position = await getGeoLocation();
    console.log('inside newGridHotel', position.coords);
    const restrauntResult = await searchHotel(position.coords.latitude,position.coords.longitude);
    // console.log(restrauntResult.nearby_restaurants);
    // console.log(restrauntResult.popularity); // return restrauntResult
    this.setState({
        areaLocation:'',
        cityName:restrauntResult.location.city_name, //City name
        nearbyRestaurants:restrauntResult.nearby_restaurants,
        // avgCostForTwo:restrauntResult.nearby_restaurants,
        // cuisuine:'',
        // hotel_image:'',
        // hotelLocation:'',
        // hotelName:'',
        // userRating:0
    });
    };

render(){
  return (
      <Grid container spacing={40}>
          <Grid item xs={12}  style={{}}>
          <Grid container justify="center" spacing={40}>
          {this.state.nearbyRestaurants.map(index=>( 
              <Grid item key={index.restaurant.R.res_id}>
              
                <HomeHotelList restrauntName={index.restaurant.name} 
                            restrauntImg={index.restaurant.featured_image} 
                            restrauntLocation={index.restaurant.location.address} 
                            costForTwo={index.restaurant.average_cost_for_two}
                             />
              </Grid>
               ))};
          </Grid>
        </Grid>
      </Grid>
      
  );
    };
}
export default newGridHotelList;