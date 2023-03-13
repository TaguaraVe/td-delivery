import 'react-native-url-polyfill/auto';
import { client, urlFor } from '../../sanity';

export const useGetCategories = async () => {
  const fetchAllCategories = async () => {
    try {
      const categories = await client.fetch(
        `*[_type == "category"]{_id,image,name}`
      );

      const newCategories = categories.map((category) => {
        return {
          _id: category._id,
          name: category.name,
          image: urlFor(category.image.asset._ref).url(),
        };
      });

      return newCategories;
    } catch (error) {
      console.log('hay un error');
    }
  };

  return await fetchAllCategories();
};
