import { Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const RenderStars = () => {
    const product = useSelector(state => state.products.selectedProduct);
    const numberOfStars = 5;
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const stars = [];

    for (let i = 1; i <= numberOfStars; i++) {
        if (i <= fullStars) {
            stars.push(<Image resizeMode="contain" key={i} style={styles.star} source={require('../../../assets/images/star.png')} />);
        } else if (hasHalfStar && i === fullStars + 1) {
            stars.push(<Image resizeMode="contain" key={i} style={styles.star} source={require('../../../assets/images/halfstar.png')} />);
        } else {
            stars.push(<Image resizeMode="contain" key={i} style={styles.star} source={require('../../../assets/images/emptystar.png')} />);
        }
    }

    return stars;
};

const styles = StyleSheet.create({
    star: {
        marginRight: 2,
        height: 20,
        width: 20,
    }
})

export default RenderStars;