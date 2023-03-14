import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';

import { StarRating } from '../common/StarRating';

export const RestaurantCard = ({
  id,
  imageUrl,
  name,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  location,
}) => {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation();

  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };
  const handlePress = () => {
    navigation.navigate('RestaurantDetail', {
      id,
      imageUrl,
      name,
      rating,
      genre,
      address,
      short_desc,
      dishes,
      location,
    });
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => handlePress()}
      style={[styles.card, styles.wrapper, pressed && styles.wrapperPressed]}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text style={[styles.name]}>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>
            Rating: <StarRating rating={rating} />
          </Text>
        </View>
        <Text style={styles.text}>Categoria: {genre}</Text>
        <View style={styles.row}>
          <Ionicons name="location" size={18} color="black" />
          <Text style={styles.text}>Cerca &#8226; {address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 220,
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: COLORS.primary,
  },
  rating: {
    fontWeight: '700',
  },
  text: {
    color: COLORS.gray,
    fontWeight: '600',
  },
  wrapper: {
    opacity: 1,
    fontWeight: '600',
  },
  wrapperPressed: {
    opacity: 0.5,
  },
});
