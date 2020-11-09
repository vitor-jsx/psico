import React from 'react';
import {StyleSheet,Text,ActivityIndicator,TouchableOpacity} from 'react-native'

const IputButton = (props) => {
    const styles = StyleSheet.create({
        button:{
            backgroundColor:props.backgroundColor ? props.backgroundColor : '#3B3941',
            height:50,
            borderRadius:5,
            marginTop:15,
            justifyContent:'center',
            alignContent:'center',
            textAlign:'center',
            alignItems:'center',
        },
        buttonText:{
            justifyContent:'center',
            alignContent:'center',
            textAlign:'center',
            alignItems:'center',
            color:'#fff',
            fontSize:16,
            fontWeight:'600'
        }
    })
    return (
     <TouchableOpacity style={[styles.button,props.style]} disabled={props.disable} editable={props.editable} onPress={() => props.pressFunction()} >
        {
            props.isLoading ?
            <ActivityIndicator style={{ marginLeft: 10}} size="small" color="#FFF" /> :
            <Text style={styles.buttonText}>{ props.mensagem ? props.mensagem : 'Continuar'}</Text>
        }
     </TouchableOpacity>
    )
  };

  export default IputButton;
  