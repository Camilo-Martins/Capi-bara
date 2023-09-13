import { useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import { Product } from "./interface/Product.interface";
import { ListProvider } from "./context/ListProvider";
import Prueba from "./components/Prueba";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

 
  return (
    <>
      <ListProvider>
        {/* <div className="body">
          <div className="container my-5 py-5 bg-light rounded">
            <h1 className="text-center uppercase">TU LISTA DE COMPRAS</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="element">
                  <Formulario   />
                </div>
              </div>
              <div className="col-md-6">
                <div className="element">
                  <div>
                    <Lista />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
       <Prueba/>
      </ListProvider>
    </>
  );
};

export default App;
