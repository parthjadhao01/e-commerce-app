import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";
import {Image} from "expo-image";
import { Checkbox } from 'expo-checkbox';

const Login = () => {
    const [isChecked, setChecked] = useState(false);

    return (
        <SafeAreaView>
            {/* Header */}
            <View className="flex-row items-center px-6 mt-2">
                {/* LEFT — Back Button */}
                <Link href="/(authentication)/loginsignup" asChild>
                    <TouchableOpacity className="w-10">
                        <Image
                            source={require("../../assets/images/backbutton.png")}
                            style={{width : 12, height : 22}}
                        />
                    </TouchableOpacity>
                </Link>

                {/* CENTER — Title */}
                <View className="flex-1">
                    <Text className="text-2xl text-center">Log In</Text>
                </View>

                {/* RIGHT — Placeholder to balance layout */}
                <View className="w-10" />
            </View>

            {/*  Form  */}
            <View className="px-5 mt-10">
                <Text className="text-lg ml-2 mb-3">Email</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Text your email"
                />
                <Text className="text-lg ml-2 mb-3 mt-5">Password</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Text your password"
                    textContentType={"password"}
                />
                <View className="mt-3 flex flex-row justify-between">
                    <View className="flex flex-row items-center">
                        <Checkbox value={isChecked} onValueChange={setChecked} color={"#4CAD73"} />
                        <Text className="ml-2">Remember me</Text>
                    </View>
                    <Link className="text-gray-400" href="/(authentication)/forgetpassword">
                        Forgot password ?
                    </Link>
                </View>
                <Link href={"/(authentication)/login"} className="bg-[#4CAD73] p-2 rounded-2xl mt-11">
                    <Text className="text-[#FFFFFF] text-xl h-[50px] text-center">Log In</Text>
                </Link>
                <View className="flex flex-row items-center mt-10">
                    <Image source={require('../../assets/images/line.png')} style={{width : 160 , height : 1}} />
                    <Text className="text-gray-400 m-1" >Or</Text>
                    <Image source={require('../../assets/images/line.png')} style={{width : 160 , height : 1,}} />
                </View>

                {/*google and facebook sign in */}
                <Link href="/signup" asChild>
                    <TouchableOpacity className="flex-row items-center justify-center border border-gray-400 p-2 rounded-2xl mt-5">
                        <Image
                            source={require("../../assets/images/google.png")}
                            style={{
                                width : 24,
                                height : 24,
                                marginRight : 10
                            }}
                        />
                        <Text className="text-md font-bold">Continue with Google</Text>
                    </TouchableOpacity>
                </Link>
                <Link href="/signup" asChild>
                    <TouchableOpacity className="flex-row items-center justify-center border border-gray-400 p-2 rounded-2xl mt-5">
                        <Image
                            source={require("../../assets/images/facebook.png")}
                            style={{
                                width : 24,
                                height : 24,
                                marginRight : 10
                            }}
                        />
                        <Text className="text-md font-bold">Continue with Facebook</Text>
                    </TouchableOpacity>
                </Link>

            </View>

        </SafeAreaView>
    )
}
export default Login
