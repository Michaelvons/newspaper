import React from 'react';
import {Text, View, Image, StatusBar, Linking} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import {toastOptions} from '../utils/helper';

const AboutScreen = () => {
  const openWebpage = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Toast.show(`Device can't open: ${url}`, toastOptions);
      }
    });
  };

  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="transparent"
        hidden={false}
        translucent
      />
      <View style={styles.AboutContainer}>
        <Text style={styles.AboutScreenTitle}>About Me</Text>
        <View style={styles.AboutAvatarContainer}>
          <Image
            source={require('../assets/images/vons-circle.png')}
            style={{width: 140, height: 140}}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.AboutNames}>Michael Oshogbunu</Text>
        <View style={styles.AboutAddressContainer}>
          <Image
            source={require('../assets/images/icons8-nigeria.png')}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
          <Text style={styles.AboutAddress}>LAGOS, NIGERIA</Text>
        </View>
        <View style={styles.AboutBioContainer}>
          <Text style={styles.AboutBio}>
            A privileged inventor with national copyright, a master's degree in
            Information Systems and a Software Engineer with four (4+) years of
            professional experience in ideating, designing and building
            full-stack software solutions.
          </Text>
        </View>

        {/* Social Media icons */}
        <View style={styles.AboutSocialContainer}>
          <View style={styles.AboutSocialWrapper}>
            <TouchableOpacity
              onPress={() => {
                openWebpage('https://twitter.com/michael_vons');
              }}>
              <Icon
                name="twitter"
                size={20}
                color="#8c909c"
                style={styles.AboutSocialIcons}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebpage(
                  'https://stackoverflow.com/users/2099437/michael-vons',
                );
              }}>
              <Icon
                name="stack-overflow"
                size={20}
                color="#8c909c"
                style={styles.AboutSocialIcons}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebpage('https://www.linkedin.com/in/michael-oshogbunu/');
              }}>
              <Icon
                name="linkedin"
                size={20}
                color="#8c909c"
                style={styles.AboutSocialIcons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
