import React, {useState} from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView,Keyboard} from 'react-native';

import ImageBatePapo from '../../assets/imagens/bate-papo.png';
import ImagePaciente from '../../assets/imagens/paciente.png'

import Return from '../../components/return';
import Button from '../../components/inputButton'

const SelectTypeUser = ({navigation}) =>{
    const [userNormal, setUserNormal] = useState(false)
    const [userVoluntary, setUserVoluntary] = useState(true)

    const styles = StyleSheet.create({
        background:{
            backgroundColor:'#211F28',
            flex:1,
            justifyContent:'flex-start',
            alignContent:'center',
            padding:'5%',
        },
        ViewReturn:{
            marginTop:30,
        },
        buttonView:{
            position:'absolute',
            bottom:30,
            width:'100%',
            alignSelf:'center'
        },
        textPage:{
            marginTop:30
        },
        titulo:{
            fontSize:25,
            fontWeight:'700',
            color:'#fff'
        },
        description: {
            fontSize:20,
            fontWeight:'400',
            marginTop:5,
            color:'#D4D4D4',
            lineHeight:25
        },
        cardUserTypeView:{
            marginTop:20
        },
        cardUser:{
            marginTop:20,
            backgroundColor:'#3B3540',
            padding:'5%',
            flexDirection:'row',
            borderRadius:5,
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            textAlign:'center',
            borderWidth:2,
            borderColor: userVoluntary === true ?'#3B3540':'#6b63ffc7',
        },
        cardVoluntary:{
            marginTop:20,
            backgroundColor:'#3B3540',
            padding:'5%',
            flexDirection:'row',
            borderRadius:5,
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            textAlign:'center',
            borderWidth:2,
            borderColor: userNormal === true ?'#3B3540':'#6b63ffc7',
        },
        tituloCard:{
            fontSize:20,
            fontWeight:'700',
            color:'#fff'
        },
        descriptionCard:{
            fontSize:15,
            fontWeight:'400',
            color:'#D4D4D4',
            width:'100%'
        },
        imagem: {
            width:70,
            height:70,
            resizeMode:'contain'
        },
        textCard:{
            marginLeft:20,
            flex: 1, 
        }
    })
    
    const onsubmit = () => {
        if(userNormal === true) {
            navigation.navigate('RegisterUserNormal', {
                userData: {
                 typeUserNormal:true
                }
             })
        } else {
            navigation.navigate('RegisterUserVoluntary', {
                userData: {
                 typeUserVoluntary:true
                }
             })
        }
    }

    return(
    <TouchableOpacity style={styles.background} activeOpacity={1}  onPress={Keyboard.dismiss} >
        
        <View style={styles.ViewReturn} >
            <Return/>
        </View>

        <View style={styles.textPage} >
                <Text style={styles.titulo}>Que tipo de usuário você é ?</Text>  
                <Text style={styles.description}>Para realizarmos o seu cadastro precisamos saber um pouquinho sobre você :)</Text>   
        </View>
        
        <View style={styles.cardUserTypeView}>

            <TouchableOpacity style={styles.cardUser}
            onPress={()=>{
                setUserNormal(true)
                setUserVoluntary(false)
            }} >
                <View>
                    <Image style={styles.imagem}  source={`${ImageBatePapo}`}  />
                </View>
               
               <View style={styles.textCard} >
                   <Text style={styles.tituloCard}>Busco atendimento</Text>
                   <Text style={styles.descriptionCard}>
                       asdasdas daldkasld kjasl dkjask ldj dfsdfsdf  dfsdfsdf dfsdfsdf 
                   </Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardVoluntary} 
             onPress={()=>{
                setUserNormal(false)
                setUserVoluntary(true)
            }} >
                <View>
                    <Image style={styles.imagem}  source={`${ImagePaciente}`}  />
                </View>
               
               <View style={styles.textCard} >
                   <Text style={styles.tituloCard}>Sou Voluntario</Text>
                   <Text style={styles.descriptionCard}>
                       asdasdas daldkasld kjasl dkjask ldj dfsdfsdf dfsdfsdf dfsdfsdf 
                   </Text>
               </View>
            </TouchableOpacity>
        </View>

        

         <View style={styles.buttonView} >
            <Button mensagem='Continuar' backgroundColor='#6C63FF' pressFunction={()=>onsubmit()} />
        </View>
    </TouchableOpacity>
 )
}

export default SelectTypeUser