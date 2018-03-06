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
    View,
    Text
} from 'react-native'

import MKBasePage from '../MKBasePage'
import commonStyles from '../../Styles/commonStyles'

export default class MKHomePage extends MKBasePage {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            headerTitle: '热点',
        };
    };

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View style={[{flex:1}, {backgroundColor:"#ff0000"},{flexDirection:'column-reverse'}]}>
                <Text style={[{color:"white"},{marginBottom:0}]}
                      onPress={() => alert('gogogo')}
                >首页热点 </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({

});