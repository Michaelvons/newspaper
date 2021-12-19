import React, {useEffect, useState} from 'react';
import {Text, View, Image, StatusBar, FlatList} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {storyFetch, storyLazy} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {sentenceCase} from '../utils/helper';
import StoryComponent from '../components/StoryComponent';
import * as Progress from 'react-native-progress';
import {useIsFocused} from '@react-navigation/native';

const NewsListScreen = ({navigation}) => {
  //////
  // React Hooks
  /////
  useEffect(() => {
    getStories();
  }, []);

  /////
  // Variables
  /////
  const perPage = 10;

  /////
  // Redux Hooks
  /////
  const dispatch = useDispatch();
  const allStoryIDs = useSelector(state => state.story.story_ids);
  const allStories = useSelector(state => state.story.stories);
  const isLoadingStories = useSelector(state => state.story.loading_stories);
  const isLoadingStoryByIDs = useSelector(
    state => state.story.loading_story_ids,
  );

  /////
  // States
  /////
  const [storyIndexStart, setStoryIndexStart] = useState(0);
  const [storyIndexEnd, setStoryIndexEnd] = useState(perPage);

  const getStories = () => {
    dispatch(storyFetch())
      .then(res => {
        // console.log('res->', res);
        getStoriesLazily(res.data);
      })
      .catch(err => {
        // console.log('err->', err);
      });
  };

  const getStoriesLazily = (storyIDs, previousStories = []) => {
    let paginatedRequest = storyIDs.slice(storyIndexStart, storyIndexEnd);

    console.log(
      'storyIndexStart, storyIndexEnd->',
      storyIndexStart,
      storyIndexEnd,
    );

    let endpoints = paginatedRequest.map(
      (id, index) =>
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    );

    // console.log('endpoints->', endpoints);

    dispatch(storyLazy(endpoints, previousStories))
      .then(res => {
        // console.log('res->', res);
        setStoryIndexStart(storyIndexEnd);
        setStoryIndexEnd(storyIndexEnd + perPage);
      })
      .catch(err => {
        // console.log('err->', err);
      });
  };

  const loadMoreContent = ({layoutMeasurement, contentOffset, contentSize}) => {
    let bottomPadding = 100;
    let shouldLoadContent =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - bottomPadding;

    if (shouldLoadContent === true && isLoadingStories === false) {
      getStoriesLazily(allStoryIDs, allStories);
    }
  };

  const randomKeys = () => {
    return Math.floor(Math.random() * 10000);
  };

  const shouldShowMorePreloader = () => {
    return isLoadingStories === true && allStories.length !== 0 ? true : false;
  };

  return (
    <View>
      {useIsFocused() ? (
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="transparent"
          hidden={false}
        />
      ) : null}

      <View style={styles.NewsListContainer}>
        {/* App Bar */}
        <View style={styles.NewsListAppBarContainer}>
          <Image
            source={require('../assets/images/icons8-news.png')}
            style={{width: 40, height: 40}}
            resizeMode="contain"
          />
        </View>

        <ScrollView
          style={{height: 100}}
          onScroll={({nativeEvent}) => {
            loadMoreContent(nativeEvent);
          }}>
          {/* Featured Story */}

          {isLoadingStoryByIDs && (
            <View style={styles.NewsListFeaturedLoadingContainer}>
              <Progress.CircleSnail
                size={32}
                thickness={2.25}
                color={'#B3CAFF'}
                indeterminate={true}
              />
              <Text style={styles.NewsListFeaturedPreloaderText}>
                Loading Stories
              </Text>
            </View>
          )}

          {!isLoadingStoryByIDs && (
            <View>
              {allStories.slice(0, 1).map((item, index) => (
                <View
                  style={styles.NewsListFeaturedStoryContainer}
                  key={randomKeys()}>
                  <View style={styles.NewsListFeaturedStoryInfoContainer}>
                    {/* <Text style={styles.NewsListFeaturedStoryTag}>
                      FEATURED
                    </Text> */}
                    {item.is_trending && (
                      <Text style={styles.NewsListStoryTag}>TRENDING</Text>
                    )}
                    <Text style={styles.NewsListFeaturedStoryInfo}>
                      {moment.unix(item.time).format('LL').toUpperCase()}
                    </Text>
                    <Icon name="circle-small" size={24} color="#B3CAFF" />
                    <Text style={styles.NewsListFeaturedStoryInfo}>
                      {item.by.toUpperCase()}
                    </Text>
                  </View>
                  {/* Check if is clickable is true or false */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('NewsDetail', {storyData: item})
                    }>
                    <Text style={styles.NewsListFeaturedStoryHeadline}>
                      {sentenceCase(item.title)}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.NewsListFeaturedStoryReactionContainer}>
                    <View style={styles.NewsListFeaturedStoryReaction}>
                      <Icon name="star" size={16} color="#B3CAFF" />
                      <Text style={styles.NewsListFeaturedStoryInfoText}>
                        {item.score} Votes
                      </Text>
                    </View>
                    <View style={styles.NewsListFeaturedStoryReaction}>
                      <Icon name="comment" size={13} color="#B3CAFF" />
                      <Text style={styles.NewsListFeaturedStoryInfoText}>
                        {item.kids !== undefined ? item.kids.length : 0}{' '}
                        Comments
                      </Text>
                    </View>
                    {/* <View style={styles.NewsListFeaturedStoryWebpageButton}>
                      <Icon
                        name="arrow-top-right-thick"
                        size={16}
                        color="#B3CAFF"
                      />
                      <Text style={styles.NewsListFeaturedStoryInfoText}>
                        Open Webpage
                      </Text>
                    </View> */}
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Other News */}
          <View style={styles.NewsListStoriesContainer}>
            {allStories.slice(1, storyIndexEnd).map((item, index) => (
              <View style={styles.NewsListStoryContainer} key={randomKeys()}>
                <View style={styles.NewsListStoryInfoContainer}>
                  {item.is_trending && (
                    <Text style={styles.NewsListStoryTag}>TRENDING</Text>
                  )}
                  <Text style={styles.NewsListStoryInfo}>
                    {moment.unix(item.time).format('LL').toUpperCase()}
                  </Text>
                  <Icon name="circle-small" size={24} color="#8c909c" />
                  <Text style={styles.NewsListStoryInfo}>
                    {item.by.toUpperCase()}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('NewsDetail', {storyData: item})
                  }>
                  <Text style={styles.NewsListStoryHeadline}>
                    {sentenceCase(item.title)}
                  </Text>
                </TouchableOpacity>

                <View style={styles.NewsListReactionContainer}>
                  <View style={styles.NewsListReactionVotes}>
                    <Icon name="star" size={16} color="#8c909c" />
                    <Text style={styles.NewsListStoryInfoText}>
                      {item.score}
                    </Text>
                  </View>
                  <View style={styles.NewsListReactionVotes}>
                    <Icon name="comment" size={13} color="#8c909c" />
                    <Text style={styles.NewsListStoryInfoText}>
                      {item.kids !== undefined ? item.kids.length : 0}
                    </Text>
                  </View>
                  {/* <View style={styles.NewsListStoryWebpageButton}>
                    <Icon
                      name="arrow-top-right-thick"
                      size={16}
                      color="#1DA1F2"
                    />
                  </View> */}
                </View>
              </View>
            ))}
          </View>

          {shouldShowMorePreloader && (
            <View style={styles.NewsListMoreStoriesLoadingContainer}>
              <Progress.CircleSnail
                size={32}
                thickness={2.25}
                color={'#000033'}
                indeterminate={true}
              />
              <Text style={styles.NewsListMoreStoriesPreloaderText}>
                Loading More Stories
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsListScreen;
