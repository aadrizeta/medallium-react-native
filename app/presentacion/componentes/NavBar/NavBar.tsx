import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "../../views/home/Home";
import Profile from "../../views/profile/Profile";
import Login from "../../views/auths/Login";

const Drawer = createDrawerNavigator();
 const NavBar = () => {
     return (
         <Drawer.Navigator>
             <Drawer.Screen name="Home" component={Home} />
             <Drawer.Screen name="Profile" component={Profile} />
             <Drawer.Screen name={"Login"} component={Login}/>
         </Drawer.Navigator>
     )
 }
 export default NavBar;