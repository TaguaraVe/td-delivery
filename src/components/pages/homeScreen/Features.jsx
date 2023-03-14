import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import { RestaurantCard } from '../../common/RestaurantCard';
import { urlFor } from '../../../../sanity';

export const Features = ({ groupRestaurants }) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.row}>
        <Text style={styles.category}>{groupRestaurants.name}</Text>
        <Ionicons name="arrow-forward" size={24} color={COLORS.primary} />
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {groupRestaurants.description}
      </Text>

      <View>
        <FlatList
          keyExtractor={(item) => item._id}
          data={groupRestaurants.restaurants}
          horizontal={true}
          renderItem={({ item }) => (
            <RestaurantCard
              id={item._id}
              imageUrl={urlFor(item.image).url()}
              name={item.name}
              rating={item.rating}
              genre={item.categories[0]}
              address={item.address}
              short_desc={item.short_desc}
              dishes={item.dishes}
              location={{
                lon: 33,
                lat: 4,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  featureCard: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  title: {
    fontWeight: '700',
  },
  description: {
    color: COLORS.gray,
    marginBottom: 10,
  },
});
