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

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View style={[commonStyles.container, {backgroundColor:"#ff0000"}]}>
                <Text style={[{color:"white"},{marginTop:100}]}>个人中心页面 </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({

});