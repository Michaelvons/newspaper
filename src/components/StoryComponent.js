import React, {useEffect, useState} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {storyFetch, storyLazy} from '../redux';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {sentenceCase} from '../utils/helper';

const StoryComponent = ({data}) => {
  console.log('data->', data);

  let v = [];

  data.map((item, index) => {
    v.push(<Text>{item.by}</Text>);
  });

  return (
    <View>
      {/* <Text>item</Text> */}
      {v}
      {/* {data.map((item, index) => {
        <Text>{item.by}</Text>;
      })} */}
    </View>
  );
};

export default StoryComponent;
