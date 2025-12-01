import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import * as Svg from 'react-native-svg';
import {Link} from "expo-router";


const Loginsignup = () => {
    return (
        <SafeAreaView>
            <View className="px-10 mt-20">
                {/*<Image source={require('../../assets/images/logo.png')}/>*/}
                <View className="mt-11  flex-row items-center justify-center m-4 p-4 ">
                    <Image source={require('../../assets/images/logo.png')} style={{width :33 ,height : 101}}/>
                    <Text className="font-semibold mx-2 text-5xl color-[#4CAD73]">Healthy</Text>
                </View>
                <Link href={"/(authentication)/login"} className="bg-[#4CAD73] p-2 rounded-2xl">
                    <Text className="text-[#FFFFFF] text-xl h-[50px] text-center">Log In</Text>
                </Link>
                <Link href={"/(authentication)/signup"} className="border border-[#4CAD73] p-2 rounded-2xl mt-5">
                    <Text className="text-[#4CAD73] text-xl h-[50px] text-center">Sign Up</Text>
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
export default Loginsignup

