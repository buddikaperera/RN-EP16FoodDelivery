import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../constants";
import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={"Home"}
            >
                <Stack.Screen name="Home" component={CustomDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
