import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { Link, useRouter } from "expo-router";

const Categories = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch Categories
    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/categories");
            const json = await res.json();
            if (json.success) {
                setCategories(json.categories);
            }
        } catch (error) {
            console.log("Category fetch error:", error);
        }
    };

    // Fetch Products
    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/products");
            const json = await res.json();
            if (json.success) {
                setProducts(json.data);
            }
        } catch (error) {
            console.log("Product fetch error:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} className="h-full w-full">
            <View className="mx-10">

                {/* Top Header */}
                <View className="flex flex-row items-center justify-start mt-3">
                    <TouchableOpacity onPress={() => router.push("/(tabs)")}>
                        <Image className="h-[30px] w-[30px]" source={require("@/assets/images/backbutton.png")} />
                    </TouchableOpacity>
                    <Text className="text-3xl mx-2">Categories</Text>
                </View>

                {/* Search Bar */}
                <View className="mt-5">
                    <Searchbar
                        placeholder="Search here"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={{ backgroundColor: '#F5F5F5', borderRadius: 15 }}
                    />
                </View>

                {/* Categories Horizontal List */}
                <View className="mt-3">
                    <View className="flex flex-row justify-between">
                        <Text className="font-semibold text-lg">Categories</Text>
                        <Link href="/categories">
                            <Text className="text-[#4CAD73]">Show all</Text>
                        </Link>
                    </View>

                    {/* Horizontal Category Cards */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mt-3"
                    >
                        {categories.map((cat: any) => (
                            <View key={cat._id} className="mr-4 items-center w-[70px]">

                                <TouchableOpacity>
                                    <View className="w-[60px] h-[60px] bg-green-100 rounded-2xl mb-2 flex justify-center items-center">
                                        <Image source={{uri : cat.image}} className="w-[44px] h-[32px] bg-gray-300 rounded-md" />
                                    </View>
                                </TouchableOpacity>

                                {/* Category Name Truncated */}
                                <Text
                                    className="text-sm text-center"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={{ width: 70 }}
                                >
                                    {cat.name}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>

                </View>

                {/* Products Grid */}
                <ScrollView className="mt-5 h-[60vh]" showsVerticalScrollIndicator={false}>
                    <View className="flex-row flex-wrap justify-between px-2">

                        {products.map((p : any) => (
                            <TouchableOpacity
                                key={p._id}
                                className="w-[48%] bg-[#F5F5F5] rounded-xl mb-4"
                                onPress={() => router.push(`/productdetail/${p._id}`)}
                            >
                                <Image source={{uri : p.thumbnail}} className="w-full h-[120px] bg-gray-300 rounded-t-xl" />

                                <View className="p-4">
                                    <Text className="text-lg">{p.title}</Text>
                                    <View className="flex-row justify-between items-center mt-2">
                                        <Text className="text-lg text-[#4CAD73]">
                                            ₹{p.price ? p.price : 100}
                                        </Text>
                                        <Image
                                            className="h-6 w-6"
                                            source={require("@/assets/images/addtocart.png")}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default Categories;
