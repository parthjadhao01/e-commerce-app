import React from 'react'
import {Stack} from "expo-router";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="loginsignup"
                options={{headerShown : false}}
            ></Stack.Screen>
            <Stack.Screen
                name="signup"
                options={{headerShown : false}}
            ></Stack.Screen>
            <Stack.Screen
                name="login"
                options={{headerShown : false}}
            ></Stack.Screen>
        </Stack>
    )
}
export default _Layout
