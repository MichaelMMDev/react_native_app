import React, {useState} from 'react';
import { View, Text,TextInput} from 'react-native';
import { styles } from './style';



export  function SignIn() {
  const [text, setText] = useState ("");

  return(
    <View style= {styles.container}>
      <Text>
        olá mundoooo
      </Text>
      <TextInput style={styles.input}/>

     <Text>
      voce digitou:
     </Text>

    </View>
  )
}