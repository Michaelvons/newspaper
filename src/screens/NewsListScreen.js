import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsListScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="transparent"
        hidden={false}
        translucent
      />

      <View style={styles.NewsListContainer}>
        {/* App Bar */}
        <View style={styles.NewsDetailAppBarContainer}>
          <Image
            source={require('../assets/images/icons8-news.png')}
            style={{width: 40, height: 40}}
            resizeMode="contain"
          />
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
            <Text style={styles.NewsListFeaturedStoryHeadline}>
              News Number One Display Here Only ad Only Here
            </Text>
          </TouchableOpacity>
          <View style={styles.NewsDetailFeaturedStoryReactionContainer}>
            <View style={styles.NewsDetailFeaturedStoryReaction}>
              <Icon name="star" size={16} color="#B3CAFF" />
              <Text style={styles.NewsListFeaturedStoryInfoText}>52 Votes</Text>
            </View>
            <View style={styles.NewsDetailFeaturedStoryReaction}>
              <Icon name="comment" size={13} color="#B3CAFF" />
              <Text style={styles.NewsListFeaturedStoryInfoText}>
                13 Comments
              </Text>
            </View>
            <View style={styles.NewsDetailFeaturedStoryWebpageButton}>
              <Icon name="arrow-top-right-thick" size={16} color="#B3CAFF" />
              <Text style={styles.NewsListFeaturedStoryInfoText}>
                Open Webpage
              </Text>
            </View>
          </View>
        </View>

        {/* Other News */}
        <View style={styles.NewsListStoriesContainer}>
          <View style={styles.NewsListStoryContainer}>
            <View style={styles.NewsListStoryInfoContainer}>
              <Text style={styles.NewsListStoryTag}>TRENDING</Text>
              <Text style={styles.NewsListStoryInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsListStoryInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsListStoryHeadline}>
              News Number One Display Here Only
            </Text>
            <View style={styles.NewsListReactionContainer}>
              <View style={styles.NewsListReactionVotes}>
                <Icon name="star" size={16} color="#8c909c" />
                <Text style={styles.NewsListStoryInfoText}>52</Text>
              </View>
              <View style={styles.NewsListReactionVotes}>
                <Icon name="comment" size={13} color="#8c909c" />
                <Text style={styles.NewsListStoryInfoText}>13</Text>
              </View>
              <View style={styles.NewsListStoryWebpageButton}>
                <Icon name="arrow-top-right-thick" size={16} color="#1DA1F2" />
              </View>
            </View>
          </View>

          {/* Other News 2 */}
          <View style={styles.NewsListStoryContainer}>
            <View style={styles.NewsListStoryInfoContainer}>
              <Text style={styles.NewsListStoryTag}>TRENDING</Text>
              <Text style={styles.NewsListStoryInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsListStoryInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsListStoryHeadline}>
              News Number One Display Here Only
            </Text>
            <View style={styles.NewsListReactionContainer}>
              <View style={styles.NewsListReactionVotes}>
                <Icon name="star" size={16} color="#8c909c" />
                <Text style={styles.NewsListStoryInfoText}>52</Text>
              </View>
              <View style={styles.NewsListReactionVotes}>
                <Icon name="comment" size={13} color="#8c909c" />
                <Text style={styles.NewsListStoryInfoText}>13</Text>
              </View>
              <View style={styles.NewsListStoryWebpageButton}>
                <Icon name="arrow-top-right-thick" size={16} color="#1DA1F2" />
              </View>
            </View>
          </View>

          {/* Other News 3 */}
          <View style={styles.NewsListStoryContainer}>
            <View style={styles.NewsListStoryInfoContainer}>
              <Text style={styles.NewsListStoryTag}>TRENDING</Text>
              <Text style={styles.NewsListStoryInfo}>DEC, 13, 2021</Text>
              <Icon name="circle-small" size={24} color="#8c909c" />
              <Text style={styles.NewsListStoryInfo}>MICHAEL VONS</Text>
            </View>
            <Text style={styles.NewsListStoryHeadline}>
              News Number One Display Here Only
            </Text>
            <View style={styles.NewsListReactionContainer}>
              <View style={styles.NewsListReactionVotes}>
                <Icon name="star" size={16} color="#8c909c" />
                <Text style={styles.NewsListStoryInfoText}>52</Text>
              </View>
              <View style={styles.NewsListReactionVotes}>
                <Icon name="comment" size={13} color="#8c909c" />
                <Text style={styles.NewsListStoryInfoText}>13</Text>
              </View>
              <View style={styles.NewsListStoryWebpageButton}>
                <Icon name="arrow-top-right-thick" size={16} color="#1DA1F2" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewsListScreen;
