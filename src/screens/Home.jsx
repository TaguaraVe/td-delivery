import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/pages/homeScreen/Header';
import { Search } from '../components/pages/homeScreen/Search';
import { Categories } from '../components/pages/homeScreen/Categories';
import { Features } from '../components/pages/homeScreen/Features';
import { useGetGroupRestaurants } from '../hooks/useGetGroupRestaurants';

export const HomeScreen = () => {
  const [groupRestaurants, setGroupRestaurants] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchGroupRestaurants = async () => {
    setIsLoading(false);
    const groupRestaurants = await useGetGroupRestaurants();
    setGroupRestaurants(groupRestaurants);
    setIsLoading(true);
    return groupRestaurants;
  };

  useEffect(() => {
    fetchGroupRestaurants();
  }, []);

  return (
    <View style={styles.screen}>
      <Header />
      <Search />
      <Categories />
      {isLoading && (
        <ScrollView style={styles.screen} contentContainerStyle={styles.body}>
          {groupRestaurants.map((group) => (
            <Features key={group._id} groupRestaurants={group} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
  },
  body: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
