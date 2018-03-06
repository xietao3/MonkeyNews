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

export default class MKUserCenterPage extends MKBasePage {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            headerTitle: '用户中心',
        };
    };

    constructor (props) {
        super(props)
    }

    render () {
        return super.render(
            <Text style={[{color:"black"},{marginTop:100}]}>个人中心页面 </Text>

        );
    }

}

const styles = StyleSheet.create({

});