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

export default class MKCategoryPage extends MKBasePage {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View style={[commonStyles.container, {backgroundColor:"#ff0000"}]}>
                <Text style={[{color:"white"},{marginTop:100}]}> 知识分类</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({

});
