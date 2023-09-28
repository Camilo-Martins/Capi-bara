import {View, Text, StyleSheet, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {Product} from '../interfaces/Product.interface';
import {globalStyles} from '../styles';

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
      <Text style={styles.itemLabel}>Nombre : {name}</Text>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginRight: 70,
          marginVertical: 5,
        }}>
        <Text style={styles.itemLabel}>Precio : {price}</Text>
        <Pressable onPress={() => handleEditar(id)}>
          {inCar ? (
            <Text style={styles.itemLabel}>En el carrito</Text>
          ) : (
            <Text style={styles.itemLabel}>Aun no lo agregas!</Text>
          )}
        </Pressable>

        <Text style={styles.itemLabel}>Tipo : {producType}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={[styles.itemButton, {backgroundColor: '#385A80'}]}
          onPress={() => handleAddCarro(id, product)}>
          <Text style={styles.itemButtonText}>Editar</Text>
        </Pressable>

        <Pressable
          style={[styles.itemButton, {backgroundColor: '#AC1717'}]}
          onPress={() => handleEliminar(id)}>
          <Text style={styles.itemButtonText}>Eliminar</Text>
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
  item: {
    ...globalStyles.item,
  },

  itemButton: {
    ...globalStyles.itemButton,
  },
  itemButtonText: {
    ...globalStyles.itemButtonText,
  },

  itemLabel: {
    ...globalStyles.itemLabel,
  },
});

export default Item;
