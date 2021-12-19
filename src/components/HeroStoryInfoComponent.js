import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatTime, getAuthor} from '../utils/helper';

const HeroStoryInfoComponent = ({data}) => {
  return (
    <View style={styles.NewsListFeaturedStoryInfoContainer}>
      {data.is_trending && (
        <Text style={styles.NewsListStoryTag}>TRENDING</Text>
      )}
      <Text style={styles.NewsListFeaturedStoryInfo}>
        {formatTime(data.time)}
      </Text>
      <Icon name="circle-small" size={24} color="#B3CAFF" />
      <Text style={styles.NewsListFeaturedStoryInfo}>{getAuthor(data.by)}</Text>
    </View>
  );
};

export default HeroStoryInfoComponent;
