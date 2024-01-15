import { selectDeliveryPrice, selectSubTotal, selectTotal } from "../store/cartSlice";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartListItem from "../components/Cart/CartListItem";
import { useSelector } from "react-redux";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{'$' + subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{'$' + deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{'$' + total}</Text>
      </View>
    </View>
  );
};

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />

      <View style={styles.checkoutcontainer}>
        <ShoppingCartTotals />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Proceed To Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutcontainer: {
    backgroundColor: "#F8F9FB",
    height: 266,
    borderRadius: 30,
    top: 20,
    margin: 10,
  },
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
    marginBottom: 15,
  },
  text: {
    fontFamily: 'Manrope-regular',
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontFamily: 'Manrope-regular',
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#2A4BA0",
    width: 327,
    alignSelf: "center",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: 'Manrope-regular',
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default CartScreen;
