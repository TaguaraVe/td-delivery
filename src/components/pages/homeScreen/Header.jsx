import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';

export const Header = () => {
  return (
    <View style={[styles.header, styles.row]}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/44/b0/96/44b096af6c9e513c9f9294a320d74bc8.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.full}>
        <Text>Enviar ahora!</Text>
        <View style={styles.row}>
          <Text style={styles.title}>Ubicación</Text>
          <Ionicons name="chevron-down" size={22} color={COLORS.gold} />
        </View>
      </View>
      <Ionicons name="person-outline" size={42} color={COLORS.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    backgroundColor: COLORS.cardBg,
  },
  full: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
