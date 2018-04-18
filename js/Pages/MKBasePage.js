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
import MKPlaceholderView from '../Common/MKPlaceholderView'

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
    };

    componentWillUnmount(){
        this.setState = ()=>{
            return null;
        };
    }

    startLoading() {
        this.setState({isLoading: 1});
    };

    stopLoading() {
        this.setState({isLoading: 0});
    };

    requestFailure() {
        this.setState({isLoading: -1});
    };

    setPlaceholderView(reloadEvent) {
        this.placeholderView = this.state.isLoading?<MKPlaceholderView isLoading={this.state.isLoading} reloadEvent={reloadEvent} />:null;
        return this.placeholderView;
    };

    placeholderOnRefresh() {
        console.log(this+'请在子类重写刷新函数');
    }

    render(page) {
        // 如果子类没有实现 placeholderView 则自动加入
        if (!this.placeholderView){this.noSetPlaceholderView = true}
        if (this.noSetPlaceholderView) {this.setPlaceholderView(this.placeholderOnRefresh.bind(this))}

        return (
            <SafeAreaView style={[commonStyles.container, {backgroundColor:colors.pageBackgroundColor}]}>
                {this.placeholderView}
                {page}
            </SafeAreaView>
        );
    }

}