import React from 'react'
import { View, StyleSheet } from 'react-native'

export default ({}) => (
  <View style={styles.preloader}>
      <View style={styles.spinner}></View>
  </View>
)

const styles = StyleSheet.create({
  preloader: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 99999,
    backgroundColor: '#fff',
    flex: 1,
  },
  spinner: {
    width: 40,
    height: 40,
    margin: 'auto',
    backgroundColor: '#ff4301',
    borderRadius: 20,
    // animation: sk-scaleout 1.0s infinite ease-in-out;
    // animation-duration: 1s;
    // animation-timing-function: ease-in-out;
    // animation-delay: 0s;
    // animation-iteration-count: infinite;
    // animation-direction: normal;
    // animation-fill-mode: none;
    // animation-play-state: running;
    // animation-name: sk-scaleout;
  }
})
