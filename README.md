# todoAPP
Desarrollar una aplicación móvil en React Native con Expo, tipo TODO LIST, donde el usuario pueda administrar tareas pendientes.
# Aplicación To-Do List

## 2. Explicación de pantallas

### Pantalla Home (Index)
- Muestra la lista de tareas almacenadas.
- Permite navegar al detalle de cada tarea.
- Incluye un botón para agregar nuevas tareas.
- Permite eliminar tareas existentes.

---

### Pantalla Add
- Permite crear una nueva tarea.
- El usuario ingresa el título.
- Puede seleccionar el estado (Pendiente o Completada).
- Se genera automáticamente un ID.
- Guarda la tarea en almacenamiento local.

---

### Pantalla Detail
- Muestra el detalle de una tarea seleccionada.
- Permite visualizar el título y estado.
- Permite cambiar el estado de la tarea.
- Guarda los cambios en el almacenamiento.

---

## 3. Explicación de componentes reutilizables

### Componente TaskItem
- Se utiliza para mostrar cada tarea en la lista.
- Recibe props desde el componente principal (Home).
- Props utilizados:
  - `task`: contiene los datos de la tarea.
  - `onPress`: función para navegar al detalle.
  - `onDelete`: función para eliminar la tarea.

Este componente permite reutilizar código y mantener una estructura organizada.

---

## 4. Explicación de persistencia

La aplicación utiliza AsyncStorage para almacenar los datos de las tareas de forma local en el dispositivo.

Funciones utilizadas:
- `getTasks()`: obtiene las tareas almacenadas.
- `saveTasks()`: guarda la lista actualizada de tareas.

Esto permite que los datos se mantengan incluso después de cerrar la aplicación.

---

## 5. Flujo de navegación

La navegación se implementa utilizando Expo Router.

Flujo:
1. El usuario inicia en la pantalla Home.
2. Puede:
   - Ver tareas
   - Eliminar tareas
   - Ir a agregar nueva tarea (Add)
3. Desde Home puede seleccionar una tarea:
   - Navega a Detail
4. En Detail:
   - Puede cambiar el estado
   - Regresar a Home

---

## Tecnologías utilizadas

- React Native
- Expo Router
- TypeScript
- AsyncStorage

---

# Hooks utilizados

- `useState`: manejo de estados
- `useEffect`: carga inicial de datos
- `useFocusEffect`: actualización al cambiar de pantalla


