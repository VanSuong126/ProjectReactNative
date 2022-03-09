import React, { Component, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity } from 'react-native';

// import icon 
import Avatar from "../assets/images/avatar.png";
import IconBell from "../assets/images/bell.png";
import IconStar from "../assets/images/star.png";
import On_Food from "../assets/images/on_food.png";
import Icon_File from "../assets/images/icon_file.png";
import Icon_Money from "../assets/images/icon_money.png";
import Icon_Setting from "../assets/images/icon_setting.png";
import Icon_Clock_Change from "../assets/images/icon_clock_change.png";
import Icon_Logout from "../assets/images/icon_logout.png";
import Icon_Arrow_Right from "../assets/images/array_right.png";

// function change format Curency
import currencyFormat from "../plugin/CurencyFormat";

const Profile = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.header}>
                <View style={styles.warp_title}>
                    <Text style={styles.header_title}>Tài khoản của tôi</Text>
                    <Image style={styles.icon_bell} source={IconBell} />
                </View>
                <View style={styles.warp_banner}>
                    <View style={styles.circel_warp_banner}>
                        <Image source={Avatar}/>
                    </View>
                    <View style={styles.warp_info}>
                        <View style={styles.warp_ranking}>
                            <View style={styles.warp_ranking_star}>
                                <Image style={styles.icon_star} source={IconStar} />
                                <Text style={styles.txt_ranking}>4.9</Text>
                            </View>
                            <Text style={styles.name_shop}>Shop 10k </Text>
                        </View>
                        <View style={styles.warp_info_restaurent}>
                            <Text style={styles.txt_title_restaurent}>Mã nhà hàng:</Text>
                            <Text style={styles.txt_value_restaurent} >NH32865</Text>
                        </View>
                        <View style={styles.warp_info_restaurent}>
                            <Text style={styles.txt_title_restaurent}>Số dư trong ví:</Text>
                            <Text style={styles.txt_value_restaurent} >{currencyFormat(5000000)}</Text>
                        </View>
                        <View style={styles.warp_info_restaurent}>
                            <Text style={styles.txt_title_restaurent}>Trạng thái hoạt động:</Text>
                            <Image style={styles.img_value_restaurent} source={On_Food} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.body}>
                <View style={styles.warp_gen_info}>
                    <Text style={styles.title_gen_info}>Thông tin chung</Text>
                    <View style={styles.warp_info_body}>
                        <View style={styles.warp_icon}>
                            <Image style={styles.icon_info} source={Icon_File}/>
                            <Text style={styles.name_info}>Hồ sơ nhà hàng</Text>
                        </View>
                        <Image style ={styles.img_arrow_right}source={Icon_Arrow_Right}/>
                    </View>
                    <View style={styles.line_info}></View>
                    <View style={styles.warp_info_body}>
                        <View style={styles.warp_icon}>
                            <Image style={styles.icon_info} source={Icon_Money}/>
                            <Text style={styles.name_info}>Thông tin ví</Text>
                        </View>
                        <Image style ={styles.img_arrow_right}source={Icon_Arrow_Right}/>
                    </View>
                    
                </View>
                <View style={styles.line}></View>
                <View style={styles.warp_gen_info}>
                    <Text style={styles.title_gen_info}>Tài khoản</Text>
                    <View style={styles.warp_info_body}>
                        <View style={styles.warp_icon}>
                            <Image style={styles.icon_info} source={Icon_Setting}/>
                            <Text style={styles.name_info}>Cập nhật tài khoản</Text>
                        </View>
                        <Image style ={styles.img_arrow_right}source={Icon_Arrow_Right}/>
                    </View>
                    <View style={styles.line_info}></View>
                    <View style={styles.warp_info_body}>
                        <View style={styles.warp_icon}>
                            <Image style={styles.icon_info} source={Icon_Clock_Change}/>
                            <Text style={styles.name_info}>Đổi mật khẩu</Text>
                        </View>
                        <Image style ={styles.img_arrow_right}source={Icon_Arrow_Right}/>
                    </View>
                    <View style={styles.line_info}></View>
                    <View style={styles.warp_info_body}>
                        <View style={styles.warp_icon}>
                            <Image style={styles.icon_info} source={Icon_Logout}/>
                            <Text style={styles.name_info}>Đăng xuất</Text>
                        </View>
                        <Image style ={styles.img_arrow_right}source={Icon_Arrow_Right}/>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Profile
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        marginHorizontal: 20,
        paddingBottom: 10,
    },
    warp_title: {
        marginTop: 10,
        flexDirection: "row",
    },
    header_title: {
        fontFamily: "Helvetica Neue",
        fontSize: 24,
        fontWeight: "bold",
        color: "#2E2E2E",

    },
    icon_bell: {
        position: "absolute",
        right: 10,
        top: 5,
    },
    warp_info: {
        flex: 1,
        marginLeft: 20,
    },
    warp_banner: {
        flexDirection: "row",
        marginTop: 10,
    },
    circel_warp_banner: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "#FFF",
        borderColor: "#F5F6F7",
        borderWidth: 1,
    },
    warp_ranking: {
        flexDirection: "row",
    },
    warp_ranking_star: {
        flexDirection: "row",
        backgroundColor: "#F2CA00",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 8,
    },
    icon_star: {
        position: "relative",
        top: 5,
        left: 2,
    },
    txt_ranking: {
        marginLeft: 5,
        fontFamily: "Helvetica Neue",
        color: "#FFF",
        fontSize: 14,
    },
    name_shop: {
        paddingLeft: 10,
        fontFamily: "Helvetica Neue",
        color: "#2E2E2E",
        fontSize: 14,
    },
    warp_info_restaurent: {
        marginTop: 5,
        flexDirection: "row",
    },
    txt_title_restaurent: {
        fontFamily: "Helvetica Neue",
        color: "#2E2E2E",
        fontSize: 14,
    },
    txt_value_restaurent: {
        position: "absolute",
        right: 5,
        fontFamily: "Helvetica Neue",
        color: "#2E2E2E",
        fontSize: 14,
    },
    img_value_restaurent:{
        position: "absolute",
        right: 5,
    },
    line: {
        height: 8,
        backgroundColor: "#F5F6F7",
    },
    body: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    warp_gen_info: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title_gen_info: {
        fontFamily: "Helvetica Neue",
        color: "#7B7B7B",
        fontSize: 14,
        fontWeight: "bold",
    },
    warp_info_body:{
        marginVertical:10,
        flexDirection:"row",
    },
    warp_icon:{
        marginTop:10,
        flexDirection:"row",
    },
    name_info:{
        paddingLeft:20,
        fontFamily: "Helvetica Neue",
        color: "#7B7B7B",
        fontSize: 14,
    },
    img_arrow_right:{
        position:"absolute",
        right:5,
        top:12,
    },
    icon_info:{
        position:"relative",
        top:3,
    },
    line_info:{
        height: 1,
        backgroundColor: "#F5F6F7",
    }

})