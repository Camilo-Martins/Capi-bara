import React, { useContext, useEffect, useState } from "react";
import { Product } from "../interface/Product.interface";
import { ListContext } from "../context/ListContect";
import { calcularTotal } from "../hooks/calcularTotal";
import Card from "../components/Card";

const Lista = () => {
  const {
    products,
    agregarCarro,
    setProducts,
    eliminar,
    setProduct,
    setIsEdit,
    isEdit,
  } = useContext(ListContext);

  const { totalReal } = calcularTotal();

  const handleAgregarCarro = (id: number) => {
    agregarCarro(id);
  };

  const handleEliminar = (id: number) => {
    if (isEdit === true) {
      console.log(isEdit);
      return alert("No puedes eliminar un producto que estés editando.");
    }
    eliminar(id);
  };

  const handleEditar = (id: number, product: Product) => {
    setIsEdit(true);
    setProduct({ ...product });
  };

  return (
    <div>
      <h1 className="text-center">Tu Carrito</h1>

      <div
        className="overflow-auto"
        style={{ maxHeight: "368px", height: "400px" }}
      >
        {products.map((product) => (
          <Card
            product={product}
            handleAgregarCarro={handleAgregarCarro}
            handleEditar={handleEditar}
            handleEliminar={handleEliminar}
          />
        ))}
      </div>
      <hr />
      <h5 className="text-center">
        Total Real: <span className="fw-bold">$ {totalReal} CLP</span>
      </h5>
    </div>
  );
};

export default Lista;
