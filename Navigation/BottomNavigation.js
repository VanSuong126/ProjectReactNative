import React from "react";
import { View, Image } from "react-native";
//Image Bottom Bar
import IconClock_On  from "../assets/images/clock_on.png"
import IconCoupon_On  from "../assets/images/coupon_on.png"
import IconCreditCard_On  from "../assets/images/credit-card_on.png"
import IconSetting_On  from "../assets/images/setting_on.png"
import IconAccount_On  from "../assets/images/account_on.png"
import IconClock_Off  from "../assets/images/clock_off.png"
import IconCoupon_Off  from "../assets/images/coupon_off.png"
import IconCreditCard_Off  from "../assets/images/credit-card_off.png"
import IconSetting_Off  from "../assets/images/setting_off.png"
import IconAccount_Off  from "../assets/images/account_off.png"

//Package lirbary Navigation
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//import Component
import History_Order from "../Components/history";
import DisCount from "../Components/discount";
import Wallet from "../Components/wallet";
import SettingFood  from "../Components/settingfood";
import Profile  from "../Components/profile";

export default function NavigationBottom() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: "#360C5E",
                headerShown: false,
              }}>
            <Tab.Screen
              name="History"
              component={History_Order}
              options={{
                tabBarLabel: 'Đơn hàng',
                tabBarIcon: ({focused, color, size}) => (
                  <Image
                    source={
                      focused
                        ? IconClock_On
                        : IconClock_Off
                    }
                    style={{
                      width: 18,
                      height: 18
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Khuyến mãi"
              component={DisCount}
              options={{
                tabBarLabel: 'Khuyến mãi',
                tabBarIcon: ({focused, color, size}) => (
                  <Image
                    source={
                      focused
                        ? IconCoupon_On
                        : IconCoupon_Off
                    }
                    style={{
                      width: 20,
                      height: 14,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Ví"
              component={Wallet}
              options={{
                tabBarLabel: 'Ví',
                tabBarIcon: ({focused, color, size}) => (
                  <Image
                    source={
                      focused
                        ? IconCreditCard_On
                        : IconCreditCard_Off
                    }
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Cài đặt"
              component={SettingFood}
              options={{
                tabBarLabel: 'Cài đặt',
                tabBarIcon: ({focused, color, size}) => (
                  <Image
                    source={
                      focused
                        ? IconSetting_On
                        : IconSetting_Off
                    }
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Tài khoản"
              component={Profile}
              options={{
                tabBarLabel: 'Tài khoản',
                tabBarIcon: ({focused, color, size}) => (
                  <Image
                    source={
                      focused
                        ? IconAccount_On
                        : IconAccount_Off
                    }
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
}