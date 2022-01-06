import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import { View, Text } from "react-native";

const Form = ({profile}) => {
    return <View style={{ marginTop: 25 }}>
    
        {/* <Input
            placeholder={profile?.user?.phone}
            leftIcon={<Icon name='user' size={24} color='#bad759' />}
            rightIcon={<MaterialIcon name='pencil' size={24} color='#bad759' />}
        // errorMessage='ENTER A VALID ERROR HERE'
        /> */}
        
         <Text style={{
            
            
            marginHorizontal: 10,
            borderRadius:20,
            color: "#777",
            fontSize: 20,
            paddingVertical: 10,
            marginTop: 10,
            marginBottom:10
        
            
        }}
        >{profile?.user?.phone}</Text>
        <Text style={{
            
            
            marginHorizontal: 10,
            borderRadius:20,
            color: "#777",
            fontSize: 20,
            paddingVertical: 10,
            marginTop: 10,
            marginBottom:10
        
            
        }}
        >{profile?.user?.email}</Text>
    </View>
}

export default Form;