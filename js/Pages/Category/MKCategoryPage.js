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
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;

        return {
            headerTitle: '分类',
        };
    };

    constructor(props) {
        super(props)
    }

    render() {
        return super.render(
            <Text style={[{color:"black"},{marginTop:100}]}> 知识分类</Text>
        );

    }
}

const styles = StyleSheet.create({

});
