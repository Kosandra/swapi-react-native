import React from 'react';
import MoviesScreen from '../components/MoviesScreen';
import PeoplesScreen from '../components/PeoplesScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation, moviesApi, peoplesApi}) => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#112183',
        tabBarLabelStyle: {fontWeight: '600', fontSize: 16},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="Фильмы"
        component={() => (
          <MoviesScreen
            moviesApi={moviesApi}
            navigation={navigation}
            peoplesApi={peoplesApi}
          />
        )}
      />
      <Tab.Screen
        name="Персонажи"
        component={() => (
          <PeoplesScreen
            peoplesApi={peoplesApi}
            moviesApi={moviesApi}
            navigation={navigation}
          />
        )}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
