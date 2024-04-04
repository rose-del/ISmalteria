import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground} from 'react-native';
import BotaoArredondado from '../componentes/BotaoArredondado';
import Botaozinho from '../componentes/BotaoNaoArredondado';
import estilo from '../estiloTelaLogin';
import background from '../imagens/linhas.png';


export default function TelaLogin({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Image
        style={{width: 255, height:105, marginRigth: 5}}
        source= {require('../imagens/Logo.png')}
        />
      <View style={{marginVertical: 40}}>
        <Text 
        style={{marginHorizontal: 25, color: '#FDFFFD'}}
        >
        E-mail:
        </Text>
          <TextInput
          style={estilo.EntradaTexto}
          />
        <Text 
        style={{marginHorizontal: 25, color: '#FDFFFD'}}
        >
        Senha:
        </Text>
          <TextInput 
          style={estilo.EntradaTexto}
          secureTextEntry
          />
      </View>
        <BotaoArredondado 
          title="ACESSAR" 
          onPress={() => navigation.push('Home')} 
        /> 
        <Botaozinho 
          title="Esqueci a senha..." 
          onPress={() => navigation.push('RedefinirSenha')} 
        /> 
        <Botaozinho 
          title="Não possui uma conta?" 
          onPress={() => navigation.push('Cadastro')} 
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