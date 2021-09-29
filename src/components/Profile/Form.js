import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import { View, Text } from "react-native";

const Form = () => {
    return <View style={{ marginTop: 25 }}>
        <Input
            placeholder='First Name'
            leftIcon={<Icon name='user' size={24} color='#bad759' />}
            rightIcon={<MaterialIcon name='pencil' size={24} color='#bad759' />}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
        <Input
            placeholder='Last Name'
            leftIcon={<Icon name='user' size={24} color='#bad759' />}
            rightIcon={<MaterialIcon name='pencil' size={24} color='#bad759' />}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
        <Input
            placeholder='Email Address'
            leftIcon={<MaterialIcon name='email' size={24} color='#bad759' />}
            rightIcon={<MaterialIcon name='pencil' size={24} color='#bad759' />}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
        <Text style={{
            textAlign: "center",
            backgroundColor: "#bad759",
            marginHorizontal: 20,
            borderRadius: 50,
            color: "white",
            fontSize: 20,
            paddingVertical: 8,
            marginTop: 10,
            marginBottom:10
        
            
        }}
        >Save</Text>
    </View>
}

export default Form;