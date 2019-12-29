import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.outer}>
      <Header/>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! let me do some change</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  outer: {
    flex: 1,

  },
  container: {
    height: height*9/10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
