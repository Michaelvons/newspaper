import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  /////
  // NewsList Styling
  /////

  NewsListAppTitle: {
    fontSize: 18,
    fontFamily: 'Manrope3-ExtraBold',
    color: '#000033',
  },

  NewsListContainer: {
    backgroundColor: '#F5F5F5',
    height: screenHeight,
  },

  NewsListFeaturedStoryHeadline: {
    marginTop: 4,
    color: '#D6E2FF',
    fontSize: 32,
    fontFamily: 'Manrope3-Bold',
    lineHeight: 48,
    letterSpacing: 0.25,
  },

  NewsListSubtitle: {
    color: '#B3CAFF',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsListStoryInfo: {
    color: '#8c909c',
    fontSize: 11,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsListFeaturedStoryInfoText: {
    color: '#B3CAFF',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    marginLeft: 4,
    marginRight: 18,
    letterSpacing: 0.25,
  },

  NewsListStoryInfoText: {
    color: '#8c909c',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    marginLeft: 4,
    marginRight: 18,
    letterSpacing: 0.25,
  },

  NewsListStoryHeadline: {
    marginTop: 2,
    color: '#000033',
    fontSize: 18,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsListStoriesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 56,
  },

  NewsListStoryContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.8,
    paddingVertical: 24,
  },

  NewsListStoryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  NewsListStoryTag: {
    backgroundColor: '#FEA62A',
    paddingHorizontal: 6,
    paddingVertical: 1.6,
    fontSize: 11,
    borderRadius: 3,
    color: '#ffffff',
    marginRight: 10,
  },

  NewsListReactionContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  NewsListReactionVotes: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  NewsListStoryWebpageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#1DA1F2',
    padding: 1,
    maxWidth: 134,
    borderRadius: 100,
    borderWidth: 1,
  },

  NewsListAppBarContainer: {
    paddingTop: 56,
    paddingBottom: 30,
    backgroundColor: '#3D3EC0',
    paddingHorizontal: 20,
  },

  NewsListFeaturedStoryContainer: {
    backgroundColor: '#3D3EC0',
    paddingHorizontal: 20,
    paddingBottom: 40,
    minHeight: 150,
  },

  NewsListFeaturedLoadingContainer: {
    backgroundColor: '#3D3EC0',
    paddingHorizontal: 20,
    paddingBottom: 40,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  NewsListMoreStoriesLoadingContainer: {
    paddingHorizontal: 20,
    paddingBottom: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },

  NewsListFeaturedStoryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  NewsListFeaturedStoryTag: {
    backgroundColor: '#1DA1F2',
    paddingHorizontal: 6,
    paddingVertical: 1.6,
    fontSize: 11,
    borderRadius: 3,
    color: '#ffffff',
    marginRight: 10,
  },

  NewsListFeaturedStoryInfo: {
    color: '#B3CAFF',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsListFeaturedPreloaderText: {
    color: '#B3CAFF',
    fontSize: 14,
    fontFamily: 'Manrope3-Medium',
    letterSpacing: 0.25,
    marginTop: 32,
  },

  NewsListMoreStoriesPreloaderText: {
    color: '#000033',
    fontSize: 14,
    fontFamily: 'Manrope3-Medium',
    letterSpacing: 0.25,
    marginTop: 32,
  },

  NewsListFeaturedStoryReactionContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  NewsListFeaturedStoryWebpageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#1DA1F2',
    padding: 4,
    maxWidth: 134,
    borderRadius: 100,
    borderWidth: 1,
  },

  NewsListFeaturedStoryReaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /////
  // About You Styling
  /////

  AboutContainer: {
    backgroundColor: '#F5F5F5',
    height: screenHeight,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },

  AboutScreenTitle: {
    fontSize: 24,
    color: '#000033',
    fontFamily: 'Manrope3-ExtraBold',
    letterSpacing: 0.25,
    marginBottom: 48,
  },

  AboutNames: {
    fontSize: 20,
    color: '#000033',
    fontFamily: 'Manrope3-Medium',
    letterSpacing: 0.25,
    marginBottom: 6,
    textAlign: 'center',
    marginTop: 20,
  },

  AboutBio: {
    color: '#393a41',
    fontFamily: 'Manrope3-Medium',
    letterSpacing: 0.25,
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 324,
    marginTop: 36,
    marginBottom: 46,
    lineHeight: 22,
  },

  AboutBioContainer: {
    alignItems: 'center',
  },

  AboutSocialContainer: {
    alignItems: 'center',
  },

  AboutSocialWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 160,
  },

  AboutSocialIcons: {
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderColor: '#8c909c',
  },

  AboutAddress: {
    color: '#686C78',
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
    fontSize: 11,
    marginLeft: 8,
  },

  AboutAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  AboutAvatarContainer: {
    alignItems: 'center',
  },

  /////
  // Signup Styling
  /////

  SignupBackground: {
    flex: 1,
    height: screenHeight,
  },

  SignupBackgroundOverlay: {
    flex: 1,
    backgroundColor: 'rgba(61, 62, 192, .75)',
  },

  SignupAppName: {
    color: '#B3CAFF',
    fontFamily: 'Manrope3-Bold',
    letterSpacing: 0.25,
    fontSize: 20,
    marginLeft: 8,
    marginTop: 4,
  },

  SignupInfoContainer: {
    marginTop: 80,
    marginBottom: 32,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    flex: 1,
  },

  SignupAppInfo: {
    alignItems: 'center',
  },

  SignupTextInput: {
    backgroundColor: 'rgba(179,202,255,0.3)',
    borderRadius: 6,
    marginBottom: 24,
    borderWidth: 0,
  },

  SignupTextInputTheme: {
    colors: {
      placeholder: 'rgba(179,202,255,1)',
      text: 'rgba(179,202,255,1)',
    },
  },

  SignupTextInputLabel: {
    fontSize: 16,
    color: '#31319b',
    fontFamily: 'Manrope3-Bold',
  },

  SignupButtonPlain: {
    textAlign: 'center',
    marginTop: 4,
    paddingTop: 16,
    fontSize: 12,
    color: '#B3CAFF',
    fontFamily: 'Manrope3-Medium',
  },

  /////
  // News Detail Styling
  /////

  NewsDetailContainer: {
    backgroundColor: '#F5F5F5',
    height: screenHeight,
  },

  NewsDetailCommentText: {
    marginTop: 2,
    color: '#424242',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsDetailAppBarContainer: {
    paddingTop: 56,
    paddingBottom: 30,
    backgroundColor: '#3D3EC0',
    paddingHorizontal: 20,
  },

  NewsDetailFeaturedStoryContainer: {
    backgroundColor: '#3D3EC0',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  NewsDetailFeaturedStoryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  NewsDetailFeaturedStoryTag: {
    backgroundColor: '#FEA62A',
    paddingHorizontal: 6,
    paddingVertical: 1.6,
    fontSize: 11,
    borderRadius: 3,
    color: '#ffffff',
    marginRight: 10,
  },

  NewsDetailFeaturedStoryInfo: {
    color: '#B3CAFF',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsDetailFeaturedStoryHeadline: {
    marginTop: 4,
    color: '#D6E2FF',
    fontSize: 32,
    fontFamily: 'Manrope3-Bold',
    lineHeight: 48,
    letterSpacing: 0.25,
  },

  NewsDetailFeaturedStoryReactionContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  NewsDetailFeaturedStoryWebpageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#1DA1F2',
    padding: 4,
    maxWidth: 134,
    borderRadius: 100,
    borderWidth: 1,
  },

  NewsDetailFeaturedStoryReaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  NewsDetailFeaturedStoryInfoText: {
    color: '#B3CAFF',
    fontSize: 12,
    fontFamily: 'Manrope3-Semibold',
    marginLeft: 4,
    marginRight: 18,
    letterSpacing: 0.25,
  },

  NewsDetailCommentsContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 100,
  },

  NewsDetailCommentSectionHeading: {
    color: '#000033',
    fontSize: 16,
    fontFamily: 'Manrope3-Bold',
    letterSpacing: 0.25,
  },

  NewsDetailCommentContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.8,
    paddingVertical: 20,
  },

  NewsDetailCommentInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  NewsDetailCommentInfo: {
    color: '#8c909c',
    fontSize: 11,
    fontFamily: 'Manrope3-Semibold',
    letterSpacing: 0.25,
  },

  NewsDetailMoreStoriesLoadingContainer: {
    paddingHorizontal: 20,
    // paddingBottom: 140,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  NewsDetailMoreStoriesPreloaderText: {
    color: '#000033',
    fontSize: 14,
    fontFamily: 'Manrope3-Medium',
    letterSpacing: 0.25,
    marginTop: 32,
  },

  //////
  // Login Styling
  //////

  LoginBackground: {
    flex: 1,
    height: screenHeight,
  },

  LoginBackgroundOverlay: {
    flex: 1,
    backgroundColor: 'rgba(61, 62, 192, .75)',
  },

  LoginAppName: {
    color: '#B3CAFF',
    fontFamily: 'Manrope3-Bold',
    letterSpacing: 0.25,
    fontSize: 20,
    marginLeft: 8,
    marginTop: 4,
  },

  LoginInfoContainer: {
    marginTop: 80,
    marginBottom: 32,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    flex: 1,
  },

  LoginAppInfo: {
    alignItems: 'center',
  },

  LoginTextInput: {
    backgroundColor: 'rgba(179,202,255,0.3)',
    borderRadius: 6,
    marginBottom: 24,
    borderWidth: 0,
  },

  LoginTextInputTheme: {
    colors: {
      placeholder: 'rgba(179,202,255,1)',
      text: 'rgba(179,202,255,1)',
    },
  },

  LoginTextInputLabel: {
    fontSize: 16,
    color: '#31319b',
    fontFamily: 'Manrope3-Bold',
  },

  LoginButtonPlain: {
    textAlign: 'center',
    marginTop: 4,
    paddingTop: 16,
    fontSize: 12,
    color: '#B3CAFF',
    fontFamily: 'Manrope3-Medium',
  },
});

export {styles};
