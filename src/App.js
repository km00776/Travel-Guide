import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import {CssBaseline, Grid} from '@material-ui/core';
import {getPlacesData} from './api';
import { useDispatch, useSelector } from 'react-redux';
import {setLocation} from './redux/actions/locationActions';


const App = () => {
  const [places, setPlaces] = useState([]);
  // const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState (null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState ('restaurants');
  const [rating, setRating] = useState ('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);
 const [autocomplete, setAutocomplete] = useState (null);

 const dispatch = useDispatch();
const coordinates = useSelector (state => state.location.location);






  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      dispatch(setLocation({lat: latitude, lng: longitude}));
    })
  }, [])

   useEffect (
  () => {
    const filtered = places.filter ((place) => Number (place.rating) > rating);

    setFilteredPlaces (filtered);
  },
  [rating]
);


  useEffect(() =>{
    if(bounds) {
      setIsLoading (true);
      getPlacesData (type, bounds.sw, bounds.ne).then (data => {
  setPlaces (data.filter((place) => place.name && place.num_reviews > 0));
  console.log (places);
  setIsLoading (false);
  setFilteredPlaces ([]);
    });

    }

  }, [type, bounds]);


  const onLoad = autoC => setAutocomplete (autoC);
const onPlaceChanged = () => {
  const placeLocation = autocomplete.getPlace();
   if (!placeLocation.geometry || !placeLocation.geometry.location) {
      window.alert("No details available for input: '" + placeLocation.name + "'");
      return;
  }
  const lat = autocomplete.getPlace ().geometry.location.lat ();
  const lng = autocomplete.getPlace ().geometry.location.lng ();

  dispatch(setLocation ({lat, lng}));
};





  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad = {onLoad}/>
      <Grid container spacing={3} style={{width: "100%"}}>
           <Grid item xs={12} md={4}>
              <List 
              places = {filteredPlaces.length ? filteredPlaces : places} 
              childClicked = {childClicked} 
                isLoading = {isLoading} 
                type={type}
                setType = {setType}
                rating = {rating} 
                setRating = {setRating} 
              />
          </Grid> 
          <Grid item xs={12} md={4}>
              <Map setBounds = {setBounds} coordinates = {coordinates}  places = {filteredPlaces.length ? filteredPlaces : places } setChildClicked={setChildClicked} />
          </Grid> 
      </Grid>
    </>
  );
};

export default App;