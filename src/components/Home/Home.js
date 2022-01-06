import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Header from '../Header/Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Pic from '../../assets/SliderImage/4.jpg'
import MapComponent from "./Map";

const Home = ({navigation}) => {
  
  const [orderData, setOrderData]=useState()
  useEffect(() => {

    //profile()
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
  // console.log("order data", orderData.orders)
  // const findOrderByID=async()=>{

  // const driverID=profileData?.user._id
  // console.log(' driver ID from===>', driverID)
  //   await axios.post(`http://192.241.141.11:8000/api/order/myOrders`,{driverID})
  //   .then(function (response) {
  //     // handle success
  //     console.log("driver order=====>",JSON.stringify(response.data));
  //     setOrderData(JSON.stringify(response.data))
  //     //navigation.navigate("Login")
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.warn(error.message);
  //   });

  // }
  const {width} = Dimensions.get('screen')
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} component='Home' />
      <ScrollView>
      {orderData?.map((item, index) => {
        return (
          <View
        
            style={{
              flexDirection: 'row',
              width,
              padding: 15,
              backgroundColor: 'white',
              
            }}>
            {/* <Image source={Pic} style={{ width: 105, height: 110 }} /> */}
          hshsh
            <View
              style={{
                justifyContent: 'space-around',
                flexGrow: 2,
                paddingHorizontal: 15,
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20, padding:10}}>
                  {' '}
            
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Chowmein</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={{fontSize: 15, color: 'red'}}>Order Status</Text>
                  <Text style={{fontSize: 15, color: 'red'}}>
                    {/* {item.orderStatus} */}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                  <TouchableOpacity style={{flexGrow: 1, marginHorizontal: 15}}>
                    <Text
                      style={{
                        backgroundColor: '#bad759',
                        color: 'white',
                        padding: 10,
                        textAlign: 'center',
                        fontSize: 18,
                      }}>
                      Reject Order
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexGrow: 1, marginHorizontal: 15}}>
                    <Text
                      style={{
                        backgroundColor: '#bad759',
                        color: 'white',
                        padding: 10,
                        textAlign: 'center',
                        fontSize: 18,
                      }}>
                      Accept Order
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
      })}
      </ScrollView>
      <View
        style={{flex: 1, justifyContent: 'space-between', paddingVertical: 15}}>
        <View>
                    {/* <MapComponent /> */}
                </View>
        {/* <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ flexGrow: 1, marginHorizontal: 15 }}>
                        <Text style={{ backgroundColor: "#bad759", color: "white", padding: 10, textAlign: "center", fontSize: 18 }}>Reject</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexGrow: 1, marginHorizontal: 15 }}>
                        <Text style={{ backgroundColor: "#bad759", color: "white", padding: 10, textAlign: "center", fontSize: 18 }}>Accept</Text>
                    </TouchableOpacity>
                </View> */}
      </View>
    </View>
  )
}

export default Home
