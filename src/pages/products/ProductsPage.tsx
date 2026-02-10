import { useState } from "react";
// import PageHeader from "../../components/layout/PageHeader";
import "./ProductsPage.css";
import { MdAddCircle } from "react-icons/md";
// import ProductsTable from "../../features/products/components/ProductsTable";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  return (
    <div className="products-page">
      {/* Header de la página */}
      {/* <PageHeader
        title="Products"
        subtitle="Create, edit and manage your menu items"
      /> */}

      {/* Barra de acciones */}
      <div className="products-actions">
        {/* Búsqueda */}
        <div className="products-search">
          <span className="material-symbols-outlined products-search-icon">
            
          </span>
          <input
            type="search"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="products-search-input"
          />
        </div>

        {/* Filtros y botón nuevo */}
        <div className="products-filters">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="products-category-select"
          >
            <option value="all">Todas las categorías</option>
            <option value="burgers">Burgers</option>
            <option value="sides">Sides</option>
            <option value="drinks">Drinks</option>
            <option value="desserts">Desserts</option>
          </select>

          <button className="products-add-btn">
            <span className="material-symbols-outlined">
                <MdAddCircle />
            </span>
            <span>Nuevo Producto</span>
          </button>
        </div>
      </div>

      {/* Tabla / Grid de productos */}
      <div className="products-table-container">
        {/* <ProductsTable searchQuery={searchQuery} category={filterCategory} /> */}
        <div className="products-placeholder">
          <span className="material-symbols-outlined">inventory_2</span>
          <p>La tabla de productos se mostrará aquí</p>
        </div>
      </div>
    </div>
  );
}