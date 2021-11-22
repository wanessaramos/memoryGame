import React, { useReducer } from 'react';
import ContextGame from './src/context/ContextGame';
import Game from './src/game';

const cartas = [
  {
    id: '0',
    nome: 'coelho',
    frente:
      'https://i.pinimg.com/564x/15/49/be/1549be3ad431ce16bbdc8ed74ea4bd0e.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '1',
    nome: 'alice',
    frente:
      'https://i.pinimg.com/564x/47/65/a5/4765a5c712cf70f0f9ca41a617802184.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '2',
    nome: 'gato',
    frente:
      'https://i.pinimg.com/564x/be/69/c3/be69c3dcb2b7b1a484854dbf108315f6.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '3',
    nome: 'chapeleiro',
    frente:
      'https://i.pinimg.com/564x/3e/10/36/3e1036fca1b2f59119d8865dee572c34.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '4',
    nome: 'rainha',
    frente:
      'https://i.pinimg.com/564x/41/54/e1/4154e137db3d67df27702e0c53f460bf.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '5',
    nome: 'lagarta',
    frente:
      'https://i.pinimg.com/564x/ee/0f/3a/ee0f3a3e9acc325cd0834ee1a3fd16ce.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '6',
    nome: 'coelho',
    frente:
      'https://i.pinimg.com/564x/15/49/be/1549be3ad431ce16bbdc8ed74ea4bd0e.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '7',
    nome: 'alice',
    frente:
      'https://i.pinimg.com/564x/47/65/a5/4765a5c712cf70f0f9ca41a617802184.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '8',
    nome: 'gato',
    frente:
      'https://i.pinimg.com/564x/be/69/c3/be69c3dcb2b7b1a484854dbf108315f6.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '9',
    nome: 'chapeleiro',
    frente:
      'https://i.pinimg.com/564x/3e/10/36/3e1036fca1b2f59119d8865dee572c34.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '10',
    nome: 'rainha',
    frente:
      'https://i.pinimg.com/564x/41/54/e1/4154e137db3d67df27702e0c53f460bf.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
  {
    id: '11',
    nome: 'lagarta',
    frente:
      'https://i.pinimg.com/564x/ee/0f/3a/ee0f3a3e9acc325cd0834ee1a3fd16ce.jpg',
    verso:
      'https://i.pinimg.com/564x/e0/54/de/e054de63cce353bce896fd2a91ace78b.jpg',
    virada: true,
  },
];

const initialState = { cartas };

export default function App() {
  function reducer(state, action) {
    if (action.type === 'VIRA_CARTA') {
      const updateCarta = action.payload;
      updateCarta.virada = false;

      return {
        ...state,
        cartas: state.cartas.map((carta) =>
          carta.id === updateCarta.id ? updateCarta : carta
        ),
      };
    } else if (action.type === 'VIRA_CARTAS') {
      const updateCarta = action.payload;
      updateCarta.virada = true;

      return {
        ...state,
        cartas: state.cartas.map((carta) =>
          carta.id === updateCarta.id ? updateCarta : carta
        ),
      };
    } else {
      return {
        ...state,
        cartas: action.payload,
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextGame.Provider value={{ state, dispatch }}>
      <Game />
    </ContextGame.Provider>
  );
}
