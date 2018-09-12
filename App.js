import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//react navigation
import { createBottomTabNavigator } from 'react-navigation'

// import screens
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Inbox from './screens/Inbox'


// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

export default createBottomTabNavigator({
  Explore: {
    screen: Explore
  },
  Saved: {
    screen: Saved
  },
  Trips: {
    screen: Trips
  },
  Inbox: {
    screen: Inbox
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
