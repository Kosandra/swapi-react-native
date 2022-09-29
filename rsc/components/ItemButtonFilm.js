import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Metrics from '../utils/Metrics';
import Fonts from '../utils/fonts';

const ItemButtonFilm = ({navigation, film, peoplesApi, moviesApi}) => {
  return (
    <Pressable
      style={styles.btnList}
      onPress={() =>
        navigation.navigate('FilmView', {film, peoplesApi, moviesApi})
      }>
      <Text style={styles.textBtnList}>{film.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnList: {
    width: Metrics.getWidth(300),
    backgroundColor: 'orange',
    marginHorizontal: Metrics.getWidth(10),
    marginVertical: Metrics.getHeight(10),
    alignSelf: 'center',
    alignItems: 'center',
  },
  textBtnList: {
    fontSize: Fonts.size.h4,
    color: 'black',
    fontWeight: '600',
    paddingHorizontal: Metrics.getWidth(10),
    paddingVertical: Metrics.getHeight(10),
  },
});

export default ItemButtonFilm;
