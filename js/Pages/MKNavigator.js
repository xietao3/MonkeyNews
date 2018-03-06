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


const HomeNavigator = StackNavigator (
    {
        home: {
            screen: MKHomePage,
        },
        category: {
            screen: MKCategoryPage,
        },
        userCenter: {
            screen: MKUserCenterPage,
        }

    },
    {
        initialRouteName :'home'
    }
);

const CategoryNavigator = StackNavigator ({
    category: {
        screen: MKCategoryPage,
    },
}, {
    initialRouteName :'category'
});

const UserCenterNavigator = StackNavigator ({
    userCenter: {
        screen: MKUserCenterPage,
    }
}, {
    initialRouteName :'userCenter'
});

export default { HomeNavigator, CategoryNavigator, UserCenterNavigator }
