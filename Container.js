// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { TabBarIOS, NavigatorIOS } from 'react-native';
// import styles from './Styles';
// import Feed from './component/feed';
// import Search from './component/search';

// class Container extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             selectedTab: 'feed'
//         }
//     }

//     render() {
//         return (
//             <TabBarIOS style={styles.container}>
//                 <TabBarIOS.Item 
//                     title='Feed' 
//                     selected={this.state.selectedTab == 'feed'} 
//                     onPress={() => this.setState({selectedTab: 'feed'})}>
//                         {/* <Welcome authInfo={authInfo} onLogout={onLogout}/> */}
//                         <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Feed, title: 'Feed' }}></NavigatorIOS>
//                 </TabBarIOS.Item>
//                 <TabBarIOS.Item 
//                     title='Search'
//                     selected={this.state.selectedTab == 'search'} 
//                     onPress={() => this.setState({selectedTab: 'search'})}>
//                         <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Search, title: 'Search' }}></NavigatorIOS>
//                 </TabBarIOS.Item>
//             </TabBarIOS>
//         )
//     }
// }

// Container.propTypes = {
//     authInfo: PropTypes.object,
//     onLogout: PropTypes.func
// }

// export default Container;