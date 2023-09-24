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
import React, {useContext} from 'react';
import {useUploadCSV} from '../hooks/useUploadCSV';
import {ListContextProps} from '../context/ListContext';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SelectList} from 'react-native-dropdown-select-list';
import {Product, data, lista} from '../interfaces/Product.interface';
import {useForm} from '../hooks/useForm';
import {inicialState} from '../context/ListProvider';
import Lista from './Lista';
import AddItem from './AddItem';




const Home = () => {
  const {
    products,
    isEdit,
    setIsEdit,
    agregar,
    product,
    setProduct,
    agregarCarro,
    editar,
    isModal,
    setIsModal,
  } = useContext(ListContextProps);
  const [selected, setSelected] = React.useState('');

  const {name, price, inCar, producType, onChange, setFormValue} = useForm({
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
    <View style={styles.container}>
     
      <AddItem/>

      <View style={styles.containerHeader}>
        <Text>Lista tu Lista</Text>
        <TouchableOpacity onPress={() => setIsModal(!isModal)}>
          <Text>Agregar nuevo producto</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Eliminar data</Text>
        </TouchableOpacity>
      </View>

      <Lista />
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
