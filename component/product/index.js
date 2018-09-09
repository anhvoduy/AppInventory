import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './style';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        }
    }

    render() {
        return (
            <View style={styles.productContainer}>
            </View>
        );
    }
};

Product.propTypes = {
  title: PropTypes.string
};

export default Product;