import { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product.interface';
import { ListContextProps } from './ListContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue: any = await AsyncStorage.getItem('products');
        setProducts(jsonValue ? JSON.parse(jsonValue) : null);

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
        console.log(error);
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
      console.log('tiene e');
    }

    if (product.price.toString().startsWith('0')) {
      //return alert("Verifique que el precio no inicie con 0.")
      product.price = Number(product.price.toString().slice(1));
      console.log('tiene 0');
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
    console.log('editando' + '  ' + id + ' ' + produc.id, produc.name);

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
      }}>
      {children}
    </ListContextProps.Provider>
  );
};
