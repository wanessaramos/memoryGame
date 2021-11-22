import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carta from '../components';
import ContextGame from '../context/ContextGame';
import { embaralharCartas } from '../utils';
import Color from '../utils/color.js';

const window = Dimensions.get('window');

export default function Game() {
  const { state, dispatch } = useContext(ContextGame);
  const [baralho, setBaralho] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [cartaClicada, setCartaClicada] = useState(undefined);
  const DUAS_CARTAS = 2;
  const TIME_MS_VIRAR_CARTA = 600;

  useEffect(() => {
    setBaralho(state.cartas);
  }, [baralho]);

  const getTypeReiniciar = (baralho) => {
    return { type: 'REINICIAR', payload: embaralharCartas(baralho) };
  };

  const getTypeVirarCartas = (e) => {
    return { type: 'VIRA_CARTAS', payload: e };
  };

  function verificaCarta(newCartaClicada) {
    if (cartaClicada === undefined) {
      setCartaClicada(newCartaClicada);
    } else {
      let cartasViradas = [];

      if (cartaClicada.nome !== newCartaClicada.nome) {
        cartasViradas.push(cartaClicada);
        cartasViradas.push(newCartaClicada);

        setTimeout(() => {
          for (var posicao = 0; posicao < DUAS_CARTAS; posicao++) {
            dispatch(getTypeVirarCartas(cartasViradas[posicao]));
          }
        }, TIME_MS_VIRAR_CARTA);

        setCartaClicada(undefined);
      } else {
        setPontuacao(pontuacao + 100);
        setCartaClicada(undefined);
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(getTypeReiniciar(baralho)), setPontuacao(0);
          }}
        >
          <Text style={styles.scoreName}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {baralho.map((item) => (
          <Carta
            key={item?.id}
            carta={item}
            pegarCarta={() => verificaCarta(item)}
          />
        ))}
      </View>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightBlue,
    alignItems: 'center',
  },
  content: {
    width: window.width,
    height: window.height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: Color.white,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  score: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scoreText: {
    color: Color.gray,
    fontSize: 18,
  },
  scoreName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.gray,
  },
  button: {
    backgroundColor: Color.lightBlue,
    width: 100,
    height: 30,
    alignItems: 'center',
  },
});
