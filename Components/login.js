import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import MotoImage from '../assets/images/moto.png' // Image bike
import ArrowLogin from '../assets/images/arrow.png' // Image arrow down
import Eye from '../assets/images/eye.png' // Image eye show password
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

var maxwidth = Dimensions.get("screen").width; // width full screen
var maxHeight = Dimensions.get("screen").height; // height full screen
export default class ScreenLogin extends Component {
    render() {
        return (
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.header_imgmoto} source={MotoImage} />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.txt_title}>Đăng Nhập</Text>
                        <View style={styles.warpform_warpregis} >
                            <Text style={styles.txt_regis}>Chưa có tài khoản? </Text>
                            <Text style={styles.txt_regisnow}>Đăng ký ngay</Text>
                        </View>
                        <TextInput style={styles.ip_account} placeholder='Tên đăng nhập'></TextInput>
                        <View style={styles.warpform_warppassword}>
                            <TextInput style={styles.ip_account} secureTextEntry={true} placeholder='mật khẩu'></TextInput>
                            <Image style={styles.img_eye} source={Eye} />
                        </View>
                        <View style={styles.btn_login} >
                            <Image style={styles.img_arrowlogin} source={ArrowLogin} />
                        </View>
                        <Text style={styles.txt_regis}>Quên mật khẩu</Text>

                    </View>
                </ScrollView>
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
        flex: 0.4,
        alignItems: 'center',
        backgroundColor: '#BAA5CE'
    },
    header_imgmoto:{
        top:20,
    },
    body: {
        zIndex: -1,
        alignItems:"center",
        flex: 0.6,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 50,
    },
    txt_title: {
        marginTop:30,
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
        marginTop: 10,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#360C5E",
        fontWeight: "normal",
    },
    txt_regisnow: {
        marginTop: 10,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#360C5E",
        fontWeight: "normal",
        textDecorationLine: "underline",
    },
    ip_account: {
        marginHorizontal:20,
        borderRadius: 8,
        height: 45,
        width:maxwidth/1.2,
        marginTop: 20,
        backgroundColor: "#F4F4F4",
    },
    warpform_warppassword: {
        flexDirection: "row",
    },
    img_eye: {
        right: 25,
        top: 30,
        position: "absolute",
    },
    btn_login: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#360C5E",
        width: maxwidth / 1.2,
        height: 45,
        borderRadius: 8,
    }
});