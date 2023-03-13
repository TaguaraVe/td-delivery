import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../constants';

export const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <FontAwesome
          name="star"
          size={14}
          color={COLORS.primary}
          key={`k-${i}`}
        />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <FontAwesome
          name="star-half-o"
          size={14}
          color={COLORS.primary}
          key={`k-${i}`}
        />
      );
    } else {
      stars.push(
        <FontAwesome
          name="star-o"
          size={14}
          color={COLORS.primary}
          key={`k-${i}`}
        />
      );
    }
  }

  return <>{stars}</>;
};
