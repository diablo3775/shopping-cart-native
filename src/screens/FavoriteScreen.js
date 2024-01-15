import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteSlice } from '../store/favoriteSlice';

const FavoriteScreen = () => {
    const favorites = useSelector((state) => state.favorites.favorites);
    const dispatch = useDispatch()

    const removeFromFavorites = (productId) => {
        dispatch(favoriteSlice.actions.addToFavorites({ product: { id: productId } }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={favorites}
                    renderItem={({ item }) => (
                        <View style={styles.container}>

                            <View style={styles.contentContainer}>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={{ uri: item.product.thumbnail }} style={styles.image} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.name}>{item.product.title}</Text>
                                        <Text style={styles.itemTotal}>
                                            $ {item.product.price}
                                        </Text>
                                    </View>
                                </View>

                                <Pressable onPress={() => removeFromFavorites(item.product.id)} style={styles.iconborder}>
                                <Image style={styles.icon} source={require('../../assets/images/favoritered.png')} />
                                </Pressable>

                            </View>
                        </View>
                    )}
                />
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
        backgroundColor: '#ffffff',
        flex: 1
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

export default FavoriteScreen;
