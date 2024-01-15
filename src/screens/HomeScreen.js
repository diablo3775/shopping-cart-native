import { Image, StyleSheet, FlatList, Pressable, Text, View, ScrollView } from "react-native";
import { fetchProducts, productSlice } from "../store/productSlice";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../store/favoriteSlice";
import { cartSlice } from "../store/cartSlice";
import { useEffect } from 'react';

export default function HomeScreen() {
  const products = useSelector((state) => state.products.products.products);
  const favorites = useSelector((state) => state.favorites.favorites);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  const addToCart = (productId) => {
    const selectedProduct = products.find((item) => item.id === productId);
    dispatch(cartSlice.actions.addCartItem({ product: selectedProduct }));
  };

  const addToFavoritesPage = (productId) => {
    const selectedProduct = products.find((item) => item.id === productId);
    dispatch(favoriteSlice.actions.addToFavorites({ product: selectedProduct }));
  };


  return (
    <>
      <ScrollView style={styles.productsContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image resizeMode="contain" style={styles.bannercard} source={require("../../assets/images/bannercard.png")} />
          <Image resizeMode="contain" style={styles.bannerhalfcard} source={require("../../assets/images/bannerhalfcard.png")} />
        </View>
        <Text style={{ fontFamily: 'Manrope-regular', fontSize: 35, marginBottom: 10 }}>Recommended</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => { dispatch(productSlice.actions.setSelectedProduct(item.id)), navigation.navigate("Product Details") }}
              style={styles.itemContainer}
            >
              <Pressable onPress={() => addToFavoritesPage(item.id)}>
                {favorites.some((fav) => fav.product.id === item.id) ? (
                  <Image resizeMode="contain" style={styles.favorite} source={require('../../assets/images/favoritered.png')} />
                ) : (
                  <Image resizeMode="contain" style={styles.favorite} source={require('../../assets/images/favorite.png')} />
                )}
              </Pressable>

              <Image source={{ uri: item.thumbnail }} style={styles.image} />
              <View style={styles.price}>
                <Text style={{ fontFamily: 'Manrope-semibold', fontSize: 14 }}>{'$' + item.price}</Text>
                <Pressable onPress={() => addToCart(item.id)}>
                  <Image resizeMode="contain" style={styles.add} source={require("../../assets/images/add.png")} />
                </Pressable>
              </View>
              <View style={{ justifyContent: 'flex-end' }}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              </View>
            </Pressable>
          )}
          numColumns={2}
        />
      </ScrollView>

      <View style={styles.homefooteroutercircle}>
        <View style={styles.homefooterinnercircle}>
          <Image resizeMode="contain" style={styles.add} source={require("../../assets/images/homescreenicons/homecolor.png")} />
        </View>
      </View>

      <View style={styles.homefooter}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center' }}>
            {/* <Image style={styles.add} source={require("../../assets/images/homescreenicons/home.png")} /> */}
            {/* <Text style={styles.homefootertext}>Home</Text> */}
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image resizeMode="contain" style={styles.add} source={require("../../assets/images/homescreenicons/category.png")} />
            <Text style={styles.homefootertext}>Categories</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Pressable
              onPress={() => navigation.navigate("Favorites")}
            >
              <Image resizeMode="contain" style={styles.add} source={require("../../assets/images/homescreenicons/heart.png")} />
              <Text style={styles.homefootertext}>Favorite</Text>
            </Pressable>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image resizeMode="contain" style={styles.add} source={require("../../assets/images/homescreenicons/more.png")} />
            <Text style={styles.homefootertext}>More</Text>
          </View>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  homefooteroutercircle: {
    position: 'absolute',
    height: 70,
    width: 70,
    backgroundColor: '#F8F9FB',
    bottom: 60,
    left: 10,
    zIndex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homefooterinnercircle: {
    height: 56,
    width: 56,
    backgroundColor: '#1E222B',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  homefootertext: {
    fontFamily: 'Manrope-regular',
    fontSize: 12,
    color: '#8891A5',
  },
  homefooter: {
    height: 89,
    width: 375,
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  productsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff'
  },
  bannercard: {
    height: 123,
    width: 269,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  bannerhalfcard: {
    height: 123,
    width: '27%',
    position: 'absolute',
    left: 307,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  topcontainer: {
  },
  add: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 68,
    height: 68,
    left: 50,
    top: 20,
  },
  favorite: {
    width: 15,
    height: 14,
    left: 15,
    top: 15,
  },
  itemContainer: {
    width: 160,
    height: 194,
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    marginRight: 20,
    marginBottom: 25,
  },
  title: {
    fontFamily: 'Manrope-regular',
    fontSize: 12,
    top: 55,
    left: 18,
    marginRight: 20,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    top: 53,
  }
});
