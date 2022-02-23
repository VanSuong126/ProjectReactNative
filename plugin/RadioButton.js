import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import RadioButtonOff from "../assets/RadioButton/radio_button_off.png";
import RadioButtonOn from "../assets/RadioButton/radio_button_on.png";


export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    };
    return (
        <View style={styles.wap_check_time}>
            {data && data.length > 0 && data.map((d, index) => {
                return (
                    <Pressable onPress={() => selectHandler(d.value)} key={index} >
                            <View style={styles.warp_radio_button} >
                                {d.value === userOption ?  <Image style={styles.img_radio_buton_hide} source={RadioButtonOn} />: <Image style={styles.img_radio_buton_hide} source={RadioButtonOff} />}
                                <Text>{d.title}</Text>
                            </View> 
                    </Pressable>
                );
            })}
        </View>

    );
}


const styles = StyleSheet.create({
    wap_check_time: {
        height: 45,
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    warp_radio_button: {
        flexDirection: "row",
    },
    img_radio_buton_show: {
        display:"none",
        position: "relative",
        top: 5,
        marginHorizontal: 5,
    },
    img_radio_buton_hide: {
        position: "relative",
        top: 5,
        marginHorizontal: 5,
    }
})