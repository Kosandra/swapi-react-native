/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import type {Node} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import HomeScreen from './rsc/sreens/HomeScreen';
import FilmView from './rsc/components/FilmView';
import CharacterView from './rsc/components/CharacterView';
import Fonts from './rsc/utils/fonts';
import AppProvider, {AppContext} from './rsc/Context/AppProvider';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {peoplesApi, moviesApi} = useContext(AppContext);

  const HomeView = ({navigation}) => {
    return (
      <HomeScreen
        navigation={navigation}
        moviesApi={moviesApi}
        peoplesApi={peoplesApi}
      />
    );
  };

  return (
    <AppProvider value={{setText: 'YEEEE'}}>
      <NavigationContainer
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            options={{
              title: 'Звездные войны',
              headerTitleAlign: 'center',
              headerTitleStyle: styles.header,
              headerBackVisible: false
            }}
            component={HomeView}
          />
          <Stack.Screen
            name={'FilmView'}
            component={FilmView}
            options={({route, navigation}) => ({
              title: route.params.name,
            })}
          />
          <Stack.Screen
            name={'CharacterView'}
            component={CharacterView}
            options={({route, navigation}) => ({
              title: route.params.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: Fonts.size.h3,
    fontWeight: 'bold',
    color: '#094273',
    fontFamily: 'Arial',
  },
});

export default App;
