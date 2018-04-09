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
    Image,
} from 'react-native';

import {layout} from '../Config/MKConstants'
import {HomeNavigator, CategoryNavigator, UserCenterNavigator} from './MKNavigator'
import { TabNavigator, TabBarBottom } from 'react-navigation';

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

export default TabNavigator(
    {
        首页: {
            screen: HomeNavigator,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Image source={require('../../src/home.png')} />;
                },
            })
        },
        分类: {
            screen: CategoryNavigator,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Image source={require('../../src/category.png')} />;
                },
            })

        },
        个人中心: {
            screen: UserCenterNavigator,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Image source={require('../../src/usercenter.png')} />;
                },
            })
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {

            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

