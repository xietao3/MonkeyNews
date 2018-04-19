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
    FlatList,
    StyleSheet,
} from 'react-native';
import MKServices from '../../Services/MKServices';
import MKBasePage from '../MKBasePage';
import NewsListItem from '../../Common/MKNewsListItem';
import {Line} from '../../Common/MKCommonComponents';
import ThemeListItem from '../../Common/MKThemeListItem';

export default class MKThemeDetailPage extends MKBasePage {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            headerTitle: params.theme.name,
            tabBarVisible: false,
        }
    };

    constructor(props) {
        super(props);
        const params = this.props.navigation.state.params;

        this.state = {
            theme:params.theme,
            stories:[],
        };
    }

    componentDidMount() {
        this.getNewestThemeDetail();
    };

    componentWillUnmount(){
        this.setState = ()=>{
            return null;
        };
    };

    getNewestThemeDetail() {
        this.startLoading({
            refreshing: true,
        });
        MKServices.requestThemeDetail(this.state.theme.id,null).then((responseData) => {

            // 请求最新新闻
            this.stopLoading({
                stories: responseData.stories,
                refreshing: false,
            });

        }).catch((error) => {
            this.requestFailure();
            console.log(error);
        });
    };

    getMoreThemeDetail(lastId) {

        MKServices.requestThemeDetail(this.state.theme.id,lastId).then((responseData) => {
            // 加载更多新闻
            let tempData = this.state.stories;
            tempData = tempData.concat(responseData.stories);
            this.setState({stories: tempData,})


        }).catch((error) => {
            this.requestFailure();
            console.log(error);
        });
    };

    renderItem({item}) {
        return (
            <NewsListItem
                id={item.id}
                onPressItem={() => {
                    this.props.navigation.navigate('newsDetail',{newsId:item.id})
                }}
                item={item}
            />
        );
    }

    placeholderOnRefresh() {
        this.getNewestThemeDetail();
    }

    render () {
        if (this.state.stories.length > 0) {
            return super.render(
                <FlatList
                    style={[styles.listView]}
                    data={this.state.stories}
                    keyExtractor={(item) => {return (item.id + '')}}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent={Line}
                    ListHeaderComponent={(
                        <ThemeListItem
                            id={this.state.theme.id}
                            onPress={() => {
                                this.props.navigation.navigate('themeDetail',{theme:this.state.theme.id})
                            }}
                            item={this.state.theme}
                        />
                    )}
                    onEndReachedThreshold={0.1}
                    onEndReached={this.getMoreThemeDetail.bind(this,this.state.stories[this.state.stories.length-1].id)}
                    onRefresh={this.getNewestThemeDetail.bind(this)}
                    refreshing={this.state.refreshing}
                />
            );
        }else {
            return super.render(null);
        }
    }
}

const styles = StyleSheet.create({
    listView: {
        flex:1,
    },
});
