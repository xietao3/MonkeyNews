/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, { Component } from 'react';
import commonStyles, {colors} from '../Styles/commonStyles'
import {SafeAreaView} from 'react-navigation'

export default class MKBasePage extends Component {

    // static navigationOptions = ({ navigation }) => {
    //     const { params } = navigation.state;
    //
    //     return {
    //         headerTitle: '热点',
    //     };
    // };

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