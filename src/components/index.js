import React,{useContext} from 'react';
import { StyleSheet,Image, TouchableOpacity } from 'react-native';;
import ContextGame from '../context/ContextGame';

export default function Carta({carta, pegarCarta}){

   const {dispatch} = useContext(ContextGame);
  
   return(
        <TouchableOpacity style={styles.content} disabled={!carta.virada}
        onPress={()=>{
            dispatch({
              type:'VIRA_CARTA',
              payload:carta
            }),pegarCarta(carta)
        }}>
            {carta.virada ? 
            <Image style={styles.image}
                source={{uri:carta.verso}}/> : 
           <Image style={styles.image}
                source={{uri:carta.frente}}/>
            }
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    content: {
      padding:10,
    },
    image: {
      resizeMode:'contain',
      width:100,
      height:110,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor:'#333',
      backgroundColor:"#FFF"
    },
  
  });
