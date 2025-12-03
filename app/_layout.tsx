import {Stack} from "expo-router";
import "./global.css"

const RootLayout = () => {
    return <Stack>
        <Stack.Screen
            name="index"
            options={{headerShown : false}}
        />
        <Stack.Screen
            name="(authentication)"
            options={{headerShown : false}}
        ></Stack.Screen>
        <Stack.Screen
            name="(tabs)"
            options={{headerShown : false}}
        >
        </Stack.Screen>
        <Stack.Screen
            name="categories"
            options={{headerShown : false}}
        >
        </Stack.Screen>
        <Stack.Screen
            name="productdetail/[id]"
            options={{headerShown : false}}
        >
        </Stack.Screen>
    </Stack>
}
export default RootLayout
