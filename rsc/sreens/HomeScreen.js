import React from 'react';
import MoviesScreen from '../components/MoviesScreen';
import PeoplesScreen from '../components/PeoplesScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {
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
        component={() => <MoviesScreen navigation={navigation} />}
      />
      <Tab.Screen
        name="Персонажи"
        component={() => <PeoplesScreen navigation={navigation} />}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
