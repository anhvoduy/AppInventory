import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: true
        }
    }

    componentDidMount() {
        let { searchQuery } = this.props;
        console.log('- searchQuery:', searchQuery);

        let self = this;
        setTimeout(function() {
            self.setState({ showProgress: false });
        }, 3000);
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