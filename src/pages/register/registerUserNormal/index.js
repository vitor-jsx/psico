import React from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView,Keyboard, ScrollView} from 'react-native';

import Input from '../../../components/inputText';
import Return from '../../../components/return';
import Button from '../../../components/inputButton'

const RegisterUserNormal = () =>{
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
            fontSize:25,
            fontWeight:'700',
            marginTop:30,
            color:'#fff'
        },
        description: {
            fontSize:17,
            fontWeight:'400',
            marginTop:5,
            color:'#D4D4D4',
            lineHeight:20
        },
        inputsView:{
            marginTop:25
        },
        input:{
            backgroundColor:'#3B3540',
            borderRadius:5,
            color:'#fff',
        },
        buttonView:{
            width:'100%',
            marginTop:20
        }
    })
 
    return(
    <TouchableOpacity style={styles.background} activeOpacity={1}  onPress={Keyboard.dismiss} >
        <ScrollView>
            <View style={styles.ViewReturn} >
                <Return/>
            </View>
        <View style={styles.viewText}>
                <Text style={styles.titulo} >Atenção ao se cadastrar</Text>
                <Text style={styles.description}>Ficamos feliz em te-lo conosto, não esqueça de preencher todos os campos com as informações corretas </Text>
        </View>

        <View style={styles.inputsView} >
                <KeyboardAvoidingView>
                    <View>
                            <Input styles={styles.input} label='Seu nome completo' />
                    </View>

                    <View  style={{marginTop:20}}>
                            <Input styles={styles.input} label='Seu Email' />
                    </View>

                    <View style={{marginTop:20}}>
                            <Input styles={styles.input} label='Seu CPF' />
                    </View>

                    <View style={{marginTop:20}}>
                            <Input styles={styles.input} label='Seu RG' />
                    </View>

                    <View style={{marginTop:20}}>
                            <Input styles={styles.input} label='Sua data de nascimento' />
                    </View>

                    <View style={styles.buttonView} >
                        <Button mensagem='Continuar' backgroundColor='#6C63FF'/>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    </TouchableOpacity>
 )
}

export default RegisterUserNormal