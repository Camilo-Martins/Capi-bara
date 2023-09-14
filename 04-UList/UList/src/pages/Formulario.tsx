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

  const { agregar, product, products, setProduct, editar, isEdit, setIsEdit } =
    useContext(ListContext);

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
    setProduct({ ...product, [name]: value });
  };

  const handleNewItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product.name.length === 0) return alert("Debes agregar un nombre");

    if (isEdit === false) {
      agregar(product);
      setProduct(initialState);
    } else {
      editar(product.id, product);
      setProduct(initialState);
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
            value={product.producType}
          >
            {lista.map((e, index) => (
              <option value={e} key={index}>
                {e}
              </option>
            ))}
          </select>
        </div>
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
