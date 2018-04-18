/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */


'use strict';

import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Text,
} from 'react-native';
import {layout, intervalTime} from "../Config/MKConstants";
import MKImage from './MKImage'

const { screenWidth } = Dimensions.get('window');

const Slide = props => {
    return (
        <TouchableWithoutFeedback
            style={styles.button}
            onPress={()=>{
                props.onPress(props.story.id);
            }}
        >

            <View style={styles.slide} >
                <MKImage
                    style={styles.image}
                    source={{uri: props.story.image}}
                />
                <Text style={styles.titleView}>{props.story.title}</Text>


            </View>

        </TouchableWithoutFeedback>
    )
};


export default class extends Component {
    constructor (props) {
        super(props);
    }


    render () {
        return (
            <View style={styles.container}>
                <Swiper loadMinimal
                        loadMinimalSize={styles.loadMinimalSize}
                        containerStyle={styles.wrapper}
                        activeDotColor={styles.dotColor}
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={intervalTime.swiperIntervalTime}
                        paginationStyle={styles.paginationStyle}
                >
                    {
                        this.props.stories.map((story, i) => <Slide
                            story={story}
                            i={i}
                            key={i}
                            onPress = {this.props.onPress}
                        />)
                    }
                </Swiper>
            </View>
        )
    }
}


const styles = {
    container:{
        flex:1,
        height:layout.swiperHeight,
    },
    wrapper: {
        // backgroundColor:'red',
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width:screenWidth,
        flex: 1,
        backgroundColor: 'transparent',
    },

    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)'
    },

    loadingImage: {
        width: 60,
        height: 60
    },
    paginationStyle: {
        bottom:10,
    },
    dotColor:'red',
    loadMinimalSize:6,
    titleView: {
        left:10,
        bottom:30,
        right:10,
        color:'#ffffff',
        position: 'absolute',
        textShadowColor:'#000000',
        textShadowOffset:{width:0.5,height:0.5},
        textShadowRadius:2.0,
        fontSize: 17,
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        left:0,
        bottom:0,
        right:0,
        top:0,
    }

};