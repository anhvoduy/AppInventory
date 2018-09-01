import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './Styles';
import cu from './lib/commonUtil';
import AuthService from './services/authService';
import Container from './Container';
import Login from './component/login';
import UnknowException from './component/unknowException';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      checkingAuth: true,
      authInfo: null
    }
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  
  componentDidMount() {
    AuthService.getAuthInfo((error, authInfo) => {
      if(error) throw error;

      this.setState({
        checkingAuth: false,
        isLoggedIn: (!cu.isBlank(authInfo) && !cu.isBlank(authInfo.user)) ? true : false,
        authInfo: authInfo
      })
    });
  }

  onLogin(){
    this.setState({ isLoggedIn: true });
  }

  onLogout(){
    this.setState({ isLoggedIn: false });
  }

  render() {
    let { isLoggedIn, checkingAuth, authInfo } = this.state;
    debugger;
    if(checkingAuth) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} size='large' style={styles.loader}>
          </ActivityIndicator>
        </View>
      );
    }
    else if(!isLoggedIn) {
      return (
        <Login onLogin={this.onLogin} />
      );
    }
    else if(isLoggedIn && authInfo && authInfo.user) {
      return (
        <Container authInfo={authInfo} onLogout={this.onLogout} />
      );
    }
    else {
      return (
        <UnknowException />
      );
    }
  }
}

export default App;