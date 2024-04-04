import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Botao from '../componentes/BotaoQuadrado';

function ImagemX(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: '#D9D9D980', width: '100%', padding: '5%', borderRadius: 10, marginTop: '5%' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../imagens/imagemX.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function App({navigation}) {
  return (
    <ScrollView>
      <View style={{ paddingVertical: '5%', marginHorizontal: '5%' }}>
        <ImagemX 
          onPress={() => navigation.push('Home')} 
        />
        <ImagemX onPress={() => navigation.push('Home')} />
      </View>
      <View style={{ alignItems: 'center', marginTop: '90%' }}>
        <Botao
          title='FINALIZAR COMPRA'
          onPress={() => navigation.push('FINALIZAR COMPRA')}
          showLogoMoney={true}
        />
      </View>
    </ScrollView>
  );
}
