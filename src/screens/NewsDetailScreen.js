import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsDetailScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="transparent"
        hidden={false}
        translucent
      />
      <View style={styles.NewsDetailContainer}>
        {/* App Bar */}
        <View style={styles.NewsDetailAppBarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsList')}>
            <Icon name="arrow-left" size={26} color="#B3CAFF" />
          </TouchableOpacity>
        </View>

        {/* Featured Story */}
        <View style={styles.NewsDetailFeaturedStoryContainer}>
          <View style={styles.NewsDetailFeaturedStoryInfoContainer}>
            <Text style={styles.NewsDetailFeaturedStoryTag}>FEATURED</Text>
            <Text style={styles.NewsDetailFeaturedStoryInfo}>
              DEC, 13, 2021
            </Text>
            <Icon name="circle-small" size={24} color="#B3CAFF" />
            <Text style={styles.NewsDetailFeaturedStoryInfo}>MICHAEL VONS</Text>
          </View>
          {/* Check if is clickable is true or false */}
          <TouchableOpacity onPress={() => navigation.navigate('NewsDetail')}>
            <Text style={styles.NewsDetailFeaturedStoryHeadline}>
              News Number One Display Here Only ad Only Here
            </Text>
          </TouchableOpacity>
          <View style={styles.NewsDetailFeaturedStoryReactionContainer}>
            <View style={styles.NewsDetailFeaturedStoryReaction}>
              <Icon name="star" size={16} color="#B3CAFF" />
              <Text style={styles.NewsDetailFeaturedStoryInfoText}>
                52 Votes
              </Text>
            </View>
            <View style={styles.NewsDetailFeaturedStoryReaction}>
              <Icon name="comment" size={13} color="#B3CAFF" />
              <Text style={styles.NewsDetailFeaturedStoryInfoText}>
                13 Comments
              </Text>
            </View>
            <View style={styles.NewsDetailFeaturedStoryWebpageButton}>
              <Icon name="arrow-top-right-thick" size={16} color="#B3CAFF" />
              <Text style={styles.NewsDetailFeaturedStoryInfoText}>
                Open Webpage
              </Text>
            </View>
          </View>
        </View>

        {/* Comments Section*/}
        <View style={styles.NewsDetailCommentsContainer}>
          <Text style={styles.NewsDetailCommentSectionHeading}>Comments</Text>

          {/* Comment One */}
          <View style={styles.NewsDetailCommentContainer}>
            <View style={styles.NewsDetailCommentInfoContainer}>
              <Text style={styles.NewsDetailCommentInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsDetailCommentInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsDetailCommentText}>
              News Number One Display Here Only
            </Text>
          </View>

          {/* Comment Two */}
          <View style={styles.NewsDetailCommentContainer}>
            <View style={styles.NewsDetailCommentInfoContainer}>
              <Text style={styles.NewsDetailCommentInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsDetailCommentInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsDetailCommentText}>
              News Number One Display Here Only
            </Text>
          </View>

          {/* Comment Three */}
          <View style={styles.NewsDetailCommentContainer}>
            <View style={styles.NewsDetailCommentInfoContainer}>
              <Text style={styles.NewsDetailCommentInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsDetailCommentInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsDetailCommentText}>
              News Number One Display Here Only
            </Text>
          </View>

          {/* Comment Four */}
          <View style={styles.NewsDetailCommentContainer}>
            <View style={styles.NewsDetailCommentInfoContainer}>
              <Text style={styles.NewsDetailCommentInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsDetailCommentInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsDetailCommentText}>
              News Number One Display Here Only
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewsDetailScreen;
