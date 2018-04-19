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

    static requestNewestNews() {
        return MKBaseServices.request(APIConstants.latest_news_list_url);
    }

    static requestBeforeNews(date) {
        return MKBaseServices.request(APIConstants.news_list_url+date);
    }

    static requestNewsDetail(id) {
        return MKBaseServices.request(APIConstants.news_detail_url+id);
    }

    static requestThemeList() {
        return MKBaseServices.request(APIConstants.theme_list_url);
    }

    static requestThemeDetail(id, lastId) {
        if (lastId !== null) {
            return MKBaseServices.request(APIConstants.theme_url+id+'/before/'+lastId);
        }else {
            return MKBaseServices.request(APIConstants.theme_url+id);
        }
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
                    reject(error);
                });
        });
    }
}