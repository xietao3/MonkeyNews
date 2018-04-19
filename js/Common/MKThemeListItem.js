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
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import MKImage from './MKImage';

export default class MKThemeListItem extends Component {
    constructor (props) {
        super(props);
    }

    _clickItem = () => {
        this.props.onPress();
    };

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this._clickItem}
                style={styles.Button}
            >
                <View style={styles.container}>
                    <MKImage
                        source={{uri:this.props.item.thumbnail}}
                        style={styles.image}
                    />
                    <Text style={styles.title}>
                        {this.props.item.name}
                    </Text>

                    <Text style={styles.description}>
                        {this.props.item.description}
                    </Text>

                </View>

            </TouchableWithoutFeedback>

        );
    }
}

const descriptionWidth = Dimensions.get('window').width-20;

const styles = StyleSheet.create({
    Button: {
        flex:1,
        height:150,
    },
    container: {
        flex:1,
        height:150,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    title: {
        backgroundColor:'transparent',
        color:'#ffffff',
        textShadowColor:'#000000',
        textShadowOffset:{width:0.5,height:0.5},
        textShadowRadius:2.0,
        fontSize: 25,
        fontWeight: 'bold',
        height:50,
    },
    description: {
        backgroundColor:'transparent',
        color:'#ffffff',
        textShadowColor:'#000000',
        textShadowOffset:{width:0.5,height:0.5},
        textShadowRadius:2.0,
        fontSize: 17,
        fontWeight: 'bold',
        width:descriptionWidth,
    },
    image: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
});