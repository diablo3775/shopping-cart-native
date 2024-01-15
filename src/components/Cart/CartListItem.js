import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { cartSlice } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: 1,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: -1,
      })
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: cartItem.product.thumbnail }} style={styles.image} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.name}>{cartItem.product.title}</Text>
            <Text style={styles.itemTotal}>
              $ {cartItem.product.price * cartItem.quantity}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
        <Pressable onPress={decreaseQuantity} style={styles.iconborder}>
          <Image style={styles.icon} source={require("../../../assets/images/minus.png")} />
          </Pressable>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable style={styles.iconborder} onPress={increaseQuantity}>
          <Image style={styles.icon} source={require("../../../assets/images/plus.png")} />
          </Pressable>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  iconborder: {
    width: 40,
    height: 40,
    backgroundColor: '#F8F9FB',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: "#EBEBFB",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  name: {
    fontFamily: 'Manrope-regular',
    fontSize: 14,
  },
  size: {
    fontSize: 16,
    color: 'gray',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#1E222B',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontFamily: 'Manrope-regular',
    fontSize: 14,
  },
});

export default CartListItem;
