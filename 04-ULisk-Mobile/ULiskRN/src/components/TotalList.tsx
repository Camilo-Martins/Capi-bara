import {View, Text} from 'react-native';
import useCalculateTotal from '../hooks/useCalculateTotal';

const Total = () => {
  const {totalReal, totalRef} = useCalculateTotal();

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#B9BFD0',
        marginTop: 10,
        marginBottom: 20,
        width: 250,
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: '#992716',
          fontSize: 18,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}>
        Total Referencial: {totalRef}{' '}
      </Text>
      <Text
        style={{
          color: '#1E3988',
          fontSize: 18,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        }}>
        Total Real: {totalReal}{' '}
      </Text>
    </View>
  );
};

export default Total;
