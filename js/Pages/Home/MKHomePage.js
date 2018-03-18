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
import ListItem from '../../Common/MKNewsListItem'
import MKServices from '../../Services/MKServices'
import MKSwiper from '../../Common/MKSwiper'
import {layout} from "../../Config/MKConstants";

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
                    images:['http:www.baidu.com','123'],
                    id:1}
            ]

        }
    };

    componentDidMount() {
        MKServices.requestHomeList().then((responseData) => {
            this.setState({data: responseData.stories,});
        }).catch((error) => {
            console.log(error);
        });
    }

    _keyExtractor = (item, index) => item.id+'';

    _renderHeader() {
        return (
            <MKSwiper />
        );
    }

    _renderItem ({item}) {

        return (
            <ListItem
                id={item.id}
                onPressItem={(title) => {
                    alert('click ite'+title);
                }}
                selected={!!this.state.selected.get(item.id)}
                title={item.title}
                item={item}
            />
        );
    }

    render () {
        return super.render(
            <FlatList
                style={[styles.listView]}
                data={this.state.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                ListHeaderComponent={this._renderHeader()}
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