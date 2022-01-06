import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import Header from '../Header/Header'

import Form from './Form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding';
const Profile = ({navigation}) => {
  const [defaultImg, setDefaultImg] = useState(true)
  const [profileData, setProfileData] = useState()
  const [latitude, setlatitude]=useState()
  const [longitude, setlongitude] = useState()
  const [adress, setAdress] = useState()
  
  useEffect(()=>{
    Geolocation.getCurrentPosition(info => {
      setlatitude(info.coords.latitude)
      setlongitude(info.coords.longitude)
      console.log(info )
     } )
    })

  
 
  useEffect(() => {
    profile()
  }, [])


 
  const UploadImage = () => {
    this.setDefaultImg({loadingImage: true})
  }
  const profile = async () => {
    const jsonValue = await AsyncStorage.getItem('driver')
     jsonValue != null ? JSON.parse(jsonValue) : null
    const result = JSON.parse(jsonValue)
    // console.log('driver data', result)

    setProfileData(result)
    Geocoder.init("AIzaSyBF_7sBJSSFjkiAfQghD3MV9vsbO6qSwDk", {language : "en"});
    Geocoder.from({
      latitude: latitude,
      longitude: longitude,
    })
      .then(json => {
        var addressComponent = json.results[0].address_components[1]
        console.log("adress setup",addressComponent.short_name)
        setAdress(addressComponent.short_name)
      })
      .catch(error => console.log(error))
     console.log("hahaha",latitude)
  }

    console.log("ttttttttt",profileData)
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={navigation} component='Profile' />
      {console.log("test",navigation)}
      <ScrollView>
        <View style={styles.profile}>
          <Image
            source={require('../../assets/use.png')}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <Text style={{color: 'white', fontSize: 25, marginTop: 5}}>
            {profileData?.user?.name}{' '}
          </Text>
          <Text style={{color: 'white', fontSize: 18, marginTop: 5}}>
          {adress}
          </Text>
        </View>
        <Form UploadImage={UploadImage} profile={profileData}  />
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 45,
    backgroundColor: '#bad759',
    borderTopColor: 'white',
    borderWidth: 1,
    borderBottomColor: '#bad759',
    borderLeftColor: '#bad759',
    borderRightColor: '#bad759',
  },
})
