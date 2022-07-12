import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,  TouchableHighlight, Alert } from 'react-native';

import Botao from './assets/Componetes/Botao'
export default function App() {
  const [PrimeiroNumero,setPrimeiroNumero] = useState(0);
  const [segundoNumero,setsegundooNumero] = useState(0);
  const [Sinal,setsinal] = useState("");
  const [StringCalculo,setStringCalculo] = useState("0");

  var numero= [];
  for(var i =9 ; i>-1; i--){
    numero.push(i);
  }
  numero.push("C");
function Logicacalcular(tecla){
  console.log(tecla)
if(tecla == "C"){
  setStringCalculo("0");
setsinal("");
setPrimeiroNumero(0);
setsegundooNumero(0);
}
else if(Sinal==""){
  setStringCalculo(parseInt(PrimeiroNumero.toString()+ tecla.toString()))
   setPrimeiroNumero(parseInt(PrimeiroNumero.toString()+tecla));
  console.log("primeiro numero:"+PrimeiroNumero);
}
if(tecla == '/' ||tecla=='*' || tecla =='-'||tecla=='+' && segundoNumero == 0){
  setStringCalculo(parseInt(PrimeiroNumero.toString())+tecla.toString())
  setsinal(tecla);
  console.log(Sinal);
}
if(Sinal!=""){
  
  setStringCalculo(parseInt(PrimeiroNumero.toString())+Sinal+ parseInt(segundoNumero.toString()+tecla.toString()))

  setsegundooNumero(parseInt(segundoNumero.toString()+tecla.toString()));
  console.log(segundoNumero)
  console.log(Sinal)
}if(tecla=="="){
  let total = 0;
   if (Sinal=="+") {
  
    total = PrimeiroNumero + segundoNumero 
    
    setStringCalculo(total)
    
  }else if(Sinal=="-"){
    total = PrimeiroNumero - segundoNumero 
    

}else if(Sinal=="*"){
  total = PrimeiroNumero * segundoNumero 
    

}else if (Sinal=="/") {
  total = PrimeiroNumero / segundoNumero 
    
}
setStringCalculo(total);
setsinal("");
setPrimeiroNumero(total);
setsegundooNumero(0);

}

}

  return( <View style={styles.container}>
            <Image
        style={styles.tinyLogo}
        source={require('./assets/Imagens/Logo.png')}
      />
      <Text style={{color:'white', marginTop:10, textAlign:'center',  fontSize:30}}>Calculadora</Text>
      <View style={{top:70}}><Text style={{color:'white',fontSize:24, borderColor:'white', borderBottomWidth:2}}>{StringCalculo}</Text></View>
      <View style={{flexDirection:'row', top:90, flex:1 , justifyContent:'center', alignContent:'center',backgroundColor:'#ed7b24',width:'100%',height:'25%'}}>

        <TouchableHighlight  onPress={()=>Logicacalcular('/')} underlayColor="#a1460a" style={{width:'20%', height:'20%'}}><Text style={{color:'white',fontSize:30, textAlign:'center',width:'100%', height:'100%'}}>/</Text></TouchableHighlight>
        <TouchableHighlight  onPress={()=>Logicacalcular('+')} underlayColor="#a1460a" style={{width:'20%', height:'20%'}}><Text style={{color:'white',fontSize:30, textAlign:'center',width:'100%', height:'100%'}}>+</Text></TouchableHighlight>
        <TouchableHighlight  onPress={()=>Logicacalcular('-')} underlayColor="#a1460a" style={{width:'20%', height:'20%'}}><Text style={{color:'white',fontSize:30, textAlign:'center',width:'100%', height:'100%'}}>-</Text></TouchableHighlight>
        <TouchableHighlight  onPress={()=>Logicacalcular('*')} underlayColor="#a1460a" style={{width:'20%', height:'20%'}}><Text style={{color:'white',fontSize:30, textAlign:'center',width:'100%', height:'100%'}}>*</Text></TouchableHighlight>
        <TouchableHighlight  onPress={()=>Logicacalcular('=')} underlayColor="#a1460a" style={{width:'20%', height:'20%'}}><Text style={{color:'white',fontSize:30, textAlign:'center',width:'100%', height:'100%'}}>=</Text></TouchableHighlight>
        
        
      </View>

     <View style={{flex:1, flexDirection:'row',flexWrap:'wrap',top:-150}}>  
    {
      numero.map(function(m){
        return(<Botao Logica = {Logicacalcular} Num={m}></Botao>);
      })
    }</View>
      <StatusBar hidden={true}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  tinyLogo:{
    height:50,
    width:50,
    tintColor:'white',
    top:60,
    left: 60
  }
});
