import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
  params: {
    location_id: '293919',
    restaurant_tagcategory: '10591',
    restaurant_tagcategory_standalone: '10591',
    currency: 'USD',
    lunit: 'km',
    limit: '2',
    min_rating: 'Min 3 - Max 5',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': 'd5ef60a199msh412698ea1da2b1dp1b0473jsnee03ff14c966',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
export const getRestaurantList = async () => {
  try {
    const response = await axios.request(options);
    const restaurantData = response.data.data;
    return restaurantData
  } catch (error) {
    console.error(error);
  }
}


const url_detail = 'https://travel-advisor.p.rapidapi.com/restaurants/get-details'

const options2 = {
  headers: {
    'X-RapidAPI-Key': 'd5ef60a199msh412698ea1da2b1dp1b0473jsnee03ff14c966',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getRestaurantDetail = async (id) => {
  try {
    const response = await axios.get(`${url_detail}?location_id=${id}`, options2);
    return response.data
  } catch (error) {
    console.error(error);
  }
}