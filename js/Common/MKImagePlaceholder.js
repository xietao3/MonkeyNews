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
    Text,
} from 'react-native';

export  default class extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        if (this.props.finished) {
            return null;
        }else {
            return (
                <Text>
                    loading...
                </Text>
            );
        }
    }
}