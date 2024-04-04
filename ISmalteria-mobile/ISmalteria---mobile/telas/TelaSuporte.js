import * as React from 'react';
import { Text, View, TextInput} from 'react-native';
import estilo from '../estiloTelaSuporte';
import BotaoImg from '../componentes/BotaoImg';

export default function App({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Mensagens</Text>
      </View>
      <View style={{ alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <View>
            <TextInput
              style={estilo.EntradaTexto}
              placeholder="Digite uma mensagem"
            />
          </View>
          <BotaoImg 
          onPress={() => alert('Enviar')} 
          showLogoEnviar={true} 
          />
        </View>
      </View>
    </View>
  );
}