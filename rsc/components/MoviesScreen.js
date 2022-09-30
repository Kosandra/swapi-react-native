import React, {useContext, useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import ItemButtonFilm from './ItemButtonFilm';
import Metrics from '../utils/Metrics';
import {AppContext} from '../Context/AppProvider';

const MoviesScreen = ({navigation}) => {
  const {moviesState} = useContext(AppContext);

  const [movies, setMovies] = useState(moviesState);

  useEffect(() => {
    setMovies(moviesState);
  }, [moviesState]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <Pressable>
          {movies.results === undefined ? (
            <Text>Please wait...</Text>
          ) : (
            movies.results.map((movie, key) => (
              <ItemButtonFilm film={movie} navigation={navigation} />
            ))
          )}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    height: Metrics.screenHeight,
  },
});

export default MoviesScreen;
