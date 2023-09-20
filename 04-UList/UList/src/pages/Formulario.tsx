import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useContext,
} from "react";
import { Product, ProductType } from "../interface/Product.interface";
import { ListContext } from "../context/ListContect";
import { initialState } from "../context/ListProvider";
import Input from "../components/Input";
import Select from "../components/Select";
import { lista } from "../interface/Product.interface";
import { calcularTotal } from "../hooks/calcularTotal";
import { useHandleChange } from "../hooks/useHandleChange";

const Formulario = () => {
  const { totalR } = calcularTotal();
  const { agregar, product, products, setProduct, editar, isEdit, setIsEdit } =
  useContext(ListContext);
  const { handleChange } = useHandleChange(product, setProduct);


  const handleNewItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product.name.length === 0) return alert("Debes agregar un nombre");

    if (isEdit === false) {
      agregar(product);
      setProduct(initialState);
    } else {
      editar(product.id, product);
      setProduct(initialState);
      setIsEdit(false);
    }
  };

  return (
    <div style={{ maxHeight: "365px", height: "400px" }}>
      {isEdit ? (
        <h1 className="text-center">Edita un Producto</h1>
      ) : (
        <h1 className="text-center">Agrega tus Productos</h1>
      )}

      <form action="" onSubmit={handleNewItem}>
        <Input
          id={"name"}
          name={"name"}
          label={"Nombre Producto"}
          htmlF={"name"}
          type={"text"}
          pl={"..."}
          onChange={handleChange}
          value={product.name}
        />
        <Input
          id={"price"}
          name={"price"}
          label={"Precio(Opcional)"}
          htmlF={"price"}
          type={"number"}
          pl={"0"}
          onChange={handleChange}
          value={product.price}
        />

        <Select
          lista={lista}
          value={product.producType}
          onChange={handleChange}
        />
        {isEdit ? (
          <>
            <button className="btn btn-success form-control my-4">
              {" "}
              Editar Producto
            </button>
            <input
              className="btn btn-danger form-control"
              type="button"
              value="Cancelar edición"
              onClick={() => {
                setIsEdit(false);
                setProduct(initialState);
              }}
            />
          </>
        ) : (
          <button className="btn btn-primary form-control my-4">
            {" "}
            Agregar item
          </button>
        )}
      </form>

      <hr />
      <h5 className="text-center">
        Total referencial: <span className="fw-bold"> $ {totalR} CLP</span>
      </h5>
    </div>
  );
};

export default Formulario;
