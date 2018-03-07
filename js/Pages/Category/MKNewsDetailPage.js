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
    Button,
    Text
} from 'react-native';
import MKBasePage from '../MKBasePage';
import {colors} from "../../Styles/commonStyles";

export default class MKNewsDetailPage extends MKBasePage {

    static navigationOptions = {
        headerTitle: '新闻详情',
    };

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : '0';
        this.state= {
            itemId:itemId
        }
    }


    render() {
        return super.render(

            <View>
                <Text style={[colors.black,{marginTop:100}]}> {this.state.itemId} </Text>

                <Button
                    title='Go back'
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>

        );

    }


}