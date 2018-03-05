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
    Platform,
} from 'react-native';

export const instructions = '\nTo get started, edit App.js\n'+
    Platform.select({
    ios: 'Press Cmd+R to reload,xietao123\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const welcome = 'Welcome to React Native!';

