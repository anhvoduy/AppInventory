import React, { Component } from 'react';
import { TabBarIOS, NavigatorIOS } from 'react-native';
import styles from './Styles';
import Feed from './component/feed';
import Search from './component/search';
import Product from './component/product';

const logoFeed = require('./images/inbox.png');
const logoSearch = require('./images/search.png');
const logoProduct= require('./images/product.png');

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'feed'
        }
    }

    render() {
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item 
                    title='Feed' 
                    selected={this.state.selectedTab == 'feed'} 
                    //icon={require('image!inbox')}
                    icon={logoFeed}
                    onPress={() => this.setState({selectedTab: 'feed'})}>
                        <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Feed, title: 'Feed' }}></NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                    title='Product'
                    selected={this.state.selectedTab == 'product'}
                    //icon={require('image!product')}
                    icon={logoProduct}
                    onPress={() => this.setState({selectedTab: 'product'})}>
                        <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Product, title: 'Product' }}></NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                    title='Search'
                    selected={this.state.selectedTab == 'search'}
                    //icon={require('image!search')}
                    icon={logoSearch}
                    onPress={() => this.setState({selectedTab: 'search'})}>
                        <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Search, title: 'Search' }}></NavigatorIOS>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
};

export default Container;