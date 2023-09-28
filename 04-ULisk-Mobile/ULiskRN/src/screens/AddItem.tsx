import {
  View,
  Text,
  Modal,
  TextInput,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ListContextProps} from '../context/ListContext';
import {SelectList} from 'react-native-dropdown-select-list';
import {data} from '../interfaces/Product.interface';
import {useForm} from '../hooks/useForm';
import {inicialState} from '../context/ListProvider';
import {globalStyles} from '../styles';

const AddItem = () => {
  const {
    isEdit,
    setIsEdit,
    agregar,
    product,
    editar,
    isModal,
    setIsModal,
    setProduct,
  } = useContext(ListContextProps);
  const [selected, setSelected] = React.useState('');

  const {name, price, inCar, onChange, setFormValue} = useForm({
    name: '',
    price: 0,
    inCar: false,
    producType: '',
  });

  useEffect(() => {
    onChange(product.name, 'name');
  }, [isEdit]);

  const handleAgregar = () => {
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
    const newPrice = Number(
      price.toString().replace(/[- #*;,._<>\{\}\[\]\\\/]/gi, ''),
    );

    editar(product.id, {
      ...product,
      name,
      price: newPrice,
      producType: selected,
      inCar,
    });
    setIsModal(!isModal);

    setIsEdit(false);
    setSelected('');
    setProduct(inicialState);
    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
  };

  const handleVolver = () => {
    setIsEdit(false);
    setProduct(inicialState);
    setFormValue({
      name: '',
      price: 0,
      inCar: false,
      producType: selected,
    });
    setIsModal(!isModal);
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isModal}>
      <View style={styles.container}>
        <View style={{paddingTop: 20}}>
          {isEdit ? (
            <Text style={styles.textTitle}> Modificar producto </Text>
          ) : (
            <Text style={styles.textTitle}> Agregar Producto </Text>
          )}
          <Text style={styles.textLabeL}> Nombre </Text>
          <TextInput
            onChangeText={value => onChange(value, 'name')}
            value={name}
            maxLength={20}
            style={styles.inputStyles}
          />

          <Text style={styles.textLabeL}> Precio </Text>
          <TextInput
            onChangeText={value => onChange(value, 'price')}
            value={price.toString()}
            keyboardType="numeric"
            maxLength={6}
            style={styles.inputStyles}
          />
          <Text style={styles.textLabeL}> Categoría </Text>
          <SelectList
            setSelected={(value: string) => setSelected(value)}
            data={data}
            save="value"
          />

          {isEdit ? (
            <Pressable
              style={[styles.itemButton, {backgroundColor: '#2F4688'}]}
              onPress={() => handleEditar()}>
              <Text style={styles.inputText}>Modifica el producto</Text>
            </Pressable>
          ) : (
            <Pressable
              style={[styles.itemButton, {backgroundColor: '#7E2DBE'}]}
              onPress={() => handleAgregar()}>
              <Text style={styles.inputText}>Agregar Producto</Text>
            </Pressable>
          )}

          <Pressable
            style={[styles.itemButton, {backgroundColor: '#35963E'}]}
            onPress={() => handleVolver()}>
            <Text style={styles.inputText}>Volver</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.principalSContainer,
    backgroundColor: '#F4F5F9',
  },
  textTitle: {
    ...globalStyles.titleText,
  },
  textLabeL: {
    ...globalStyles.genericTouchableText,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 5,
  },
  inputStyles: {
    ...globalStyles.inputStyles,
  },
  itemButton: {
    ...globalStyles.itemButtonForm,
  },
  inputText: {
    ...globalStyles.genericTouchableText,
    color: '#EAECED',
  },
});

export default AddItem;
