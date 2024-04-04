import * as React from 'react';
import { Text, View, StyleSheet,TextInput,ImageBackground } from 'react-native';
import BotaoArredondado from '../componentes/BotaoArredondado';
import BotaoNaoArredondado from '../componentes/BotaoNaoArredondado';
import estilo from '../estiloRedefinirSenha';
import background from '../imagens/linhas.png';

export default function TelaRedefinirSenha({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>
        <View 
        style={{
          flex: 1,
          justifyContent: 'center', 
          alignItems: 'center'
          }}>
          <Text 
          style={{
            fontWeight: 'bold', 
            fontSize: 25, 
            textAlign: 'center', 
            color: '#000000'
            }}
          >
          REDEFINIR SENHA
          </Text>
            <View 
            style={{
              marginVertical: 40, 
              alignItems: 'center'
              }}>
              <Text
                style={{
                  marginHorizontal: 40,
                  marginVertical: 25,
                  textAlign: 'center',
                  fontSize: 15,
                  color: '#FFFFFF'
                }}
                >
                Informe o e-mail para realizar a redefiniçãp de senha
              </Text>
              <TextInput
                style={estilo.EntradaTexto} 
              /> 
            </View>
          <BotaoArredondado 
            title="ENVIAR"
            onPress={ () => alert('Senha Redefinida')}
          />      
          <BotaoNaoArredondado 
            title="fazer login..." 
            onPress={() => navigation.push('Login')} 
          />      
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