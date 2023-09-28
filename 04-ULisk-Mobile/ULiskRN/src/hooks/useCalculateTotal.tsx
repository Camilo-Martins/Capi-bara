import React, {useContext, useEffect, useState} from 'react';
import {ListContextProps} from '../context/ListContext';
import {Product} from '../interfaces/Product.interface';

const useCalculateTotal = () => {
  const {products} = useContext(ListContextProps);
  const [totalReal, setTotalReal] = useState<number>(0);
  const [totalRef, setTotalRef] = useState<number>(0);

  useEffect(() => {
    const calculoTotal = products.reduce((total: number, price: Product) => {
      if (price.inCar === true) {
        return price ? Number(price.price) + total : total;
      } else {
        return total;
      }
    }, 0);

    setTotalReal(calculoTotal);
  }, [products]);

  useEffect(() => {
    const calculoTotalRef = products.reduce((total: number, price: Product) => {
      return price ? Number(price.price) + total : total;
    }, 0);

    setTotalRef(calculoTotalRef);
  }, [products]);

  return {
    totalReal,
    totalRef,
  };
};

export default useCalculateTotal;
