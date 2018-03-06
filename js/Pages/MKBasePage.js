/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, { Component } from 'react';
import {
    View,
} from 'react-native'
import commonStyles, {colors} from '../Styles/commonStyles'
import {SafeAreaView} from 'react-navigation'

export default class MKBasePage extends Component {

    constructor(props) {
        super(props)

    }

    render(page) {
        return (
            <SafeAreaView style={[commonStyles.container, {backgroundColor:colors.pageBackgroundColor}]}>
                {page}
            </SafeAreaView>
        );
    }

}