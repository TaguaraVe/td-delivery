import 'react-native-url-polyfill/auto';
import { client, urlFor } from '../../sanity';

export const useGetGroupRestaurants = async () => {
  const query = `*[_type == "featured"] {
  _id,  
  name,
  description,
  "restaurants":restaurants[]->{
    ...,
    "categories": categories[]->name,
    "dishes" : dishes[]->{_id,name,image,price,description}
  }
}`;
  const fetchGroupRestaurants = async () => {
    try {
      const groupRestaurants = await client.fetch(query);
      return groupRestaurants;
    } catch (error) {
      console.log('hay un error');
    }
  };

  return await fetchGroupRestaurants();
};
