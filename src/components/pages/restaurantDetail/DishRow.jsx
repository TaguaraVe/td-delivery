import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { urlFor } from '../../../../sanity';
import { COLORS } from '../../../constants';
export const DishRow = ({ dish }) => {
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState(false);
  const [qty, setQty] = useState(1);

  const handleDecrese = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const handleIncrese = () => {
    setQty(qty + 1);
  };

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  const handlePress = () => {
    setSelected(true);
  };

  return (
    <View
      style={[styles.card, styles.wrapper, pressed && styles.wrapperPressed]}
    >
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => handlePress()}
      >
        <View style={styles.row}>
          <View style={styles.restInfo}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.desc}>{dish.description}</Text>
            <Text style={styles.bold}>
              Price: <Text style={styles.price}>${dish.price}</Text>
            </Text>
          </View>
          <Image
            source={{ uri: urlFor(dish.image).url() }}
            style={styles.image}
          />
        </View>
      </Pressable>

      {selected && (
        <View style={styles.btnContainer}>
          <Pressable onPress={handleDecrese}>
            <FontAwesome name="minus-circle" size={36} color={COLORS.danger} />
          </Pressable>
          <Text style={styles.qty}>{qty}</Text>
          <Pressable onPress={handleIncrese}>
            <FontAwesome name="plus-circle" size={36} color={COLORS.primary} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 10,
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restInfo: { flex: 1 },
  name: {
    fontSize: 18,
    color: COLORS.primary,
  },
  desc: {
    marginVertical: 5,
  },
  bold: {
    fontSize: 18,
    fontWeight: '700',
  },
  price: {
    color: COLORS.gold,
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
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    color: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  qty: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 34,
  },
});
