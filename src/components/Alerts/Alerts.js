import React, {useState, useEffect} from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import Header from '../Header/Header'
import Pic from '../../assets/SliderImage/4.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import MapComponent from "./Map";
import axios from 'axios'

const Alerts = ({navigation}) => {
  const {width} = Dimensions.get('screen')
  const [orderData, setOrderData]=useState()
  useEffect(() => {

    profile()
   // findOrderByID()
  }, [])
  const profile = async () => {
    const jsonValue = await AsyncStorage.getItem('driver')
    jsonValue != null ? JSON.parse(jsonValue) : null
    const result = JSON.parse(jsonValue)
    

    // setProfileData(result)
    const driverID=result?.user._id
  console.log(' driver ID from===>', driverID)
    await axios.post(`http://192.241.141.11:8000/api/order/myOrders`,{driverID})
    .then(function (response) {
      // handle success
      console.log("driver order=====>",JSON.stringify(response.data));
      // setOrderData(JSON.stringify(response.data))
      //navigation.navigate("Login")
    })
    .catch(function (error) {
      // handle error
      console.warn(error.message);
    });
  }
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} component='Alerts' />
      <View
        style={{
          flexDirection: 'row',
          width,
          padding: 10,
          backgroundColor: 'white',
        }}>
        <Image source={Pic} style={{width: 105, height: 110}} />
        <View
          style={{
            justifyContent: 'space-around',
            flexGrow: 2,
            paddingHorizontal: 15,
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {' '}
              WellBeans Restaurants
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Chowmein</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 15, color: 'red'}}>Quantity:1</Text>
              <Text style={{fontSize: 15, color: 'red'}}>Total Bill: 130</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 15, color: '#777'}}>From: Location 1</Text>
            <Text style={{fontSize: 15, color: '#777'}}>To: Location 2</Text>
          </View>
        </View>
      </View>
      <View
        style={{flex: 1, justifyContent: 'space-between', paddingVertical: 15}}>
        {/* <View>
                    <MapComponent />
                </View> */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => _changeOrderStatus('Reject')}
            style={{flexGrow: 1, marginHorizontal: 15}}>
            <Text
              style={{
                backgroundColor: '#bad759',
                color: 'white',
                padding: 10,
                textAlign: 'center',
                fontSize: 18,
              }}>
              Reject
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _changeOrderStatus('Accept')}
            style={{flexGrow: 1, marginHorizontal: 15}}>
            <Text
              style={{
                backgroundColor: '#bad759',
                color: 'white',
                padding: 10,
                textAlign: 'center',
                fontSize: 18,
              }}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Alerts
