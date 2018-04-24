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
    ScrollView,
} from 'react-native';
import MKBasePage from '../MKBasePage';
import {MKUserCenterHeaderView,
    MKUserCenterWalletView,
    MKUserCenterOrderView,
    MKUserCenterChargeView,
    MKUserCenterToolView,
} from '../../Common/MKUserCenterConponents'

export default class MKUserCenterPage extends MKBasePage {

    static navigationOptions = {
        headerTitle: '用户中心',
    };

    constructor (props) {
        super(props)
    }

    render () {
        return super.render(
            <ScrollView style={styles.scrollView}>
                // 顶部用户信息
                <MKUserCenterHeaderView />
                <MKUserCenterWalletView />
                <MKUserCenterOrderView />
                <MKUserCenterChargeView />
                <MKUserCenterToolView />
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    scrollView: {
        flex:1,
        flexDirection:'column',
    },
});