import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { Image } from "expo-image";
import { Checkbox } from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const [isChecked, setChecked] = useState(false);
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (key: any, value: any) => {
        setForm({ ...form, [key]: value });
    };

    const handleLogin = async () => {
        if (!form.email) {
            return Alert.alert("Error", "Email or Phone is required");
        }
        if (!form.password) {
            return Alert.alert("Error", "Password is required");
        }

        try {
            const response = await fetch("http://localhost:3001/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                return Alert.alert("Login Failed", data.message || "Invalid credentials");
            }

            // Save token + user in AsyncStorage
            await AsyncStorage.setItem("token", data.token);
            await AsyncStorage.setItem("user", JSON.stringify(data.user));

            if (isChecked) {
                await AsyncStorage.setItem("rememberMe", "true");
            }

            // Redirect to tabs
            router.replace("/(tabs)");

        } catch (error) {
            console.log("Login error:", error);
            Alert.alert("Error", "Something went wrong");
        }
    };

    return (
        <SafeAreaView>
            {/* Header */}
            <View className="flex-row items-center px-6 mt-2">
                <Link href="/(authentication)/loginsignup" asChild>
                    <TouchableOpacity className="w-10">
                        <Image
                            source={require("../../assets/images/backbutton.png")}
                            style={{ width: 12, height: 22 }}
                        />
                    </TouchableOpacity>
                </Link>

                <View className="flex-1">
                    <Text className="text-2xl text-center">Log In</Text>
                </View>

                <View className="w-10" />
            </View>

            {/* Form */}
            <View className="px-5 mt-10">
                <Text className="text-lg ml-2 mb-3">Email</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Enter your email"
                    value={form.email}
                    onChangeText={(t) => handleChange("email", t)}
                />

                <Text className="text-lg ml-2 mb-3 mt-5">Password</Text>
                <TextInput
                    className="border border-[#E6E6E6] h-[48px] p-4 rounded-xl"
                    placeholder="Enter your password"
                    value={form.password}
                    onChangeText={(t) => handleChange("password", t)}
                    secureTextEntry
                />

                <View className="mt-3 flex flex-row justify-between">
                    <View className="flex flex-row items-center">
                        <Checkbox value={isChecked} onValueChange={setChecked} color="#4CAD73" />
                        <Text className="ml-2">Remember me</Text>
                    </View>

                    <Link className="text-gray-400" href="/(authentication)/forgetpassword">
                        Forgot password ?
                    </Link>
                </View>

                {/* LOGIN BUTTON */}
                <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-[#4CAD73] p-2 rounded-2xl mt-11 flex flex-row justify-center items-center"
                >
                    <Text className="text-[#FFFFFF] text-xl text-center pt-2">
                        Log In
                    </Text>
                </TouchableOpacity>

                <View className="flex flex-row items-center mt-10">
                    <Image
                        source={require("../../assets/images/line.png")}
                        style={{ width: 160, height: 1 }}
                    />
                    <Text className="text-gray-400 m-1">Or</Text>
                    <Image
                        source={require("../../assets/images/line.png")}
                        style={{ width: 160, height: 1 }}
                    />
                </View>

                {/* Google */}
                <Link href="/signup" asChild>
                    <TouchableOpacity className="flex-row items-center justify-center border border-gray-400 p-2 rounded-2xl mt-5">
                        <Image
                            source={require("../../assets/images/google.png")}
                            style={{ width: 24, height: 24, marginRight: 10 }}
                        />
                        <Text className="text-md font-bold">Continue with Google</Text>
                    </TouchableOpacity>
                </Link>

                {/* Facebook */}
                <Link href="/signup" asChild>
                    <TouchableOpacity className="flex-row items-center justify-center border border-gray-400 p-2 rounded-2xl mt-5">
                        <Image
                            source={require("../../assets/images/facebook.png")}
                            style={{ width: 24, height: 24, marginRight: 10 }}
                        />
                        <Text className="text-md font-bold">Continue with Facebook</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    );
};

export default Login;
