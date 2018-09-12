import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

//icon 
import { Ionicons } from '@expo/vector-icons'
//react navigation
import { createBottomTabNavigator } from 'react-navigation'

// import screens
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Inbox from './screens/Inbox'
import Profile from './screens/Profile'
const styles = StyleSheet.create({
  icon: {

  },

  tabBar: {
    height: 52,
    borderWidth: 0.5,
    backgroundColor: 'white',
  },

  labelTabBar: {
    fontSize: 12,
    marginTop: 0, // <- This is the guilty one in my case, simply removed it and it worked as expected on iOS 10 & 11
  },

  indicatorTabBar: {
    backgroundColor: 'black',
  },
});




export default createBottomTabNavigator({

  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-search-outline" color={tintColor} size={24} />
      }
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-heart-outline" color={tintColor} size={24} />
      }
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => {
        <Image source={require("./assets/airbnb.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }} />
      }
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-chatboxes-outline" color={tintColor} size={24} />
      }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-person-outline" color={tintColor} size={24} />
      }
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      pressColor: 'blue',
      showIcon: true,
      iconStyle: {
        width: 25,
        height: 25,
      },
      style: styles.tabBar,
      upperCaseLabel: false,
      labelStyle: styles.labelTabBar,
      indicatorStyle: styles.indicatorTabBar,
      // style: {
      //   backgroundColor: 'white',
      //   borderTopWidth: 0,
      //   shadowOffset: { width: 5, height: 3 },
      //   shadowOpacity: 0.5,
      //   elevation: 5,
      // }
    }


  })

