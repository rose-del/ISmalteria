import React, {useState, useEffect } from 'react';
import { Text, View, TextInput, Image, Button} from 'react-native';
import BotaoImg from '../componentes/BotaoImg'
import estiloPerfil from '../estiloPerfil';

export default function TelaPerfil({navigation}) {
  return (
    <View 
    style={{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingTop: 60,
        }}>
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
        <Text 
        style={{
          marginHorizontal: 25, 
          color: 'black',  
          marginTop: 50
          }}
        >
       NOME COMPLETO:
        </Text>
          <TextInput
            style={estiloPerfil.EntradaTexto}
          /> 
        <Text 
        style={{
          marginHorizontal: 25, 
          color: 'black'
          }}
        >
        E-MAIL:
        </Text>
          <TextInput
            style={estiloPerfil.EntradaTexto}
          />    
        <Text 
        style={{
          marginHorizontal: 25, 
          color: 'black'
          }}
        >
        SENHA:
        </Text>
          <TextInput
            style={estiloPerfil.EntradaTexto}
          />       
      </View> 
    </View>
  )
}