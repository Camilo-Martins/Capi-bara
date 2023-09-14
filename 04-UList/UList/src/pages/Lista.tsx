import React, { useContext, useEffect, useState } from "react";
import { Product } from "../interface/Product.interface";
import { ListContext } from "../context/ListContect";

const Lista = () => {
  const [totalR, setTotalR] = useState<number>(0);
  const { products, agregarCarro, setProducts, eliminar, setProduct, setIsEdit, isEdit } = useContext(ListContext);

  useEffect(() => {
    const totalRef = products.reduce((total: number, precio: Product) => {
      if (precio.inCar === true) {
        return precio ? Number(precio.price) + total : total;
      }
      return total;
    }, 0);

    setTotalR(totalRef);
  }, [products]);

  const handleAgregarCarro = (id: number) =>{
  
  
    agregarCarro(id)
  

  }

  const handleEliminar = (id: number) =>{

    if(isEdit === true) {
      console.log(isEdit)
      return alert("No puedes eliminar un producto que estés editando.")
    }
    eliminar(id)
  }

  const handleEditar = (id: number, product: Product) =>{
  
    setIsEdit(true)
    setProduct({ ...product });

  }

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
                  onClick={() => handleAgregarCarro(product.id)}
                />
              </div>

              <div>
                <h4 className="card-title text-left">Acciones: </h4>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditar(product.id, product)}
                >
                  Editar Producto
                </button>
                <button className="btn btn-danger" onClick={() => handleEliminar(product.id)}>Eliminar Producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <h5 className="text-center">
        Total Real: <span className="fw-bold">$ {totalR} CLP</span>
      </h5>
    </div>
  );
};

export default Lista;
