import React, {useState} from 'react';
import { View, Text,TextInput,Image, StatusBar} from 'react-native';
import { styles } from './style';
import IlustrationImg from '../assets/illustration.png';


export  function SignIn() {
 
  return(
   <View style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor={"trasparent"} translucent /> 
     
      <Image source={IlustrationImg} style={styles.image} resizeMode='stretch'/>
   <View style={styles.container}>

     <Text style={styles.title}>
      Organize Suas {'\n'}
      Jogatinas{'\n'}
      Facilmente{'\n'}
     </Text>
     <Text style={styles.subtitle}>
      Crie grupos para jogar seus games{'\n'}
      Favoritos com seus amigos
     </Text>

   </View>
   </View>
  )
}