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
import Pic from '../../assets/SliderImage/4.jpg'
// import MapComponent from "./Map";

const Home = ({navigation}) => {
  const [profileData, setProfileData] = useState()
  useEffect(() => {
    profile()
  }, [])

  console.log(profileData)
  const profile = async () => {
    const jsonValue = await AsyncStorage.getItem('driver')
    // jsonValue != null ? JSON.parse(jsonValue) : null
    const result = JSON.parse(jsonValue)
    console.log('Home', result?.user?.orders)

    setProfileData(result)
  }
  const {width} = Dimensions.get('screen')
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} component='Home' />
      <ScrollView>
      {profileData?.user?.orders.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width,
              padding: 15,
              backgroundColor: 'white',
              
            }}>
            {/* <Image source={Pic} style={{ width: 105, height: 110 }} /> */}
            <View
              style={{
                justifyContent: 'space-around',
                flexGrow: 2,
                paddingHorizontal: 15,
              }}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20, padding:10}}>
                  {' '}
                  {item._id}
                </Text>
                {/* <Text style={{fontWeight: 'bold', fontSize: 18}}>Chowmein</Text> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={{fontSize: 15, color: 'red'}}>Order Status</Text>
                  <Text style={{fontSize: 15, color: 'red'}}>
                    {item.orderStatus}
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
        {/* <View>
                    <MapComponent />
                </View> */}
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
