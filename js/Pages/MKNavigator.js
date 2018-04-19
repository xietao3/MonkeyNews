/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'
import MKHomePage from './Home/MKHomePage'
import MKCategoryPage from './Category/MKCategoryPage'
import MKUserCenterPage from './UserCenter/MKUserCenterPage'
import MKNewsDetailPage from './Home/MKNewsDetailPage'

/**
 *页面列表
 */
const PageList = {
    home: { screen: MKHomePage },
    newsDetail: { screen: MKNewsDetailPage },
    category: { screen: MKCategoryPage },
    userCenter: { screen: MKUserCenterPage },
};

/**
 * 导航条配置
 */
const NavigatorConfig = (rootName:string) => {
    return {
        initialRouteName :rootName,
        navigationOptions: {
            headerBackTitle :null,
            headerTintColor: 'tomato',
        },
    }
};

/**
 * 首页导航
 */
export const HomeNavigator = StackNavigator (PageList, NavigatorConfig('home'));


/**
 * 分类导航
 */
export const CategoryNavigator = StackNavigator (PageList, NavigatorConfig('category'));


/**
 * 个人中心导航
 */
export const UserCenterNavigator = StackNavigator (PageList, NavigatorConfig('userCenter'));

