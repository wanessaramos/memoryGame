import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import ContextGame from '../context/ContextGame';
import Color from '../utils/color.js';

export default function Carta(props) {
  const { carta, pegarCarta } = props;
  const { dispatch } = useContext(ContextGame);

  return (
    <TouchableOpacity
      style={styles.content}
      disabled={!carta?.virada}
      onPress={() => {
        dispatch({ type: 'VIRA_CARTA', payload: carta }), pegarCarta(carta);
      }}
    >
      {carta?.virada ? (
        <Image style={styles.image} source={{ uri: carta?.verso }} />
      ) : (
        <Image style={styles.image} source={{ uri: carta?.frente }} />
      )}
    </TouchableOpacity>
  );
}

Carta.propTypes = {
  carta: PropTypes.any,
  pegarCarta: PropTypes.func,
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.gray,
    backgroundColor: Color.white,
  },
});
