/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    ImageBackground,
} from 'react-native'
import MKImagePlacehoulder from './MKImagePlaceholder'

export default class extends Component {

    constructor (props) {
        super(props);
        this.state = {
            imageLoading:true
        }
    }

    render() {
        return (
            <ImageBackground
                {...this.props}
                style={[styles.image, this.props.style]}
                onLoad={() => {
                    this.setState({imageLoading: false});
                }}
            >
                <MKImagePlacehoulder
                    finished={!this.state.imageLoading}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#bfbfbf',
    }
});

