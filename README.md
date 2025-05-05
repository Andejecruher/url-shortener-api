# 🔗 URL Shortener API

Una API RESTful para acortar URLs utilizando Node.js, Express y MongoDB. Esta API permite generar códigos cortos únicos para URLs largas, redireccionar a la URL original, actualizar/eliminar enlaces cortos y obtener estadísticas de uso.

---

## URL del proyecto

[https://roadmap.sh/projects/url-shortening-service](https://roadmap.sh/projects/url-shortening-service)

## 🚀 Tecnologías Utilizadas

- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js
- **Base de datos:** MongoDB (Mongoose ODM)
- **ID único:** NanoID`
- **Pruebas:** Jest + Supertest
- **Desarrollo:** Nodemon + ESLint

---

## 📦 Funcionalidades

| Método | Endpoint                    | Descripción                    |
| ------ | --------------------------- | ------------------------------ |
| POST   | `/shorten`                  | Crea una nueva URL corta       |
| GET    | `/shorten/:shortCode`       | Recupera la URL original       |
| PUT    | `/shorten/:shortCode`       | Actualiza la URL original      |
| DELETE | `/shorten/:shortCode`       | Elimina una URL corta          |
| GET    | `/shorten/:shortCode/stats` | Obtiene estadísticas de acceso |

---

## 🧩 Requisitos Técnicos

- Código corto generado aleatoriamente y único (`shortCode`)
- Validación de URLs y parámetros
- Timestamps automáticos (`createdAt`, `updatedAt`)
- Conteo de accesos a cada URL corta
- Códigos de estado HTTP correctos (201, 200, 204, 400, 404)
- Arquitectura RESTful bien estructurada

---

## 🧱 Estructura del Proyecto

```

url-shortener-api/
│
├── config/               # Configuración de base de datos
├── controllers/          # Lógica de control para cada ruta
├── models/               # Modelos de Mongoose
├── routes/               # Endpoints REST
├── services/             # Lógica de negocio (generar códigos, estadísticas)
├── middlewares/          # Validaciones y manejo de errores
├── tests/                # Pruebas unitarias e integración
├── .env                  # Variables de entorno
├── .gitignore            # Exclusiones para Git
├── app.js                # Configuración de app Express
├── server.js             # Punto de entrada
└── README.md             # Documentación del proyecto

```

---

## 🧪 Pruebas

Se recomienda utilizar:

- [`Jest`](https://jestjs.io/) para pruebas unitarias.
- [`Supertest`](https://github.com/visionmedia/supertest) para probar endpoints HTTP.

Ejecuta las pruebas con:

```bash
npm test
```

---

## ⚙️ Instalación y Ejecución Local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/andejecruher/url-shortener-api.git
   cd url-shortener-api
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar las variables de entorno en `.env`:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/urlshortener
   BASE_URL=http://localhost:3000
   ```

4. Ejecutar el servidor:

   ```bash
   npm run dev
   ```

---

## 📌 Consideraciones

- Aún no incluye autenticación. Ideal para MVPs o entornos cerrados.
- Puede integrarse fácilmente con un frontend ligero.
- Código limpio, modular y escalable.
- Ideal como práctica para desarrolladores full stack en formación.

---

## ✨ Autor

Desarrollado por **Andejecruher** como parte de su roadmap de desarrollo full stack.

---

## 🛡️ Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
