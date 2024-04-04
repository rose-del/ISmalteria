import * as React from 'react';
import TelaLogin from '../telas/TelaLogin';
import TelaCadastro from  '../telas/TelaCadastro';
import TelaRedefinirSenha from '../telas/TelaRedefinirSenha';
import TelaInicial from '../telas/TelaIncial';
import TelaServico from '../telas/TelaServico';
import TelaAgendamentos from '../telas/TelaAgendamentos';
import TelaLocalizacao from '../telas/TelaLocalizacao';
import TelaAvaliacao from '../telas/TelaAvaliacao';
import TelaPedido from '../telas/TelaPedido';
import TelaPedidoFinalizado from '../telas/TelaPedidoFinalizado';
import TelaCarrinho from '../telas/TelaCarrinho';
import Tabs from './TabNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
            headerStyle: {
              backgroundColor: '#85C9C0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen 
          name="Login" 
          component={TelaLogin}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={TelaCadastro} 
          options={{headerShown: false}} 
        />
       
        <Stack.Screen 
          name="RedefinirSenha" 
          component={TelaRedefinirSenha}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Home" 
          component={TelaInicial}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="Serviço" 
          component={Tabs}
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name="AGENDAMENTO" 
          component={TelaAgendamentos}          
        />
        <Stack.Screen 
          name="LOCALIZAÇÃO" 
          component={TelaLocalizacao}
        />
        <Stack.Screen
          name="PERFIL DA EMPRESA"
          component={TelaAvaliacao}
        />
        <Stack.Screen
          name="FINALIZAR COMPRA"
          component={TelaPedido}
        />
        <Stack.Screen
          name="ADICIONADOS NO CARRINHO"
          component={TelaCarrinho}
        />
        <Stack.Screen
          name="VOLTAR"
          component={TelaPedidoFinalizado}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


