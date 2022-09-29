import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import ItemButtonPerson from './ItemButtonPerson';

const PeoplesScreen = ({navigation, peoplesApi, moviesApi}) => {
  const [pls, setPls] = useState(peoplesApi.current);
  useEffect(() => {
    setPls(peoplesApi.current);
  }, [peoplesApi]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Pressable>
          {pls.results === undefined ? (
            <Text>Undefffff</Text>
          ) : (
            pls.results.map((pers, key) => (
              <ItemButtonPerson
                peoplesApi={peoplesApi}
                moviesApi={moviesApi}
                navigation={navigation}
                person={pers}
              />
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
  },
});

export default PeoplesScreen;
