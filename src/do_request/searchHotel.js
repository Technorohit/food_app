const fetchHotel = async (lat,long)=>{
    const header= {
       method:'GET',
       headers:{
           "user-key": 'dfd23e749f509236eb28465784d17b57',
           "Accept":'application/json'
       }};
       console.log('lat: ' ,lat);
       console.log('long:', long)
     const apiURL=`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`;
     // const url='https://developers.zomato.com/api/v2.1/categories';
     let restraunt = await fetch(apiURL, header).then(res=>res.json()).then(data=>data);
     return restraunt;
   };
   export default fetchHotel