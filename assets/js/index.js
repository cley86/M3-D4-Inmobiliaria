// Datos combinados de propiedades en venta y alquiler
import { propiedadesVenta } from "./propiedadesVenta.js";
import { propiedadesAlquiler } from "./propiedadesAlquiler.js";

document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los contenedores
  const contenedorVenta = document.getElementById("propiedadesVenta");
  const contenedorAlquiler = document.getElementById("propiedadesAlquiler");

  // Función para renderizar las primeras 3 propiedades
  const renderizarPropiedades = (contenedor, propiedades) => {
    propiedades.slice(0, 3).forEach((propiedad) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");

      card.innerHTML = `
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="${
        propiedad.nombre
      }" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${
              propiedad.habitaciones
            } Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
              <i class="fas ${
                propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"
              }"></i>
              ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}
            </p>
            <p class="${propiedad.pets ? "text-success" : "text-danger"}">
              <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
              ${
                propiedad.pets
                  ? "Mascotas permitidas"
                  : "No se permiten mascotas"
              }
            </p>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    });
  };

  // Renderizar las propiedades en sus respectivos contenedores
  renderizarPropiedades(contenedorVenta, propiedadesVenta);
  renderizarPropiedades(contenedorAlquiler, propiedadesAlquiler);
});
