import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {ListContextProps} from '../context/ListContext';
import Lista from './ProductsList';
import AddItem from './AddItem';
import {StackScreenProps} from '@react-navigation/stack';
import Total from '../components/TotalList';
import {globalStyles} from '../styles';
import OptionButton from '../components/OptionButton';

interface Props extends StackScreenProps<any, any> {}

const Home = ({navigation}: Props) => {
  const {isModal, setIsModal, eliminarInfo} = useContext(ListContextProps);

  const resetearApp = async () => {
    eliminarInfo();
    navigation.replace('Principal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddItem />

      <View style={styles.containerHeader}>
        <Text style={styles.titleHome}>Lista tu Lista</Text>

        <OptionButton
          textButton="Agregar Producto"
          style={[styles.touchableAccion, {backgroundColor: '#385A80'}]}
          buttonStyle={styles.touchableText}
          handleOnPress={() => setIsModal(!isModal)}
        />
        <OptionButton
          textButton="Eliminar Lista"
          style={[styles.touchableAccion, {backgroundColor: '#AC1717'}]}
          buttonStyle={styles.touchableText}
          handleOnPress={() => resetearApp()}
        />
      </View>

      <Lista />

      <Total />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.principalSContainer,
  },
  containerHeader: {
    ...globalStyles.containerHeader,
  },
  titleHome: {
    ...globalStyles.titleHome,
  },
  touchableAccion: {
    ...globalStyles.touchableAccion,
  },
  touchableText: {
    ...globalStyles.touchableText,
  },
});

export default Home;
