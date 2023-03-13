import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';

export const CategoryCard = ({ image, name }) => {
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
      style={styles.card}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={[styles.wrapper, pressed && styles.wrapperPressed]}>
        {name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginRight: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  image: {
    width: 75,
    height: 75,
  },
  wrapper: {
    opacity: 1,
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: COLORS.primary,
    fontWeight: '600',
  },
  wrapperPressed: {
    opacity: 0.5,
  },
});
