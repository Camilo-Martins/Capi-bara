import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useContext,
} from "react";
import { Product, ProductType } from "../interface/Product.interface";
import { ListContext } from "../context/ListContect";



const Formulario = () => {
  const [totalR, setTotalR] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [lista, setLista] = useState<ProductType[]>([
    "Sin tipo",
    "Aseo Casa",
    "Aseo Personal",
    "Comida fresca",
    "Congelados",
    "Dulces",
    "Herramientas",
    "Otros",
    "Tecnología",
  ]);

  const { agregar, product, products, setProduct, editar, agregarCarro, eliminar } = useContext(ListContext);

  useEffect(() => {
    const totalRef = products.reduce((total: number, precio: Product) => {
      return precio ? Number(precio.price) + total : total;
    }, 0);

    setTotalR(totalRef);
  }, [products]);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >, id?: number) => {

  
      setProduct({ ...product, [name]: value });
    
   
  };

  const handleNewItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product.name.length === 0) return alert("Debes agregar un nombre");

    if(isEdit === false){
      agregar(product);
    }else{
      console.log(product.id)
      editar(product.id, product)
    }

    

   
  };

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
    eliminar(id)
  }

  const handleEditar = (id: number, product: Product) =>{
  
    setIsEdit(true)
    setProduct({ ...product });

  }

  return (
    <>
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


    <div style={{ maxHeight: "365px", height: "400px" }}>
      <h1 className="text-center">Agrega tus Productos</h1>
      <form action="" onSubmit={handleNewItem}>
        <div>
          <label className="px-2 py-3 fw-bold text-uppercase" htmlFor="name">
            Nombre Producto
          </label>
          <input
            id="name"
            name="name" // Cambiado de "nombre" a "name" para que coincida con el estado
            className="form-control"
            type="text"
            placeholder="..."
            onChange={handleChange}
            value={product.name}
            maxLength={20}
          />
        </div>
        <div>
          <label className="px-2 py-3 fw-bold text-uppercase" htmlFor="price">
            Precio (Opcional){" "}
          </label>
          <input
            id="price"
            name="price" // Cambiado de "precio" a "price" para que coincida con el estado
            className="form-control"
            type="number"
            placeholder="..."
            onChange={handleChange}
            value={product.price}
            maxLength={10}
          />
        </div>
        <div>
          <label
            className="px-2 py-3 fw-bold text-uppercase"
            htmlFor="categoria"
          >
            Categoria
          </label>
          <select
            id="categoria"
            className="form-control"
            name="producType" // Cambiado de "categoria" a "productType" para que coincida con el estado
            onChange={handleChange}
          >
            {lista.map((e, index) => (
              <option value={e} key={index}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary form-control my-4">
          {" "}
          Agregar item
        </button>
      </form>

      <hr />
      <h5 className="text-center">
        Total referencial: <span className="fw-bold"> $ {totalR} CLP</span>
      </h5>
    </div>
    </>
  );
};

export default Formulario;
