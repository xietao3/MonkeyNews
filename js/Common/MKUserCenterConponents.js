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
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import MKChangeItem from './MKChargeItem';

export class MKUserCenterHeaderView extends Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            // 顶部用户信息
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    resizeMode="cover"
                    source={require('../../src/user.png')} />
                <View style={styles.usernameView}>
                    <Text style={styles.username}>xietao3</Text>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonTitle}>签到送好礼</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export class MKUserCenterWalletView extends Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            // 钱包信息
            <View style={styles.walletView}>
                <View style={styles.walletSubView}>
                    <Text style={styles.walletSubTitle}>积分</Text>
                    <Text style={styles.walletSubVaule}>53</Text>

                </View>
                <View style={styles.walletSubView}>
                    <Text style={styles.walletSubTitle}>余额</Text>
                    <Text style={styles.walletSubVaule}>888</Text>
                </View>
                <View style={styles.walletSubView}>
                    <Text style={styles.walletSubTitle}>优惠券</Text>
                    <Text style={styles.walletSubVaule}>3</Text>
                </View>
                <View style={styles.walletSubView}>
                    <Text style={styles.walletSubTitle}>礼品</Text>
                    <Text style={styles.walletSubVaule}>3</Text>
                </View>
            </View>
        );
    }
}

export class MKUserCenterOrderView extends Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            // 订单信息
            <View style={styles.orderView}>
                // 内部背景
                <View style={styles.orderSubView}>
                    // 全部订单
                    <View style={styles.orderHeaderView}>
                        <Text style={styles.orderTitle}>我的订单</Text>
                        <Text style={styles.orderContent}>全部订单 ></Text>
                    </View>

                    // 状态订单
                    <View style={styles.orderBottomView}>
                        <TouchableOpacity style={styles.walletSubView}>
                            <Image style={styles.orderStatusImage} resizeMode="cover" source={require('../../src/order1.png')} />
                            <Text style={styles.orderStatusTitle}>待付款</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.walletSubView}>
                            <Image style={styles.orderStatusImage} resizeMode="cover" source={require('../../src/order2.png')} />
                            <Text style={styles.orderStatusTitle}>待发货</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.walletSubView}>
                            <Image style={styles.orderStatusImage} resizeMode="cover" source={require('../../src/order3.png')} />
                            <Text style={styles.orderStatusTitle}>待收货</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.walletSubView}>
                            <Image style={styles.orderStatusImage} resizeMode="cover" source={require('../../src/order4.png')} />
                            <Text style={styles.orderStatusTitle}>待评价</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.walletSubView}>
                            <Image style={styles.orderStatusImage} resizeMode="cover" source={require('../../src/order5.png')} />
                            <Text style={styles.orderStatusTitle}>退换货</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

export class MKUserCenterChargeView extends Component {

    constructor (props) {
        super(props);
        this.state = {
            charges: [
                {value: 100,send:10},
                {value: 200,send:20},
                {value: 300,send:40},
                {value: 400,send:60},
                {value: 500,send:80},
            ],

        }
    }

    renderItem = ({item,index})=> {
        return (
            <MKChangeItem
                id={item.value}
                item={item}
                index={index}
            />
        );
    };

    render () {
        return (
            // 充值信息
            <View style={styles.chargeView}>
                // 全部订单
                <View style={styles.orderHeaderView}>
                    <Text style={styles.chargeTitle}>充值有礼</Text>
                    <Text style={styles.orderContent}>充值中心 ></Text>
                </View>
                <FlatList
                    style={[styles.chargeListView]}
                    data={this.state.charges}
                    keyExtractor={(item) => {return (item.value + '')}}
                    renderItem={this.renderItem.bind(this)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        );
    }
}

const SettingTool = props =>{
    return (
        <TouchableOpacity style={styles.toolItem}>
            <Image style={styles.toolImage} resizeMode="cover" source={props.source} />
            <Text style={styles.toolTitle}>{props.title}</Text>
        </TouchableOpacity>
    )
};

export class MKUserCenterToolView extends Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            // 钱包信息
            <View style={styles.toolView}>
                <View style={styles.toolHeaderView}>
                    <View style={styles.orderHeaderView}>
                        <Text style={styles.toolHeaderTitle}>便捷工具</Text>
                    </View>
                </View>
                <View style={styles.toolBottonView}>
                    <SettingTool source={require('../../src/order1.png')} title={'会员中心'}/>
                    <SettingTool source={require('../../src/order2.png')} title={'我的收藏'}/>
                    <SettingTool source={require('../../src/order3.png')} title={'分享返利'}/>
                    <SettingTool source={require('../../src/order4.png')} title={'邮费特权'}/>
                    <SettingTool source={require('../../src/order5.png')} title={'智能魔盒'}/>
                    <SettingTool source={require('../../src/order1.png')} title={'卡券中心'}/>
                    <SettingTool source={require('../../src/order2.png')} title={'企业福利'}/>
                    <SettingTool source={require('../../src/order3.png')} title={'企业购'}/>
                    <SettingTool source={require('../../src/order4.png')} title={'我的发票'}/>
                    <SettingTool source={require('../../src/order5.png')} title={'在线客服'}/>
                    <SettingTool source={require('../../src/order1.png')} title={'收货地址'}/>
                    <SettingTool source={require('../../src/order2.png')} title={'我的吐槽'}/>
                    <SettingTool source={require('../../src/order3.png')} title={'线下门店'}/>
                    <SettingTool source={require('../../src/order1.png')} title={'设置'}/>
                </View>
            </View>
        );
    }
}

const toolItemWidth = (Dimensions.get('window').width-20)/5.0;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        height:80,
        flexDirection:'row',
        backgroundColor:'#eeeeee'

    },
    avatar:{
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        height:60,
        width:60,
        borderRadius:30,

    },
    usernameView: {
        flex:1,
        marginLeft:10,
    },
    username: {
        height:14,
        fontSize:14,
        marginTop:20,
        color:'#3a3a3a'
    },
    signUpButton: {
        marginTop:10,
        width:80,
        height:20,
        backgroundColor:"#ff8000",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    signUpButtonTitle: {

        backgroundColor:"#ff8000",
        color:"white",
        fontSize:12,
    },
    // 钱包
    walletView: {
        height:60,
        flexDirection:'row',
        backgroundColor:'#eeeeee'
    },
    walletSubView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    walletSubTitle: {
        height:20,
        color:'#3a3a3a',
    },
    walletSubVaule: {
        color:'#ff8000',
    },
    // 订单
    orderView: {
        backgroundColor:'#eeeeee',
        height:120,
    },
    orderSubView: {
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        marginRight:10,
        backgroundColor:'white',
        borderRadius:8,
        shadowRadius:2,
        shadowColor:'black',
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.3,
    },
    orderHeaderView: {
        flexDirection:'row',
        height:30,
        alignItems:'center',
    },
    orderTitle: {
        marginTop:10,
        marginLeft:10,
        color:'#3a3a3a',
        fontSize:16,
        fontWeight:'bold',
    },
    orderContent: {
        position:'absolute',
        top:10,
        right:10,
        color:'#878787',
    },
    orderBottomView: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    orderStatusTitle: {
        flex:1,
        color:'#3a3a3a',
        fontSize:12,
        marginTop:10,
    },
    orderStatusImage: {
        marginTop:15,
        height:20,
        width:20,
    },
    // 充值
    chargeView: {
        backgroundColor:'#ffffff',
        height:120,
    },
    chargeHeaderView: {
        flexDirection:'row',
        height:30,
        alignItems:'center',
    },
    chargeListView: {
        flex:1,
    },
    chargeTitle: {
        marginTop:10,
        marginLeft:20,
        color:'#3a3a3a',
        fontSize:16,
        fontWeight:'bold',
    },
    // 工具
    toolView: {
        margin:10,

    },
    toolHeaderView: {
        height:30,
    },
    toolHeaderTitle: {
        marginTop:10,
        marginLeft:10,
        color:'#3a3a3a',
        fontSize:16,
        fontWeight:'bold',
    },
    toolBottonView: {
        marginTop:10,
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    toolItem: {
        width:toolItemWidth,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    toolImage: {
        height:20,
        width:20,
    },
    toolTitle: {
        marginTop:10,
        color:'#3a3a3a',
        fontSize:12,
    }

});