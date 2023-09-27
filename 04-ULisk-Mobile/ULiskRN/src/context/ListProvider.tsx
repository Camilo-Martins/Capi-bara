import { useEffect, useState } from 'react';
import { Product, data } from '../interfaces/Product.interface';
import { ListContextProps } from './ListContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const inicialState = {
  id: 999999999,
  name: '',
  price: 0,
  inCar: false, // El nombre del campo en el estado es "inCar"
  producType: 'Sin tipo',
};

export const ListProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>(inicialState);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isData, setIsData] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)

  useEffect(() =>{
    setIsData(false)
  })

  useEffect(() =>{
    if(products?.length > 0) setIsData(true)
  
},[products])

 

  useEffect(() => {
  
    const getData = async () => {
      try {
      
        
        const jsonValue: any = await AsyncStorage.getItem('products');
        setProducts(jsonValue ? JSON.parse(jsonValue) : []);

        return jsonValue != null ? JSON.parse(jsonValue) : null;
       
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }, []);

  useEffect(() => {
  
    const guardarLista = async () => {

     

      try {
      
       
          await AsyncStorage.setItem('products', JSON.stringify(products));
      
      

      } catch (error) {
     
      }
    };
    guardarLista();
  }, [products]);



  const agregar = (product: Product) => {
    product.id = Date.now();
    product.inCar = false;

    if (product.price.toString().includes('e')) {
      // return alert("Verifique que el precio solo tenga números.")
      product.price = Number(product.price.toString().replace('e', ''));
   
    }

    if (product.price.toString().startsWith('0')) {
      //return alert("Verifique que el precio no inicie con 0.")
      product.price = Number(product.price.toString().slice(1));
   
    }

   
    setProducts([...products, product]);

    setProduct(inicialState);
  };

  const agregarCarro = (id: number) => {
    setProducts(
      products.map(produc =>
        produc.id === id ? { ...produc, inCar: !produc.inCar } : produc,
      ),
    );
  };

  const editar = (id: number, produc: Product) => {
    //TODO: FORMAREAR PRECIO
  

    setProducts(
      products.map(product =>
        product.id === id
          ? {
            ...product,
            name: produc.name,
            price: produc.price,
            producType: produc.producType,
            inCar: produc.inCar,
          }
          : product,
      ),
    );
  };

  const eliminar = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const eliminarInfo = async () =>{
     setProducts([])
    try {
     
      await AsyncStorage.clear()
     
     
    
   
    } catch(e) {
      // clear error
    }
  
  
  }


  return (
    <ListContextProps.Provider
      value={{
        product,
        setProduct,
        products,
        setProducts,
        isEdit,
        setIsEdit,
        isModal,
        setIsModal,
        agregar,
        agregarCarro,
        editar,
        eliminar,
        eliminarInfo,
        isData,
        setIsData
      }}>
      {children}
    </ListContextProps.Provider>
  );
};
