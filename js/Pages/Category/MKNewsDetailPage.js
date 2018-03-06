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
    View,
    Text
} from 'react-native';
import MKBasePage from '../MKBasePage';

export default class MKNewsDetailPage extends MKBasePage {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            headerTitle: '新闻详情',
        };
    };

    constructor(props) {
        super(props);

    }

    render() {
        return super.render(
            <Text style={[{color:"black"},{marginBottom:0}]}>
                123
            </Text>
        );

    }


}