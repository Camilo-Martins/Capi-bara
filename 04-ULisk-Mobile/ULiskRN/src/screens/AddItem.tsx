import {View, Text, Modal, TextInput, Alert, Pressable} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ListContextProps} from '../context/ListContext';
import {SelectList} from 'react-native-dropdown-select-list';
import {data} from '../interfaces/Product.interface';
import {useForm} from '../hooks/useForm';
import { inicialState } from '../context/ListProvider';

const AddItem = () => {
  const {isEdit, setIsEdit, agregar, product, editar, isModal, setIsModal, setProducts, setProduct} =
    useContext(ListContextProps);
  const [selected, setSelected] = React.useState('');

  const {name, price, inCar, onChange, setFormValue} = useForm({
    name: '',
    price: 0,
    inCar: false,
    producType: '',
  });

  useEffect(()=>{
    onChange(product.name, "name")
  },[isEdit])


  const handleAgregar = () => {

    const chars = ["-", "_", " ", "-", ",", "."]

    console.log(price.toString())

    if(chars.includes.toString().includes(price.toString())){
      console.log("xd")
      return Alert.alert("El precio solo puede contener números")
    }

    if (selected.length === 0) {
      return Alert.alert('Seleccione una categoría');
    }

    agregar({...product, name, price, producType: selected, inCar});

    setIsModal(!isModal);

    setSelected('');
  
  

    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
  };

  const handleEditar = async () => {
  
   const newPrice = Number(price.toString().replace(/[- #*;,._<>\{\}\[\]\\\/]/gi, ''))

    editar(product.id, {...product, name,price: newPrice, producType: selected, inCar});
    setIsModal(!isModal);

    setIsEdit(false);
    setSelected('');
    setProduct(inicialState)
    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
  };

  const handleVolver = () =>{
   
    setIsEdit(false);
    setProduct(inicialState)
    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
    setIsModal(!isModal);
  }

  return (
    <Modal animationType="slide" transparent={false} visible={isModal}>
      <View>
        <View>
          {isEdit ? (
            <Text> - Modifica tu producto - </Text>
          ) : (
            <Text> - Añade un nuevo producto a tu Lista - </Text>
          )}

          <Text> Nombre </Text>
          <TextInput
            onChangeText={value => onChange(value, 'name')}
            value={name}
          />

          <Text> Precio </Text>
          <TextInput
            onChangeText={value => onChange(value, 'price')}
            value={price.toString()}
          keyboardType='numeric'
          />

          <SelectList
            boxStyles={{
              marginHorizontal: 20,
            }}
            dropdownStyles={{
              marginHorizontal: 20,
            }}
            setSelected={(value: string) => setSelected(value)}
            data={data}
            save="value"
          />

          {isEdit ? (
            <Pressable onPress={() => handleEditar()}>
              <Text>Modifica el producto</Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => handleAgregar()}>
              <Text>Agregar Producto</Text>
            </Pressable>
          )}

          <Pressable
            onPress={() => handleVolver()}>
            <Text>Volver</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddItem;
