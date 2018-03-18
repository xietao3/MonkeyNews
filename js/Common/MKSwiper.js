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
    Image,
    Dimensions,
} from 'react-native';
import {layout, intervalTime} from "../Config/MKConstants";

const { screenWidth } = Dimensions.get('window');
// const loading = require('./img/loading.gif');

const Slide = props => {
    return (
        <View style={styles.slide}>
            <Image onLoad={props.loadHandle.bind(null, props.i)}
                   style={styles.image}
                   source={{uri: props.uri}}
                   resizeMode={Image.resizeMode.center}
            />
            {/*{!props.loaded && <View style={styles.loadingView}>*/}
                {/*<Image style={styles.loadingImage} source={loading} />*/}
            }
        </View>
    )
};


export default class extends Component {
    constructor (props) {
        super(props);
        this.state = {
            imgList: [
                'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
                'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
                'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
                'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
            ],
            loadQueue: [0, 0, 0, 0]
        };
        this.loadHandle = this.loadHandle.bind(this)
    }
    loadHandle (i) {
        let loadQueue = this.state.loadQueue;
        loadQueue[i] = 1;
        this.setState({
            loadQueue
        })
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
                        this.state.imgList.map((item, i) => <Slide
                            loadHandle={this.loadHandle}
                            loaded={!!this.state.loadQueue[i]}
                            uri={item}
                            i={i}
                            key={i}
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

};