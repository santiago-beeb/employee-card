import React from "react";
import "./employee-card.css";

const EmployeeCard: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="header">
          <img
            src="https://static.wixstatic.com/media/84057e56fea042ff9943ba93043697fb.jpg"
            alt="Empleado"
            className="photo"
          />
          <h2 className="name">Juan Carlos Pérez Gómez</h2>
          <p className="role">Operario - Cardas Planta 1</p>
        </div>

        <table className="info-table">
          <tbody>
            <tr>
              <th>Documento</th>
              <td>CC 1020456789</td>
            </tr>
            <tr>
              <th>Turno</th>
              <td>Turno 1 (6am - 6pm)</td>
            </tr>
            <tr>
              <th>Supervisor</th>
              <td>María López</td>
            </tr>
            <tr>
              <th>Jefe inmediato</th>
              <td>Carlos Gómez</td>
            </tr>
            <tr>
              <th>Correo</th>
              <td>juan.perez@empresa.com</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>3001234567</td>
            </tr>
            <tr>
              <th>Estado</th>
              <td className="status active">Activo</td>
            </tr>
            <tr>
              <th>Tiempo en la compañía</th>
              <td>3 años y 4 meses</td>
            </tr>
            <tr>
              <th>Faltas</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Calificación exámenes</th>
              <td>92 / 100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeCard;
