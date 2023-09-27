import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {ListContextProps} from '../context/ListContext';
import {Product} from '../interfaces/Product.interface';
import Item from '../components/Item';
import { useForm } from '../hooks/useForm';

const Lista = () => {
  const {
    products,
    isEdit,
    setIsEdit,
    setIsModal,
    agregar,
    product,
    setProduct,
    agregarCarro,
    eliminar,
    editar,
  } = useContext(ListContextProps);

  const {name, price, inCar, onChange, setFormValue} = useForm({
    name: '',
    price: 0,
    inCar: false,
    producType: '',
  });


  const handleEditar = (id: number) => {
 
   

    setIsEdit(true);
    agregarCarro(id);
  };

  const handleEliminar = (id: number) => {
    eliminar(id);
  };

  const handleAddCarro = (id: number, item: Product) => {
   
    

    setProduct(item)
    setIsModal(true);
    setIsEdit(true);
    editar(id, item);
    
  };

  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <Item
          id={item.id.toString()}
          name={item.name}
          price={item.price}
          inCar={item.inCar}
          producType={item.producType}
          handleEditar={() => handleEditar(item.id)}
          handleEliminar={() => handleEliminar(item.id)}
          handleAddCarro={() => handleAddCarro(item.id, item)}
          product={item}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
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

export default Lista;
