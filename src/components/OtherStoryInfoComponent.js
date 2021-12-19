import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import moment from 'moment';

const OtherStoryInfoComponent = ({data}) => {
  return (
    <View style={styles.NewsListStoryInfoContainer}>
      {data.is_trending && (
        <Text style={styles.NewsListStoryTag}>TRENDING</Text>
      )}
      <Text style={styles.NewsListStoryInfo}>
        {moment.unix(data.time).format('LL').toUpperCase()}
      </Text>
      <Icon name="circle-small" size={24} color="#8c909c" />
      <Text style={styles.NewsListStoryInfo}>{data.by.toUpperCase()}</Text>
    </View>
  );
};

export default OtherStoryInfoComponent;
