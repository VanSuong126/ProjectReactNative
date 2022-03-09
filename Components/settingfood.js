import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Pressable, ScrollView } from "react-native";

// import Icon
import IconLooking from "../assets/images/looking.png"
import FoodOn from "../assets/images/on_food.png"
import FoodOff from "../assets/images/off_food.png"


const SettingFood = () => {
    const [SelectCategory, setCategory] = useState(1);
    const [valuesFilter, setFilter] = useState(2);
    const DataFoodSetting = [
        { namefood: "Cơm gà", status: 1 },
        { namefood: "Gà rán", status: 0 },
        { namefood: "Salat gà áp chảo", status: 0 },
        { namefood: "Cơm gà", status: 1 },
        { namefood: "Gà rán", status: 1 },
        { namefood: "Salat gà áp chảo", status: 1 },
        { namefood: "Cơm gà", status: 1 },
        { namefood: "Gà rán", status: 0 },
    ]
    return (
        <ScrollView style={styles.Container}>
            <View style={styles.Content}>
                <View style={styles.header}>
                    <Text style={styles.title_header}>Cài đặt món</Text>
                    <View style={styles.warp_category}>
                        <Pressable onPress={() => setCategory(1)}>
                            <Text style={SelectCategory == 1 ? styles.check_category : styles.uncheck_category}>Danh mục nhà hàng</Text>
                        </Pressable>
                        <Pressable style={{ marginLeft: 20 }} onPress={() => setCategory(0)}>
                            <Text style={SelectCategory == 0 ? styles.check_category : styles.uncheck_category}>Món ăn</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.body}>
                    <View style={styles.warp_search}>
                        <TextInput style={styles.txt_search} placeholder="Tìm kiếm theo tên danh mục" />
                        <Image style={styles.icon_search} source={IconLooking} />
                    </View>
                    <View style={styles.warp_filter}>
                        <Pressable onPress={() => setFilter(2)}>
                            <Text style={valuesFilter == 2 ? styles.filter_on : styles.filter_off}>Tất cả</Text>
                        </Pressable>
                        <Pressable onPress={() => setFilter(1)}>
                            <Text style={valuesFilter == 1 ? styles.filter_on : styles.filter_off}>Bật</Text>
                        </Pressable>
                        <Pressable onPress={() => setFilter(0)}>
                            <Text style={valuesFilter == 0 ? styles.filter_on : styles.filter_off}>Tắt</Text>
                        </Pressable>
                    </View>
                    <View style={styles.warp_detail_category}>
                        <View style={styles.warp_title_category}>
                            <Text>Tên danh mục</Text>
                            <Text>Trạng thái</Text>
                        </View>
                        <View style={styles.warp_data_catagory}>
                            {DataFoodSetting.map((d, index) => {
                                if (d.status == valuesFilter) {
                                    return (
                                        <View key={index} style={styles.warp_data_catagory}>
                                            <Text>{d.namefood}</Text>
                                            {d.status == 1 ? <Image style={styles.icon_on_off_food} source={FoodOn} /> : <Image style={styles.icon_on_off_food} source={FoodOff} />}
                                        </View>
                                        )       
                                }
                                if(valuesFilter==2)
                                {
                                    return (
                                        <View key={index} style={styles.warp_data_catagory}>
                                            <Text>{d.namefood}</Text>
                                            {d.status == 1 ? <Image style={styles.icon_on_off_food} source={FoodOn} /> : <Image style={styles.icon_on_off_food} source={FoodOff} />}
                                        </View>
                                        )
                                }
                            })}
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default SettingFood

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    Content: {
        flex: 1,
        backgroundColor: "#FFF",

    },
    header: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title_header: {
        fontFamily: "Helvetica Neue",
        fontSize: 24,
        fontWeight: "bold",
        color: "#565656"
    },
    warp_category: {
        marginTop: 20,
        flexDirection: "row",
    },
    check_category: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFF",
        backgroundColor: "#360C5E",
    },
    uncheck_category: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        fontWeight: "bold",
        borderColor: "#AAAAAA",
        borderWidth: 1,
        color: "#AAAAAA",
        backgroundColor: "#FFFFFF",
    },
    line:{
        height:10,
        backgroundColor :"#F5F6F7",
    },
    body: {
        paddingTop:10,
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
    },
    txt_search: {
        height: 45,
        backgroundColor: "#F8F8F8",
        paddingLeft: 50,
        borderRadius: 8,
    },
    icon_search: {
        position: "absolute",
        top: 18,
        left: 20,
    },
    warp_filter: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    filter_off: {
        height: 35,
        width: 100,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 8,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        borderColor: "#AAAAAA",
        borderWidth: 1,
        color: "#AAAAAA",
        backgroundColor: "#FFFFFF",
    },
    filter_on: {
        height: 35,
        width: 100,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 8,
        fontFamily: "Helvetica Neue",
        fontSize: 14,
        fontWeight: "bold",
        borderColor: "#AAAAAA",
        borderWidth: 1,
        color: "#FFF",
        backgroundColor: "#360C5E",
    },
    warp_title_category: {
        marginTop: 10,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    warp_data_catagory: {
        marginTop: 10,
        justifyContent: "space-between",
    },
    icon_on_off_food: {
        position: "absolute",
        right: 10,
    }
})