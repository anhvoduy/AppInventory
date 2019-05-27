import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import api from '../../services/api';
import styles from './style';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: true,
            productItem: null
        }
    }

    componentDidMount() {
        this.getProductItem();
    }

    getProductItem() {
        let { id } = this.props;
        api.get(`product/${id}`)
        .then((res) => {
            let { product } = res.data;
            this.setState({ 
                productItem: product
            });
        })
        .finally(() => {
            this.setState({ showProgress: false });
        });
    }

    

    render(){
        let { showProgress, productItem } = this.state;
        if(showProgress){
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' animating={true} />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' , paddingTop: 60 }}>
                <Text>Display Product Detail</Text>
                <Text>Id: {productItem.Id}</Text>
                <Text>Name: {productItem.ProductName}</Text>
            </View>
        );
    }
};

ProductList.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};

export default ProductList;