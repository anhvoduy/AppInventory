import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

import api from '../../services/api';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: true,
            products: []
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        let url = 'https://4i2ufdga01.execute-api.us-east-1.amazonaws.com/api/product/list';
        api.get(url)
        .then((res) => {
            let { products } = res.data;
            console.log('- products:', products.length);
            this.setState({ products: products });
        })
        .finally(() => {
            this.setState({ showProgress: false });
        });
    }

    render(){
        if(this.state.showProgress){
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' animating={true} />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' , paddingTop: 60 }}>
                <Text>Display Product ListView</Text>
            </View>
        );
    }
};

ProductList.propTypes = {
  title: PropTypes.string,
  searchQuery: PropTypes.string
};

export default ProductList;