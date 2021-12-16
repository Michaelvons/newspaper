import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutScreen = ({navigation}) => {
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
            <Icon
              name="twitter"
              size={20}
              color="#8c909c"
              style={styles.AboutSocialIcons}
            />
            <Icon
              name="stack-overflow"
              size={20}
              color="#8c909c"
              style={styles.AboutSocialIcons}
            />
            <Icon
              name="linkedin"
              size={20}
              color="#8c909c"
              style={styles.AboutSocialIcons}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
