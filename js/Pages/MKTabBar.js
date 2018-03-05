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
    StyleSheet,
    TabBarIOS,
    View,
    Text
} from 'react-native';
// import MKText from '../Config/MKText';
// import MKColor from '../Config/MKColor'


const HomeTab = 'homeTab'
const CategoryTab = 'CategoryTab'
const UserTab = 'UserTab'

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedTab: HomeTab
        };

    }

    _renderContent (color: string, pageText: string) {
        return (
            <View style={[styles.tabContent, {backgroundColor:color}]}>
            <Text style={styles.tabText}>{pageText}</Text>
            {/*<Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>*/}
            </View>
        );
    }


    render() {
        return (
           <TabBarIOS>
               <TabBarIOS.Item
                   title="热点"
                   icon={require('../../src/home.png')}
                   selected={this.state.selectedTab === HomeTab}
                   onPress={() => {
                       this.setState({
                           selectedTab: HomeTab,
                       });
                   }}
               >
                   {this._renderContent("#ff0000","home")}
               </TabBarIOS.Item>
           </TabBarIOS>
        );

    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});
