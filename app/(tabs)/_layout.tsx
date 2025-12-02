import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title : "Home",
                    headerShown : false
                }}
            />
            <Tabs.Screen
                name = "cart"
                options={{
                    title : "Cart",
                    headerShown : false
                }}
            />
            <Tabs.Screen
                name="order"
                options={{
                    title : "My Order",
                    headerShown : false
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title : "Account",
                    headerShown : false
                }}
            />
        </Tabs>
    )
}
export default _Layout
