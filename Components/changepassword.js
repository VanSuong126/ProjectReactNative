import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Back from '../assets/images/back.png';
import ViewPass from '../assets/images/view.png';
import Restriction from '../assets/images/restriction.png';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

export default class ChangePass extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}}>
                <View style={styles.Comtainer}>
                    <Image source={Back} />
                    <View style={styles.form}>
                        <View style={styles.warp_title}>
                            <Text style={styles.title}>Quên Mật khẩu</Text>
                        </View>
                        <Text style={styles.lable}>Mật khẩu mới</Text>
                        <View style={styles.txt_input}>
                            <TextInput secureTextEntry={true} placeholder="********"/>
                            <Image style={styles.icon_right_textinput} source={ViewPass} />
                        </View>
                        <Text style={styles.lable}>Nhập lại mật khẩu</Text>
                        <View style={styles.txt_input}>
                            <TextInput value="sdsafsfasfsdf"/>
                            <Image style={styles.icon_right_textinput} source={Restriction} />
                        </View>
                        <View style={styles.btn_confirm}>
                            <Text style={styles.txt_confirm}>Xác Nhận</Text>
                        </View>
                    </View>


                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    Comtainer: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 20,
        backgroundColor: '#ffffff'
    },
    form: {
        paddingHorizontal: 20,
    },
    warp_title: {
        alignItems: "center",
    },
    title: {
        fontFamily: "Helvetica Neue",
        fontSize: 24,
        fontWeight: "bold",
        color: "#2E2E2E",
    },
    lable: {
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        color: "#2E2E2E",
    },
    txt_input: {
        flexDirection: "row",
        borderRadius: 8,
        alignItems: "flex-end",
        backgroundColor: "#F4F4F4",
        height: 45,
    },
    btn_confirm: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 8,
        backgroundColor: "#360C5E",
    },
    txt_confirm: {
        fontFamily: "Helvetica Neue",
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    icon_right_textinput: {
        position: "absolute",
        top: 12,
        right: 20,
    }
})