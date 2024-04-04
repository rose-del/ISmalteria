import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import BotaoArredondado from '../componentes/BotaoArredondado';
import Axios from 'axios';
import { format } from 'date-fns';

export default function TelaAgenda({ navigation }) {
  const [chamado, setChamado] = useState(false);
  const [hoje, setHoje] = useState("Carregando...");
  const [agenda, setAgenda] = useState([]);

  React.useEffect(() => {
    Axios.get("https://ismalteria-strapi.rosenilda.repl.co/api/agendamentos?filters[data][$gte]=2023-09-30T00:00:00.000Z&filters[data][$lt]=2023-09-30T23:59:59.000Z").then((response) => {
      setHoje(format(new Date(response.data.data[0].attributes.data), "dd/MM/yyyy HH:mm"));
    });
    Axios.get("https://ismalteria-strapi.rosenilda.repl.co/api/agendamentos?filters[data][$gt]=2023-09-30T23:59:59.000Z").then((response) => {
      setAgenda(format(new Date(response.data.data[0].attributes.data), "dd/MM/yyyy HH:mm"));
    });
    setChamado(true);
  }, [chamado]);

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: "5%" }}>
        <Text style={{ fontSize: 20, color: '' }}>
          HOJE
        </Text>
        <View style={{
          backgroundColor: '#B2D8D3',
          borderRadius: 30,
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 30,
          marginLeft: -220,
        }}>
          <Text style={{ fontSize: 15 }}>
            SPA DOS PÉS
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: "10%", fontSize: 20 }}>
            {hoje}
          </Text>
        </View>
        <Text style={{ marginTop: "10%", fontSize: 20 }}>
          PRÓXIMOS DIAS
        </Text>
        <View style={{
          backgroundColor: '#B2D8D3',
          borderRadius: 30,
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 30,
          marginLeft: -220
        }}>
          <Text style={{ fontSize: 15 }}>
            SPA DOS PÉS
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: "10%", fontSize: 20 }}>
            {agenda}
          </Text>
        </View>
        <View style={{ marginTop: "10%" }}>
          <BotaoArredondado
            title="CANCELAR AGENDAMENTO"
            onPress={() => alert('Agendamento Cancelado com Sucesso')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

