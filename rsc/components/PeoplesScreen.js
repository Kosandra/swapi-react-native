import React, {useContext, useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import ItemButtonPerson from './ItemButtonPerson';
import Metrics from '../utils/Metrics';
import {AppContext} from '../Context/AppProvider';

const PeoplesScreen = ({navigation}) => {
  const {peoplesApi} = useContext(AppContext);

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
              <ItemButtonPerson navigation={navigation} person={pers} />
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

export default PeoplesScreen;
