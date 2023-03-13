import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';

export const Search = () => {
  return (
    <View style={[styles.header, styles.row]}>
      <View style={[styles.row, styles.full]}>
        <Ionicons name="ios-search-outline" size={24} color={COLORS.gray} />
        <TextInput
          placeholder="Restaurantes y cocinas"
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <Ionicons name="options-outline" size={32} color={COLORS.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 10,
  },
  full: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: COLORS.inputBg,
    borderRadius: 10,
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
  input: {
    color: COLORS.primary,
    padding: 10,
    borderColor: 'transparent',
  },
});
