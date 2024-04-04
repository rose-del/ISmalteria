import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function BotaoQuadrado(props) {
  const {title, onPress} = props;
  const showLogoMoney = props.showLogoMoney || false;

  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          backgroundColor: '#B2D8D3',
          paddingVertical: 10,
          paddingHorizontal: 30,
        }}
        >
         {showLogoMoney &&
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../imagens/money.png')}
          />
        }
       <Text style={{color:'#000000', }}>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoQuadrado;