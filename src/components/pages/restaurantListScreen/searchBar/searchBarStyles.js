import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 100,
  },
  input: {
    flex: 1,
    height: 28,
    paddingLeft: 10,
  },
  leftIcon: {
    marginHorizontal: 10,
  },
  rightIcon: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
});
