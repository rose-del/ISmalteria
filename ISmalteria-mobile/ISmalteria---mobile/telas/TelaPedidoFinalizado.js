import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default function App({navigation}){
  return (
    <View  style={{marginHorizontal: '5%', alignItems: 'center', marginVertical: '5%'}}>
      <Image
        style={{marginHorizontal: '5%', alignItems: 'center', marginTop: '50%'}}
        source={require('../imagens/Pedidofinalizado.png')}
      />
      <Text style={{marginTop: '10%', fontSize: 20,}}
        >PEDIDO FINALIZADO 
      </Text>
    </View>
  )
}