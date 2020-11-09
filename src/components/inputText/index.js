import React from 'react';
import {
 View, Text,TextInput
} from 'react-native'

function Input({ error, textError, cleanError, style, icon, label = "",styles, ...rest  }) {
  return (
    <View >
       {
        label !== ""
        ? <View>
            <Text style={{color:'#fff'}}>{label}</Text>
          </View>
        : null
      }  
       <View style={{marginTop:10, width:'100%'}} >
          <TextInput style={styles} {...rest} />
        </View>
    </View>
  );
}

export default Input;
