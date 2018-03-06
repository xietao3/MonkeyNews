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
    TabBarIOS,
} from 'react-native';

import layout from '../Config/MKLayoutConstants'
import {HomeNavigator, CategoryNavigator, UserCenterNavigator} from './MKNavigator'

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
};

export default class MKTabBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedTab: tabBarConfig.home.selected
        };

    }

    _renderTabBarItem(tabBarConfigItem, page) {
        return (
            <TabBarIOS.Item
                style={{marginBottom:layout.tabBarHeight}}
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
               {this._renderTabBarItem(tabBarConfig.home, (<HomeNavigator />))}
               {this._renderTabBarItem(tabBarConfig.category, (<CategoryNavigator />))}
               {this._renderTabBarItem(tabBarConfig.user, (<UserCenterNavigator />))}
           </TabBarIOS>
        );

    }
}

