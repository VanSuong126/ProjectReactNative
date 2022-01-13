import React, { Component, useState } from "react";
import { View, Image, Text, StyleSheet, FlatList, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';


import ImageBlack from '../assets/images/back.png'// image back
import ArrowDown from '../assets/images/arrowdown.png' // image arrow down
import ArrowUp from '../assets/images/arrowup.png' // image arrow up

var maxwidth = Dimensions.get("screen").width; // width full screen 

//khai báo tham số đơn hàng
var Title_Order = "Chi tiết đơn hàng";
var Name_Order = "Đơn hàng 1234";
var Time_Order = "11/02/2021, 10:00";
var Status_Order = "Đã bàn giao";
var Name_Customer = "Minh Tran";
var Phone_Customer = "039378484";
var Address_Customer = "51 Hồ Hảo Hớn, P Cô Giang, Quận 1, Hồ Chí Minh";
var Name_Shiper = "Nguyễn Văn A";
var Phone_Shiper = "0397848424";
var Address_Shiper = "293/1 Tôn Đản, P15, Quận 4, Hồ Chí Minh";
var Note = ["Xin nhiều tương ớt", "Mì xào ít cay"];

// objet thông tin đơn hàng
let Info_Order = {
    Title_Order,
    Name_Order,
    Time_Order,
    Status_Order,
    Name_Customer,
    Phone_Customer,
    Address_Customer,
    Name_Shiper,
    Phone_Shiper,
    Address_Shiper,
    Note,
};
// Array chi tiết đặt hàng
const DataDetailBook = [
    { quantily: 10, namefood: "Mì cay", price: 32000, extra: ["Thêm tôm tươi"] },
    { quantily: 1, namefood: "Trà sữa", price: 32000, extra: null },
    { quantily: 10, namefood: "Mì cay", price: 32000, extra: ["Thêm trứng", "Thêm mì"] },
    { quantily: 1, namefood: "Trà sữa", price: 32000, extra: null },
    { quantily: 10, namefood: "Mì cay", price: 32000, extra: null },
    { quantily: 1, namefood: "Trà sữa", price: 32000, extra: null },
];
const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ';
};
function Detail_Book_Order () {
        const [isVisible, setIsVisible] = useState(true)
        const ToggleFunction = () =>setIsVisible ((isVisible)=>!isVisible)
        return (
            <View style={st.detail_book}>
                <Text style={st.title_detail_book}>Chi tiết đơn hàng</Text>
                {isVisible == true?
                    <SafeAreaView >
                        {DataDetailBook.map((item, index) =>
                            <View style={st.warp_detail_food} key={index} >
                                <View style={st.warp_main_detail}>
                                    <Text style={st.quantily}>{item.quantily}x</Text>
                                    <Text style={st.namefood}>{item.namefood}</Text>
                                    <Text style={st.price}>{currencyFormat(item.price)} </Text>
                                </View>
                                <View style={st.warp_extra}>
                                    {item.extra == null ? null : item.extra.map((e, index) => <Text key={index}>{e}</Text>)}
                                </View>

                                <Text style={st.hairline_detail}></Text>
                            </View>
                        )}
                    </SafeAreaView>
                    : null}
                <TouchableOpacity onPress={ToggleFunction} >
                    {isVisible == true ? <View style={st.warp_collapse}>
                        <Text style={st.title_collapse}>Thu gon</Text>
                        <Image style={{ position: "relative", left: 5 }} source={ArrowUp} />
                    </View> :
                        <View style={st.warp_collapse}>
                            <Text style={st.title_collapse}>Xem chi tiết</Text>
                            <Image style={{ position: "relative", left: 5 }} source={ArrowDown} />
                        </View>}
                </TouchableOpacity>
            </View>

        );
    
}
export default class BookFood extends Component {



    render() {
        return (

            <ScrollView style={{ flex: 1 }}>
                <View style={st.Container}>
                    <View style={st.header}>
                        <View style={st.warp_title}>
                            <Image source={ImageBlack} />
                            <Text style={st.txt_title}>{Info_Order.Title_Order}</Text>
                        </View>
                        <View style={st.wap_name_order}>
                            <Text style={st.txt_name_order}>{Info_Order.Name_Order}</Text>
                            <Text style={st.txt_time_order}>{Info_Order.Time_Order}</Text>
                        </View>
                        <View style={st.wap_status_order}>
                            <Text style={st.txt_title_status}>Trạng thái đơn hàng</Text>
                            <Text style={st.txt_name_status}>{Info_Order.Status_Order}</Text>
                        </View>
                    </View>
                    <View style={st.info_book}>
                        <Text style={st.title_book}>Đơn của khách hàng</Text>
                        <Text style={st.txt_name_phone}>{Info_Order.Name_Customer} - {Info_Order.Phone_Customer}</Text>
                        <Text style={st.txt_address}>{Info_Order.Address_Customer}</Text>
                        <Text style={st.hairline}></Text>
                        <Text style={st.title_book}>Tài xế giao hàng</Text>
                        <Text style={st.txt_name_phone}>{Info_Order.Name_Shiper} - {Info_Order.Phone_Shiper}</Text>
                        <Text style={st.txt_address}>{Info_Order.Address_Shiper}</Text>
                    </View>
                    <Detail_Book_Order />
                    <View style={st.total_bill}>
                        <View style={st.warp_bonus}>
                            <Text style={st.title_bonus}>Ưu đãi:</Text>
                            <Text style={st.bonus}>Tặng 1 lon Coca</Text>
                        </View>
                        <Text style={st.hairline_detail}></Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={st.title_bill}>Tổng cộng:</Text>
                            <Text style={st.amount}>{currencyFormat(110000)}</Text>
                        </View>
                    </View>
                    <View style={st.note}>
                        <Text style={st.title_note}>Ghi chú</Text>
                        <View style={st.warp_note}>
                            {Info_Order.Note == null ? null : Info_Order.Note.map((n, index) => <Text style={st.detail_note} key={index}>{n}</Text>)}
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }

}

const st = StyleSheet.create(
    {
        Container: {
            flex: 1,
            borderColor: "#F5F6F7",
        },
        warp_title: {
            flexDirection: "row",
            marginTop: 10,
        },
        txt_title: {
            paddingLeft: 20,
            fontFamily: "Helvetica Neue",
            fontSize: 18,
            color: "#2E2E2E",
        },
        header: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            flex: 0.2,
            backgroundColor: "#FFFFFF",

        },
        info_book: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 8,
            flex: 0.35,
            backgroundColor: "#FFFFFF",
        },
        total_bill: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            flex: 0.2,
            marginTop: 8,
            backgroundColor: "#FFFFFF",
        },
        note: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            flex: 0.2,
            marginTop: 8,
            backgroundColor: "#FFFFFF",
        },
        detail_book: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 8,
            flex: 0.5,
            backgroundColor: "#FFFFFF"
        },
        title_detail_book: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#A2A1A1",
        },
        item: {

        },
        warp_list: {
            flex: 1,
            backgroundColor: "red",

        },
        title_List: {
            color: "black",
            fontSize: 14,
        },
        warp_collapse: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        title_collapse: {
            fontFamily: "Helvetica Neue",
            fontSize: 12,
            color: "#908D8D",
        },
        wap_name_order: {
            flexDirection: "row",
            marginTop: 10,
        },
        wap_status_order: {
            flexDirection: "row",
            marginTop: 10,
        },
        txt_name_order: {
            fontFamily: "Helvetica Neue",
            fontSize: 16,
            color: "#2E2E2E",
        },
        txt_time_order: {
            position: "absolute",
            right: 20,
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
        txt_title_status: {

            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
        txt_name_status: {
            position: "absolute",
            right: 20,
            backgroundColor: "#DB7C34",
            borderRadius: 8,
            alignItems: "center",
            height: 25,
            paddingHorizontal: 10,
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#FFFFFF",
        },
        title_book: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#7B7B7B",
        },
        txt_name_phone: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
        txt_address: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
        hairline: {
            backgroundColor: '#EFEFEF',
            height: 1,
            marginVertical: 10,

        },
        warp_main_detail: {
            flexDirection: "row",

        },
        warp_detail_food: {
            marginTop: 10,
        },
        quantily: {
            fontFamily: "Helvetica Neue",
            fontSize: 12,
            color: "#360C5E",
        },
        namefood: {
            fontFamily: "Helvetica Neue",
            fontSize: 12,
            color: "#360C5E",
            paddingLeft: 20,
        },
        price: {
            position: "absolute",
            right: 10,
            fontFamily: "Helvetica Neue",
            fontSize: 12,
            color: "#360C5E",

        },
        warp_extra: {
            paddingLeft: 40,
        },
        extra: {
            marginTop: 10,
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#7B7B7B",
            marginLeft: 40,
        },
        hairline_detail: {
            backgroundColor: '#EFEFEF',
            height: 1,
            marginVertical: 5,
        },
        warp_bonus: {
            flexDirection: "row",
        },
        title_bonus: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
        bonus: {
            position: "absolute",
            right: 10,
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#360C5E",
        },
        title_bill: {
            fontWeight: "bold",
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
        amount: {
            fontWeight: "bold",
            position: "absolute",
            right: 10,
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#360C5E",
        },
        title_note: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#A2A1A1",
        },
        detail_note: {
            fontFamily: "Helvetica Neue",
            fontSize: 14,
            color: "#2E2E2E",
        },
    });