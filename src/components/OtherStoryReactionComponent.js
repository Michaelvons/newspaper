import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OtherStoryReactionComponent = ({data}) => {
  return (
    <View style={styles.NewsListReactionContainer}>
      <View style={styles.NewsListReactionVotes}>
        <Icon name="star" size={16} color="#8c909c" />
        <Text style={styles.NewsListStoryInfoText}>{data.score}</Text>
      </View>
      <View style={styles.NewsListReactionVotes}>
        <Icon name="comment" size={13} color="#8c909c" />
        <Text style={styles.NewsListStoryInfoText}>
          {data.kids !== undefined ? data.kids.length : 0}
        </Text>
      </View>
    </View>
  );
};

export default OtherStoryReactionComponent;
