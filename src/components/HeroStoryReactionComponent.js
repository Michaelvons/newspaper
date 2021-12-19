import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getComments} from '../utils/helper';

const HeroStoryReactionComponent = ({data}) => {
  return (
    <View style={styles.NewsListFeaturedStoryReactionContainer}>
      <View style={styles.NewsListFeaturedStoryReaction}>
        <Icon name="star" size={16} color="#B3CAFF" />
        <Text style={styles.NewsListFeaturedStoryInfoText}>
          {data.score} Votes
        </Text>
      </View>
      <View style={styles.NewsListFeaturedStoryReaction}>
        <Icon name="comment" size={13} color="#B3CAFF" />
        <Text style={styles.NewsListFeaturedStoryInfoText}>
          {getComments(data.kids)} Comments
        </Text>
      </View>
    </View>
  );
};

export default HeroStoryReactionComponent;
