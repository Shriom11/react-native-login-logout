//=============================================/
//       Login page fnctionallity             //
//=============================================/
import React, {
  Component
} from "react";
import {
  Image,
  Dimensions,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  Platform,
  Modal
} from "react-native";
import {
  Container,
  Content,
  Button,
  Left,
  Item,
  Input,
  Form,
  View,
  Text,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import commonstyle from '../../assets/style/commonstyle';
import {
  StackActions,
  NavigationActions
} from 'react-navigation';
import Loader from '../common screen/loader';
const resetAction = StackActions.reset({
  index: 0, // <-- currect active route from actions array
  actions: [
    NavigationActions.navigate({
      routeName: 'HomeScreen'
    }),
  ],
});
export default class Login extends Component {
  static navigationOptions = {
    header: null
  };


  //=============================================/
  //        constructor for defualt value        //
  //=============================================/
  constructor(props) {
    super(props);

    this.state = {
      icEye: 'visibility-off',
      pEye: 'visibility-off',
      cpEye: 'visibility-off',
      securepassword: true,
      secureconfpassword: true,
      mob_number: '',
      newpassword: '',
      password: '',
      isLoading: false,
    }
  }

  //=============================================/
  //        Change password visibility          //
  //=============================================/
  changePwdType = () => {
    let newState;
    if (this.state.securepassword) {
      newState = {
        icEye: 'visibility',
        securepassword: false
      }
    } else {
      newState = {
        icEye: 'visibility-off',
        securepassword: true
      }
    }


    // set new state value
    this.setState(newState)

  };
  //=============================================/
  //        mob_number and password Text Changed      //
  //=============================================/
  mobnumberTextChanged = (event) => {
    this.setState({
      mob_number: event.nativeEvent.text
    })
  }

  passwordTextChanged = (event) => {
    this.setState({
      password: event.nativeEvent.text
    })
  }




  onLayout = (e) => {
    let newState = {
      screeHW: Dimensions.get('window')
    }
    this.setState({
      orientation: newState.screeHW.width > newState.screeHW.height ? 'PORTRAIT' : 'LANDSCAPE'
    });
    //alert(newState.screeHW.width > newState.screeHW.height ? 'PORTRAIT' : 'LANDSCAPE')
    this.setState(newState);
  }
  renderScrenn = (title) => {
    this.props.navigation.navigate(title);
  }
  //=================================================/
  //            Render to login page                //
  //=================================================/
  render() {
      const {
        navigate
      } = this.props.navigation;
      let {
        width,
        height
      } = Dimensions.get('window');
      return (
          
      <Container   >
       <ImageBackground resizeMode="cover" source={require('../../assets/images/homescreen.gif')}  style={{ 
      
       flex          : 1,
       justifyContent: 'center',
       alignItems    : 'center',
       maxWidth      : width
       }}> 
    
        <Content style = {{ padding: 20,marginTop: height*0.35 }}>
          <View 
            style = {{ marginBottom:15 }}
          >
            <Form>
              <Item  rounded style = {[{marginBottom: 15},commonstyle.borderstyle]}>
              <FontAwesome style  = {[{ left: 25},commonstyle.iconstyle]}
                           size   = {this.props.iconSize}
                           name   = "mobile-phone"
                />
               <Input keyboardType  = 'numeric'
                      placeholderTextColor = 'white'
                      placeholder   = 'Mobile number'
                      style         = {commonstyle.loginputstyle}
                      value         = {this.state.mob_number}
                      returnKeyType = {"done"}
                      onChange      = {this.mobnumberTextChanged}
                />
              </Item>              
              <Item rounded style = {[{marginBottom: 15},commonstyle.borderstyle]}>
              <Icon style  = {[{ left: 20},commonstyle.iconstyle]}
                    size   = {this.props.iconSize}
                    name   = "lock-outline"
                />
                <Input secureTextEntry      = {this.state.securepassword}
                       placeholderTextColor = 'white'
                       placeholder   = "Password"
                       style         = {commonstyle.loginputstyle}
                       returnKeyType = {"done"}
                       onChange      = {this.passwordTextChanged}
                />
                <Icon style   = {[{ right: 20},commonstyle.iconstyle]}
                      name    = {this.state.icEye}
                      size    = {this.props.iconSize}
                      onPress = {this.changePwdType}
                />
              </Item>
              <Button rounded block style = {[{shadowOffset: {height: 0, width: 0}, shadowOpacity: 0},commonstyle.buttonbackgroundcolor]}
		      		// onPress={this.loginPressed} 
              >
                <Text uppercase = {false} style = {commonstyle.buttoncolor}>Login</Text>
              </Button>
            </Form>
          </View>    
          <Text style = {{marginTop:height-528,textAlign:'center',color:'white'}} >Devloped by chourasiashriom@gmail.com</Text>
        </Content>
        </ImageBackground>
            {/* loader model */}
        <Loader isLoading = {this.state.isLoading} />
      </Container>
    );
  }
}

Login.defaultProps = {
  iconSize: 25,
}