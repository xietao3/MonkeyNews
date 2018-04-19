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

import MKBasePage from '../MKBasePage';
import MKServices from '../../Services/MKServices';
import ThemeListItem from '../../Common/MKThemeListItem';

export default class MKCategoryPage extends MKBasePage {
    static navigationOptions = {
        headerTitle: '频道'
    };

    constructor(props) {
        super(props);
        this.state = {
            themeList:[],
        }

    }

    componentDidMount() {
        this.getThemeList();
    };

    componentWillUnmount(){
        this.setState = ()=>{
            return null;
        };
    };

    getThemeList() {
        this.startLoading();

        MKServices.requestThemeList().then((responseData) => {
            console.log(responseData);
            this.setState ({themeList: responseData.others});
            this.stopLoading();

        }).catch((error) => {
            this.requestFailure();
            console.log(error);
        });
    };

    renderItem({item}) {
        return (
            <ThemeListItem
                id={item.id}
                onPress={() => {
                    alert('item');
                    // this.props.navigation.navigate('newsDetail',{newsId:item.id})
                }}
                item={item}
            />
        );
    }

    render() {

        return super.render(
            <FlatList
                style={[styles.listView]}
                data={this.state.themeList}
                extraData={this.state}
                keyExtractor={(item) => {return (item.id + '')}}
                renderItem={this.renderItem.bind(this)}
            />
        );

    };
}

const styles = StyleSheet.create({
    listView: {
        flex:1,
    },
});
