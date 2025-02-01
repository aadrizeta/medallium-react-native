import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./app/presentacion/views/home/Home";

const Stack = createStackNavigator();

const MainNavigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Home"} component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}