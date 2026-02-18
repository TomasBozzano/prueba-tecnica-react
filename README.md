# 🚀 Prueba Técnica React - Nimble Gravity

Aplicación web para la búsqueda de candidatos y aplicación a posiciones laborales, desarrollada como parte del desafío técnico de Nimble Gravity.

## 📋 Descripción

Esta aplicación permite a los usuarios:
- Buscar su información de candidato mediante email
- Visualizar una lista de posiciones laborales disponibles
- Aplicar a diferentes posiciones proporcionando un repositorio de GitHub
- Navegar entre páginas de resultados con paginación

## 🛠️ Tecnologías Utilizadas

### Core
- **React 19.2.0** - Librería principal para construir la interfaz de usuario
- **Vite 7.3.1** - Build tool y dev server de última generación
- **JavaScript (ES6+)** - Lenguaje de programación

### Gestión de Estado
- **Zustand 5.0.11** - Librería ligera para manejo de estado global

### Estilos
- **Tailwind CSS 4.1.18** - Framework de CSS utility-first para estilos rápidos y responsivos

### UI/UX
- **React Icons 5.5.0** - Iconos para mejorar la interfaz visual
- **React Toastify 11.0.5** - Notificaciones toast para feedback al usuario

### Herramientas de Desarrollo
- **ESLint 9.39.1** - Linter para mantener código limpio y consistente
- **@vitejs/plugin-react-swc** - Plugin de Vite con compilación SWC para mejor rendimiento

## 🏗️ Arquitectura y Modelo

El proyecto sigue un **modelo de arquitectura modular y separación de responsabilidades**, organizado de la siguiente manera:

### Patrón de Arquitectura

```
src/
├── components/      # Componentes de UI reutilizables
├── hooks/          # Custom Hooks para lógica de negocio
├── service/        # Capa de servicios para llamadas a API
├── store/          # Store de Zustand para estado global
├── utils/          # Funciones utilitarias y validadores
└── assets/         # Recursos estáticos
```

### Principios Aplicados

#### 1. **Separación de Responsabilidades**
- **Componentes**: Solo se encargan de la presentación visual
- **Hooks**: Contienen la lógica de negocio reutilizable
- **Servicios**: Manejan toda la comunicación con APIs externas
- **Store**: Centraliza el estado global de la aplicación
- **Utils**: Funciones puras para validaciones y transformaciones

#### 2. **Custom Hooks**
- `UsePerson`: Maneja la lógica del formulario de búsqueda de candidatos
- `UsePagination`: Implementa la lógica de paginación de resultados

#### 3. **Estado Global con Zustand**
- Store minimalista para compartir `uuid`, `candidateId` y `email` entre componentes
- Evita prop drilling manteniendo el código limpio

#### 4. **Servicios API**
- `email.service.js`: Búsqueda de candidatos por email
- `jobs.service.js`: Obtención de posiciones y aplicación a trabajos

#### 5. **Componentes Reutilizables**
- `Button`: Botón genérico con estados disabled
- `Card`: Tarjeta de posición laboral con formulario
- `InputSearch`: Buscador con validación de email
- `ListPosition`: Lista paginada de posiciones

## 📁 Estructura del Proyecto

```
prueba-tecnica-react/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── assets/            # Imágenes y recursos
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── InputSearch.jsx
│   │   └── ListPosition.jsx
│   ├── hooks/
│   │   ├── UsePagination.jsx
│   │   └── UsePerson.jsx
│   ├── service/
│   │   ├── email.service.js
│   │   └── jobs.service.js
│   ├── store/
│   │   └── storedPerson.js
│   ├── utils/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── eslint.config.js
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Instalación y Ejecución

### Prerequisitos
- Node.js (v18 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Clonar el repositorio**
```bash
git clone https://github.com/TomasBozzano/prueba-tecnica-react.git
cd prueba-tecnica-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=https://tu-api-url.com
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Construir para producción**
```bash
npm run build
```

6. **Previsualizar build de producción**
```bash
npm run preview
```

## ✨ Características Principales

### 🔍 Búsqueda de Candidatos
- Validación de email en tiempo real
- Feedback visual con bordes rojos en caso de error
- Almacenamiento automático de datos en el store global

### 💼 Gestión de Posiciones
- Lista de trabajos disponibles obtenida de la API
- Paginación de resultados (navegación entre páginas)
- Botones de navegación rápida (primera/última página)

### 📝 Aplicación a Trabajos
- Validación de URLs de GitHub
- Estado de carga independiente por cada posición
- Prevención de múltiples envíos simultáneos
- Manejo de errores con mensajes descriptivos

### 🎨 UX/UI
- Diseño responsivo con Tailwind CSS
- Notificaciones toast para feedback inmediato
- Estados de carga visuales
- Validaciones en tiempo real

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 📝 Convenciones de Código

- **Componentes**: PascalCase (ej: `InputSearch.jsx`)
- **Hooks**: Prefijo `Use` + PascalCase (ej: `UsePerson.jsx`)
- **Servicios**: camelCase + `.service.js` (ej: `email.service.js`)
- **Utilidades**: camelCase (ej: `utils.js`)

## 🤝 Autor

**Tomás Bozzano**

---

Desarrollado con ❤️ para Nimble Gravity
