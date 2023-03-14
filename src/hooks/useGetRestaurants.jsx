import 'react-native-url-polyfill/auto';
import { client, urlFor } from '../../sanity';

export const useGetRestaurants = async () => {
  const query = `*[_type == "restaurant"] {
  ...,
  "categories": categories[]->name,
  "dishes" : dishes[]->{name,image,price}
}`;
  const fetchAllRestaurants = async () => {
    try {
      const restaurants = await client.fetch(query);

      const newRestaurants = restaurants.map((restaurant) => {
        return {
          ...restaurant,
          image: urlFor(restaurant.image).url(),
        };
      });

      return newRestaurants;
    } catch (error) {
      console.log('hay un error');
    }
  };

  return await fetchAllRestaurants();
};
