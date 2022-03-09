import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Pressable,ScrollView } from "react-native";

const ListDataDiscount = [
    { Title: "Đón năm mới cùng KFC", date: "01/04/2021", NumberClick: 1000, NumberJoin: 1000, NumberInvite: 1000, commission: 1000 },
    { Title: "Đón năm mới cùng KFC", date: "01/04/2021", NumberClick: 1000, NumberJoin: 1000, NumberInvite: 1000, commission: 1000 },
    { Title: "Đón năm mới cùng KFC", date: "01/04/2021", NumberClick: 1000, NumberJoin: 1000, NumberInvite: 1000, commission: 1000 },
]

const DisCount = () => {
    const [option, setOption] = useState(1);
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.header}>
                <Text style={styles.header_title}>Khuyến mãi</Text>
                <View style={styles.warp_status}>
                    <Pressable onPress={() => setOption(1)} >
                        <View >
                            <Text style={option === 1 ? styles.txt_status_checked : styles.txt_status}>Đang diễn ra</Text>
                        </View>
                    </Pressable>
                    <View style={styles.h_line}>
                    </View>
                    <Pressable onPress={() => setOption(0)} >
                        <View >
                            <Text style={option === 0 ? styles.txt_status_checked : styles.txt_status}>Kết thúc</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
            <View style={styles.body}>
                {ListDataDiscount.map((d, index) => {
                    return (
                        <View style={styles.warp_list_discount} key={index}>

                            <View style={styles.warp_detail_discount}>
                                <Text style={styles.txt_title}>{d.Title}</Text>
                                <Text style={styles.values_date}>{d.date}</Text>
                            </View>
                            <View style={styles.warp_detail_discount}>
                                <Text style={styles.txt_tagets}>Số lượt click</Text>
                                <Text style={styles.values_tagets}>{d.NumberClick}</Text>
                            </View>
                            <View style={styles.warp_detail_discount}>
                                <Text style={styles.txt_tagets}>Số người tham gia</Text>
                                <Text style={styles.values_tagets}>{d.NumberJoin}</Text>
                            </View>
                            <View style={styles.warp_detail_discount}>
                                <Text style={styles.txt_tagets}>Mời thành công</Text>
                                <Text style={styles.values_tagets}>{d.NumberInvite}</Text>
                            </View>
                            <View style={styles.warp_detail_discount}>
                                <Text style={styles.txt_tagets}>Hoa hồng</Text>
                                <Text style={styles.values_tagets}>{d.commission}</Text>
                            </View>
                            <View style={styles.v_line}>
                            </View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>

    )
}
export default DisCount

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#F5F6F7",

    },
    header: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header_title: {
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        fontSize: 24,
        color: "#7B7B7B",
    },
    warp_status: {
        marginTop: 10,
        flexDirection: "row",
        height: 45,
        borderRadius: 20,
        borderColor: "#EFEFEF",
        borderWidth: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    h_line: {
        height: 45,
        width: 1,
        backgroundColor: "#EFEFEF",
    },
    txt_status_checked: {
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        fontSize: 14,
        color: "#360C5E",
    },
    txt_status: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
    },
    body: {
        marginTop: 5,
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
    },
    warp_list_discount: {
        marginTop: 5,
    },
    txt_title: {
        fontFamily: "Helvetica Neue",
        fontWeight: "bold",
        fontSize: 14,
        color: "#292929",
    },
    warp_detail_discount: {
        marginVertical: 5,
        flexDirection: "row",
    },
    values_tagets: {
        position: "absolute",
        right: 5,
        color:"#360C5E",
    },
    txt_tagets:{
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color:"#360C5E",
    },
    values_date:{
        position: "absolute",
        right: 5,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        color:"#B5B5B5",
    },
    v_line: {
        marginTop:10,
        height: 1,
        backgroundColor: "#EFEFEF",
    }
})