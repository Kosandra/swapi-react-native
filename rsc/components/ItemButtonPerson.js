import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Metrics from "../utils/Metrics";

const ItemButtonPerson = ({navigation, person}) => {
  return (
    <Pressable
      style={styles.btnList}
      onPress={() => navigation.navigate('CharacterView', {person})}>
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
    borderRadius: Metrics.getWidth(20),
  },
  textBtnList: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    padding: 10,
  },
});

export default ItemButtonPerson;
