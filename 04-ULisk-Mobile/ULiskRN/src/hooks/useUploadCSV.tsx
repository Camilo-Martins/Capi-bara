import {useState} from 'react';
import {Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {readFile} from 'react-native-fs';
import XLSX from 'xlsx';
import {useReadCSV} from './useReadCSV';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const useUploadCSV = () => {
  const {readCSV, csvData} = useReadCSV();

  const selectDocument = async () => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      readCSV(res);
    } catch (error) { 
      console.log(error);
    }
  };

  return {
    selectDocument,
    csvData,
  };
};
