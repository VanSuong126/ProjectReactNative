import React, { Component, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import moment from "moment";
// import icon check
import Image_check from "../assets/images/img_check.png";
import Image_uncheck from "../assets/images/img_uncheck.png";

// function change format Curency
import currencyFormat from "../plugin/CurencyFormat";
//List data wallet
const ListDataWallet = [
    { day: "16", month: "03", transaction: "MC121546", price: 200000, status: true },
    { day: "15", month: "03", transaction: "MC121546", price: 200000, status: false },
    { day: "16", month: "03", transaction: "MC121546", price: 200000, status: true },
    { day: "15", month: "03", transaction: "MC121546", price: 200000, status: false },
    { day: "16", month: "03", transaction: "MC121546", price: 200000, status: true },
    { day: "15", month: "03", transaction: "MC121546", price: 200000, status: false },
    { day: "16", month: "03", transaction: "MC121546", price: 200000, status: true },
    { day: "15", month: "03", transaction: "MC121546", price: 200000, status: false },
    { day: "16", month: "03", transaction: "MC121546", price: 200000, status: true },
    { day: "15", month: "03", transaction: "MC121546", price: 200000, status: false },
]
const Wallet = () => {
    var ListTime = [];
    var currentDate = new Date();
    currentDate = moment(currentDate).add(-6, 'month');
    for (let i = 0; i < 6; i++) {
        currentDate = moment(currentDate).add(1, 'M');
        ListTime.push(currentDate);
    }
    const [MonthSelect, setSelectMonth] = useState(null);
    const [YearSelect, setSelectYear] = useState('');
    const OncheckTime = (d) => {
        setSelectMonth(moment(d).format("MM"))
        setSelectYear(moment(d).format("YYYY"))
    }
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.txt_title}>Ví của tôi</Text>
                    <Text style={styles.title_time}>Thời gian</Text>
                    <View style={styles.warp_list_time}>
                        {ListTime && ListTime.length > 0 && ListTime.map((d, index) => {
                            return (
                                <Pressable onPress={() => OncheckTime(d)} key={index} >
                                    <View >
                                        {MonthSelect == (moment(d).format("MM")) ? <View style={styles.circle_checked}></View> : <View style={styles.circle_no_checked}></View>}
                                        <View >
                                            <Text style={MonthSelect == (moment(d).format("MM")) ? styles.month_checked : styles.month_no_checked} >{moment(d).format("MM")}</Text>
                                            <Text style={MonthSelect == (moment(d).format("MM")) ? styles.year_checked : styles.year_no_checked} >{moment(d).format("YYYY")}</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        }
                        )}
                    </View>
                    <View style={styles.warp_detail_bill}>
                        <View style={styles.warp_paid}>
                            <Text style={styles.title_paid}>Đã thanh toán</Text>
                            <Text style={styles.values_paid} >{currencyFormat(2225000)}</Text>
                        </View>
                        <View style={styles.warp_unpaid}>
                            <Text style={styles.title_unpaid}>Chưa thanh toán</Text>
                            <Text style={styles.values_unpaid} >{currencyFormat(250000)}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.warp_body_tile}>
                        <Text style={styles.body_title_date}>Ngày</Text>
                        <Text style={styles.body_title}>Transaction ID</Text>
                        <Text style={styles.body_title}>Số tiền</Text>
                        <Text style={styles.body_title}>Trạng thái</Text>
                    </View>
                    <View style={styles.warp_data_body}>
                        {ListDataWallet.map((d, index) => {
                            return (
                                <View style={styles.warp_data} key={index}>
                                    <View style={styles.warp_date_data}>
                                        <View style={styles.warp_date}>
                                            <Text>{d.day}</Text>
                                            <Text>/{d.month}</Text>
                                        </View>
                                        <View style={styles.circle_date}></View>
                                    </View>
                                    <Text style={styles.data_transaction}>{d.transaction}</Text>
                                    <Text style={styles.data_price}>{d.price}</Text>
                                    {d.status == true ? <Image style={styles.data_status} source={Image_check} /> : <Image style={styles.data_status} source={Image_uncheck} />}
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}
export default Wallet

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#F5F6F7",
        flex: 1,
    },
    content: {
        backgroundColor: "#F5F6F7",
    },
    header: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    warp_list_time: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt_title: {
        fontFamily: "Helvetica Neue",
        fontSize: 24,
        color: "#565656",
        fontWeight: "bold",
    },
    title_time: {
        marginTop: 10,
        marginBottom: 5,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#565656",
    },
    month_checked: {
        fontFamily: "Helvetica Neue",
        fontSize: 18,
        color: "#360C5E",
        fontWeight: "bold",
    },
    month_no_checked: {
        fontFamily: "Helvetica Neue",
        fontSize: 18,
        color: "#B5B5B5",
        fontWeight: "bold",
    },
    year_checked: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#360C5E",
    },
    year_no_checked: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#B5B5B5",
    },
    circle_checked: {
        position: "relative",
        left: 10,
        borderRadius: 2,
        height: 5,
        width: 5,
        backgroundColor: "#360C5E"
    },
    circle_no_checked: {
        position: "relative",
        left: 10,
        borderRadius: 2,
        height: 5,
        width: 5,
    },
    warp_paid: {
        flexDirection: "row",
    },
    title_paid: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#292929",
    },
    values_paid: {
        position: "absolute",
        right: 5,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#62AF0A",
    },
    warp_unpaid: {
        marginVertical: 5,
        flexDirection: "row",
    },
    title_unpaid: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#292929",
    },
    values_unpaid: {
        position: "absolute",
        right: 5,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color: "#EB2424",
    },
    warp_detail_bill: {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#F8FAFC",
    },
    body: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#FFF",
    },
    warp_body_tile: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    body_title: {
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        color: "#AAAAAA",
    },
    body_title_date: {
        marginLeft: 20,
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        color: "#AAAAAA",
    },
    warp_data: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    circle_date: {
        position: "relative",
        top: 5,
        marginLeft: 10,
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#DEDEDE",
    },
    warp_date: {
        position: "relative",
        bottom: 10,
    },
    warp_date_data: {
        flexDirection: "row",
    },
    data_transaction: {
        position: "relative",
        right: 10,
    },
    data_price: {
        position: "relative",
        right: 15,
    },
    data_status: {
        position: "relative",
        right: 15,
    }
})