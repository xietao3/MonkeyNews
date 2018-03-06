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
        return super.render(
            <Text style={[{color:"black"},{marginBottom:0}]}
                  onPress={() => {
                      this.props.navigation.navigate('newsDetail')
                  }}
            >首页热点 </Text>
        );
    }

}

const styles = StyleSheet.create({

});