import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import BotaoNormal  from '../componentes/BotaoTelaL';
import BotaoIniciar from '../componentes/BotaoQuadrado';
import CaixaTexto  from '../componentes/CaixaTexto';
import MapView, { Marker } from 'react-native-maps';

export default function TelaLocalizacao ({navigation}) {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',    
    }}>
      <View style={{marginBottom: 40}}>
      </View>
    <View>
    <BotaoNormal 
        title="SEU LOCAL" 
        onPress={ () => Linking.openURL('geo:-7.036266,-34.872851')}
        showLogo={true}
      />      
      <BotaoNormal 
        title="LOCAL DE DESTINO" 
        onPress={ () => Linking.openURL('geo:-7.036266,-34.872851')}        
        showL={true}
      />      
    </View>
    <View style={{flexDirection: 'row',}}>
          <CaixaTexto title='20 mim' showFigura={true}/>
          <CaixaTexto title='15 mim' showFig={true}/>
          <CaixaTexto title='30 mim' showF={true}/>
       </View>

       <MapView
          initialRegion={{
          latitude: -7.036266,
          longitude: -35.872851,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1, width: '90%', marginTop: 10}}
      >
        <Marker                   
          coordinate={{latitude: -7.036266, longitude: -35.872851}}     
          title="IFPB"     
        />
      </MapView>
      <View style={{marginEnd: 250}}>
        <BotaoIniciar 
            title="INICIAR" 
            onPress={ () => Linking.openURL('geo:-7.036266,-34.872851')}        
          />
      </View>      
    </View>
  );
}