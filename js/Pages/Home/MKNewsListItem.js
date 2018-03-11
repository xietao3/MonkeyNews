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
    Text,
    TouchableOpacity,
} from 'react-native';
import {Line} from '../../Common/MKCommonComponents';

export default class MKNewsListItem extends Component {
    constructor (props) {
        super(props);
    }

    _clickItem = () => {
        this.props.onPressItem(this.props.title);
    };

    render() {

        return (

            <TouchableOpacity
                onPress={this._clickItem}
            >
                <View style={[styles.container, {height:100}]}>
                    <Text style={[{height:50}]}>
                        {this.props.title}
                    </Text>
                </View>
                <Line
                    xietao={this.props.id===6}
                />
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});