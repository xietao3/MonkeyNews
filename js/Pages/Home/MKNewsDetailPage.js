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
    WebView,
    StyleSheet,
    View,
} from 'react-native';
import MKBasePage from '../MKBasePage';
import MKServices from '../../Services/MKServices';

export default class MKNewsDetailPage extends MKBasePage {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            headerTitle: params.title ? params.title : '新闻详情',
            tabBarVisible: false,
        }
    };



    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        const newsId = params ? params.newsId : '0';
        this.state= {
            newsId:newsId,
            detail:null,
        };
    }

    componentDidMount() {
        this.getNewsDetail();
    };

    componentWillUnmount(){
        this.setState = ()=>{
            return null;
        };
    }

    getNewsDetail() {
        this.startLoading();

        MKServices.requestNewsDetail(this.state.newsId).then((responseData) => {
            this.setState ({detail:responseData});
            this.props.navigation.setParams({title: this.state.detail.title});
            this.stopLoading();

        }).catch((error) => {
            this.requestFailure();
            console.log(error);
        });
    };

    placeholderOnRefresh() {
        this.getNewsDetail();
    }

    render() {

        if (this.state.detail !== null) {
            const script = 'document.getElementsByClassName(\'header-for-mobile\')[0].style.display="none";';

            return super.render(
                <View style={styles.contianer}>
                    <WebView
                        source= {{uri:this.state.detail.share_url}}
                        injectedJavaScript={script}
                    />
                </View>
            )
        }else {
            return super.render(null);
        }
    }
}

const styles = StyleSheet.create({
    contianer: {
        flex:1,
    },
});
