import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }
    }

    componentDidMount() {
        let { title, searchQuery } = this.props;
        console.log('- title:', title);
        console.log('- searchQuery:', searchQuery);
    }

    render(){
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