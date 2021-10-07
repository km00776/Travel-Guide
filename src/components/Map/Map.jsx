import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';
import { PlaceSharp } from '@material-ui/icons';

const Map = ({places ,setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles ();
  const isDesktop = useMediaQuery ('min-width:600px');
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
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw}) 
          console.log(e.marginBounds.ne);
        }}
        onChildClick={''}>
        {places?.map((place, i) => (
          <div className={classes.markerContainer} 
          lat={Number(place.latitude)} 
          lng={Number(place.longitude)}
          key={i}
          >{
            !isDesktop ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
            :(
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
                  <img className={classes.pointer} src={place.name ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} />
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
