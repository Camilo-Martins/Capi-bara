import {View, Text, Modal, TextInput, Alert, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {ListContextProps} from '../context/ListContext';
import {SelectList} from 'react-native-dropdown-select-list';
import {data} from '../interfaces/Product.interface';
import {useForm} from '../hooks/useForm';

const AddItem = () => {
  const {isEdit, setIsEdit, agregar, product, editar, isModal, setIsModal} =
    useContext(ListContextProps);
  const [selected, setSelected] = React.useState('');

  const {name, price, inCar, onChange, setFormValue} = useForm({
    name: '',
    price: 0,
    inCar: false,
    producType: '',
  });

  const handleNuevoProducto = () => {
    if (selected.length === 0) {
      return Alert.alert('Seleccione una categoría');
    }

    agregar({...product, name, price, producType: selected, inCar});

    setIsModal(!isModal);

    setSelected('');
    console.log(selected);

    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
  };

  const handleEditar = () => {
    editar(product.id, {...product, name, price, producType: selected, inCar});
    setIsModal(!isModal);

    setIsEdit(!isEdit);
    setSelected('');

    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
  };

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
            keyboardType="numeric"
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
            <Pressable onPress={() => handleNuevoProducto()}>
              <Text>Agregar Producto</Text>
            </Pressable>
          )}

          <Pressable
            onPress={() => {
              setIsModal(!isModal);
              setIsEdit(false);
            }}>
            <Text>Volver</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddItem;
