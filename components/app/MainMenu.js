// import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import color from '../../constants/Colors';
// import TabBarIconI, { TabBarIconE, TabBarIconM } from '../../components/TabBarIcon';

class SideMenu extends PureComponent {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount = () => {
    // console.log(this.props.navigation.isFocused());
  }

  componentDidAppear = () => {
    // console.log('appeard');
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={this.navigateToScreen('Home')}
            style={styles.navSection}>
            {/*<TabBarIconE
              name={ 'folder-music'}
            />*/}
            <Text style={styles.navItem} >Home</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>copyright c 2019 Todey Music Player</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItem: {
    padding: 10
  },
  navSection: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: color.primary
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center'
  }
});

// SideMenu.propTypes = {
//   navigation: PropTypes.object
// };

export default SideMenu;
