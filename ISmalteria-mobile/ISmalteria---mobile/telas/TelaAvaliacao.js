import * as React from 'react';
import {useState, useEffect} from 'react'
import Axios from 'axios';
import { Text, View, StyleSheet,TextInput,Image, ScrollView } from 'react-native';
import estilo from '../estiloTelaAvaliacao'
import estiloquadrado from '../estiloQuadrado';
import BotaoArredondado from '../componentes/BotaoArredondado';
import procedimentos from '../dados/ProcedimentosTelaAvalia';
import {AirbnbRating} from 'react-native-ratings';

export default function TelaAvaliacao() {
  const [bio, setBio] = useState("Carregando...");
  const baseURL= "https://ismalteria-strapi.rosenilda.repl.co/api/biografia";
  React.useEffect(() => {
    Axios.get(baseURL).then((response) => {
        setBio(response.data.data.attributes.bio);
      });
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor:"#FCFCFC", padding: '5%'}}>
      <View style={{alignItems: 'center'}}>
        <Image
            style={{width: '60%', height: 150 }}
            source={require('../imagens/Logo.png')}
            resizeMode='contain'
          />
        <Image
            style={{width: '60%', height: 160}}
            source={require('../imagens/Foto.pessoal.png')}
            resizeMode='contain'
          />
      </View>
        <Text
          style={{
            color: "#000000",          
            fontSize: 15,
            marginTop: '5%',
            fontWeight: "bold"
          }}
        >
        BIOGRAFIA     
        </Text>
        <Text
          style={{
            color: "#000000",          
            fontSize: 15,
            marginTop: '5%',
            textAlign: "justify"
          }}
        >
        {bio}
        </Text>
        <Text
          style={{
            color: "#000000",          
            fontSize: 15,
            marginTop: '5%',
            fontWeight: "bold"
          }}
        >
        IMAGEM DOS PROCEDIMENTOS 
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          { procedimentos.map ( e => {      
            return (
              <Image
                style={{width: '35%', height: 160, marginTop: '5%'}}
                source={e.imagem}
                resizeMode="contain"
              />
            );
          } )
          }
        </View>
          <Text
          style={{
            color: "#000000",          
            fontSize: 15,
            textAlign: 'center',
            marginTop: "5%",
            width: '100%'
          }}
         >
         AVALIAÇÃO DOS NOSSOS SERVIÇOS
          </Text>
          <Text
            style={{
              marginHorizontal: '5%',
              marginTop: "5%",
              color: '#000000',
              fontWeight: "bold"             
            }}>
          NOME:
          </Text>
          <TextInput
            style={estilo.EntradaTexto} 
          />
          <Text
            style={{
              marginHorizontal: '5%',
              color: '#000000',
              marginTop: "5%",
              fontWeight: "bold"
            }}>
            COMENTE:
          </Text>
          <TextInput
            style={estiloquadrado.EntradaTextoQuadrado} 
            />
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
              <AirbnbRating
                reviews={["Odiei", "Ruim", "Legal", "OK", "Excelente",]}
                size={20}
                reviewSize={15}
              />
            </View>
            <BotaoArredondado 
              title="ENVIAR" 
              onPress={ () => alert('OK,Avaliação Salva com Sucesso')}
            /> 
    </ScrollView>
  )
}