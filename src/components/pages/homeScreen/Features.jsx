import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import { RestaurantCard } from '../../common/RestaurantCard';

featureData = [
  {
    id: '01',
    image: '',
  },
  {
    id: '02',
    image: '',
  },
  {
    id: '03',
    image: '',
  },
  {
    id: '04',
    image: '',
  },
  {
    id: '05',
    image: '',
  },
];

export const Features = ({ id, title, description, category }) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.row}>
        <Text style={styles.category}>{category}</Text>
        <Ionicons name="arrow-forward" size={24} color={COLORS.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <View>
        <FlatList
          horizontal={true}
          data={featureData}
          renderItem={(item) => (
            <RestaurantCard
              id="01"
              imageUrl="https://links.papareact.com/gn7"
              name="El portico"
              rating={4}
              genre="Mexican"
              address="La calle del hambre"
              short_description="El mejor sitio para comer comida callejera"
              dishes={[]}
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
