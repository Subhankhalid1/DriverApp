import React from 'react';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UserAvatar from "../assets/logo.jpeg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../App';
const DrawerContent = (props) => {
    const { auth , setauth }  =React.useContext(AuthContext);
    const Logout =()=>{
        setauth(null)
        AsyncStorage.clear()
    //    navigation.navigate('SignIn')
        
    }
    return (
        <View style={styles.main}>
            <View style={styles.topView}>
                <Image style={{ width: 220, height: 220, borderRadius: 50 }} source={UserAvatar} />
            </View>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity style={styles.touchDesign} onPress={() => props.navigation.navigate("Orders")}>
                    <View style={styles.subView}>
                        <Icon name='book-multiple-outline' size={25} color="white" />
                        <Text style={styles.text}>My Orders</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchDesign}  onPress={() => props.navigation.navigate("Messages")}>
                    <View style={styles.subView}>
                        <Icon name='android-messages' size={25} color="white" />
                        <Text style={styles.text}>Messages</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchDesign} onPress={() => props.navigation.navigate("Profile")}>
                    <View style={styles.subView}>
                        <Icon name="account" size={25} color="white" />
                        <Text style={styles.text}>My Account</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchDesign} onPress={() => props.navigation.navigate("Alerts")}>
                    <View style={styles.subView}>
                        <Icon name='bell-outline' size={25} color="white" />
                        <Text style={styles.text}>Alerts</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchDesign}>
                    <View style={styles.subView}>
                        <Icon name='contacts' size={25} color="white" />
                        <Text style={styles.text}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchDesign}>
                    <View style={styles.subView}>
                        <Icon name='information-variant' size={25} color="white" />
                        <Text style={styles.text}>About Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchDesign} onPress={() => Logout()}>
                    <View style={styles.subView}>
                        <Icon name='logout' size={25} color="white" />
                        <Text style={styles.text}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#bad759",
    },
    touchDesign: {
        padding: 10
    },
    subView: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: "white",
        marginLeft: 10
    },
    topView: {
        flexDirection: "column",
        justifyContent: "center",
        paddingVertical: 0,
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 25,
        color: "white"
    }
})