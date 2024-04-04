import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function BotaoTexto(props) {
  const {title, onPress} = props;
  
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={{
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 40,        
        }}
      >
        <Text style = {{color:'Black'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  ); 
}

export default BotaoTexto;