import React from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';

import Input from '../../components/inputText';
import Return from '../../components/return';
import Button from '../../components/inputButton'

const Login = () =>{
    const styles = StyleSheet.create({
        background:{
            backgroundColor:'#211F28',
            flex:1,
            justifyContent:'flex-start',
            alignContent:'center',
            padding:'5%',
        },
        ViewReturn:{
            top:30,
        },
        viewText:{
           marginTop:30
        },
        titulo:{
            fontSize:30,
            fontWeight:'700',
            marginTop:25,
            color:'#fff'
        },
        description: {
            fontSize:20,
            fontWeight:'400',
            marginTop:10,
            color:'#D4D4D4',
            lineHeight:25
        },
        input: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
        },
        inputsView:{
            marginTop:25
        },
        input:{
            backgroundColor:'#3B3540',
            borderRadius:5,
            color:'#fff'
        },
        buttonView:{
            width:'100%',
            marginTop:20
        }
    })
 
    return(
    <TouchableOpacity style={styles.background} activeOpacity={1}  onPress={Keyboard.dismiss} >
        <View style={styles.ViewReturn} >
            <Return/>
        </View>
       <View style={styles.viewText}>
            <Text style={styles.titulo} >Seja muito bem vindo!</Text>
            <Text style={styles.description}>Faça seu login e acesse nossa plataforma, estamos ansiosos por você!</Text>
       </View>

       <View style={styles.inputsView} >
            <KeyboardAvoidingView>
                <View>
                        <Input styles={styles.input} label='Email' />
                </View>
                <View style={{marginTop:20}}>
                        <Input styles={styles.input} label='Senha' />
                </View>

                <View style={styles.buttonView} >
                    <Button mensagem='Enviar' backgroundColor='#6C63FF'/>
                </View>
            </KeyboardAvoidingView>
        </View>
    </TouchableOpacity>
 )
}

export default Login