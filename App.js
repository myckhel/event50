import React, {Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Platform,
  Text,
  StatusBar,
  // Assets,
} from 'react-native';

// console.log(Assets)

import AppNavigator from './navigation/AppNavigator';

const Root = () => (
  <View style={styles.container}>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    <AppNavigator />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Root;
