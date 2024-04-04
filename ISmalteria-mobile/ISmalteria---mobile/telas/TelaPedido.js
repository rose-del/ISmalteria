import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image} from 'react-native';
import estiloFinalizarCompra from '../estiloTelaPedido';
import BotaoArredondado from '../componentes/BotaoArredondado';

export default function App({navigation}){
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center', paddingTop: 60,}}>
      <View 
        style={{
            width: '100%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>RESERVE O SEU PRODUTO</Text>
      </View>
      <View>
        <Text style={{marginHorizontal: '5%', color: 'black',  marginTop: '5%'}}
          >NOME COMPLETO:
        </Text>
          <TextInput
            style={estiloFinalizarCompra.EntradaTexto}
          /> 
        <Text style={{marginHorizontal: '5%', color: 'black',  marginTop: '5%'}}
          >CIDADE:
        </Text>
          <TextInput
            style={estiloFinalizarCompra.EntradaTexto}
          /> 
        <Text style={{marginHorizontal: '5%', color: 'black', marginTop: '5%'}}
          >ENDEREÇO:
        </Text>
          <TextInput
            style={estiloFinalizarCompra.EntradaTexto}
          /> 
        <View style={{ marginTop: '10%'}}>   
            <BotaoArredondado 
            title="FINALIZAR PEDIDO" 
            onPress={() => navigation.push('VOLTAR')}
            />
            <View style={{ marginTop: '5%'}}>      
            <BotaoArredondado 
            title="CANCELAR SEU PEDIDO" 
            onPress={ () => alert('PEDIDO CANCELADO')}
            />
            </View>      
        </View>      
      </View>
    </View>
  )
}