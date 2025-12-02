import {View, Text, TouchableOpacity, TextInput, Alert, Button} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, useRouter} from "expo-router";
import {Image} from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = () => {
    const router = useRouter();
    const [form,setForm] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        phone : "",
    })

    const handleChange = (key :any, value : any) => {
        setForm({ ...form, [key]: value });
    };

    const handleSignup = async () => {
        if (!form.name || !form.password){
            Alert.alert("Error","Name and password are required");
            return;
        }
        if (!form.email || !form.phone){
            Alert.alert("Error","Please provide either phone or email");
            return;
        }
        if (form.password !== form.confirmPassword){

            Alert.alert("Error","Password do not match",);
            return;
        }
        try {
            const response = await fetch("http://localhost:3001/api/user/register",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    name : form.name,
                    email : form.email,
                    password : form.password,
                    phone : form.phone
                })
            });

            const data = await response.json();

            if (!response.ok) {
                Alert.alert("Error", data.message || "Failed to register");
                return;
            }

            await AsyncStorage.setItem("token",data.token)
            if (!data.token){
                Alert.alert("Error","token is empty token not found");
                return;
            }
            if (!AsyncStorage.getItem("token")){
                Alert.alert("Error","Token is not stored in Async Storage")
                return;
            }

            Alert.alert("Success","User registred succefully");
            router.push("/(tabs)");

        }catch (e) {
            console.log(e);
            Alert.alert("Error");
        }
    }


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
                    <Text className="text-2xl text-center">Sign Up</Text>
                </View>

                {/* RIGHT — Placeholder to balance layout */}
                <View className="w-10" />
            </View>
            {/*  Form  */}
            <View className="px-5 mt-2">
                <Text className="text-lg ml-2 mb-3 mt-5">name</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Enter your Name"
                    textContentType="name"
                    onChangeText={(value)=>{handleChange("name",value)}}
                />
                <Text className="text-lg ml-2 mb-3">Email</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Text your email"
                    textContentType="emailAddress"
                    onChangeText={(value)=>{handleChange("email",value)}}
                />
                <Text className="text-lg ml-2 mb-3 mt-5">Password</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Text your password"
                    textContentType="password"
                    onChangeText={(value)=>{handleChange("password",value)}}
                />
                <Text className="text-lg ml-2 mb-3 mt-5">Confirm password</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Text your password"
                    textContentType="password"
                    onChangeText={(value)=>{handleChange("confirmPassword",value)}}
                />
                <Text className="text-lg ml-2 mb-3 mt-5">Enter phone</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Enter your phone"
                    textContentType="telephoneNumber"
                    onChangeText={(value)=>{handleChange("phone",value)}}
                />

                <TouchableOpacity
                    onPress={handleSignup}
                    className="bg-[#4CAD73] p-2 rounded-2xl mt-5">
                    <Text className="text-[#FFFFFF] text-xl  text-center">Signup</Text>
                </TouchableOpacity>
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
export default Signup
