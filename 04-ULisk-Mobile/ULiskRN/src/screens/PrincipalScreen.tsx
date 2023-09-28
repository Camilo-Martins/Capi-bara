import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useUploadCSV} from '../hooks/useUploadCSV';
import {StackScreenProps} from '@react-navigation/stack';
import OptionButton from '../components/OptionButton';
import { globalStyles } from '../styles';

interface Props extends StackScreenProps<any, any> {}

const Principal = ({navigation}: Props) => {
  const {selectDocument} = useUploadCSV();

  return (
    <SafeAreaView style={styles.principalSContainer}>
      <Text style={styles.titleText} >¿Qué deseas hacer?</Text>

      <OptionButton
        textButton="Subir una lista existente"
        style={[styles.genericTouchable, styles.importListTouchable]}
        buttonStyle={[styles.genericTouchableText, {color: "#2D462E"}]}
        handleOnPress={() => selectDocument()}
      />

      <OptionButton
        textButton="Crear una nueva lista"
        style={[styles.genericTouchable, styles.newListTouchable]}
        buttonStyle={[styles.genericTouchableText, {color: "#405668"}]}
        handleOnPress={() => navigation.replace('Home')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  principalSContainer:{
   ...globalStyles.principalSContainer
  },
  titleText:{
   ...globalStyles.titleText
  },
  genericTouchable:{
  ...globalStyles.genericTouchable
  
  },
  importListTouchable:{
  ...globalStyles.importListTouchable
  },
  newListTouchable:{
  ...globalStyles.newListTouchable
  },
  genericTouchableText:{
   ...globalStyles.genericTouchableText
  }

})

export default Principal;
