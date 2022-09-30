import React, {useContext, useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fonts from '../utils/fonts';
import Metrics from '../utils/Metrics';
import {AppContext} from '../Context/AppProvider';

const CharactersView = ({navigation, route}) => {
  const {moviesState} = useContext(AppContext);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  navigation.setOptions({title: route.params.person.name});

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        alwaysBounceVertical={true}
        style={[{backgroundStyle}, styles.scrollView]}>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Рост:</Text>
          <Text style={styles.text}>{route.params.person.height}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Вес:</Text>
          <Text style={styles.text}>{route.params.person.mass}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Цвет волос:</Text>
          <Text style={styles.text}>{route.params.person.hair_color}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Цвет кожи:</Text>
          <Text style={styles.text}>{route.params.person.skin_color}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Цвет глаз:</Text>
          <Text style={styles.text}>{route.params.person.eye_color}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Дата рождения:</Text>
          <Text style={styles.text}>{route.params.person.birth_year}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Пол:</Text>
          <Text style={styles.text}>{route.params.person.gender}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Фильмы:</Text>
          <View style={styles.text}>
            {!moviesState.results ? (
              <Text>Please wait...</Text>
            ) : (
              moviesState.results
                .filter(film => {
                  return route.params.person.films.indexOf(film.url) !== -1;
                })
                .map(film => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('FilmView', {
                        film,
                      });
                    }}>
                    <Text style={styles.textFilm}>{film.title} </Text>
                  </Pressable>
                ))
            )}
          </View>
        </View>
        <View style={[{height: Metrics.getHeight(100)}]} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewText: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: Metrics.getHeight(10),
    marginHorizontal: Metrics.getWidth(10),
  },
  text: {
    fontSize: Fonts.size.h6,
    color: 'black',
  },
  textHeader: {
    fontWeight: '600',
    fontSize: Fonts.size.h4,
    color: 'black',
    marginBottom: Metrics.getHeight(10),
  },
  textFilm: {
    fontSize: Fonts.size.h5,
    textDecorationLine: 'underline',
    color: 'black',
    marginVertical: Metrics.getHeight(5),
  },
});

export default CharactersView;
