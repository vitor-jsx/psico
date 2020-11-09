import React from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';

import Imagen from '../../assets/imagens/undraw_online_messaging_9ro6.png';
import Button from '../../components/inputButton/index';

const Home = ({navigation}) => {
  return (
    <View style={styles.background}>
    
        <View style={styles.bodyView}>
            <View>
                <Image style={styles.imagemHome}  source={`${Imagen}`}  />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.title}> 
                    Seja muito bem-vindo
                </Text>
                <Text style={styles.description}> 
                    Este aplicativo promete de oferecer apoio psicologico de voluntarios, seja bem vindo e esperamos te auxiliar sempre da mesma forma
                </Text>
            </View>
        </View>
        <View style={styles.buttonView}>
                <Button mensagem='Login' backgroundColor='#6C63FF' pressFunction={() => navigation.navigate('Login')} />
                <Button mensagem='Continuar' pressFunction={()=>navigation.navigate('RegisterTypeUser', {})} />
        </View>

    </View>
  )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor:'#211F28',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        padding:'4%'
    },
    bodyView:{
        marginTop:-50,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
    },  
    imagemHome: {
        width:275,
        height:190,
        resizeMode:'contain'
    },
    viewText:{
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    title: {
        fontSize:25,
        fontWeight:'700',
        marginTop:25,
        color:'#fff'
    },
    description: {
        fontSize:16,
        fontWeight:'400',
        marginTop:10,
        color:'#D4D4D4',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        lineHeight:22
    },
    buttonView:{
        position:'absolute',
        bottom:20,
        width:'100%',
        padding:'2%'
    }
})
export default Home;
