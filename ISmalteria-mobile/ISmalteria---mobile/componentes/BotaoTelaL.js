import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function BotaoNormal(props) {
  const {title, onPress} = props;
  const showLogo = props.showLogo || false;
  const showL = props.showL|| false;
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          backgroundColor: '#B2D8D3',
          paddingVertical: 10,
          paddingHorizontal: 30,      
          alignItems: 'center',
          
        }}
      >
       {showLogo && 
          <Image
            style={{marginRight: 10,}}
            source={require('../imagens/SeuLocal.png')}
          />
        }
        {showL && 
          <Image
            style={{marginRight: 10,}}
            source={require('../imagens/LocalDeDestino.png')}
          />
        }
       <Text style={{color:'#000000', }}>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoNormal;