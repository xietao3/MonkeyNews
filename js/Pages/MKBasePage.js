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
        super(props);

        this.state = {
            isLoading: 1,
        }
    }

    startLoading() {
        this.setState({isLoading: 1});
    }

    stopLoading() {
        this.setState({isLoading: 0});
    }

    requestFailure() {
        this.setState({isLoading: -1});
    }


    render(page) {
        return (
            <SafeAreaView style={[commonStyles.container, {backgroundColor:colors.pageBackgroundColor}]}>
                {page}
            </SafeAreaView>
        );
    }

}