import React, {useState} from 'react';
import { Text, View, StyleSheet,TextInput,Image, ImageBackground} from 'react-native';
import BotaoArredondado from '../componentes/BotaoArredondado';
import estiloTelaCadastro from '../estiloTelaCadastro';
import background from '../imagens/linhas.png';

export default function TelaCadastro({navigation}) {
  return (
    <View style={styles.container}>         
      <ImageBackground source={background} style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>     
        <View 
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'       
          }}
          >
          <Image 
          style={{width: 255, height: 105, marginRight: 5}}
          source={require('../imagens/Logo.png')}
          />
          <View style={{marginVertical: 40}}>
              <Text 
              style={{marginHorizontal: 25, color: '#FFFFFF'}}
                >
                Nome completo:
              </Text>
                <TextInput
                  style={estiloTelaCadastro.EntradaTexto}
                />
              <Text 
              style={{marginHorizontal: 25, color: '#FFFFFF'}}
              >
                E-mail:
              </Text>
                <TextInput
                  style={estiloTelaCadastro.EntradaTexto} 
                />
              <Text 
              style={{marginHorizontal: 25, color: '#FFFFFF'}}
              >
              Senha:
              </Text>
                <TextInput
                  style={estiloTelaCadastro.EntradaTexto}
                  secureTextEntry
                />
              <Text 
              style={{marginHorizontal: 25, color: '#FFFFFF'}}
              >
                Confirmar senha:
              </Text>
                <TextInput
                  style={estiloTelaCadastro.EntradaTexto}
                />
          </View>
        <BotaoArredondado 
          title="CRIAR CONTA" 
          onPress={() => navigation.push('Home')}
        />
          <View style={{marginTop: 15}}>      
            <BotaoArredondado 
              title="Entrar com o google" 
              onPress={() => navigation.push('Login')} 
              showLogoGoogle={true}        
            /> 
          </View>    
        </View>    
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 