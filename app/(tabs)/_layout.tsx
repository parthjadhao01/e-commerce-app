import React from 'react'
import { Tabs } from "expo-router";
import { Image } from "react-native";

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 75,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../../assets/images/home.png")}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: "contain",       // <-- VERY IMPORTANT
                                tintColor: focused ? "#4CAD73" : "#A0A0A0"
                            }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../../assets/images/cart.png")}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: "contain",
                                tintColor: focused ? "#4CAD73" : "#A0A0A0"
                            }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="order"
                options={{
                    title: "My Order",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../../assets/images/order.png")}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: "contain",
                                tintColor: focused ? "#4CAD73" : "#A0A0A0"
                            }}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../../assets/images/user.png")}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: "contain",
                                tintColor: focused ? "#4CAD73" : "#A0A0A0"
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default _Layout;
