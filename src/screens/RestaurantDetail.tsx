import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants';
import { urlFor } from '../../sanity';
import { StarRating } from '../components/common/StarRating';
import { DishRow } from '../components/pages/restaurantDetail/DishRow';

type Dish = {
  name: string;
  image: string;
  description: string;
  price: number;
};

type Location = {
  lat: string;
  long: string;
};

type RestaurantProps = {
  id: string;
  imageUrl: string;
  name: string;
  rating: number;
  genre: string;
  address: string;
  short_desc: string;
  dishes: Dish[];
  location: Location;
};
export const RestaurantDetail = ({ navigation, route }: Props) => {
  const {
    name,
    imageUrl,
    short_desc,
    rating,
    location,
    genre,
    address,
    dishes,
  } = route.params;

  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.restaurantCard}>
        <Image source={{ uri: urlFor(imageUrl).url() }} style={styles.image} />
        <Pressable
          style={[
            styles.back,
            styles.wrapper,
            pressed && styles.wrapperPressed,
          ]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
        >
          <Ionicons name="arrow-back-sharp" size={24} color={COLORS.primary} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
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
        <Text style={styles.desc} numberOfLines={4}>
          {short_desc}
        </Text>
      </View>
      <View style={styles.menu}>
        <Text style={styles.name}> Menu</Text>
        <View>
          {dishes.map((dish) => {
            return <DishRow key={dish._id} dish={dish} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  restaurantCard: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 1,
  },
  wrapper: {
    opacity: 1,
    color: COLORS.primary,
    fontWeight: '700',
  },
  wrapperPressed: {
    opacity: 0.5,
  },
  back: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 20,
    left: 20,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: 10,
  },
  name: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },
  desc: {
    fontWeight: '300',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontWeight: '700',
  },
  text: {
    color: COLORS.gray,
    fontWeight: '600',
  },
  menu: {
    paddingHorizontal: 10,
  },
});
