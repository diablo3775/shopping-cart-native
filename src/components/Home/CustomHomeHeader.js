import { Image,Pressable,StyleSheet,Text,TextInput,View } from "react-native";

const CustomHomeHeader = ({ title, navigation, numberOfItems }) => (
  <View style={styles.headerContainer}>
    
    <View style={styles.headerTop}>
    <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={() => navigation.navigate("Shopping Cart")}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.bagIcon}
            source={require("../../../assets/images/bag.png")}
          />
        <View style={styles.productcart}>
          <Text
            style={{
              marginLeft: 5,
              marginRight: 5,
              fontWeight: "500",
              color: "white",
            }}
          >
            {numberOfItems}
          </Text>
        </View>
        </View>
      </Pressable>
    </View>

    <View style={styles.headerCenter}>
      <Image
        resizeMode="contain"
        style={styles.searchIcon}
        source={require("../../../assets/images/searchicon.png")}
      />
      <TextInput placeholder="Search Products or store" style={styles.input} />
    </View>

    <View style={styles.headerEnd}>
      <View>
        <Text style={styles.deliverytext}>DELIVERY TO</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.address}>Green Way 3000, Sylhet</Text>
          <Image
            resizeMode="contain"
            style={styles.arrowIcon}
            source={require("../../../assets/images/arrowicon.png")}
          />
        </View>
      </View>

      <View>
        <Text style={styles.deliverytext}>WITHIN</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.address}>1 Hour</Text>
          <Image
            resizeMode="contain"
            style={styles.arrowIcon}
            source={require("../../../assets/images/arrowicon.png")}
          />
        </View>
      </View>
    </View>

  </View>
);


const styles = StyleSheet.create({
  productcart: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#F9B023',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
    left: 5,
    position: 'absolute',
},
  headerContainer: {
    backgroundColor: "#2A4BA0",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerTop: {
    marginTop: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bagIcon: {
    height: 18,
    width: 16,
  },
  headerCenter: {
    marginTop: 20,
    marginBottom: 15,
  },
  searchIcon: {
    height: 18,
    width: 18,
    position: "absolute",
    left: 30,
    top: "50%",
    transform: [{ translateY: -9 }],
  },
  headerEnd: {
    fontFamily: 'Manrope-regular',
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  arrowIcon: {
    height: 4,
    width: 7,
    marginLeft: 10,
  },
  deliverytext: {
    color: "#A9B4BC",
    fontSize: 11,
    fontFamily: 'Manrope-bold',
  },
  address: {
    color: "#F8F9FB",
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    height: 56,
    paddingLeft: 65,
    borderRadius: 50,
    color: "#A9B4BC",
    backgroundColor: "#153075",
  },
  title: {
    fontFamily: 'Manrope-bold',
    color: "white",
    fontSize: 18,
  },
});

export default CustomHomeHeader