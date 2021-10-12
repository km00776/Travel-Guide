import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import { PlaceSharp } from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import { setLocation } from '../../redux/actions/locationActions';
const Map = ({places, setChildClicked, setBounds}) => {
  const classes = useStyles ();
  const isDesktop = useMediaQuery ('(min-width:600px)');

  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.location.location)
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCEMD6n0wjVBcS5xQOrw6Hyl-A_moA7Vto'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => { 
          dispatch(setLocation({lat: e.center.lat, lng: e.center.lng}))
          // setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw}) 
          console.log(e.marginBounds.ne);
        }}
        onChildClick={(child) => setChildClicked(child)}>
        {places?.map((place, i) => (
          <div className={classes.markerContainer} 
          lat={Number(place.latitude)} 
          lng={Number(place.longitude)}
          key={i}
          >{
            !isDesktop ?( <LocationOnOutlinedIcon color="primary" fontSize="large" />)
            :(
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
                  <img className={classes.pointer} src={
  place.photo
    ? place.photo.images.large.url
    : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
}
 alt={place.name} />
 <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
            )
          }

          </div>
        ))}
        
      </GoogleMapReact> 
    </div>
  );
};

export default Map;
