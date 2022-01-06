import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import ShipImage from '../assets/images/moto.png';
import ArrowDown from '../assets/images/arrowdown.png';
import Eye_off from '../assets/images/view.png';
import Restriction from '../assets/images/restriction.png';

export default class RegistrationUser extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.img_ship} source={ShipImage} />
                </View>
                <View style={styles.body}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.txt_title}>Đăng Ký</Text>
                        <View style={styles.warp_link_res}>
                            <Text style={styles.txt_already_user}>Đã có tài khoản? </Text>
                            <Text style={styles.txt_link_resnow}>Đăng ký ngay</Text>
                        </View>
                    </View>

                    <View style={styles.txp_info_input}><TextInput placeholder="Tên nhà hàng" /></View>
                    <View style={styles.txp_info_input}><TextInput placeholder="Số điện thoại" /></View>
                    <View style={styles.txp_info_input}>
                        <TextInput placeholder="Loại nhà hàng" />
                        <Image style={styles.img_icon} source={ArrowDown} />
                    </View>
                    <View style={styles.txp_info_input}><TextInput placeholder="Kiểu nhà hàng" /></View>
                    <View style={styles.txp_info_input}><TextInput placeholder="Email" /></View>
                    <View style={styles.txp_info_input}><TextInput placeholder="Địa chỉ" /></View>
                    <View style={styles.txp_info_input}>
                        <TextInput secureTextEntry={true} placeholder="Mật khẩu" />
                        <Image style={styles.img_icon} source={Eye_off} />
                    </View>
                    <View style={styles.txp_info_input}>
                        <TextInput secureTextEntry={true} placeholder="Nhập lại mật khẩu" />
                        <Image style={styles.img_icon} source={Restriction} />
                    </View>
                    <View style={styles.btn_submit}>
                            <Text style={styles.txt_submit}>Đăng Ký</Text>
                        </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#DBC2DC",
        },
        header: {
            alignItems: "center",
            flex: 0.2,
        },
        img_ship: {
            top:20,
            resizeMode: "stretch",
        },
        body: {
            zIndex: -1,
            flex: 0.8,
            borderTopLeftRadius: 50,
            backgroundColor: "#ffffff",
        },
        txt_title: {
            marginTop: 30,
            fontFamily: "Helvetica Neue",
            fontSize: 24,
            fontWeight: "bold",
            color: "#360C5E",
        },
        warp_link_res: {
            marginVertical: 10,
            flexDirection: "row",

        },
        txt_already_user: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
        },
        txt_link_resnow: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            textDecorationLine: "underline",
        },
        txp_info_input: {
            paddingLeft: 20,
            marginHorizontal: 20,
            marginTop: 10,
            height: 45,
            borderRadius: 8,
            backgroundColor: "#F4F4F4",
        },
        img_icon: {
            position: "absolute",
            top: 20,
            right: 20,
        },
        btn_submit:{
            justifyContent:"center",
            alignItems:"center",
            marginTop:10,
            marginBottom:10,
            height:45,
            borderRadius:8,
            backgroundColor:"#360C5E",
            marginHorizontal:20,
        },
        txt_submit:{
            fontFamily:"Helvetica Neue",
            fontSize:18,
            color:"white",
            fontWeight:"bold",
        }

    }
)