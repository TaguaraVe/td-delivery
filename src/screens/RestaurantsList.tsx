import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RestaurantItem } from '../components/pages/restaurantListScreen/RestaurantItem';
import HeaderTab from '../components/pages/restaurantListScreen/headerTab';
import Categories from '../components/pages/restaurantListScreen/categories';
import { SearchBar } from '../components/pages/restaurantListScreen/searchBar';
import { useGetRestaurants } from '../hooks/useGetRestaurants';

export const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRestaurants = async () => {
    setIsLoading(false);
    const restaurants = await useGetRestaurants();
    setRestaurants(restaurants);
    setIsLoading(true);
    return restaurants;
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <HeaderTab />
        <SearchBar />
        <Categories />
      </View>
      <FlatList
        data={restaurants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    padding: 10,
  },
});
