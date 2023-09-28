import DocumentPicker from 'react-native-document-picker';
import {useReadCSV} from './useReadCSV';

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
