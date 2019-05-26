import React, { Component } from 'react';
import { TabBarIOS, NavigatorIOS } from 'react-native';
import styles from './Styles';
import Search from './component/search';
import Product from './component/product';

const logoProduct= require('./images/product.png');
const logoSearch = require('./images/search.png');

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'product'
        }
    }

    render() {
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item
                    title='Product'
                    selected={this.state.selectedTab == 'product'}
                    icon={logoProduct}
                    onPress={() => this.setState({selectedTab: 'product'})}>
                        <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Product, title: 'Product' }}></NavigatorIOS>
                </TabBarIOS.Item>
               
                <TabBarIOS.Item 
                    title='Search'
                    selected={this.state.selectedTab == 'search'}
                    icon={logoSearch}
                    onPress={() => this.setState({selectedTab: 'search'})}>
                        <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Search, title: 'Search' }}></NavigatorIOS>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
};

export default Container;