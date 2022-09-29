import React, {useEffect, useState} from 'react';
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

const FilmView = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [apiPerson, setApiPerson] = useState(
    route.params.peoplesApi.current.results,
  );

  useEffect(() => {
    setApiPerson(route.params.peoplesApi.current.results);
  }, [route.params.peoplesApi]);

  navigation.setOptions({title: route.params.film.title});

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
          <Text style={styles.textHeader}>Эпизод:</Text>
          <Text style={styles.text}>{route.params.film.episode_id}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Опенинг:</Text>
          <Text style={styles.text}>{route.params.film.opening_crawl}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Директор:</Text>
          <Text style={styles.text}>{route.params.film.director}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Продюссер:</Text>
          <Text style={styles.text}>{route.params.film.producer}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Дата показа:</Text>
          <Text style={styles.text}>{route.params.film.release_date}</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textHeader}>Персонажи:</Text>
          <View>
            {!apiPerson ? (
              <Text>asdasd</Text>
            ) : (
              apiPerson
                .filter(person => {
                  return (
                    route.params.film.characters.indexOf(person.url) !== -1
                  );
                })
                .map(person => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate('CharacterView', {
                        person,
                        moviesApi: route.params.moviesApi,
                        peoplesApi: route.params.peoplesApi,
                      });
                    }}>
                    <Text style={styles.textPerson}>{person.name} </Text>
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
  textPerson: {
    fontSize: Fonts.size.h5,
    textDecorationLine: 'underline',
    color: 'black',
    marginVertical: Metrics.getHeight(5),
  },
  textHeader: {
    fontWeight: '600',
    fontSize: Fonts.size.h4,
    color: 'black',
    marginBottom: Metrics.getHeight(10),
  },
});

export default FilmView;
