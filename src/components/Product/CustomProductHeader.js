import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const CustomProductHeader = ({ numberOfItems, navigation }) => (
    <View style={styles.headerTop}>
       <Pressable onPress={() => navigation.goBack()}>
       <View style={styles.leftarrowborder}>
            <Image
                resizeMode="contain"
                style={styles.leftarrowIcon}
                source={require("../../../assets/images/leftarrow.png")}
            />
        </View>
       </Pressable>
        <Pressable onPress={() => navigation.navigate("Shopping Cart")}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={styles.bagIcon}
                    source={require("../../../assets/images/bagproduct.png")}
                />
                <View style={styles.productcart}>
                <Text
                    style={{
                        marginLeft: 5,
                        marginRight: 5,
                        fontWeight: "500",
                        color: "#ffffff",
                    }}
                >
                    {numberOfItems}
                </Text>
                </View>
            </View>
        </Pressable>
    </View>
)

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
    headerTop: {
        paddingTop: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 20,
        paddingRight: 20,
    },
    leftarrowborder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50, 
        backgroundColor: '#F8F9FB', 
        height: 40,
        width: 40,
    },
    bagIcon: {
        height: 18,
        width: 16,
    },
    leftarrowIcon: {
        height: 10,
        width: 10,
        objectFit: 'contain'
    },
});
export default CustomProductHeader