import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useGetCategories } from '../../../../hooks/useGetCategories';

import { styles } from './categoriesStyles';

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(false);
    const categories = await useGetCategories();
    setCategoriesData(categories);
    setIsLoading(true);
    return categories;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.title}> Categories</Text>
      <ScrollView
        style={styles.banner}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((category) => (
          <View key={category.name} style={styles.card}>
            <Image style={styles.image} source={{ uri: category.image }} />
            <Text style={styles.name}> {category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
