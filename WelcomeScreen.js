import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native'; 
import { Header } from 'react-native-elements';

export default class WelcomeScreen extends Component { 
    render() { 
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
<Image source={require("../assets/indane.jpg")} style={{width:400,height:200}}></Image>
       
        <View><Header
        centerComponent={{ text: 'INDANE GAS ', style: { color: '#fff' } }}
        ></Header></View>
       
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>{this.props.navigation.navigate('Loginscreen')}
    }
        >
          <Text>Next</Text>
        </TouchableOpacity>
         </View> 
         );

           } 

          }



        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: "#6fc0b8"
              },
            registerButton: {
               
                justifyContent: "center",
                alignItems: "center",
              
                backgroundColor: "#32867d",
                shadowColor: "#000",
                },
            })
