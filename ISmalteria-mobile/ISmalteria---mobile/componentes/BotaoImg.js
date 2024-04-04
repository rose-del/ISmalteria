import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

function BotaoImg(props) {
  const {title, onPress} = props;
   const showLogo = props.showLogo || false;
   const showLogoUser = props.showLogoUser || false;
   const showLogoEnviar = props.showLogoEnviar || false;

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 5,    
        }}
      >
        {showLogo && 
            <Image
            source={require('../imagens/camera.png')}
          />
        }
        {showLogoUser && 
          <Image
            style={{alignItems: 'center', marginTop: '10%'}}
            source={require('../imagens/user.png')}
          />
        }
        {showLogoEnviar && 
          <Image
            style={{width: 25, height: 25}}
            source={require('../imagens/enviar.png')}
          />
        }
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoImg;