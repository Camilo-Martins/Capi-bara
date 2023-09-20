import React, { useContext } from "react";
import { ListContext } from "../context/ListContect";
import { Product } from "../interface/Product.interface";
import { json2csv as converter } from "json-2-csv";

export const exportData = () => {
  const { products } = useContext(ListContext);

  const convertToCSV = (data: any) => {
    try {
      const header = Object.keys(data[0]).join(",") + "\n";
      const rows = data
        .map((obj: any) => Object.values(obj).join(","))
        .join("\n");

      return header + rows;
    } catch (error) {}
  };

  const csvData: any = convertToCSV(products);

  const DescargarCSV = () => {
    if (products.length === 0) return alert("No tienes nada en tu carrito!.");

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lista.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

 /* const exportList = () => {
    if (products.length === 0) return alert("No tienes nada en tu carrito!.");

    // Crear un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([400, 400]);

    let listText = "Lista de Productos:\n\n";

    // Agregar el contenido JSON al PDF
    const content = JSON.stringify(products, null, 2);
    page.drawText(content, {
      x: 50,
      y: page.getHeight() - 50,
      size: 12,
      color: rgb(0, 0, 0),
    });

    // Generar el archivo PDF
    const pdfBytes = await pdfDoc.save();

    // Crear un Blob a partir de los bytes del PDF
    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    // Crear una URL del Blob y descargar el archivo PDF
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "lista.pdf";
    link.click();

    // Liberar la URL del Blob después de la descarga
    URL.revokeObjectURL(url);  */

    /*  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(products)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "lista.json";

    link.click(); 
  };*/

  return {
    //exportList,
    DescargarCSV,
  };
};
