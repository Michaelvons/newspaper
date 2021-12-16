import React from 'react';
import {Text, View, StatusBar, ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../styles/styles';
import {TextInput, Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) => {
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
                />
                <TextInput
                  label="Password"
                  secureTextEntry={true}
                  mode="flat"
                  style={styles.SignupTextInput}
                  activeOutlineColor="rgba(179,202,255,0.3)"
                  activeUnderlineColor="#1DA1F2"
                  theme={styles.SignupTextInputTheme}
                />
                <Button
                  mode="contained"
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
