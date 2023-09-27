import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useUploadCSV} from '../hooks/useUploadCSV';
import {ListContextProps} from '../context/ListContext';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {Product, data, lista} from '../interfaces/Product.interface';
import {useForm} from '../hooks/useForm';
import {inicialState} from '../context/ListProvider';
import Lista from './Lista';
import AddItem from './AddItem';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Total from '../components/Total';

interface Props extends StackScreenProps<any, any>{}

const Home = ({navigation}: Props) => {
  const {
    isModal,
    setIsModal,
    eliminarInfo, 
    setIsData,
    isData
  } = useContext(ListContextProps);



  const resetearApp = async () =>{
 eliminarInfo()
navigation.replace('Principal')
  
  
  }

  return (
    <View style={styles.container}>
     
      <AddItem/>
   
       
    

     <View style={styles.containerHeader}>
      <Text>Lista tu Lista</Text>
      <TouchableOpacity onPress={() => setIsModal(!isModal)}>
        <Text>Agregar nuevo producto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => resetearApp()}

      >
        <Text>Eliminar data</Text>
      </TouchableOpacity>
    </View>
     


      <Lista />
      <View style={{marginHorizontal: 16, marginBottom: 50, borderRadius: 10, borderColor: "red", borderWidth: 1}}>
        <Total/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  containerHeader: {
    backgroundColor: 'blue',
    marginHorizontal: 16,
    padding: 10,
    marginBottom: 10,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
