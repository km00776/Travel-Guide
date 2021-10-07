import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '7e3681b849msh8c0361b310dbafcp187c56jsndb368e9c59e6',
  },
};

export const getPlacesData = async (sw, ne) => {
  try {
    const {data: {data}} = await axios.get (URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng ,
        tr_longitude: ne.lng ,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '7e3681b849msh8c0361b310dbafcp187c56jsndb368e9c59e6',
      },
    });
    return data;
  } catch (error) {
    console.log (error);
  }
};
