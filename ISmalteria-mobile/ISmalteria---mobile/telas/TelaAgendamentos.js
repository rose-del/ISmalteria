import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import estiloAgenda from '../estiloTelaAgenda';
import estiloAgenda2 from '../estiloTelaAgenda2'
import BotaoArredondado from '../componentes/BotaoArredondado';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 
    'Março', 'Abril', 
    'Maio', 'Junho', 
    'Julho', 'Agosto', 
    'Setembro', 'Outubro', 
    'Novembro', 'Dezembro'
    ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.']
};

LocaleConfig.defaultLocale = 'pt-br';

const TelaAgendamentos = ({navigation}) => {
  const [selected, setSelected] = useState('');

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <Text style={{fontSize: 15, textAlign: 'center', paddingVertical: '5%'}}
        >SELECIONE O DIA PARA O AGENDAMENTO
        </Text> 
      <Calendar 
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'green'}
        }}
      />
      <View style={{
        justifyContent: 'center',
        marginTop: '5%',
        paddingHorizontal: '5%'
      }}>
        <Text style={{color: 'black'}}>QUAL É O PROCEDIMENTO? </Text>
          <TextInput 
          style={estiloAgenda2.EntradaTexto}
          />
      <Text style={{color: 'black', marginTop: '5%'}}>DATA: </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
           <TextInput
              style={estiloAgenda.EntradaTexto}
            />
            <Image
              source={require('../imagens/Calendariozinho.png')}
            />
          </View>
        <Text style={{color: 'black', marginTop: '5%'}}>HORÁRIO: </Text>
          <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <TextInput
              style={estiloAgenda.EntradaTexto}
            />
            <Image
                source={require('../imagens/Reloginho.png')}
              />
          </View>
        <View style={{alignItems: 'center', marginTop: '10%'}}>
          <BotaoArredondado
          title='CONFIRMAR AGENDAMENTO'
          onPress={() => alert('AGENDAMENTO CONFIRMADO')}

          />
        </View> 
     </View>
    </ScrollView>
  );
};

export default TelaAgendamentos;
