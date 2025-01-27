// Arreglo de propiedades en venta
const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "./assets/img/urban-traffic-with-cityscape.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "./assets/img/wide-shot-brown-house-surrounded-by-forest-spruce-trees-clouds.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "./assets/img/office-buildings-with-modern-architecture.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna con jardín",
    src: "./assets/img/beautiful-modern-house-cement-view-from-garden.jpg",
    descripcion: "Casa moderna con un amplio jardín, ideal para familias.",
    ubicacion: "456 Greenway Road, Suburbia, CA 98765",
    habitaciones: 5,
    costo: 3500,
    smoke: true,
    pets: false,
  },
];

// Función para renderizar propiedades
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("propiedadesVenta");
  propiedadesVenta.forEach((propiedad) => {
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
              propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
            }
          </p>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
