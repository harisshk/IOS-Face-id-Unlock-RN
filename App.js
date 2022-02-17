import React from "react"
// var TouchID = require('react-native-touch-id');
 import TouchID from 'react-native-touch-id';
 import {SafeAreaView, Text, TouchableHighlight, AlertIOS, View} from 'react-native'
 
export function App () {
  const pressHandler = () => {
    const optionalConfigObject = {
      title: 'Authentication Required', // Android
      imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Enter Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };
    TouchID.authenticate('', optionalConfigObject)
      .then(success => {
        alert('Authenticated Successfully');
      })
      .catch(error => {
        alert('Authentication Failed');
      });
  }
 

    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        
        <TouchableHighlight onPress={()=>pressHandler()}>
          <Text style={{color:"red"}}>
            Authenticate 
          </Text>
        </TouchableHighlight>
      
      </SafeAreaView>
    );
  
};

export default App