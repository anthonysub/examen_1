# Definir la clase Vehiculo
class Vehiculo:
    # Constructor con 3 atributos
    def __init__(self, marca, modelo, color):
        self.marca = marca
        self.modelo = modelo
        self.color = color

    # Método para mostrar los detalles del vehículo
    def mostrar_datos(self):
        print(f"Marca: {self.marca}, Modelo: {self.modelo}, Color: {self.color}")

    # Método para simular que el vehículo arranca
    def arrancar(self):
        print(f"El {self.marca} {self.modelo} de color {self.color} está arrancando.")

# Crear tres objetos de la clase Vehiculo
Objeto_1 = Vehiculo("Toyota", "Corolla", "Rojo")
Objeto_2 = Vehiculo("Ford", "Focus", "Azul")
Objeto_3 = Vehiculo("Honda", "Civic", "Negro")

# Imprimir los detalles de cada objeto
print("Detalles del Objeto 1:")
Objeto_1.mostrar_datos()
Objeto_1.arrancar()

print("\nDetalles del Objeto 2:")
Objeto_2.mostrar_datos()
Objeto_2.arrancar()

print("\nDetalles del Objeto 3:")
Objeto_3.mostrar_datos()
Objeto_3.arrancar()
