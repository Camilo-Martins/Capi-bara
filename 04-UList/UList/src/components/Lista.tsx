import React, { useContext, useEffect, useState } from "react";
import { Product } from "../interface/Product.interface";
import { ListProvider } from "../context/ListProvider";
import { ListContext } from "../context/listContect";

const Lista = () => {
  const [totalR, setTotalR] = useState<number>(0);

  const { products } = useContext(ListContext);

  useEffect(() => {
    const totalRef = products.reduce((total: number, precio: Product) => {
      if (precio.inCar === true) {
        return precio ? Number(precio.price) + total : total;
      }
      return total;
    }, 0);

    setTotalR(totalRef);
  }, [products]);

  return (
    <div>
      <h1 className="text-center">Tu Carrito</h1>
      <div
        className="overflow-auto"
        style={{ maxHeight: "368px", height: "400px" }}
      >
        {products.map((product) => (
          <div className="card my-3 mx-4" key={product.id}>
            <div className="card-body">
              <h3 className="card-title text-center">
                Producto: {product.name}
              </h3>
              <h4 className="card-title text-left">Precio: ${product.price}</h4>
              <h4 className="card-title text-left">
                Categoría: {product.producType}
              </h4>
              <div>
                {product.inCar ? (
                  <h4 className="card-title text-left">En tu carro</h4>
                ) : (
                  <h4 className="card-title text-left">Aun no lo añades!</h4>
                )}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => product.inCar === false}
                />
              </div>

              <div>
                <h4 className="card-title text-left">Acciones: </h4>
                <button
                  className="btn btn-warning"
                  onClick={() => console.log(product.id)}
                >
                  Editar Producto
                </button>
                <button className="btn btn-danger">Eliminar Producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <h5 className="text-center">
        Total Real: <span className="fw-bold">{totalR}</span>
      </h5>
    </div>
  );
};

export default Lista;
