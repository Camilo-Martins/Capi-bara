import React from "react";
import {
  BsFillCartCheckFill,
  BsCartDashFill,
  BsCartXFill,
  BsArrowUpLeftSquareFill,
} from "react-icons/bs";
import { Product } from "../interface/Product.interface";

interface Props {
  product: Product;
  handleAgregarCarro: (id: number) => void;
  handleEliminar: (id: number) => void;
  handleEditar: (id: number, product: Product) => void;
}

const Card = ({
  product,
  handleAgregarCarro,
  handleEditar,
  handleEliminar,
}: Props) => {
  const iconSize = {
    fontSize: "2rem", // Tamaño del icono
    //backgroundColor: '#2C98DF', // Cambia este valor al color de fondo que desees
    //color: 'white', // Cambia este valor al color del ícono (generalmente blanco si el fondo es oscuro)
    // padding: '8px', // Espaciado alrededor del icono (opcional)
    // borderRadius: '50%', // Hace que el fondo sea un círculo (opcional)
  };

  return (
    <div className="card my-3 mx-4" key={product.id}>
      <div className="card-body">
        <h3 className="card-title text-center">- Producto: {product.name} -</h3>
        <hr />

        <h4 className="card-title text-left">Precio: ${product.price}</h4>

        <h4 className="card-title text-left">
          Categoría: {product.producType}
        </h4>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center"></div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>

      <div className="container pb-3">
        <div className="row align-items-center">
          <div className="col text-center">Acciones:</div>

          <div className="col">
            {product.inCar ? (
              <button
                className="btn btn-danger "
                title="Elimina el producto del Carro"
                onClick={() => handleAgregarCarro(product.id)}
              >
                <BsCartDashFill style={iconSize} />
              </button>
            ) : (
              <button
                className="btn btn-primary"
                title="Agrega el producto al Carro"
                onClick={() => handleAgregarCarro(product.id)}
              >
                <BsFillCartCheckFill style={iconSize} />
              </button>
            )}
          </div>
          <div className="col">
            <button
              className="btn btn-secondary"
              title="Edita el Producto"
              onClick={() => handleEditar(product.id, product)}
            >
              <BsArrowUpLeftSquareFill style={iconSize} />
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-danger"
              title="Elimina el producto de la Lista"
              onClick={() => handleEliminar(product.id)}
            >
              <BsCartXFill style={iconSize} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
