
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Pressable, ScrollView } from "react-native";
// Import image from asset 
import IconLooking from "../assets/images/looking.png";
import IconBell from "../assets/images/bell.png";
// Component Radiobuton
import RadioButton from "../plugin/RadioButton";
// Component DateTimePicker
import DateTimePicker from "../plugin/DateTimePicker";

//Package lirbary Navigation
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function change format Curency
import currencyFormat from "../plugin/CurencyFormat";

const DataBill = () => {
    const DataBills = [
        { idBill: "741211HD", time: "14:00 26/10/2021", totalPrice: 1000000, status: "Mới" },
        { idBill: "741211HD", time: "14:00 26/10/2021", totalPrice: 1000000, status: "Mới" },
        { idBill: "741211HD", time: "14:00 26/10/2021", totalPrice: 1000000, status: "Mới" },
    ];
    return (
        <View>
            {DataBills && DataBills.length > 0 && DataBills.map((d, index) => {
                return (
                    <View key={index} style={styles.wap_detail_bill}>
                        <View style={styles.wap_bill_row1}>
                            <Text style={styles.text_id}>ID: {d.idBill}</Text>
                            <Text style={styles.text_time}>{d.time}</Text>
                        </View>
                        <View style={styles.wap_bill_row2}>
                            <Text style={styles.text_title}>Tổng</Text>
                            <Text style={styles.text_price}>{currencyFormat(d.totalPrice)}</Text>
                        </View>
                        <View style={styles.wap_bill_row3}>
                            <Text style={styles.text_title}>Trạng thái đơn hàng</Text>
                            <Text style={styles.text_status_bill}>{d.status}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    );
}
// Button status order
const ShowStatus = () => {
    const [valueStatus, setValueStatus] = useState(null);
    const DataStatus = [
        { idStatus: 1, NameStatus: "Mới" },
        { idStatus: 2, NameStatus: "Đang làm" },
        { idStatus: 3, NameStatus: "Đã bàn giao" },
        { idStatus: 4, NameStatus: "Hoàn thành" },
    ];
    const onPressSatus = (value) => {
        setValueStatus(value);
    }
    return (
        <View style={styles.wap_list_status}>
            {DataStatus && DataStatus.length > 0 && DataStatus.map((s, index) => {
                return (
                    <Pressable onPress={() => onPressSatus(s.idStatus)} key={index}>
                        <View style={valueStatus === s.idStatus ? styles.warp_status_checked : styles.warp_status}>
                            <Text style={valueStatus === s.idStatus ? styles.text_status_checked : styles.text_status}>{s.NameStatus}</Text>
                        </View>
                    </Pressable>)
            }
            )}
        </View>
    )
}

const History_Order = () => {
    //data and useState radiobutton
    const [option, setOption] = useState(null);
    const [fromdate, setFromDate] = useState(null);
    const [todate, setToDate] = useState(null);
    // Data of radiobutton
    const DataRadioButon = [
        { value: 1, title: "24h" },
        { value: 7, title: "7 ngày" },
        { value: 30, title: "30 ngày" },
        { value: 90, title: "90 ngày" },
    ];
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.warp_bell}>
                    <Image source={IconBell} />
                </View>
                <Text style={styles.title_history}>Lịch sử đơn hàng</Text>
                <View style={styles.warp_looking}>
                    <TextInput style={styles.txt_looking} placeholder="Tìm kiếm theo mã đơn hàng" />
                    <Image style={styles.img_looking} source={IconLooking} />
                </View>
                <View style={styles.wap_check_time}>
                    <RadioButton data={DataRadioButon} onSelect={(value) => setOption(value)} />
                </View>
                <View style={styles.warp_calender}>
                    <View style={styles.warp_fromdate}>
                        <Text>Từ ngày</Text>
                        <DateTimePicker selectDate={(date) => setFromDate(date)} />
                    </View>
                    <View style={styles.warp_todate}>
                        <Text>Đến ngày</Text>
                        <DateTimePicker minDate={new Date(fromdate)} selectDate={(date) => setToDate(date)} />
                    </View>
                </View>
                <View>
                    <ShowStatus />
                    <DataBill />
                </View>
            </View>
        </ScrollView>
    );
}

export default History_Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F6F7",

    },
    content: {
        marginHorizontal: 20,
    },
    title_history: {

        fontSize: 24,
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        color: "#7B7B7B"
    },
    warp_looking: {
        marginTop: 20,

    },
    txt_looking: {
        paddingLeft: 50,
        height: 45,
        borderRadius: 8,
        backgroundColor: "#FFFFFF"
    },
    img_looking: {
        position: "absolute",
        top: 15,
        left: 20,
    },
    warp_bell: {
        paddingTop: 10,
        alignItems: "flex-end"
    },
    warp_calender: {
        marginTop: 10,
        flexDirection: "row",
    },
    warp_fromdate: {
        flex: 1,
    },
    warp_todate: {
        marginLeft: 20,
        flex: 1,
    },
    text_fromdate: {
        paddingLeft: 50,
        marginVertical: 5,
        height: 45,
        backgroundColor: "#FFFFFF",
    },
    text_todate: {
        paddingLeft: 50,
        marginVertical: 5,
        height: 45,
        backgroundColor: "#FFFFFF",
    },
    img_calendar: {
        position: "relative",
        marginLeft: 10,
        bottom: 35,
    },
    wap_list_status: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    warp_status: {
        borderRadius: 5,
        backgroundColor: "#EFEFEF",
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    warp_status_checked: {
        borderRadius: 5,
        backgroundColor: "#360C5E",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    text_status_checked: {
        color: "black",
        fontSize: 14,
        fontFamily: "Helvetica Neue",
    },
    text_status_checked: {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "Helvetica Neue",
        fontWeight: "bold"
    },
    wap_bill_row1: {

    },
    text_id: {
        fontSize: 14,
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        color: "#292929"
    },
    text_time: {
        position: "absolute",
        right: 10,

    },
    wap_detail_bill: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: "#FFFFFF",
    },
    text_title: {
        fontSize: 14,
        fontFamily: "Helvetica Neue",
        color: "#292929"
    },
    text_price: {
        position: "absolute",
        right: 10,
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Helvetica Neue",
        color: "#292929",
    },
    text_status_bill: {
        borderRadius: 5,
        backgroundColor: "#BA00FF",
        position: "absolute",
        right: 10,
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Helvetica Neue",
        color: "#FFFFFF",
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})