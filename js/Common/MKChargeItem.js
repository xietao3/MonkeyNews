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
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class MKChangeItem extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.Button,{marginLeft:this.props.index===0?10:0}]}
            >
                <View style={styles.container}>

                    <Text style={styles.title}>
                        {'￥'+this.props.item.value}
                    </Text>

                    <Text style={styles.description}>
                        {'送'+this.props.item.send}
                    </Text>

                </View>
            </TouchableOpacity>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center'
    },
    Button: {
        marginTop:10,
        marginRight:10,
        width:120,
        height:70,
        backgroundColor:'orange',
        borderRadius:8,
        shadowOpacity:0.3,
        shadowColor:'black',
        shadowRadius:1,
        shadowOffset:{width:1, height:1}
    },
    item: {
        flex:1,
        height:70,
        flexDirection:'row',
    },
    title: {
        color:'white',
        marginLeft:10,
        fontSize:24
    },
    description: {
        color:'white',
        marginLeft:14,
        marginTop:2,
        fontSize:16
    },
});