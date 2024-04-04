import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function BotaoArredondado(props) {
  const {title, onPress} = props;
  const showLogoGoogle = props.showLogoGoogle || false;
  const showLogo = props.showLogo || false;
  const showLogoAvaliar = props.showLogoAvaliar || false;
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#B2D8D3',
          borderRadius: 57,
          paddingVertical: 10,
          paddingHorizontal: 50,      
          alignItems: 'center',       
        }}>
        {showLogo &&
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../imagens/maps.png')}
          />
        }
        {showLogoAvaliar &&
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../imagens/avaliar.png')}
          />
        }
        {showLogoGoogle &&
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../imagens/google.png')}
          />
        }
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoArredondado;