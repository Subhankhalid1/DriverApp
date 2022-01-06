import React, {useState, useContext} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert
} from 'react-native'
import {Input} from 'react-native-elements'
import { AuthContext } from '../../../App'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Animatable from 'react-native-animatable'
// import {Globalcontext} from '../../context/Context'
const {height} = Dimensions.get('screen')
// const { userRegister, setUserRegister } = useContext(Globalcontext);
const Login = ({navigation}) => {
  const { auth , setauth }  = useContext(AuthContext);
  const [iserror,seterror]= useState('')
//   const {userRegister, setUserRegister} = useContext(Globalcontext)
  const [user, setUser] = useState({
  
    email: '',
    password: '',
   
  })
  const handleChange = (name, value) => {

    setUser({
      ...user,
     [name] : value,
    })
  }
  console.log(user)
  const handleSignIn = async (e )=> {
 
     axios.post('http://192.241.141.11:8000/api/driver/login', user)
     .then(function (response) {
      // handle success
      console.log(response.data)
      console.log("Driver login",response.data);
      const Setdata= async()=>{
      const jsonValue = JSON.stringify(response.data)
     await  AsyncStorage.setItem('driver', jsonValue)
      }
      Setdata()
      if(response?.data?.message){
        seterror(response?.data?.message)
      }
      
      else{
      setauth(response?.data)
      }
    }) 
    .catch(function (error) {
      // handle error
      console.warn("error.message",error.message);
    });
    // localStorage.setItem('token', JSON.stringify(data.token))
    // await AsyncStorage.setItem(compoundKey, JSON.stringify(data));
  
  }

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
      
        <View style={{flexDirection: 'row', paddingLeft: 10}}>
          <Text style={{fontSize: 15}}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
           
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 10}}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                color: '#bad759',
                textDecorationLine: 'underline',
              }}>
          {iserror}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{paddingHorizontal: 50}}
          >
          <Text style={styles.button} onPress={ handleSignIn} >
      
            LOGIN
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  )
}

export default Login

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
