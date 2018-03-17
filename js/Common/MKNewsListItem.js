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
        this.state = {
            imageLoading:true
        }
    }

    _clickItem = () => {
        this.props.onPressItem(this.props.title);
    };

    _renderPlaceholder() {
        if (this.state.imageLoading === true) {
            return(
                <Text style={styles.placeholder}>
                    loading...
                </Text>
            );
        }else {
            return null;
        }

    }

    render() {
        return (

            <TouchableWithoutFeedback
                onPress={this._clickItem}
            >
                <View style={styles.container}>
                    <View style={styles.item}>

                        <Text style={styles.title}>
                            {this.props.item.title}
                        </Text>

                        <ImageBackground
                            source={{uri:this.props.item.images[0]}}
                            style={styles.image}
                            onLoad={() => {
                                this.setState({imageLoading: false});
                            }}
                        >
                            {this._renderPlaceholder()}
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