import TelaPerfil from './DrawerNavigation';
import TelaServico from '../telas/TelaServico';
import TelaAgendamentos from '../telas/TelaAgendamentos';
import TelaSuporte from '../telas/TelaSuporte';
import TelaAgenda from '../telas/TelaAgenda';
import { Entypo, FontAwesome5, MaterialCommunityIcons , FontAwesome} from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
            headerStyle: {
            backgroundColor: '#85C9C0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
                    
          }}>
        <Tab.Screen 
          name="PROCEDIMENTOS" 
          component={TelaServico}
          options={{headerShown: false, tabBarIcon: ({ color, size }) => (
           <Entypo name="home" size={24} color="black" />          
          )}}
          //MaterialCommunityIcons 
          //<MaterialCommunityIcons name="cash-register" size={24} color="black" /> 
        />
        <Tab.Screen 
          name="AGENDAMENTO" 
          component={TelaAgendamentos}
           options={{tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar-alt" size={size} color="color" />          
          ),
        }}
        />
        <Tab.Screen 
          name="AGENDA" 
          component={TelaAgenda}
          options={{tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="clipboard-text-clock" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen 
          name="SUPORTE" 
          component={TelaSuporte}
           options={{tabBarIcon: ({ color, size }) => (
           <Entypo name="chat" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen 
          name="PERFIL" 
          component={TelaPerfil}
          options={{tabBarIcon: ({ color, size }) => (
           <FontAwesome name="user" size={24} color="black" />
          ),
        }}
        />
      </Tab.Navigator>
  );
}


