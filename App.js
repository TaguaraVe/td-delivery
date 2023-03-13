import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StoreProvider } from './src/globalStates/contexts/Store';

import { Navigator } from './src/navigator';

export default function App() {
  return (
    <StoreProvider>
      <SafeAreaView style={styles.screen}>
        <Navigator />
        <StatusBar style="auto" />
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 15,
  },
});
