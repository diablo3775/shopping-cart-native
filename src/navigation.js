import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomProductHeader from "./components/Product/CustomProductHeader";
import CustomCartHeader from "./components/Cart/CustomCartHeader";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import CustomHomeHeader from "./components/Home/CustomHomeHeader";
import { NavigationContainer } from "@react-navigation/native";
import { selectNumberOfItems } from "./store/cartSlice";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
import FavoriteScreen from "./screens/FavoriteScreen";
import CustomFavoriteHeader from "./components/Favorite/CustomFavoriteHeader";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomHomeHeader
                title="Hey Rahul"
                navigation={navigation}
                numberOfItems={numberOfItems}
              />
            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomProductHeader
                navigation={navigation}
                numberOfItems={numberOfItems}
              />
            ),
          })}
        />
        <Stack.Screen name="Shopping Cart" component={CartScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomCartHeader
                navigation={navigation}
                numberOfItems={numberOfItems}
              />
            ),
          })}
        />
        <Stack.Screen name="Favorites" component={FavoriteScreen}
          options={({ navigation }) => ({
            header: () => (
              <CustomFavoriteHeader
                navigation={navigation}
                numberOfItems={numberOfItems}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
