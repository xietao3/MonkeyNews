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
    Text,
    StyleSheet,
} from 'react-native';

export default class MKNewsSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const date = this.props.section.key.toString();
        let month = date.substring(4,6);
        let day = date.substring(6,8);

        if (this.props.section.key !== 100) {
            return (
                <View style={styles.sectionView}>
                    <Text style={styles.sectionTitle}>{parseInt(month)+'月'+parseInt(day)+'日'+'热点'}</Text>
                </View>
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    sectionView: {
        height: 30,
        backgroundColor: '#eeeeee',
        justifyContent:'center',
        alignItems:'center',

    }
    ,
    sectionTitle: {

        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'tomato',
        fontSize: 20
    },
});