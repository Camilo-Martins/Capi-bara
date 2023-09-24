import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {Product} from '../interfaces/Product.interface';

//TODO: MIGRAR A OTRO COMPONENTE
type ItemProps = {
  name: string;
  price: number;
  id: string;
  inCar: boolean;
  product: Product;
  producType: string;
  handleEditar: (id: string) => void;
  handleEliminar: (id: string) => void;
  handleAddCarro: (id: string, product: Product) => void;
};

const Item = ({
  id,
  name,
  price,
  inCar,
  producType,
  handleEditar,
  handleEliminar,
  handleAddCarro,
  product,
}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Text>Nombre : {name}</Text>
      <Text>Precio : {price}</Text>
      {inCar ? <Text>En el carrito</Text> : <Text>Aun no lo agregas!</Text>}
      <Text>Tipo : {producType}</Text>
      <View>
        <Text>Acciones</Text>
        <Pressable onPress={() => handleEditar(id)}>
          <Text>Agregar al carro</Text>
        </Pressable>

        <Pressable onPress={() => handleAddCarro(id, product)}>
          <Text>Editar</Text>
        </Pressable>

        <Pressable onPress={() => handleEliminar(id)}>
          <Text>Eliminar</Text>
        </Pressable>
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

export default Item;
