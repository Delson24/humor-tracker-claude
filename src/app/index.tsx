import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Titulo from '@/components/Titulo';
import { useState } from 'react';

export default function App(){
  const [humor, setHumor] = useState('')
  return (  
    <View style={styles.container}> 
      <Titulo texto="Como te sentes hoje?" />
      <Text>{humor}</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  container: {
    flex: 1, // ocupa toda tela
    alignItems: 'center', // centraliza na horizontal
    justifyContent: 'center', // centraliza na vertical
    backgroundColor: '#fff',
  }
}
);


