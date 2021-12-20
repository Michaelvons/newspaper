import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

// Screen Imports
import AboutScreen from './src/screens/AboutScreen';
import LoginScreen from './src/screens/LoginScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import NewsListScreen from './src/screens/NewsListScreen';
import SignupScreen from './src/screens/SignupScreen';

const AppStack = createStackNavigator();
const NewsStack = createStackNavigator();
const HomeTab = createBottomTabNavigator();

function NewsStackNavigation() {
  return (
    <NewsStack.Navigator
      initialRouteName="NewsList"
      screenOptions={{headerShown: false}}>
      <NewsStack.Screen name="NewsList" component={NewsListScreen} />
      <NewsStack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </NewsStack.Navigator>
  );
}

function MainAppTabNavigation() {
  return (
    <HomeTab.Navigator
      screenOptions={{headerShown: false, keyboardHidesTabBar: true}}
      backBehavior="none">
      <HomeTab.Screen
        name="News"
        component={NewsStackNavigation}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="newspaper-variant" size={28} color="#3D3EC0" />
            ) : (
              <Icon name="newspaper-variant" size={28} color="#C2D4FF" />
            ),
        }}
      />
      <HomeTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="account-box" size={28} color="#3D3EC0" />
            ) : (
              <Icon name="account-box" size={28} color="#C2D4FF" />
            ),
        }}
      />
    </HomeTab.Navigator>
  );
}

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator
          initialRouteName="Signup"
          screenOptions={{headerShown: false}}>
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="Signup" component={SignupScreen} />
          <AppStack.Screen name="MainApp" component={MainAppTabNavigation} />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
