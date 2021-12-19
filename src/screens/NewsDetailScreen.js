import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar, ScrollView} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {commentLazy, storyLazy} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {sentenceCase, toastOptions} from '../utils/helper';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-root-toast';
import {useIsFocused} from '@react-navigation/native';

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
  let currentIndex = 0;
  let remainder = 0;
  let fetchedCount = 0;

  const determineIndexStart = () => {
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
  // const allStoryIDs = useSelector(state => state.story.story_ids);
  let allComments = useSelector(state => state.comment.comments);
  const isLoadingComments = useSelector(
    state => state.comment.loading_comments,
  );

  // useEffect(() => {
  //   allComments = [];
  // }, []);

  /////
  // States
  /////
  const [commentIndexStart, setCommentIndexStart] = useState(0);
  const [commentIndexEnd, setCommentIndexEnd] = useState(determineIndexEnd());
  const [remainderIndex, setRemainderIndex] = useState(0);

  const getCommentsLazily = (previousStories = []) => {
    if (storyData.kids !== undefined) {
      if (storyData.kids.length > 0) {
        let paginatedRequest = storyData.kids.slice(indexStart, indexEnd);

        currentIndex = indexEnd;
        console.log('indexStart, indexEnd->', indexStart, indexEnd);
        remainder = storyData.kids.length - indexEnd;
        console.log('remainder->', remainder);

        setRemainderIndex(remainder);

        let endpoints = paginatedRequest.map(
          (id, index) =>
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
        );

        // console.log('endpoints->', endpoints);

        dispatch(commentLazy(endpoints, previousStories))
          .then(res => {
            // console.log('res->', res);
            fetchedCount = res.length;
            // setCommentIndexStart(commentIndexEnd);
            // setCommentIndexEnd(commentIndexEnd + perPage());
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
        // let remainder = storyData.kids.length - commentIndexEnd;
        // console.log('remainder->', remainder);
        // console.log('rem ->', remainderIndex);
        // console.log('indexEnd->', indexEnd);
        // console.log('storyData.kids.length->', storyData.kids.length);
        // console.log('commentIndexEnd->', commentIndexEnd);
        // console.log('perPage->', remainder);
        // console.log('fecthedCount->', fetchedCount);
        // setRemainderIndex(remainder);

        console.log('remainderIndex->', remainderIndex);

        // if (remainderIndex < 10) {
        //   count = remainderIndex;
        // }
        // if (remainderIndex === 0) {
        //   count = storyData.kids.length % 10;
        // }
        // if (remainderIndex > 10) {
        //   count = 10;
        // }

        count = 10;
      }
    } else {
      count = 0;
    }
    return count;
  };

  const getPrevComment = () => {
    // console.log('perPage()->', perPage());
    if (isLoadingComments === false && commentIndexEnd > perPage()) {
      // console.log("you've got to load");

      currentIndex = commentIndexEnd - perPage();
      indexStart = commentIndexStart - perPage();
      indexEnd = commentIndexEnd - perPage();
      // remainder = storyData.kids.length - commentIndexEnd;

      // setRemainderIndex(remainder);

      // remainder = storyData.kids.length - indexEnd;
      // console.log('remainder->', remainder);

      // setRemainderIndex(remainder);
      setCommentIndexEnd(indexEnd);
      setCommentIndexStart(indexStart);
      getCommentsLazily(allComments);
    }
  };

  const getNextComment = () => {
    // allComments.length < storyData.kids.length

    console.log('limit->', commentIndexEnd + perPage());
    console.log('storyData.kids.length->', storyData.kids.length);

    if (
      isLoadingComments === false &&
      commentIndexEnd < storyData.kids.length
    ) {
      // console.log("you've got to load");
      // remainder = storyData.kids.length - commentIndexEnd;
      // console.log('remainder->', remainder);

      currentIndex = commentIndexEnd + perPage();
      indexStart = commentIndexStart + perPage();
      indexEnd = commentIndexEnd + perPage();
      // remainder = storyData.kids.length - commentIndexEnd;

      // setRemainderIndex(remainder);
      setCommentIndexEnd(indexEnd);
      setCommentIndexStart(indexStart);
      getCommentsLazily(allComments);
    }
  };

  const getPageIndex = () => {
    let pageIndex = 10;

    if (storyData.kids !== undefined) {
      pageIndex =
        commentIndexEnd > storyData.kids.length
          ? storyData.kids.length
          : commentIndexEnd;
    }

    return pageIndex;
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
        <ScrollView
          style={{height: 100}}
          // onScroll={({nativeEvent}) => {
          //   loadMoreContent(nativeEvent);
          // }}
        >
          <View style={styles.NewsDetailFeaturedStoryContainer}>
            <View style={styles.NewsDetailFeaturedStoryInfoContainer}>
              {storyData.is_trending && (
                <Text style={styles.NewsDetailFeaturedStoryTag}>TRENDING</Text>
              )}
              {/* <Text style={styles.NewsDetailFeaturedStoryTag}>FEATURED</Text> */}
              <Text style={styles.NewsDetailFeaturedStoryInfo}>
                {moment.unix(storyData.time).format('LL').toUpperCase()}
              </Text>
              <Icon name="circle-small" size={24} color="#B3CAFF" />
              <Text style={styles.NewsDetailFeaturedStoryInfo}>
                {storyData.by !== undefined
                  ? storyData.by.toUpperCase()
                  : 'ANONYMOUS'}
              </Text>
            </View>
            {/* Check if is clickable is true or false */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('NewsDetail')}> */}
            <Text style={styles.NewsDetailFeaturedStoryHeadline}>
              {sentenceCase(storyData.title)}
            </Text>
            {/* </TouchableOpacity> */}
            <View style={styles.NewsDetailFeaturedStoryReactionContainer}>
              <View style={styles.NewsDetailFeaturedStoryReaction}>
                <Icon name="star" size={16} color="#B3CAFF" />
                <Text style={styles.NewsDetailFeaturedStoryInfoText}>
                  {storyData.score} Votes
                </Text>
              </View>
              <View style={styles.NewsDetailFeaturedStoryReaction}>
                <Icon name="comment" size={13} color="#B3CAFF" />
                <Text style={styles.NewsDetailFeaturedStoryInfoText}>
                  {storyData.kids !== undefined ? storyData.kids.length : 0}{' '}
                  Comments
                </Text>
              </View>
              {/* <View style={styles.NewsDetailFeaturedStoryWebpageButton}>
                <Icon name="arrow-top-right-thick" size={16} color="#B3CAFF" />
                <Text style={styles.NewsDetailFeaturedStoryInfoText}>
                  Open Webpage
                </Text>
              </View> */}
            </View>
          </View>

          {/* Comments Section*/}
          <View style={styles.NewsDetailCommentsContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.NewsDetailCommentSectionHeading}>
                  Comments
                </Text>
                <Text style={{fontSize: 12, color: '#8c909c'}}>
                  Showing {getPageIndex()} of{' '}
                  {storyData.kids !== undefined ? storyData.kids.length : 0}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: 80,
                  justifyContent: 'space-between',
                }}>
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

            {/* Comment One */}
            {!isLoadingComments && (
              <View>
                {allComments.map((item, index) => (
                  <View
                    style={styles.NewsDetailCommentContainer}
                    key={item.time}>
                    <View style={styles.NewsDetailCommentInfoContainer}>
                      <Text style={styles.NewsDetailCommentInfo}>
                        {item.by !== undefined
                          ? item.by.toUpperCase()
                          : 'ANONYMOUS USER'}
                      </Text>
                      <Icon name="circle-small" size={24} color="#8c909c" />
                      <Text style={styles.NewsDetailCommentInfo}>
                        {moment.unix(item.time).calendar().toUpperCase()}
                      </Text>
                    </View>
                    <Text style={styles.NewsDetailCommentText}>
                      {item.text !== undefined
                        ? item.text
                            .replace(/<[^>]*>/g, ' ')
                            .replace(/(&#x27;)/g, "'")
                            .replace(/(&#x2F;)/g, '/')
                            .replace(/(&gt;)/g, '>')
                            .replace(/(&quot;)/g, '"')
                        : 'Comment Not Available'}
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
