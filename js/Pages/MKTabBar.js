/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    TabBarIOS,
    View,
    Text
} from 'react-native';
// import MKText from '../Config/MKText';
// import MKColor from '../Config/MKColor'


const tabBarConfig = {
    home: {
        name:"热点",
        icon:require('../../src/home.png'),
        selected:'HomeTab'
    },
    category: {
        name:"分类",
        icon:require('../../src/home.png'),
        selected:'CategoryTab'
    },
    user: {
        name:"个人中心",
        icon:require('../../src/home.png'),
        selected:'UserTab'
    }
}

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedTab: tabBarConfig.home.selected
        };

    }

    _renderContent (color: string, pageText: string) {
        return (
            <View style={[styles.tabContent, {backgroundColor:color}]}>
            <Text style={styles.tabText}>{pageText}</Text>
            {/*<Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>*/}
            </View>
        );
    }

    _renderTabBarItem(tabBarConfigItem, page) {
        return (
            <TabBarIOS.Item
                title={tabBarConfigItem.name}
                icon={tabBarConfigItem.icon}
                selected={this.state.selectedTab === tabBarConfigItem.selected}
                onPress={() => {
                    this.setState({
                        selectedTab: tabBarConfigItem.selected,
                    });
                }}
            >
                {page}
            </TabBarIOS.Item>
        );
    }


    render() {
        return (
           <TabBarIOS>
               {this._renderTabBarItem(tabBarConfig.home, (
                   <View style={[styles.tabContent, {backgroundColor:'#ff0000'}]}>
                       <Text style={styles.tabText}>diddsdasds</Text>
                   </View>
               ))}


               {/*{this._renderTabBarItem(tabBarConfig.home, this._renderContent("#ff0000","home"))}*/}
               {this._renderTabBarItem(tabBarConfig.category, this._renderContent("#00ff00","分类页面"))}
               {this._renderTabBarItem(tabBarConfig.user, this._renderContent("#ff00ff","个人中心页面"))}
           </TabBarIOS>
        );

    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});
