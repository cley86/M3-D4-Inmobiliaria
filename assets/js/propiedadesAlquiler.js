// Arreglo de propiedades en alquiler
const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "./assets/img/city-background-panoramic-view.jpg",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "./assets/img/luxury-beach-house-with-glass-windows-beautiful-scenery-sea.jpg",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "./assets/img/beige-green-building-day.jpg",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "789 Suburb Lane, Quiet Town, CA 34567",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Estudio acogedor cerca del parque",
    src: "./assets/img/modern-apartment-architecture.jpg",
    descripcion:
      "Un estudio compacto y acogedor ideal para estudiantes o profesionales solteros.",
    ubicacion: "321 Parkside Drive, Green City, CA 67890",
    habitaciones: 1,
    costo: 1200,
    smoke: true,
    pets: false,
  },
];

// Función para renderizar propiedades
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("propiedadesAlquiler");
  propiedadesAlquiler.forEach((propiedad) => {
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
});
