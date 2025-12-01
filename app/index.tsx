import {Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";



export default function Index() {
  return (
      <SafeAreaView>
            <View className="flex  items-center w-full h-full">
                <View className="px-10 mt-[170px]">
                    <Text className="text-4xl font-semibold text-center">Welcome to our store</Text>
                    <Text className="my-5 text-muted text-center">Lorem ipsum elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Text>
                    <Link href={"/(authentication)/loginsignup"} className="bg-[#4CAD73] p-2 rounded-2xl">
                        <Text className="text-[#FFFFFF] text-2xl text-center">Get Started</Text>
                    </Link>
                </View>
            </View>

      </SafeAreaView>
  );
}
