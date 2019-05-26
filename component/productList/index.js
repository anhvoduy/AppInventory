import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ListView, ActivityIndicator } from 'react-native';

import api from '../../services/api';
import styles from './style';

class ProductList extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            showProgress: true,
            dataSource: ds.cloneWithRows([])
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        api.get('product/list')
        .then((res) => {
            let { products } = res.data;
            this.setState({ 
                dataSource: this.state.dataSource.cloneWithRows(products)
            });
        })
        .finally(() => {
            this.setState({ showProgress: false });
        });
    }

    renderRow(rowData) {
        return (
            <Text>{rowData.ProductId + ': ' + rowData.ProductName}</Text>
        )
    }

    render(){
        let { showProgress, products } = this.state;
        if(showProgress){
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' animating={true} />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' , paddingTop: 60 }}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />
            </View>
        );
    }
};

ProductList.propTypes = {
  title: PropTypes.string,
  searchQuery: PropTypes.string
};

export default ProductList;