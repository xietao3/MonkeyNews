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
    FlatList,
} from 'react-native'

import MKBasePage from '../MKBasePage'
import ListItem from './MKNewsListItem'
import MKServices from '../../Services/MKServices'

export default class MKHomePage extends MKBasePage {
    static navigationOptions = {
        headerTitle: '热点',
    };
    constructor (props) {
        super(props);
        this.state = {
            selected: (new Map(): Map<string, boolean>),
            data: [
                {title:'12345',
                    id:1},
                {title:'xietao3',
                    id:2},
                {title:'xietao4',
                    id:3},
                {title:'xietao5',
                    id:4},
                {title:'xietao6',
                    id:5},
                {title:'xietao7',
                    id:6},
            ]

        }
    };

    componentDidMount() {
        console.log('did mount');
        MKServices.requestHomeList().then((responseData) => {
            console.log(responseData);
            this.setState(() => {
                return {
                    data: responseData.stories,
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    _keyExtractor = (item, index) => item.id+'';

    _renderItem ({item}) {
        return (
            <ListItem
                id={item.id}
                onPressItem={(title) => {
                    alert('click ite'+title);
                }}
                selected={!!this.state.selected.get(item.id)}
                title={item.title}
            />
        );
    };

    render () {
        return super.render(
            <FlatList
                style={[styles.listView]}
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem.bind(this)}
            />
        );
    };

}

const styles = StyleSheet.create({
    listView: {
        flex:1,

    }
});