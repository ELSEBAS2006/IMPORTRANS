import React from "react";
import { useNavigate } from "react-router-dom";
import "./dispensador.css";

const Dispensador = () => {
  const navigate = useNavigate();

  return (
    <main className="dispensador-main">
      <button
        className="btn-volver-productos"
        onClick={() => navigate("/productos")}
      >
        ← Volver a productos
      </button>
      <img
        src="/src/dispensador.png"
        alt="Dispensador de dosis automático"
        className="dispensador-titulo-img"
      />
      <h1 className="dispensador-title">
        DISPENSADOR DE DOSIS AUTOMÁTICO
      </h1>
      <section className="dispensador-info">
        <p>
          El dispensador de dosis automático Amercare ha sido desarrollado para imitar por 
          completo el proceso manual de llenado de jeringas para dispensar radiofármacos en dosis 
          unitarias o en viales multidosis.
        </p>
      </section>
      <img
        src="/src/dispe.png"
        alt="Imagen grande dispensador"
        className="dispensador-img-grande"
      />
      {/* Características principales */}
      <section className="dispensador-caracteristicas">
        <h2>Características principales:</h2>
        <ul>
          <li>✓ Reduce significativamente la dosis de dedo en dispensaciones de sobremesa.</li>
          <li>✓ Tiempo total de ciclo: 28 segundos para dispensar 1 ml y 48 segundos para dispensar 9 ml.</li>
          <li>✓ Imita los procedimientos de llenado manual de farmacia para transferencias de vial a jeringa y de jeringa a vial.</li>
          <li>✓ Aumenta la precisión, la repetibilidad y el rendimiento en operaciones de dispensación que requieren un blindaje resistente.</li>
          <li>✓ Apto para la mayoría de jeringas de hasta 10 ml.</li>
          <li>✓ El protector de viales admite viales de hasta 30 ml; hay adaptadores de viales personalizados disponibles bajo pedido.</li>
          <li>✓ Construcción de acero inoxidable y plástico, resistente a la mayoría de los productos de limpieza y desinfección disponibles en el mercado.</li>
          <li>✓ Diseñado para usar con agujas de 25 mm de largo.</li>
        </ul>
      </section>
    </main>
  );
};

export default Dispensador;