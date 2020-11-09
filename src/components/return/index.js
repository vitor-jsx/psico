import React from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Return = () => {
    const navigation = useNavigation();
    const style = StyleSheet.create({
        botton:{
            backgroundColor:'#6C63FF',
            paddingHorizontal:22,
            paddingVertical:5,
            borderRadius:5,
            width:57
        },
    })
    return ( 
            <TouchableOpacity style={style.botton} onPress={()=>{navigation.goBack()}}>  
                <Icon name='angle-left' size={30} color='#fff'/>
            </TouchableOpacity>
    )}

export default Return