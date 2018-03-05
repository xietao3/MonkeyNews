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

import MKHomePage from './Home/MKHomePage'
import MKCategoryPage from './Category/MKCategoryPage'
import MKUserCenterPage from './UserCenter/MKUserCenterPage'

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
               {this._renderTabBarItem(tabBarConfig.home, (<MKHomePage/>))}
               {this._renderTabBarItem(tabBarConfig.category, (<MKCategoryPage/>))}
               {this._renderTabBarItem(tabBarConfig.user, (<MKUserCenterPage/>))}
           </TabBarIOS>
        );

    }
}

