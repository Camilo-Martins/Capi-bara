import { useContext, useState } from "react";
import Formulario from "./pages/Formulario";
import Lista from "./pages/Lista";
import { Product } from "./interface/Product.interface";
import { ListProvider } from "./context/ListProvider";
import Prueba from "./pages/Prueba";
import { ListContext } from "./context/ListContect";

const App = () => {
  

 
  

  
 

  return (
    <>
      <ListProvider>
       <div className="body">
          <div className="container my-5 py-5 bg-light rounded">
            <h1 className="text-center uppercase">TU LISTA DE COMPRAS</h1>
            <hr />
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
          
        </div>  
       
      </ListProvider>
    </>
  );
};

export default App;
