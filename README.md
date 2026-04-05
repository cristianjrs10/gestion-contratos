# Gestión de Contratos - Arquitectura del Proyecto

Este proyecto es una aplicación Angular moderna para gestionar un flujo de firma electrónica de contratos divididos en pasos.

## Resumen de la arquitectura

- Aplicación basada en Angular con componentes independientes (`standalone: true`).
- Enrutamiento principal en `src/app/app.routes.ts`.
- Layout global en `src/app/layout/main-layout/` con un `Header`, un `Wizard` de pasos y un `RouterOutlet`.
- Flujo de usuario en `src/app/features/prospects/pages/` con páginas de cada paso del proceso.
- Estado compartido entre pasos mediante el servicio `ProspectService`.

## Estructura principal

### `src/app/app.routes.ts`

- Define la ruta base `''` que carga `MainLayout`.
- Componentes hijos de ruta:
  - `/paso1` → `Paso1Form`
  - `/paso2` → `Paso2Preview`
  - `/paso3` → `Paso3Signature`
  - `/paso4` → `Paso4Confirm`
- Cada página se carga de forma perezosa con `loadComponent`.

### `src/app/layout/main-layout/`

- `main-layout.ts` importa y muestra:
  - `Header`
  - `Wizard`
  - `RouterOutlet`
- `main-layout.html` es el contenedor visual principal de la aplicación.

### `src/app/layout/components/wizard/`

- `wizard.ts` detecta el paso activo desde la URL y actualiza el indicador de progreso.
- `wizard.html` muestra los pasos 1 a 4 con estilo activo según la ruta.

### `src/app/features/prospects/pages/`

- Incluye las páginas de la experiencia de contrato:
  - `paso1-form/`
  - `paso2-preview/`
  - `paso3-signature/`
  - `paso4-confirm/`
- Cada página es un componente independiente con su propio HTML y SCSS.

## Flujo de datos

### `src/app/features/prospects/services/prospect.service.ts`

- `ProspectService` mantiene el estado del prospecto a lo largo de los pasos.
- Interfaz `ProspectData` con campos como `nombre`, `rut`, `email`, `telefono`, `direccion`, `comuna`, `tipoContrato`, `acceptedTerms` y `uploadedFile`.
- Métodos clave:
  - `setProspect(data: ProspectData)` para guardar el formulario.
  - `getProspect()` para recuperar los datos en pasos posteriores.
  - `hasData()` para verificar si ya existe información ingresada.

### Conservación del estado entre pasos

- El paso 1 guarda los valores en `ProspectService` antes de navegar a `/paso2`.
- El paso 2 lee esos valores y los muestra en la vista de preview.
- Si el usuario vuelve al paso 1, los valores permanecen disponibles en el servicio para evitar que se pierdan.

## Comportamiento de la navegación

- El wizard se sincroniza con la URL y resalta el paso actual.
- Los botones de avance usan `router.navigate()` para ir al siguiente paso.
- El botón de volver regresa al paso anterior sin limpiar el formulario, ya que los datos se conservan en el servicio.

## Estilo y componentes

- CSS/SCSS local en cada componente.
- `paso1-form` usa Angular Material para campos, botones y radio buttons.
- `paso2-preview` muestra una tarjeta de datos del prospecto y un contrato de muestra.
- `paso3-signature` y `paso4-confirm` están diseñados como pasos complementarios de la experiencia.

## Cómo ejecutar

1. `npm install`
2. `npm start`
3. Abrir `http://localhost:4200`

## Notas

- La aplicación usa rutas protegidas en `MainLayout` y redirecciones internas a los pasos.
- El servicio `ProspectService` es la pieza clave para mantener el estado entre componentes independientes.
- La arquitectura es apropiada para escalar con nuevos pasos o formularios adicionales, usando la misma estrategia de rutas y estado compartido.
