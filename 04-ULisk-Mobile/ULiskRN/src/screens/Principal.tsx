import {View, Text, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useUploadCSV } from '../hooks/useUploadCSV';

const Principal = () => {
  
  const {selectDocument} = useUploadCSV() 
  return (

    //TODO: CREAR NAVEGACIÓN PARA NUEVA LISTA
    <View>
     
      <Text>¿Qué deseas hacer?</Text>

      <TouchableOpacity style={{padding: 50}} onPress={() => selectDocument()}>
        <Text>Subir una lista existente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 50}} >
        <Text>Crear una nueva lista</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Principal;
