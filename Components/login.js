import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, Dimensions, TouchableOpacity } from "react-native";
import MotoImage from '../asset/moto.png' // Image bike
import ArrowLogin from '../asset/arrow.png' // Image arrow down
import Eye from '../asset/eye.png' // Image eye show password

var maxwidth = Dimensions.get("screen").width; // width full screen
var maxHeight = Dimensions.get("screen").height; // height full screen
export default class ScreenLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.header_imgmoto} source={MotoImage} />
                </View>
                <View style={styles.body}>
                    <View style={styles.body_warpform}>
                        <Text style={styles.txt_title}>Đăng Nhập</Text>
                        <View style={styles.warpform_warpregis} >
                            <Text style={styles.txt_regis}>Chưa có tài khoản? </Text>
                            <Text style={styles.txt_regisnow}>Đăng ký ngay</Text>
                        </View>
                        <TextInput style={styles.ip_account} placeholder='Tên đăng nhập'></TextInput>
                        <View style={styles.warpform_warppassword}>
                            <TextInput style={styles.ip_account} placeholder='mật khẩu'></TextInput>
                            <Image style={styles.img_eye} source={Eye} />
                        </View>
                        <View style={styles.btn_login} >
                            <Image style={styles.img_arrowlogin} source={ArrowLogin} />
                        </View>
                        <Text style={styles.txt_regis}>Quên mật khẩu</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BAA5CE',
    },
    header: {
        paddingTop: 10,
        zIndex: 2,
        flex: 0.4,
        alignItems: 'center',
        backgroundColor: '#BAA5CE'
    },
    header_imgmoto: {
        height: maxHeight * 0.4,
        resizeMode: "contain",
    },
    body: {
        alignItems: "center",
        flex: 0.6,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 50,
    },
    body_warpform: {
        paddingTop: 10,
        justifyContent: "space-evenly",
        width: maxwidth / 1.2,
        flex: 0.9,
        alignItems: "center",
        marginHorizontal: 20,
    },
    txt_title: {
        fontFamily: "Helvetica Neue",
        fontSize: 24,
        color: "#360C5E",
        fontWeight: "bold",
    },
    warpform_warpregis: {
        flexDirection: "row",
        alignItems: "center",
    },
    txt_regis: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#360C5E",
        fontWeight: "normal",
    },
    txt_regisnow: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#360C5E",
        fontWeight: "normal",
        textDecorationLine: "underline",
    },
    ip_account: {
        borderRadius: 8,
        height:45,
        marginTop: 10,
        backgroundColor: "#F4F4F4",
        width: maxwidth / 1.2,
    },
    warpform_warppassword: {
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
    },
    img_eye: {
        right: 10,
        position: "absolute",
    },
    btn_login:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#360C5E",
        width: maxwidth / 1.2,
        height:45,
        borderRadius:8,
    }
});