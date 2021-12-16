import React from 'react';
import {Text, View, StatusBar, ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../styles/styles';
import {TextInput, Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="transparent"
        hidden={false}
        translucent
      />
      <KeyboardAwareScrollView>
        <ImageBackground
          source={require('../assets/images/background-min.jpeg')}
          style={styles.LoginBackground}
          resizeMode="cover">
          <View style={styles.LoginBackgroundOverlay}>
            <View style={styles.LoginInfoContainer}>
              {/* App Info */}
              <View style={styles.LoginAppInfo}>
                <Image
                  source={require('../assets/images/icons8-news.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
                <Text style={styles.LoginAppName}>HackerNews Newspaper</Text>
              </View>

              {/* Form Section */}
              <View>
                <TextInput
                  label="Email"
                  mode="flat"
                  style={styles.LoginTextInput}
                  activeOutlineColor="rgba(179,202,255,0.3)"
                  activeUnderlineColor="#1DA1F2"
                  theme={styles.LoginTextInputTheme}
                />
                <TextInput
                  label="Password"
                  mode="flat"
                  secureTextEntry={true}
                  style={styles.LoginTextInput}
                  activeOutlineColor="rgba(179,202,255,0.3)"
                  activeUnderlineColor="#1DA1F2"
                  theme={styles.LoginTextInputTheme}
                />
                <Button
                  mode="contained"
                  color="#1DA1F2"
                  contentStyle={{height: 60}}
                  labelStyle={styles.LoginTextInputLabel}
                  uppercase={false}
                  onPress={() => navigation.navigate('MainApp')}>
                  Login
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.LoginButtonPlain}>
                    New Here? Create Account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;
