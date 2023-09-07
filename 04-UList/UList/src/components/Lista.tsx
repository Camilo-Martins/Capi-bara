import React from "react";
import { Product } from "../interface/Product.interface";

interface Props {
  products: Product[];
}

const Lista = ({ products }: Props) => {
  return (
    <div >
      <h1 className="text-center">Tu Carrito</h1>
      <div className="overflow-auto" style={{ maxHeight: "368px" , height: "400px" }}>
        {products.map((product) => (
          <div className="card my-3 mx-4" key={product.id}>
            <div className="card-body">
            <h3 className="card-title text-center">Producto: {product.name}</h3>
            <h4 className="card-title text-left">Precio: ${product.price}</h4>
            <h4 className="card-title text-left">Categoría: {product.producType}</h4>
           <div>
           {product.inCar ? <h4 className="card-title text-left">En tu carro</h4> : <h4 className="card-title text-left">Aun no lo añades!</h4>}
           <input type="checkbox" name="" id="" />
           </div>
         
            <div>
              <h4 className="card-title text-left">Acciones: </h4>
              <button className="btn btn-warning">Editar Producto</button>
              <button className="btn btn-danger">Eliminar Producto</button>
            </div>

            </div>
          </div>
        ))}
      </div>

      <hr />
      <h5 className="text-center">
        Total Real: <span className="fw-bold"> 333</span>
      </h5>
    </div>
  );
};

export default Lista;
