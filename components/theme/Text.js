import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import colors from '../../constants/Colors'

export default ({children, style}) => (
  <Text style={[styles.text, style]}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SpaceMono-Regular',
    color: colors.white,
    textShadowRadius: 2,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 1,
      height: 1
    },
  }
})
