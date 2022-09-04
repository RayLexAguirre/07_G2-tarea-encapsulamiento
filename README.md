![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Lynx in winter forrest. <span>Photo by <a href="https://unsplash.com/@zmachacek?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Zdeněk Macháček</a> on <a href="https://unsplash.com/t/animals?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Tarea: Encapsulamiento

El objetivo de este ejercicio poner en práctica el principio y proceso de encapsulamiento de clases.

## Requerimientos funcionales

1. (42 Puntos) Programar la clase `Contact`. Deberá estar encapsulada e incluir los siguientes:
   - (10 puntos) Atributos:
     - `String name (RW)` nombre completo del contacto.
     - `Date birthDate (W)` fecha de nacimiento. 
     - `String phoneNumber (R)` número de teléfono
   - Métodos
     - (8 puntos) `constructor()` recibe valores iniciales para `name`, `birthDate`, y `phoneNumber`.  
     - (8 puntos) `getAge()` regresa la edad de la persona.
     - (8 puntos) `getDaysToBirthDay()` regresa el número de días que faltan para que sea su cumpleaños o si ya pasó, hace cuantos días fué, es decir regresa el número de días pero en negativo. Por ejemplo si hoy es 10/Feb y su cumpleaños es el 12/Feb, entonces regresa 2. Pero si hoy es 10/Feb y su cumpleaños fué el 8/Feb, entonces regresa -2.
     - (8 puntos) `getPhoneNumber()` regresa el número de teléfono con el siguiente formato 312-984-9854. Si el número de teléfono no es correcto, es decir no contiene 10 dígitos entonces regresará `error`. Se asume que el número originalmente está en este formato: 3129849854
  
2. (58 Puntos) Programar la clase `Bus`. Deberá estar encapsulada e incluir los siguientes:
   - (10 puntos) Atributos:
     - `String number (W)` el número de autobús.
     - `Number maxPassenger (R)` número máximo de pasajeros
     - `Number minPassenger(R)` número mínimo de pasajeros
     - `String destination (-)` lugar de destino
     - `Number seatPrice (W)`  el costo de el asiento individual
     - `Number passengers (-)` en número de pasajeros en este autobús.
   - Métodos
     - (8 puntos) `constructor()` recibe valores iniciales para `number`, `maxPassenger`, `minPassenger`, `destination` y  `seatPrice`. El valor de `passengers` se inicializa en cero.
     - (8 puntos) `addPassengers(number)` agrega `number` pasajeros siempre y cuando no rebase la máxima capacidad `maxPassenger`. Regresa `true` si se agregaron ó `false` si no se agregaron.
     - (8 puntos) `removePassengers(number)` quita `number` pasajeros siempre y cuando el resultado no sea menor a cero. Regresa `true` si se quitaron ó `false` si no se quitaron.
     - (8 puntos) `soldTickets()` regresa la cantidad en dinero del número de boletos vendidos. Se obtiene de multiplicar los `passengers` por el `seatPrice`.
     - (8 puntos) `isReadyToGo()` regresa `true` si `passengers` es mayor o igual a `minPassengers`
     - (8 puntos) `getAvailableSeats()` regresa el número de asientos disponibles.
  
## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
