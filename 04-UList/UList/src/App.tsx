import { useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import { Product } from "./interface/Product.interface";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <>
      <div className="body">
        <div className="container my-5 py-5 bg-light rounded">
          <h1 className="text-center uppercase">TU LISTA DE COMPRAS</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="element">
                <Formulario addProduct={addProduct} products={products} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="element">
                <div>
                  <Lista products={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
