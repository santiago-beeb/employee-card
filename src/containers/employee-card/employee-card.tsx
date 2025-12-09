import React from "react";
import "./employee-card.css";

const EmployeeCard: React.FC = () => {
  return (
    <div className="page">

      {/* ===== BUSCADOR ===== */}
      <div className="search-box">
        <input type="text" placeholder="Buscar empleado..." />
        <button>Buscar</button>
        <button className="btn pdf">Imprimir PDF</button>
      </div>

      <div className="card-container">
        <div className="card">

          {/* ===== HEADER ===== */}
          <div className="header">
            <img
              src="https://static.wixstatic.com/media/84057e56fea042ff9943ba93043697fb.jpg"
              alt="Empleado"
              className="photo"
            />
            <h2 className="name">Juan Carlos Pérez Gómez</h2>
            <p className="role">Operario - Cardas Planta 1</p>
          </div>

          {/* ===== TABLA INFORMACIÓN ===== */}
          <table className="info-table">
            <tbody>
              <tr><th>Documento</th><td>CC 1020456789</td></tr>
              <tr><th>Turno</th><td>Turno 1 (6am - 6pm)</td></tr>
              <tr><th>Supervisor</th><td>María López</td></tr>
              <tr><th>Jefe inmediato</th><td>Carlos Gómez</td></tr>
              <tr><th>Correo</th><td>juan.perez@empresa.com</td></tr>
              <tr><th>Teléfono</th><td>3001234567</td></tr>
              <tr><th>Estado</th><td className="status active">Activo</td></tr>
              <tr><th>Tiempo en la compañía</th><td>3 años y 4 meses</td></tr>
            </tbody>
          </table>

          {/* ========== DESCARGOS ========== */}
          <div className="section">
            <h3 className="section-title">Descargos</h3>

            <ul className="list">
              <li>08/03/2024 – Llegada tarde (justificado)</li>
              <li>16/07/2023 – Incumplimiento de norma de seguridad</li>
            </ul>

            <div className="crud-buttons">
              <button className="btn add">Añadir</button>
              <button className="btn edit">Editar</button>
              <button className="btn delete">Eliminar</button>
            </div>
          </div>

          {/* ========== EXÁMENES ========== */}
          <div className="section">
            <h3 className="section-title">Exámenes realizados</h3>

            <table className="exam-table">
              <tbody>
                <tr>
                  <th>Examen</th>
                  <th>Nota</th>
                  <th>Fecha</th>
                </tr>
                <tr>
                  <td>Seguridad y salud en el trabajo</td>
                  <td>92</td>
                  <td>10/02/2024</td>
                </tr>
                <tr>
                  <td>Procesos Cardas</td>
                  <td>88</td>
                  <td>15/06/2023</td>
                </tr>
              </tbody>
            </table>

            <div className="crud-buttons">
              <button className="btn add">Añadir</button>
              <button className="btn edit">Editar</button>
              <button className="btn delete">Eliminar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
