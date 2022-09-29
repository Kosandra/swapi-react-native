import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const ItemButtonPerson = ({navigation, person, moviesApi, peoplesApi}) => {
  return (
    <Pressable
      style={styles.btnList}
      onPress={() =>
        navigation.navigate('CharacterView', {person, moviesApi, peoplesApi})
      }>
      <Text style={styles.textBtnList}>{person.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnList: {
    width: 300,
    backgroundColor: 'orange',
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textBtnList: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    padding: 10,
  },
});

export default ItemButtonPerson;
