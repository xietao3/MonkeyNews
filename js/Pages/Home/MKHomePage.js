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
    Text,
} from 'react-native'

import MKBasePage from '../MKBasePage'
import ListItem from '../../Common/MKNewsListItem'
import MKServices from '../../Services/MKServices'
import MKSwiper from '../../Common/MKSwiper'
// import {layout} from "../../Config/MKConstants";

export default class MKHomePage extends MKBasePage {
    static navigationOptions = {
        headerTitle: '热点',
    };
    constructor (props) {
        super(props);
        this.state = {
            sections:[],
            rotations:[],
        }
    };

    componentDidMount() {
        this._getNewestNews();
    }

    _getNewestNews() {
        MKServices.requestHomeList().then((responseData) => {
            let tempData = this.state.sections;
            tempData = [{
                key:100,
                data:responseData.stories
            }];
            this.setState({
                sections: tempData,
                rotations: responseData.top_stories,
            });
        }).catch((error) => {
            console.log(error);
        });
    }



    static _renderHeader() {
        return (
            <MKSwiper />
        );
    }

    _renderSection = (info) => {
        let date = info.section.key;
        if (date !== 100) {
            return <Text
                style={{ height: 20, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
        }else {
            return null;
        }

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
    }

    _keyExtractor = (item, index) => item.id+'';

    render () {
        if (this.state.sections.length > 0) {
            return super.render(
                <SectionList
                    renderSectionHeader={this._renderSection}
                    style={[styles.listView]}
                    sections={this.state.sections}
                    ListHeaderComponent={MKHomePage._renderHeader()}
                    renderItem={this._renderItem.bind(this)}
                    keyExtractor={this._keyExtractor}
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
    }
});