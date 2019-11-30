import React, {PureComponent} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { Text, Loader } from '../../components/theme'
import colors from '../../constants/Colors'

class Profile extends PureComponent {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View>
          <Text>Hey</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

export default Profile;
