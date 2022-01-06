import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  
} from 'react-native'
import {Input} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import Geolocation from '@react-native-community/geolocation';
import GetLocation from 'react-native-get-location';
// import {Globalcontext} from '../../context/Context'
const {height} = Dimensions.get('screen')
const Signup = ({navigation}) => {
//   const {userRegister, setUserRegister} = useContext(Globalcontext)
const [location, setlocation] = useState({
  longitude: 31.1505,
  latitude: 72.6812,
})
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location:{
      latitude:location.latitude,
      longitude:location.longitude
    }
  })
  const handleChange = (name, value)=> {
   
    setUser({
      ...user,
      [name]: value,
    })
  }
  console.log(user)
  const handleSignUp = async (e )=> {
   // e.preventDefault()
    // const params=JSON.stringify(user)
    await axios.post(`http://192.241.141.11:8000/api/driver/register`,user)
    .then(function (response) {
      // handle success
      console.log(JSON.stringify(response.data));
      navigation.navigate("Login")
    })
    .catch(function (error) {
      // handle error
      console.warn(error.message);
    });


  }
  
    useEffect(() => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          console.log('latitudes', location.latitude, location.longitude)
          setlocation({
            ...location,
            latitude: location.latitude,
            longitude: location.longitude,
          })
        })
        .catch(error => {
          const {code, message} = error
          console.warn(code, message)
        })
    
    
      },[])
      console.log(location)
  return (
    <ScrollView style={styles.main}>
      <View style={styles.headingView}>
        <Animatable.Text
          animation='fadeInRight'
          duration={1000}
          style={styles.headingText}>
          Welcome !
        </Animatable.Text>
      </View>
      <Animatable.View
        animation='fadeInUpBig'
        duration={1000}
        style={styles.formView}>
        <Input
          placeholder='Name'
          name='name'
          onChangeText={(e)=>handleChange("name", e)}
        />
        <Input
          placeholder='Email'
          name='email'
          vlaue={user.email}
          onChangeText={(e)=>handleChange("email", e)}
        />
        <Input
          placeholder='Password'
          name='password'
          secureTextEntry={true}
          vlaue={user.password}
          onChangeText={(e)=>handleChange("password", e)}
        />
        <Input
          placeholder='Phone'
          name='phone'
          vlaue={user.phone}
          onChangeText={(e)=>handleChange("phone", e)}
        />
        <View style={{flexDirection: 'row', paddingLeft: 10}}>
          <Text style={{fontSize: 15}}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 15,
                color: '#bad759',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{paddingHorizontal: 50}}
          onPress={() => handleSignUp()}>
          <Text style={styles.button}>
            Register
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#bad759',
    flex: 1,
  },
  headingText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  headingView: {
    justifyContent: 'center',
    height: height / 3,
  },
  formView: {
    height: height / 1.59,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingTop: 10,
    // paddingBottom:200
  },
  button: {
    backgroundColor: '#bad759',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 20,
  },
})
