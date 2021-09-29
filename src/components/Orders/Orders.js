import React, { useState } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import Header from "../Header/Header";
import Pic from "../../assets/SliderImage/4.jpg";

const Orders = ({ navigation }) => {
    const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [selectedId, setSelectedId] = useState(null);
    const { width } = Dimensions.get("screen");

    const _renderItem = () => {
        return <TouchableOpacity 
        style={{ flexDirection: "row", width, padding: 10, backgroundColor: "white", marginBottom: 5 }}
        onPress={() => navigation.navigate('Home')}
        >
            <Image source={Pic} style={{ width: 75, height: 75 }} />
            <View style={{ justifyContent: "space-around", flexGrow: 2, paddingHorizontal: 15 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Name of order</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15, color: "#777" }}>From: Location 1</Text>
                    <Text style={{ fontSize: 15, color: "#777" }}>To: Location 2</Text>
                </View>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} component="Orders" />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={_renderItem}
                keyExtractor={(item, id) => item.id}
                extraData={selectedId}
               
            />

        </View>
    )
}

export default Orders;