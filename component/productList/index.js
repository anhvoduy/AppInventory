import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ListView, ActivityIndicator, Image, TouchableHighlight } from 'react-native';

import ProductItem from '../productItem';

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

        this.onProductItem = this.onProductItem.bind(this)
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

    onProductItem(Id) {
        console.log(' touch:', Id);
        if(Id){
            this.props.navigator.push({
                title: 'Product Detail',
                component: ProductItem,
                passProps: {
                    id: Id
                }
            });
        }
    }

    renderRow(rowData) {
        return (
            <View style={{ padding: 10, borderColor: '#D7D7D7', borderBottomWidth: 1, backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>{`${rowData.ProductName} (${rowData.ProductId})`}</Text>  
                <TouchableHighlight onPress={() => this.onProductItem(rowData.Id)}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                        <View style={styles.repoCell}>
                            <Image source={{uri: rowData.ImageUrl}} style={styles.repoCellImage}></Image>
                        </View>
                        <View style={styles.infoCell}>
                            <Text style={styles.infoCellLabel}>{rowData.ProductName}</Text>
                            <Text style={styles.infoCellLabel}>{`Location: ${rowData.Location ? rowData.Location.Name : ''}`}</Text>
                            <Text style={styles.infoCellLabel}>{`Category: ${rowData.Category ? rowData.Category.Name : ''}`}</Text>
                            <Text style={styles.infoCellLabel}>{`Price: ${rowData.Price ? rowData.Price : 1} (USD)`}</Text>
                        </View>
                        <View style={styles.likedCell}>
                            <Text style={styles.likedCellLabel}>{rowData.Liked ? rowData.Liked : 1}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    render(){
        let { showProgress, dataSource } = this.state;
        if(showProgress){
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' animating={true} />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' , paddingTop: 60 }}>
                <ListView dataSource={dataSource} renderRow={this.renderRow.bind(this)} />
            </View>
        );
    }
};

ProductList.propTypes = {
  title: PropTypes.string,
  onProductItem: PropTypes.func
};

export default ProductList;