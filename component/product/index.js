import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './style';

import ProductList from '../productList';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        }
    }

    onSearchPressed(){
        if(this.state.searchQuery && this.state.searchQuery != ''){
            this.props.navigator.push({
                title: 'Product List',
                component: ProductList,
                passProps: {
                    searchQuery: this.state.searchQuery
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.productContainer}>
                <TextInput  style={styles.input}
                            onChangeText={(value) => { this.setState({ searchQuery: value }) } }
                            placeholder='enter product name'
                            autoCapitalize='none'>
                </TextInput>

                <TouchableHighlight
                    onPress={this.onSearchPressed.bind(this)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

Product.propTypes = {
  title: PropTypes.string
};

export default Product;