import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar, ScrollView} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {commentLazy} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import {
  formatTime,
  getAuthor,
  getComments,
  sentenceCase,
  toastOptions,
  sanitizeComment,
  randomKey,
} from '../utils/helper';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-root-toast';
import {useIsFocused} from '@react-navigation/native';
import HeroStoryInfoComponent from '../components/HeroStoryInfoComponent';
import HeroStoryReactionComponent from '../components/HeroStoryReactionComponent';

const NewsDetailScreen = ({route, navigation}) => {
  //////
  // React Hooks
  /////
  useEffect(() => {
    getCommentsLazily();
  }, []);

  /////
  // Variables
  /////

  const {storyData} = route.params;

  const determineIndexEnd = () => {
    let count = 0;

    if (storyData.kids !== undefined) {
      if (storyData.kids.length > 0) {
        count = storyData.kids.length > 10 ? 10 : storyData.kids.length;
      }
    } else {
      count = 0;
    }
    return count;
  };

  let indexStart = 0;
  let indexEnd = determineIndexEnd();

  /////
  // Redux Hooks
  /////
  const dispatch = useDispatch();
  let allComments = useSelector(state => state.comment.comments);
  const isLoadingComments = useSelector(
    state => state.comment.loading_comments,
  );

  /////
  // States
  /////
  const [commentIndexStart, setCommentIndexStart] = useState(0);
  const [commentIndexEnd, setCommentIndexEnd] = useState(determineIndexEnd());

  const getCommentsLazily = () => {
    if (storyData.kids !== undefined) {
      if (storyData.kids.length > 0) {
        let paginatedRequest = storyData.kids.slice(indexStart, indexEnd);

        let endpoints = paginatedRequest.map(
          (id, index) =>
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
        );

        dispatch(commentLazy(endpoints))
          .then(res => {
            // console.log('res->', res);
          })
          .catch(err => {
            // console.log('err->', err);
          });
      }
    } else {
      Toast.show('No Comments to Show', toastOptions);
    }
  };

  const perPage = () => {
    let count = 0;

    if (storyData.kids !== undefined) {
      if (storyData.kids.length > 0) {
        count = 10;
      }
    } else {
      count = 0;
    }
    return count;
  };

  const getPrevComment = () => {
    if (isLoadingComments === false && commentIndexEnd > perPage()) {
      indexStart = commentIndexStart - perPage();
      indexEnd = commentIndexEnd - perPage();

      setCommentIndexEnd(indexEnd);
      setCommentIndexStart(indexStart);
      getCommentsLazily(allComments);
    }
  };

  const getNextComment = () => {
    if (
      isLoadingComments === false &&
      commentIndexEnd < storyData.kids.length
    ) {
      indexStart = commentIndexStart + perPage();
      indexEnd = commentIndexEnd + perPage();

      setCommentIndexEnd(indexEnd);
      setCommentIndexStart(indexStart);
      getCommentsLazily(allComments);
    }
  };

  const getPageIndex = () => {
    let pageIndex = getComments(storyData.kids) !== 0 ? 10 : 0;

    if (storyData.kids !== undefined) {
      pageIndex =
        commentIndexEnd > storyData.kids.length
          ? storyData.kids.length
          : commentIndexEnd;
    }

    return pageIndex;
  };

  const shouldShowComments = () => {
    return isLoadingComments === false && getComments(storyData.kids) > 0
      ? true
      : false;
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
      <View style={styles.NewsDetailContainer}>
        {/* App Bar */}
        <View style={styles.NewsDetailAppBarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsList')}>
            <Icon name="arrow-left" size={26} color="#B3CAFF" />
          </TouchableOpacity>
        </View>

        {/* Featured Story */}
        <ScrollView style={{height: 100}}>
          <View style={styles.NewsDetailFeaturedStoryContainer}>
            <HeroStoryInfoComponent data={storyData} />
            <Text style={styles.NewsDetailFeaturedStoryHeadline}>
              {sentenceCase(storyData.title)}
            </Text>
            <HeroStoryReactionComponent data={storyData} />
          </View>

          {/* Comments Section*/}
          <View style={styles.NewsDetailCommentsContainer}>
            <View style={styles.NewsDetailCommentHeadingContainer}>
              <View>
                <Text style={styles.NewsDetailCommentSectionHeading}>
                  Comments
                </Text>
                <Text style={styles.NewsDetailCommentPagination}>
                  Showing {getPageIndex()} of {getComments(storyData.kids)}
                </Text>
              </View>

              <View style={styles.NewsDetailCommentPaginationButtonContainer}>
                <TouchableOpacity onPress={() => getPrevComment()}>
                  <Icon name="chevron-left" size={28} color="#000033" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => getNextComment()}>
                  <Icon name="chevron-right" size={28} color="#000033" />
                </TouchableOpacity>
              </View>
            </View>

            {isLoadingComments && (
              <View style={styles.NewsDetailMoreStoriesLoadingContainer}>
                <Progress.CircleSnail
                  size={32}
                  thickness={2.25}
                  color={'#000033'}
                  indeterminate={true}
                />
                <Text style={styles.NewsDetailMoreStoriesPreloaderText}>
                  Loading Comments
                </Text>
              </View>
            )}

            {/* Comments */}
            {shouldShowComments() && (
              <View>
                {allComments.map((item, index) => (
                  <View
                    style={styles.NewsDetailCommentContainer}
                    key={randomKey()}>
                    <View style={styles.NewsDetailCommentInfoContainer}>
                      <Text style={styles.NewsDetailCommentInfo}>
                        {getAuthor(item.by)}
                      </Text>
                      <Icon name="circle-small" size={24} color="#8c909c" />
                      <Text style={styles.NewsDetailCommentInfo}>
                        {formatTime(item.time)}
                      </Text>
                    </View>
                    <Text style={styles.NewsDetailCommentText}>
                      {sanitizeComment(item.text)}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsDetailScreen;
