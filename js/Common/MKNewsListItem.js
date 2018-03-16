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
    ImageBackground,
} from 'react-native';
import {Line} from './MKCommonComponents';

export default class MKNewsListItem extends Component {
    constructor (props) {
        super(props);
    }

    _clickItem = () => {
        this.props.onPressItem(this.props.title);
    };

    render() {
        const imageUri = this.props.images;
        console.log('xietao3'+imageUri);
        return (

            <TouchableWithoutFeedback
                onPress={this._clickItem}
            >
                <View style={styles.container}>
                    <View style={styles.item}>

                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>

                        <ImageBackground
                            source={{uri:imageUri}}
                            style={styles.image}
                        >
                            <Text style={styles.placeholder}>
                                loading...
                            </Text>
                        </ImageBackground>
                    </View>
                    <Line
                        hidden={this.props.id===6}
                    />
                </View>


            </TouchableWithoutFeedback>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    item: {
        flex:1,
        height:70,
        flexDirection:'row',
    },
    title: {
        flex:1,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        width:70,
        height:50,
        backgroundColor:'#bfbfbf',
    },
    placeholder: {
    }
});