import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, ROUTES } from '../../../constants';
import { StarRating } from '../../common/StarRating';

type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

type RestaurantItemProps = {
  restaurant: {
    name: string;
    image: string;
    rating: number;
    deliveryFee: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    dishes: Dish[];
  };
};
export const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const navigation = useNavigation();

  const handleOnPress = (restaurant) => {
    navigation.navigate(ROUTES.HOME, { restaurant });
  };

  return (
    <Pressable
      onPress={() => handleOnPress(restaurant)}
      style={styles.restaurantContainer}
    >
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bold]}>
            Delivery Fee:
            <Text style={styles.text}> ${restaurant.deliveryFee}</Text>
          </Text>
          <Text style={styles.bold}>
            <StarRating rating={restaurant.rating} />
          </Text>
        </View>

        <Text style={[styles.text, styles.bold]}>
          Delivery Time:{' '}
          <Text style={styles.text}>
            {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes
          </Text>
        </Text>
        <View></View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 7 / 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    color: COLORS.gray,
  },
  bold: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
