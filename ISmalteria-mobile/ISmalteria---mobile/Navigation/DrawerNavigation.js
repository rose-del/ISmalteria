import TelaPerfil from '../telas/TelaPerfil';
import TelaEditarPerfil from '../telas/TelaEditarPerfil'
import TelaRedefinirSenha from '../telas/TelaRedefinirSenha'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator  useLegacyImplementation initialRouteName="Perfil">
      <Drawer.Screen name="Perfil" component={TelaPerfil} />
      <Drawer.Screen name="Editar Perfil" component={TelaEditarPerfil} />
      <Drawer.Screen 
        name='Redefinir senha' 
        component={TelaRedefinirSenha} 
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}