import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useStore } from '../../../../globalStates/contexts/Store';
import { styles } from './searchBarStyles';

export const SearchBar = () => {
  const { location, setLocation } = useStore();
  const [locationInput, setLocationInput] = useState(location);

  const handleLocation = () => {
    /**
     * TODO: Evaluar el uso de google-place-autocomplete
     */
    setLocation((p) => locationInput);
  };

  return (
    <View style={styles.searchContainer}>
      <FontAwesome
        style={styles.leftIcon}
        name="map-marker"
        size={24}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Seach ..."
        onChangeText={(text) => setLocationInput(text)}
        onEndEditing={handleLocation}
        value={locationInput}
      />
    </View>
  );
};

/**
 *         <GooglePlacesAutocomplete
          query={{ key: 'AIzaSyDwvzvJ5zd_n2tH4A1bgJo6QCS0L_sbTwI' }}
          onPress={(data, details = null) => {
            console.log('data', data.description);
            const city = data.description.split(',')[0];
            cityHandler(city);
          }}
          placeholder="Search"
          styles={{
            textInput: {
              backgroundColor: '#eee',
              borderRadius: 20,
              fontWeight: '700',
              marginTop: 7,
            },
            textInputContainer: {
              backgroundColor: '#eee',
              borderRadius: 50,
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            },
          }}
          renderLeftButton={() => (
            <View style={styles.leftIcon}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          )}
          renderRightButton={() => (
            <View style={styles.rightIcon}>
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 6 }}
              />
              <Text>Search</Text>
            </View>
          )}
        />

 */
