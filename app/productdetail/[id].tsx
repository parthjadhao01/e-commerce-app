import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const ProductDetail = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">

            {/* Scrollable Content */}
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 150 }}
            >
                {/* Product Image */}
                <View className="w-full h-[380px] bg-gray-500">
                    <Link href="/(tabs)" asChild>
                        <TouchableOpacity className="w-10 mt-3">
                            <Image
                                source={require("../../assets/images/backbutton.png")}
                                style={{ width: 12, height: 22 }}
                            />
                        </TouchableOpacity>
                    </Link>
                    <Image
                        source={{ uri: "https://source.unsplash.com/600x600/?vegetable,carrot" }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                {/* Product Info */}
                <View className="px-10 mt-5">
                    <Text className="text-2xl font-bold mb-1">Fresh Carrot</Text>
                    <Text className="text-xl text-[#4CAD73] mb-3">$10</Text>
                    <Text className="text-gray-600 mb-5 pb-3">
                        Premium F1 Hybrid Carrot Seeds. These are fresh, organic and grown
                        naturally with no chemicals. Perfect for healthy cooking and juice.
                    </Text>

                    {/* Related Products */}
                    <View className="mt-7">
                        <View className="flex flex-row justify-between items-center mb-3">
                            <Text className="font-semibold text-lg">Related products</Text>
                            <Link href="/categories">
                                <Text className="text-[#4CAD73]">Show all</Text>
                            </Link>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {/* Example Card */}
                            <TouchableOpacity className="w-[224px] h-[104px] bg-[#F5F5F5] rounded-lg flex flex-row items-center p-3 mr-3">
                                <View className="w-[80px] h-[80px] bg-gray-400 rounded-lg" />
                                <View className="ml-3">
                                    <Text className="text-lg font-semibold">Fresh Broccoli</Text>
                                    <Text className="text-red-500 font-bold">40% OFF</Text>
                                    <View className="flex flex-row items-center space-x-2">
                                        <Text className="text-[#4CAD73] font-semibold">$10</Text>
                                        <Text className="text-gray-400 line-through">$40</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* Another Card */}
                            <View className="w-[224px] h-[104px] bg-[#F5F5F5] rounded-lg flex flex-row items-center p-3 mr-3">
                                <View className="w-[80px] h-[80px] bg-gray-400 rounded-lg" />
                                <View className="ml-3">
                                    <Text className="text-lg font-semibold">Fresh Tomato</Text>
                                    <Text className="text-red-500 font-bold">30% OFF</Text>
                                    <View className="flex flex-row items-center space-x-2">
                                        <Text className="text-[#4CAD73] font-semibold">$12</Text>
                                        <Text className="text-gray-400 line-through">$20</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Action Bar */}
            <View
                className="absolute bottom-0 left-0 right-0 px-6 py-4 flex-row justify-between items-center"
                style={{
                    borderTopWidth: 1,
                    borderColor: "#e5e5e5",
                }}
            >

                {/* Quantity Selector */}
                <View className="flex flex-row justify-between w-full mt-3">
                    <View className="flex-row items-center pt-5">
                        <TouchableOpacity className="w-10 h-10 p-2 border border-[#4CAD73] rounded-lg flex items-center justify-center">
                            <Text className="text-xl text-[#4CAD73]">-</Text>
                        </TouchableOpacity>

                        <Text className="text-lg mx-3">1</Text>

                        <TouchableOpacity className="w-10 h-10 p-2 bg-[#4CAD73] rounded-lg flex items-center justify-center">
                            <Text className="text-xl text-white">+</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Add to Cart */}
                    <TouchableOpacity className="bg-[#4CAD73] py-3 w-[233px] p-4 rounded-xl">
                        <Text className="text-white text-lg font-medium">Add to Cart</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ProductDetail;
