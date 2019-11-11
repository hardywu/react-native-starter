import React from 'react';
import {
  View, Icon, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard,
  TouchableWithoutFeedback, StatusBar,
} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class SignInScreen extends React.Component {
  state = {
    hidePwd: true,
  }
  render() {
    const { hidePwd } = this.state;
    const signIn = () => {
      this.props.navigation.navigate('Welcome')
    }
    const toggleShowPwd = () => {
      this.setState({ hidePwd: !hidePwd })
    }
    // StatusBar.setBarStyle(styles.statusBar)
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <LinearGradient
            style={styles.signInForm}
            start={[0, 0]} end={[1, 1]}
            colors={['#f7a06f', '#fab452', '#fdc735']}
            >
            <Text style={styles.title}>登录</Text>
            <View style={styles.phoneField}>
              <FontAwesome
                name="user-o" size={16} color="white"
                style={{paddingBottom: 6}}
              />
              <TextInput
                placeholderTextColor="#feecc7"
                style={styles.phoneInput}
                placeholder="请输入手机号码"
              />
            </View>
            <View style={styles.passwordField}>
              <FontAwesome
                name="unlock-alt" size={16} color="white"
                style={{paddingBottom: 6}} />
              <TextInput
                placeholderTextColor="#feecc7"
                textContentType='password'
                secureTextEntry={hidePwd}
                style={styles.passwordInput}
                placeholder="请输入密码"
              />
              <AntDesign
                name={ hidePwd ? 'eyeo' : 'eye'}
                size={21}
                style={{paddingBottom: 1}}
                color="white"
                onPress={toggleShowPwd}
              />
            </View>
            <TouchableOpacity
              onPress={signIn}
              style={styles.signInBtn}
            >
              <Text style={styles.signInBtnText}>登录</Text>
            </TouchableOpacity>
            <View style={styles.forget}>
              <Text style={styles.forgetText}>忘记密码?</Text>
            </View>
          </LinearGradient>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signInBtnText}>注册</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  signInForm: {
    width: 320,
    paddingLeft: 40,
    paddingRight: 40,
    height: 380,
    marginTop: 100,
    borderRadius: 30,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 30,
    color: 'white',
    marginTop: 30,
    marginBottom: 40,
  },
  phoneField: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fcd8aa',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  passwordField: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fcd8aa',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  phoneInput: {
    marginLeft: 5,
    fontSize: 16,
    flex: 1,
    color: 'white',
  },
  passwordInput: {
    marginLeft: 5,
    fontSize: 16,
    flex: 1,
    color: 'white',
  },
  signInBtn: {
    width: '100%',
    paddingTop: 10,
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInBtnText: {
    fontSize: 24,
    color: '#f7a16f',
  },
  forget: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  forgetText: {
    color: '#feecc7',
  },
  signUpBtn: {
    width: 250,
    height: 50,
    backgroundColor: '#fef3d7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
