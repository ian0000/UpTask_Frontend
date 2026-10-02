# UpTask · Frontend

**Proyecto de curso y práctica · React + TypeScript**

Interfaz de una aplicación de gestión de proyectos y tareas. Complementa la [API UpTask](https://github.com/ian0000/Uptask_backend) y sirve como práctica de desarrollo full stack con MERN.

## Funcionalidades trabajadas

- Registro, inicio de sesión y recuperación de cuenta.
- Creación y edición de proyectos.
- Organización de tareas por estado e interacción de arrastrar y soltar.
- Gestión de integrantes y notas.
- Formularios y validación de respuestas de la API.

## Tecnologías

React, Vite, TypeScript, React Router, TanStack Query, React Hook Form, Zod, Tailwind CSS y dnd-kit.

## Puesta en marcha

Necesitas Node.js, npm y el backend UpTask configurado. El repositorio no declara una versión exacta de Node.

```sh
npm ci
```

Crea `.env.local` en la raíz:

```dotenv
VITE_API_URL=http://localhost:4000/api
```

La URL debe incluir `/api`. Configura `FRONTEND_URL` en el backend con el origen que utilices para Vite.

```sh
npm run dev
```

Abre la dirección que indique Vite. Para probar confirmaciones de cuenta y recuperación de contraseña, el backend necesita su configuración de correo.

## Estructura

| Ruta | Contenido |
| --- | --- |
| [src/router.tsx](src/router.tsx) | Rutas de la aplicación |
| [src/views](src/views/) | Pantallas |
| [src/components](src/components/) | Formularios, tareas, equipo y notas |
| [src/api](src/api/) | Operaciones contra el backend |
| [src/lib/axios.ts](src/lib/axios.ts) | Cliente HTTP y token de acceso |
| [src/types](src/types/) | Contratos y validación |

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | Revisión con ESLint |
| `npm run build` | TypeScript y build de Vite |
| `npm run preview` | Vista previa del build |

No hay un script de tests automatizados declarado. Este repositorio documenta un ejercicio de formación, no una aplicación comercial propia.

[Perfil de Ian K.](https://github.com/ian0000)
