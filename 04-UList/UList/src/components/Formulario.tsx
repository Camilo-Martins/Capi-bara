import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useContext,
} from "react";
import { Product, ProductType } from "../interface/Product.interface";
import { ListContext } from "../context/listContect";

const initialState = {
  id: 999999999,
  name: "",
  price: 0,
  inCar: false, // El nombre del campo en el estado es "inCar"
  producType: "Sin tipo",
};

const Formulario = () => {
  const [totalR, setTotalR] = useState<number>(0);
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

  const { agregar, product, products, setProduct } = useContext(ListContext);

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
  >) => {
    product.id = Date.now();
    product.inCar = true;

    console.log(value);

    setProduct({ ...product, [name]: value });
  };

  const handleNewItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product.name.length === 0) return alert("Debes agregar un nombre");

    agregar(product);

    setProduct(initialState);
  };

  return (
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
        Total referencial: <span className="fw-bold"> {totalR}</span>
      </h5>
    </div>
  );
};

export default Formulario;
