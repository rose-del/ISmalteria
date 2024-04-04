import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function FigurasMap(props) {
  const {title, onPress} = props;
  const showFigura = props.showFigura || false;
  const showFig = props.showFig|| false;
  const showF = props.showF|| false;
  
  return (
      <View style={{
         backgroundColor: '#B2D8D3',
         marginTop: 30,
         marginHorizontal: 10,
         paddingVertical: 10,
         paddingHorizontal: 5,
         flexDirection: 'row'
       }} >
       {showFigura && 
          <Image
            style={{marginRight: 10,}}
            source={require('../imagens/Caminhando.png')}
          />
        }
        {showFig && 
          <Image
            style={{marginRight: 10,}}
            source={require('../imagens/Carro.png')}
          />
        }
        {showF && 
          <Image
            style={{marginRight: 10,}}
            source={require('../imagens/Onibus.png')}
          />
        }
       <Text style={{color:'#000000', }}>{title}</Text>
      </View>
  ); 
}

export default FigurasMap;