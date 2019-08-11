import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default ({children, style}) => (
  <Text style={[style]}>{children}</Text>
)

const styles = StyleSheet.create({

})
