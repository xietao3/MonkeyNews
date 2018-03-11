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
    StyleSheet,
} from 'react-native';
import {layout} from '../Config/MKConstants'
import {colors} from "../Styles/commonStyles";

export class Line extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        if (this.props && this.props.xietao) {
            return null;
        }
        return (
            <View style={styles.line} />

        )
    };
}

const styles = StyleSheet.create({
    line: {
        flex:0,
        height:layout.bottomLineHeight,
        backgroundColor:colors.bottomLineColor,
    }
});