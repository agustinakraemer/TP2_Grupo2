# Sistema de Reservas de Pilates – Backend

Este proyecto es una API simple para gestionar usuarios, clases de pilates y reservas.
Está desarrollado con **Node.js**, **Express**, **Sequelize** y **MySQL**.

---

Entidades
Usuario
- id
- nombre
- email

Clase
- id
- nombre
- dia
- horario
- cupo

Reserva
- id
- usuarioId (FK)
- claseId (FK)

Relación:
Un Usuario puede reservar varias Clases, y cada Clase puede tener varias Reservas.

---

Cómo correrlo:

```bash
npm install

Crear archivo .env con:
DB_NAME=tp2_pilates
DB_USER=root
DB_PASSWORD=tuPassword
DB_HOST=localhost

npm run dev (para ejecutar el servidor)

CREAR USUARIO
{
  "nombre": "Julián",
  "email": "julian@example.com"
}

CREAR CLASE
{
  "nombre": "Clase de Pilates Reformer",
  "fecha": "2025-11-20",
  "hora": "10:00",
  "capacidad": 10
}

CREAR RESERVA
{
  "usuarioId": 1,
  "claseId": 2
}

