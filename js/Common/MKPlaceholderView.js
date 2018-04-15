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
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import MKLoadingView from './MKLoadingView'


export  default class MKPlaceholderView extends Component {

    constructor(props) {
        super(props);

    };

    render() {
        if (this.props.isLoading === 1) {
            return(
                <View style={styles.container}>
                    <MKLoadingView/>
                </View>
            );
        }else if (this.props.isLoading === -1){
            return(
                <TouchableOpacity
                    onPress={this.props.reloadEvent}
                    style={styles.container}
                >
                    <Text style={styles.Text}>加载失败，点击重试</Text>
                </TouchableOpacity>
            );
        }else {
            return null;
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    Text:{
        color:"tomato"
    }
});

