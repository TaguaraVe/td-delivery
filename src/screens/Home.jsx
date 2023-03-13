import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/pages/homeScreen/Header';
import { Search } from '../components/pages/homeScreen/Search';
import { Categories } from '../components/pages/homeScreen/Categories';
import { Features } from '../components/pages/homeScreen/Features';
import { COLORS } from '../constants';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={styles.screen}>
      <Header />
      <Search />
      <Categories />
      <ScrollView style={styles.screen} contentContainerStyle={styles.body}>
        <Features
          id={'01'}
          title={'Ofertas Cercanas'}
          description={'los mejores lugares para nuestros afiliados'}
          category={'Promociones'}
        />
        <Features
          id={'02'}
          title={'los mas nuevos'}
          description={'los mejores lugares para nuestros afiliados'}
          category={'Novedades'}
        />
        <Features
          id={'03'}
          title={'los mas tradiciopnales'}
          description={'los mejores lugares para nuestros afiliados'}
          category={'Tradicional'}
        />
        <Features
          id={'04'}
          title={'los mas tradiciopnales'}
          description={'los mejores lugares para nuestros afiliados'}
          category={'Pasta'}
        />
        <Features
          id={'05'}
          title={'los mas tradiciopnales'}
          description={'los mejores lugares para nuestros afiliados'}
          category={'Pasta'}
        />
        <Features
          id={'06'}
          title={'los mas tradiciopnales'}
          description={'los mejores lugares para nuestros afiliados'}
          category={'Pasta'}
        />
      </ScrollView>
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
