import React, { Component } from 'react'; 
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native'; 

export default class Loginscreen extends Component { 
    render() { 
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
          <Image source={require("../assets/indane.jpg")} style={{width:400,height:200}}></Image>
       
        <View>
            <Header></Header>
            </View>
       <Text>loginscreen</Text>
        
         </View> 
         );

           } 

          }