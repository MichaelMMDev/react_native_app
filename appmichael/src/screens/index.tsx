import React, {useState} from 'react';
import { View, Text,TextInput} from 'react-native';
import { styles } from './style';



export  function SignIn() {
  const [text, setText] = useState ("Você ainda não digitou nada");

  return(
    <View style= {styles.container}>
      <Text>
        olá mundoooo
      </Text>
      <TextInput style={styles.input} onChangeText={setText}/>

     <Text>
      voce digitou: {text}
     </Text>

    </View>
  )
}