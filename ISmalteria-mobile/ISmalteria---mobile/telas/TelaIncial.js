import * as React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import background from '../imagens/FundoTelaInicial.png';
import BotaoArredondado from '../componentes/BotaoArredondado';

export default function TelaInicial({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={background} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 370}}>
            <BotaoArredondado
            title="ACESSE POR NOSSOS SERVIÇOS" 
            onPress={() => navigation.push('Serviço')} 
            />
          <View style={{marginTop: 55}}>
            <BotaoArredondado
            title="AVALIE NOSSOS SERVIÇOS" 
            onPress={() => navigation.push('PERFIL DA EMPRESA')}
            showLogoAvaliar={true}
            />
            <View style={{marginTop: 10}}>
              <BotaoArredondado
              title="LOCALIZAÇÃO" 
              onPress={() => navigation.push('LOCALIZAÇÃO')}
              showLogo={true}
              />
            </View>
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