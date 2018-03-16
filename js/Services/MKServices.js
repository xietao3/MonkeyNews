/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, {Component} from 'react';
import APIConstants from './MKAPIConstants'

export default class MKServices {

    static requestHomeList() {
        return MKBaseServices.request(APIConstants.latest_news_list_url);
    }
}


class MKBaseServices {

    static request(reqUrl) {
        console.log('reqUrl', reqUrl);
        return new Promise((resolve, reject) => {
            fetch(reqUrl)
                .then((response) => response.json())
                .then((responseData) => {
                    //console.log(responseData);
                    resolve(responseData);
                })
                .catch((error) => {
                    console.error(error);
                    resolve(null);
                });
        });
    }
}