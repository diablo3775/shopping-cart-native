import { FlatList, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions, Pressable, TouchableOpacity } from "react-native";
import RenderStars from "../components/Product/RenderStars";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../store/favoriteSlice";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector(state => state.products.selectedProduct);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const isProductInFavorites = useSelector(state =>
    state.favorites.favorites.some(item => item.product.id === product.id)
  );

  const addToFavorites = () => {
    dispatch(favoriteSlice.actions.addToFavorites({ product }));
  };

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  }

  return (
    <View style={styles.productContainer}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <View style={styles.starRatingContainer}>
          <RenderStars />
          <Text style={styles.ratingText}>110 reviews</Text>
        </View>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, height: 200, marginTop: 40 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <Pressable onPress={addToFavorites} style={styles.favoriteborder}>
          <Image resizeMode="contain" style={styles.favorite} source={isProductInFavorites
            ? require('../../assets/images/favoritered.png')
            : require('../../assets/images/favorite.png')} 
          />
        </Pressable>

        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text style={styles.price}>{'$' + product.price}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable onPress={addToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </Pressable>
          <Pressable style={styles.buybutton}>
            <Text style={styles.buttonBuyText}>Buy Now</Text>
          </Pressable>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.details}>Details</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteborder: {
    height: 58,
    width: 58,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    position: 'absolute',
    top: 170,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favorite: {
    height: 24,
    width: 24,
  },
  starRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Manrope-regular',
    fontSize: 14,
    color: '#A1A1AB',
    marginLeft: 5,
  },
  productContainer: {
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  title: {
    fontFamily: 'Manrope-regular',
    fontSize: 50,
    fontWeight: '300',
    marginVertical: 10,
  },
  price: {
    fontFamily: 'Manrope-bold',
    fontSize: 16,
    letterSpacing: 1,
    color: '#2A4BA0'
  },
  description: {
    fontFamily: 'Manrope-regular',
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '400',
    color: '#8891A5',
  },
  button: {
    width: 143,
    height: 56,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2A4BA0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buybutton: {
    backgroundColor: '#2A4BA0',
    width: 143,
    height: 56,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Manrope-regular',
    color: '#2A4BA0',
    fontWeight: '500',
    fontSize: 14,
  },
  buttonBuyText: {
    fontFamily: 'Manrope-regular',
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 14
  },
  details: {
    fontFamily: 'Manrope-regular',
    fontSize: 16,
  }
})

export default ProductDetailsScreen;
