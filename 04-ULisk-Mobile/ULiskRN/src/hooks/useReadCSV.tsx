import {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {readFile} from 'react-native-fs';
import XLSX from 'xlsx';
import { ListContextProps } from '../context/ListContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../interfaces/Product.interface';

export const useReadCSV = () => {
  const [csvData, setCsvData] = useState([]);
  const ProductTypes = ['id', 'name', 'price', 'inCar', 'producType'];
  const {products,setProducts, setIsData} = useContext(ListContextProps)

  const readCSV = async (res: any) => {
    //Valida que el documento sea CSV y no otro
    if (res[0].type.toString() !== 'text/comma-separated-values')
      return Alert.alert('Debe seleccionar un archivo .csv');

    readFile(res[0].uri, 'ascii').then(res => {
      const wb = XLSX.read(res, {type: 'binary'});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data: any[] = XLSX.utils.sheet_to_json(ws, {header: 1});
      var temp: any = [];

      //Valida que los tipos de datos coincidan con el csv subido
      if (data[0].toString() === ProductTypes.toString()) {
        for (let i = 1; i < data.length; i++) {
          temp.push({
            id: data[i][0],
            name: data[i][1],
            price: data[i][2],
            inCar: data[i][3],
            producType: data[i][4],
          });
        }

        setCsvData(temp);
        setProducts(temp)
        setIsData(true)
      } else {
        Alert.alert('La data seleccionada no coincide con la data del archivo');
      }
    });

  
    
  };
 
 //TODO: sasa
 

  return {
    readCSV,
    setCsvData,
    csvData,
  };
};
