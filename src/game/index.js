import { StatusBar } from 'expo-status-bar';
import React,{useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Carta from '../components';
import ContextGame from '../context/ContextGame';
import {embaralharCartas} from '../utils';
const window = Dimensions.get("window");

export default function Game() { 
  const {state, dispatch} = useContext(ContextGame);
  const[baralho, setBaralho] = useState([]);
  const[pontuacao, setPontuacao]=useState(0);
  const[cartaClicada, setCartaClicada]=useState(undefined);
  
  useEffect(()=>{
    setBaralho(state.cartas)
  },[baralho])
    
   function verificaCarta(newCartaClicada){
    
     if(cartaClicada === undefined){

        setCartaClicada(newCartaClicada) 

     }else{

        var cartasViradas = []

        if(cartaClicada.nome != newCartaClicada.nome){

          cartasViradas.push(cartaClicada)
          cartasViradas.push(newCartaClicada)

         setTimeout(() => {
          for(var i = 0; i < 2; i++){
            dispatch({
              type:'VIRA_CARTAS',
              payload:cartasViradas[i]
            })
          }   
         }, 600);

          setCartaClicada(undefined) 

        }else{
          setPontuacao(pontuacao + 100)  
          setCartaClicada(undefined) 
        }
     }  
   }

  return ( 
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.score}>
          <Text style={styles.scoreName}>Pontuação: </Text>
          <Text style={styles.scoreText}>{pontuacao}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{
            dispatch({
              type:'REINICIAR',
              payload:embaralharCartas(baralho)
            }), setPontuacao(0) 
        }}>
          <Text style={styles.scoreName}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.content}>
      {baralho.map((item) => (
        <Carta key={item.id} carta={item} pegarCarta={()=>verificaCarta(item)}/>
      ))}
      </View>
      <StatusBar hidden/>
    </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center', 
  },
  content: {
    width:window.width,
    height:window.height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  menu:{
    backgroundColor: '#FFF',
    width:'100%',
    height:50,
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row', 
  },
  score:{
    width:200,
    height:50,
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection:'row',  
  },
  scoreText:{
   color:'#333',
   fontSize:18,
  },
  scoreName:{
    fontSize:18,
    fontWeight: 'bold',
    color:'#333' 
   },
   button:{
    backgroundColor: '#ADD8E6',
    width:100,
    height:30,
    alignItems: 'center',
   },

});
