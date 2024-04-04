import * as React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, View, StyleSheet, TextInput, StatusBar, Image, ScrollView, TouchableOpacity} from 'react-native';
import BotaoImg from '../componentes/BotaoImg';
import BotaoTexto from '../componentes/BotaoTexto'

function ImagemX (props){
  const { onPress } = props;
 return(
   <TouchableOpacity
      onPress={onPress}
   >
   <View> 
    <Image 
      source= {require('../imagens/imagemX.png')}           
    />
    <View 
    style={{
      backgroundColor: '#D9D9D9', 
      width: '100%', 
      padding: 15, 
      marginTop: '5%',
      
      }}>
      <Text style={{fontSize: 9}}>{props.textoP}</Text>
      <Text style={{fontSize: 9}}>Valor:{props.textoV}</Text>
    </View>
   </View>
  </TouchableOpacity>
 );
}

export default function App({navigation}) {
  return (
    <ScrollView>        
      <LinearGradient colors={['#BADBCF', '#222222']} style={styles.gradient}>      
        <StatusBar backgroundColor='#BADBCF' />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '90%'}}>
            <BotaoImg
            style={{alignItems: 'center'}}
              onPress={() => alert('Enviar')}
              showLogoUser={true}
            />
              <TextInput 
              style = {{
                borderColor: '#85C9C054',
                backgroundColor: '#D9D9D9',
                borderWidth: 1,
                borderRadius: 30,
                paddingHorizontal: '5%',
                flex: 1,
              }}
              placeholder = "BUSCAR POR PRODUTOS"
              />
          </View>
          <View style={{backgroundColor: '#D9D9D980', width: '90%', padding: 15, borderRadius: 10}}>
            <View style={{  flexDirection: 'row'}}> 
              <Image 
                source= {require('../imagens/imagemX.png')}           
              />
              <View>
                <BotaoTexto
                  title='MANICURE E PEDICURE'
                  onPress={() => navigation.push('AGENDAMENTO')} 
                />
                  <Text style={{marginTop: 10}}> VALOR: R$ 20,00</Text>
              </View>
          </View>
                <Text 
                style={{textAlign: 'justify'}}
                >
                Utilizamos técnicas e instrumentos específicos, como alicates, cortadores, lixas, fortalecedores, esmaltes, palitos, espátulas, etc.
                </Text>
            </View>
              <View style={{backgroundColor: '#D9D9D980', width: '90%', padding: 15, marginTop: 15, borderRadius: 10}}>
                <View style={{flexDirection: 'row'}}> 
                  <Image 
                    source= {require('../imagens/imagemX.png')}           
                  />
                  <View>
                    <BotaoTexto
                      title='SPÁ DOS PÉS'
                      onPress={() => navigation.push("AGENDAMENTO")}
                    />
                    <Text 
                    style= {{marginTop: 10}}
                    > 
                    VALOR: R$ 20,00
                    </Text>
                  </View>
                </View>
                  <Text 
                  style={{textAlign: 'justify'}}
                  >
                  Consiste em imergir os pés em água morna, esfoliar e hidratar, acompanhando massagens relaxantes.
                  </Text>
              </View>
              <View style={{backgroundColor: '#D9D9D980', width: '90%', padding: 15, marginTop: 15, borderRadius: 10}}>
                <View style={{flexDirection: 'row'}}> 
                  <Image 
                    source= {require('../imagens/imagemX.png')}           
                  />
                  <View>
                    <BotaoTexto
                      title='CANTOPLASTIA'
                      onPress={() => navigation.push('AGENDAMENTO')}
                    />
                    <Text style= {{marginTop: 10}}> VALOR: R$ 20,00</Text>
                  </View>
                </View>
                <Text style={{textAlign: 'justify'}}
                >Consiste em imergir os pés em água morna, esfoliar e hidratar, acompanhando massagens relaxantes.
                </Text>
              </View>
              <View style={{padding: 15, flexDirection: 'row', paddingHorizontal: 25, width: '100%', justifyContent: 'space-between'}}>
                <ImagemX 
                textoP= 'Esfoliante'
                textoV= 'R$ 15,00'
                onPress={() => navigation.push('ADICIONADOS NO CARRINHO')}
                />
                <ImagemX
                textoP= 'Esfoliante'
                textoV= 'R$ 15,00'
                onPress={() => navigation.push('ADICIONADOS NO CARRINHO')}
                />
                <ImagemX
                textoP= 'Esfoliante'
                textoV= 'R$ 15,00'
                onPress={() => navigation.push('ADICIONADOS NO CARRINHO')}
                />
              </View>
      </LinearGradient>
    </ScrollView>        
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,    
    marginTop: 20,
    alignItems: 'center'
  },
}); 