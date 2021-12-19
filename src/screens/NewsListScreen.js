import React, {useEffect, useState} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {styles} from '../styles/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {storyFetch, storyLazy} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import {sentenceCase, randomKey} from '../utils/helper';
import * as Progress from 'react-native-progress';
import {useIsFocused} from '@react-navigation/native';
import HeroStoryInfoComponent from '../components/HeroStoryInfoComponent';
import HeroStoryReactionComponent from '../components/HeroStoryReactionComponent';
import OtherStoryInfoComponent from '../components/OtherStoryInfoComponent';
import OtherStoryReactionComponent from '../components/OtherStoryReactionComponent';

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

    let endpoints = paginatedRequest.map(
      (id, index) =>
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    );

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
                  key={randomKey()}>
                  <HeroStoryInfoComponent data={item} />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('NewsDetail', {storyData: item})
                    }>
                    <Text style={styles.NewsListFeaturedStoryHeadline}>
                      {sentenceCase(item.title)}
                    </Text>
                  </TouchableOpacity>
                  <HeroStoryReactionComponent data={item} />
                </View>
              ))}
            </View>
          )}

          {/* Other News */}
          <View style={styles.NewsListStoriesContainer}>
            {allStories.slice(1, storyIndexEnd).map((item, index) => (
              <View style={styles.NewsListStoryContainer} key={randomKey()}>
                <OtherStoryInfoComponent data={item} />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('NewsDetail', {storyData: item})
                  }>
                  <Text style={styles.NewsListStoryHeadline}>
                    {sentenceCase(item.title)}
                  </Text>
                </TouchableOpacity>
                <OtherStoryReactionComponent data={item} />
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
