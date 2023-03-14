import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { CategoryCard } from '../../common/CategoryCard';
import { useGetCategories } from '../../../hooks/useGetCategories';
import { useGetRestaurants } from '../../../hooks/useGetRestaurants';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(false);
    const categories = await useGetCategories();
    const restaurants = await useGetRestaurants();
    setCategories(categories);
    setRestaurants(restaurants);
    setIsLoading(true);
    return categories;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.categoryCard}>
      {isLoading && (
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryCard image={item.image} name={item.name} />
          )}
          keyExtractor={(item) => item._id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    marginVertical: 20,
  },
});
