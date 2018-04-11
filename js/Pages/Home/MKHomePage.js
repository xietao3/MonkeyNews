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
    SectionList,
} from 'react-native';

import MKBasePage from '../MKBasePage';
import ListItem from '../../Common/MKNewsListItem';
import MKNewsSection from '../../Common/MKNewsSection';
import MKServices from '../../Services/MKServices';
import MKSwiper from '../../Common/MKSwiper';
// import {layout} from "../../Config/MKConstants";

export default class MKHomePage extends MKBasePage {
    static navigationOptions = {
        headerTitle: '今日热点',
    };
    constructor (props) {
        super(props);
        this.state = {
            sections:[],
            rotations:[],
            lastDate:0,
            refreshing:false,
        }
    };

    componentDidMount() {
        this._getNewestNews();
    };

    _getNewestNews() {
        this.setState({refreshing: true,});

        MKServices.requestNewestNews().then((responseData) => {
            let tempData = [{
                key:100,
                data:responseData.stories
            }];
            this.setState({
                sections: tempData,
                rotations: responseData.top_stories,
                lastDate: responseData.date,
                refreshing: false,
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    _getMoreNews() {

        MKServices.requestBeforeNews(this.state.lastDate).then((responseData) => {
            let tempData = this.state.sections;
            tempData.push({
                key:responseData.date,
                data:responseData.stories
            });
            this.setState({
                sections: tempData,
                lastDate: responseData.date,
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    _renderItem ({item}) {
        return (
            <ListItem
                id={item.id}
                onPressItem={(title) => {
                    alert('click ite'+title);
                }}
                title={item.title}
                item={item}
            />
        );
    };


    render () {
        if (this.state.sections.length > 0) {
            return super.render(
                <SectionList
                    renderSectionHeader={(info)=>{return(<MKNewsSection section={info.section} />)}}
                    style={[styles.listView]}
                    sections={this.state.sections}
                    ListHeaderComponent={(<MKSwiper stories={this.state.rotations} />)}
                    renderItem={this._renderItem.bind(this)}
                    keyExtractor={(item)=>{return(item.id+'')}}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._getMoreNews.bind(this)}
                    onRefresh={this._getNewestNews.bind(this)}
                    refreshing= {this.state.refreshing}
                />
            );

        }else {
            return null;
        }

    };

}

const styles = StyleSheet.create({
    listView: {
        flex:1,
    },

});