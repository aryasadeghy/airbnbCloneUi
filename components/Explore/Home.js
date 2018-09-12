import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import StarRating from 'react-native-star-rating'

const styles = StyleSheet.create({
    HomeContianer: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    cardContainer: {
    },
    imageContainer: {
        flex: 1
    },
    cardTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingLeft: 10
    },
    imageStyles: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 14,
        color: '#b63838'
    },
    desc: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 14
    }
})
class Home extends Component {
    render() {
        return (
            <View style={styles.HomeContianer}>
                <View style={{
                    width: this.props.widthHome / 2 - 30, height: this.props.widthHome / 2 - 30, borderWidth: 0.5, borderColor: "#dddddd"
                }}>
                    <View style={styles.imageContainer}>
                        <Image source={this.props.imageUri} style={styles.imageStyles} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.title}>{this.props.type} </Text>
                        <Text style={styles.desc} >{this.props.name} </Text>
                        <Text style={styles.price}>{this.props.price} </Text>
                        <StarRating 
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                        />

                    </View>
                </View>
            </View>

        )
    }
}

export default Home