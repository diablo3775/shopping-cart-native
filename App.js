import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from 'expo-app-loading';
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';
import { store } from "./src/store";

export default function App() {
  let [fontsLoaded] = useFonts({
    'Manrope-extrabold': require('./assets/fonts/Manrope/static/Manrope-ExtraBold.ttf'),
    'Manrope-semibold': require('./assets/fonts/Manrope/static/Manrope-SemiBold.ttf'),
    'Manrope-regular': require('./assets/fonts/Manrope/static/Manrope-Regular.ttf'),
    'Manrope-medium': require('./assets/fonts/Manrope/static/Manrope-Medium.ttf'),
    'Manrope-bold': require('./assets/fonts/Manrope/static/Manrope-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
