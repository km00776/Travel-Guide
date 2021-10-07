import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import {CssBaseline, Grid} from '@material-ui/core';
import {getPlacesData} from './api';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])

  useEffect(() =>{
    console.log(coordinates, bounds);
    console.log(bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
    })
  }, [coordinates, bounds]);


  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: "100%"}}>
           <Grid item xs={12} md={4}>
              <List places = {places} />
          </Grid> 
          <Grid item xs={12} md={4}>
              <Map setBounds = {setBounds} coordinates = {coordinates} setCoordinates={setCoordinates} places = {places} />
          </Grid> 
      </Grid>
    </>
  );
};

export default App;