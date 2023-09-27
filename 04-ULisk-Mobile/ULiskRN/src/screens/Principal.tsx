import {View, Text, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useUploadCSV } from '../hooks/useUploadCSV';
import { StackScreenProps } from '@react-navigation/stack';
import { ListContextProps } from '../context/ListContext';

interface Props extends StackScreenProps<any, any> {}

const Principal = ({navigation}: Props) => {
  
  const {selectDocument} = useUploadCSV() 




  return (

    //TODO: CREAR NAVEGACIÓN PARA NUEVA LISTA
    <View>
     
      <Text>¿Qué deseas hacer?</Text>

      <TouchableOpacity style={{padding: 50}} onPress={() =>selectDocument()}>
        <Text>Subir una lista existente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{padding: 50}} 
          onPress={() => navigation.replace('Home')}
        >
        <Text>Crear una nueva lista</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Principal;
