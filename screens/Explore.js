import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

//Components
import Category from './../components/Explore/Category'
import Home from './../components/Explore/Home'
//get width & height of device
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    defaultFlex: {
        flex: 1
    },
    HeaderContianer: {
        height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'
    },
    HeaderContianerContent: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.os == 'android' ? 30 : 20
    },
    searchInput: {
        flex: 1, fontWeight: '700', backgroundColor: 'white'
    },
    CategoryContainer: {
        flex: 1, backgroundColor: 'white', paddingTop: 20,
    },
    CategoryTitle: {
        fontSize: 24, fontWeight: '700', paddingHorizontal: 20
    },
    CategoryCardContiner: {
        height: 130, marginTop: 20
    },
    homeContainer: {
        marginTop: 40, paddingHorizontal: 20
    },
    homeTitle: {
        fontSize: 24, fontWeight: '700',
    },
    homeDesc: {
        fontWeight: '100', marginTop: 10
    },
    homeImageContianer: { width: width - 40, height: 200, marginTop: 20 },
    homeImage: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd'
    }

})
class Explore extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.defaultFlex}>
                <View style={styles.defaultFlex}>
                    <View style={styles.HeaderContianer}>
                        <View style={styles.HeaderContianerContent}>
                            <Ionicons name="ios-search" size={20} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Tehran"
                                placeholderTextColorL="gray"
                                style={styles.searchInput}
                            />
                        </View>
                    </View>

                    <ScrollView scrollEventThrottle={16}>
                        <View style={styles.CategoryContainer}>
                            <Text style={styles.CategoryTitle}>
                                What can we help you find?
                            </Text>
                            <View style={styles.CategoryCardContiner}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('./../assets/home.jpeg')} name="Home" />
                                    <Category imageUri={require('./../assets/exprience.jpeg')} name="expriences" />
                                    <Category imageUri={require('./../assets/resturant.jpeg')} name="resturant" />
                                    <Category imageUri={require('./../assets/club.jpeg')} name="club" />
                                </ScrollView>
                            </View>
                            <View style={styles.homeContainer}>
                                <Text style={styles.homeTitle}>
                                    Intruducing Airbnb Plus
                            </Text>
                                <Text style={styles.homeDesc}>
                                    A new selection of homes verified for quality & comfort
                            </Text>
                                <View style={styles.homeImageContianer}>
                                    <Image source={require('./../assets/exprience.jpeg')} style={styles.homeImage} />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Homes around the world
                        </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', }}>
                                <Home
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                    name="The cozy place"
                                    widthHome={width}
                                    imageUri={require('./../assets/home.jpeg')} />
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Explore