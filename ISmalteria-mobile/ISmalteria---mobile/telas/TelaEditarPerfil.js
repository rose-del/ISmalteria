import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image} from 'react-native';
import BotaoImg from '../componentes/BotaoImg';
import estiloPerfil from '../estiloPerfil';
import BotaoArredondado from '../componentes/BotaoArredondado';

export default function TelaEditarPerfil () {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={require('../imagens/fotoP.png')}
          />
          <View style={{marginLeft: -20}}>
            <BotaoImg
              onPress={() => alert('Enviar')}
              showLogo={true}
            />
          </View>
        </View>
      <View>
        <Text style={{marginHorizontal: 25, color: 'black',  marginTop: 50}}
            >NOME COMPLETO:
        </Text>
          <TextInput
              style={estiloPerfil.EntradaTexto}
          /> 
        <Text style={{marginHorizontal: 25, color: 'black'}}
            >E-MAIL:
        </Text>
          <TextInput
              style={estiloPerfil.EntradaTexto}
          />    
          <View style={{marginTop: 15}}>
            <BotaoArredondado 
              title="SALVAR ALTERAÇÕES" 
              onPress={ () => alert('ALTERAÇÕES SALVAS')}
            /> 
          </View>
      </View>
    </View>
  )
}