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

import {layout} from '../Config/MKConstants'
import {HomeNavigator, CategoryNavigator, UserCenterNavigator} from './MKNavigator'

const tabBarConfig = [
    {
        name:"热点",
        icon:require('../../src/home.png'),
        selected:'HomeTab',
        rootPage:(<HomeNavigator />),
    },
    {
        name:"分类",
        icon:require('../../src/category.png'),
        selected:'CategoryTab',
        rootPage:(<CategoryNavigator />),
    },
    {
        name:"个人中心",
        icon:require('../../src/usercenter.png'),
        selected:'UserTab',
        rootPage:(<UserCenterNavigator />),
    }
];

export default class MKTabBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedTab: tabBarConfig[0].selected
        };

    }

    _renderTabBarItem(tabBarConfigItem) {
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
                {tabBarConfigItem.rootPage}
            </TabBarIOS.Item>
        );
    }


    render() {
        return (
           <TabBarIOS>
               {
                   tabBarConfig.map((tabBarItem) => this._renderTabBarItem(tabBarItem))
               }
           </TabBarIOS>
        );

    }
}

