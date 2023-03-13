import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
  short_description,
  dishes,
  location,
}) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.card, styles.wrapper, pressed && styles.wrapperPressed]}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text style={[styles.name]}>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>
            Rating: <StarRating rating={rating} /> &#8213;{' '}
            <Text style={styles.text}>{genre}</Text>
          </Text>
        </View>
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
  },
  wrapper: {
    opacity: 1,
    fontWeight: '600',
  },
  wrapperPressed: {
    opacity: 0.5,
  },
});
