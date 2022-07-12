import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,  TouchableHighlight } from 'react-native';
  
export default function Botao(props){

    return(
    <View style={{backgroundColor:"#24cced", borderColor:'white',borderWidth:1,width:'33.3%', height:'30%',justifyContent:'center'}}>
   <TouchableHighlight    underlayColor="#2453ed" style= {{width:'100%', height:'100%'}}  onPress={()=>props.Logica(props.Num)} ><Text style={{top:20,color:'white', fontSize:30, textAlign:'center'}}>{props.Num}</Text></TouchableHighlight> 
    </View>
    );
} 