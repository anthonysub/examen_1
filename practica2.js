// Definir la clase Vehiculo
class Vehiculo {
  constructor(color, nombre, kilometraje, tamaño, cajacambios) {
    this.color = color;
    this.nombre = nombre;
    this.kilometraje = kilometraje;
    this.tamaño = tamaño;
    this.cajacambios = cajacambios;
  }

  describirse() {
    console.log(`El vehículo es de color ${this.color}, su nombre es ${this.nombre}, tiene un kilometraje de ${this.kilometraje}, su tamaño es ${this.tamaño} y la caja de cambios es ${this.cajacambios}.`);
  }
}

// Crear vehículos
const Vehiculo1 = new Vehiculo("rojo", "Spark", 25000, "pequeño", "manual");
const Vehiculo2 = new Vehiculo("azul", "Camión", 150000, "grande", "automático");
const Vehiculo3 = new Vehiculo("verde", "Moto", 5000, "pequeño", "manual");

// Función para guardar vehículos en localStorage
function guardarVehiculosEnLocalStorage(vehiculolist) {
  const vehiculosJSON = JSON.stringify(vehiculolist); // Convertir el array de vehículos a JSON
  localStorage.setItem('Vehiculo', vehiculosJSON); // Guardar en localStorage
}

// Guardar los objetos vehículo en un array
const vehiculolist = [Vehiculo1, Vehiculo2, Vehiculo3];
guardarVehiculosEnLocalStorage(vehiculolist);

// Función para recuperar vehículos de localStorage
function obtenerVehiculosDeLocalStorage() {
  const vehiculosJSON = localStorage.getItem('Vehiculo'); // Obtener el string JSON de localStorage
  if (vehiculosJSON) {
    const VehiculosArray = JSON.parse(vehiculosJSON); // Convertir el string JSON a un array de objetos
    return VehiculosArray.map(p => new Vehiculo(p.color, p.nombre, p.kilometraje, p.tamaño, p.cajacambios)); // Volver a crear instancias de Vehiculo
  }
  return [];
}

// Recuperar y describir los vehículos
const VehiculosRecuperados = obtenerVehiculosDeLocalStorage();
VehiculosRecuperados.forEach(vehiculo => vehiculo.describirse()); // Llamar a describirse en cada vehículo
