// import OrdersTable from "../../features/orders/components/OrdersTable";
import { useState } from "react";
// import PageHeader from "../../components/layout/PageHeader";
import "./OrdersPage.css"; // ← Importar el CSS

export default function OrdersPage() {
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div className="orders-page"> {/* ← Clase personalizada */}
      {/* <PageHeader
        title="Orders"
        subtitle="Manage and review all orders"
      /> */}

      <div className="orders-filters"> {/* ← Clase personalizada */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="orders-select" 
        >
          <option value="all">Todas</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Completadas</option>
        </select>

        <button className="orders-export-btn"> {/* ← Clase personalizada */}
          Exportar
        </button>
      </div>

      <div className="orders-table-container"> {/* ← Clase personalizada */}
        <p>Tabla de órdenes aquí</p>
      </div>
    </div>
  );
}