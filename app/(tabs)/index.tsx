import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import { Searchbar } from 'react-native-paper';
import {Link, useRouter} from "expo-router";

const Index = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const router = useRouter();

    // Fetch Categories
    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/categories");
            const json = await res.json();
            if (json.success) {
                setCategories(json.categories.slice(0, 4)); // top 4 categories
            }
        } catch (error) {
            console.log("Category Fetch Error:", error);
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
            console.log("Product Fetch Error:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} className="h-full w-full">
            <ScrollView>
                <View className="mx-10">
                    {/* Header */}
                    <View className="flex flex-row justify-between items-center">
                        <Image source={require("../../assets/images/menuicon.png")} style={{ height: 18, width: 24 }} />
                        <Text className="text-2xl">Home</Text>
                        <Image source={require("../../assets/images/notificationicon.png")} style={{ height: 34, width: 34 }} />
                    </View>

                    {/* Search */}
                    <View className="mt-5">
                        <Searchbar
                            placeholder="Search here"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            style={{ backgroundColor: '#F5F5F5', borderRadius: 15 }}
                        />
                    </View>

                    {/* DISCOUNT SECTION (KEPT AS-IS) */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View className="w-[307px] h-[163px] bg-[#C4C4C4] mt-5 rounded-2xl mr-2">
                            <TouchableOpacity>
                                <View className="w-[135px] h-full bg-[#4CAD73] rounded-l-2xl flex justify-center items-center">
                                    <View>
                                        <Text className="text-2xl font-bold text-white">Discount</Text>
                                        <Text className="text-4xl font-bold text-white">25%</Text>
                                        <Text className="text-white">All Vegetables</Text>
                                        <View className="bg-yellow-200 rounded-full px-2 w-[80px] mt-3 text-xs">
                                            <Text>See Detail</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="w-[307px] h-[163px] bg-[#C4C4C4] mt-5 rounded-2xl">
                            <TouchableOpacity>
                                <View className="w-[135px] h-full bg-[#4CAD73] rounded-l-2xl flex justify-center items-center">
                                    <View>
                                        <Text className="text-2xl font-bold text-white">Discount</Text>
                                        <Text className="text-4xl font-bold text-white">25%</Text>
                                        <Text className="text-white">All Vegetables</Text>
                                        <View className="bg-yellow-200 rounded-full px-2 w-[80px] mt-3 text-xs">
                                            <Text>See Detail</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    {/* CATEGORIES */}
                    <View className="mt-5">
                        <View className="flex flex-row justify-between">
                            <Text className="font-semibold text-lg">Categories</Text>
                            <Link href="/categories">
                                <Text className="text-[#4CAD73]">Show all</Text>
                            </Link>
                        </View>

                        <View className="flex flex-row flex-wrap justify-between mt-5">
                            {categories.map((cat : any, index) => (
                                <View key={cat._id || index}
                                      className="bg-green-100 w-[48%] h-[150px] rounded-xl mb-2 flex justify-between">
                                    <Text className="text-green-600 text-xl p-3">{cat.name}</Text>
                                    {/* Dummy image */}
                                    <Image source={{uri : cat.image}} className="h-[80px] w-full bg-gray-300 rounded-b-xl"></Image>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* PRODUCTS */}
                    <View>
                        <View className="flex flex-row justify-between items-center mt-3">
                            <Text className="font-semibold text-lg">Related products</Text>
                            <Text className="text-[#4CAD73]">Show all</Text>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {products.map((p : any) => (
                                <TouchableOpacity
                                    key={p._id}
                                    onPress={() => router.push(`/productdetail/${p._id}`)}
                                    className="w-[224px] h-[104px] bg-[#F5F5F5] rounded-lg flex justify-center items-center mr-3 mt-2 shadow-sm"
                                >
                                    <View className="flex flex-row items-center">
                                        <Image source={{uri : p.thumbnail}} className="w-[80px] h-[80px] bg-gray-300 rounded-lg" />
                                        <View className="ml-3">
                                            <Text className="text-lg">{p.title}</Text>
                                            <Text className="text-md text-gray-400">{p.sku}</Text>
                                            <Text className="text-[#4CAD73] font-bold">₹ 199</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;