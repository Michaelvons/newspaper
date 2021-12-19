import React, {useState} from 'react';
import {Text, View, StatusBar, ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../styles/styles';
import {TextInput, Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toastOptions} from '../utils/helper';
import Toast from 'react-native-root-toast';
import {isValidEmail, isValidPassword} from '../utils/validator';
import {errorMessage} from '../utils/helper';

const SignupScreen = ({navigation}) => {
  /////
  // States
  /////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /////
  // Functions
  /////

  const validateInputs = () => {
    isValidEmail(email) === false
      ? Toast.show(errorMessage.EMAIL_INVALID, toastOptions)
      : null;

    isValidPassword(password) === false
      ? Toast.show(errorMessage.PASSWORD_TOO_SHORT, toastOptions)
      : null;

    if (isValidEmail(email) === true && isValidPassword(password) === true) {
      storeAuthCredentials();
    }
  };

  const storeAuthCredentials = async () => {
    Toast.show('Account Created. Kindly Login', toastOptions);

    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
    } catch (e) {
      // saving error
      console.log('e->', e);
    }
  };

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
          style={styles.SignupBackground}
          resizeMode="cover">
          <View style={styles.SignupBackgroundOverlay}>
            <View style={styles.SignupInfoContainer}>
              {/* App Info */}
              <View style={styles.SignupAppInfo}>
                <Image
                  source={require('../assets/images/icons8-news.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
                <Text style={styles.SignupAppName}>HackerNews Newspaper</Text>
              </View>

              {/* Form Section */}
              <View>
                <TextInput
                  label="Email"
                  mode="flat"
                  style={styles.SignupTextInput}
                  activeOutlineColor="rgba(179,202,255,0.3)"
                  activeUnderlineColor="#1DA1F2"
                  theme={styles.SignupTextInputTheme}
                  onChangeText={text => setEmail(text)}
                />
                <TextInput
                  label="Password"
                  secureTextEntry={true}
                  mode="flat"
                  style={styles.SignupTextInput}
                  activeOutlineColor="rgba(179,202,255,0.3)"
                  activeUnderlineColor="#1DA1F2"
                  theme={styles.SignupTextInputTheme}
                  onChangeText={text => setPassword(text)}
                />
                <Button
                  mode="contained"
                  onPress={() => validateInputs()}
                  color="#1DA1F2"
                  contentStyle={{height: 60}}
                  labelStyle={styles.SignupTextInputLabel}
                  uppercase={false}>
                  Create Account
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.SignupButtonPlain}>
                    Have Account? Login
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

export default SignupScreen;
