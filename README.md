# Flights and Search Service

A scalable, production-grade microservice designed for airline management, flight search, and inventory filtering. Built with **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL**, following a clean layered architecture (Controller-Service-Repository pattern).

---

## ✈️ Features

- **Entity Management (CRUD)**:
  - **Airplanes**: Capacity, model codes, seat configurations.
  - **Cities & Airports**: City management with associated airport hubs and IATA codes.
  - **Flights**: Flight numbers, routes (origin/destination), arrival/departure schedules, price, and available seats.
- **Advanced Search & Filtering**:
  - Filter flights by origin (`departureAirportId`) and destination (`arrivalAirportId`).
  - Travel date / time range matching.
  - Price sorting and budget caps.
  - Real-time seat availability validation.
- **Database & Architecture**:
  - Fully typed relational models powered by **Prisma**.
  - Timestamp tracking (`createdAt`, `updatedAt`) across all entities.
  - Database seeding scripts supporting modern ESM and PostgreSQL driver adapters.
  - Clean separation of concerns (Routes → Controllers → Services → Repositories).

---

## 🏗️ Architecture & Project Structure

```
flights-search-service/
├── prisma/
│   ├── schema.prisma       # Prisma relational schema definitions
│   ├── seed.js             # Database seeder script (ESM)
│   └── migrations/         # Prisma migration history
├── src/
│   ├── config/             # Server & DB environment configurations
│   ├── controllers/        # Request handlers & response formatters
│   ├── middlewares/        # Input validation & error handlers
│   ├── repositories/       # Direct Prisma DB query operations
│   ├── routes/             # Express API route declarations
│   │   └── v1/
│   ├── services/           # Core business & search filtering logic
│   ├── utils/              # Custom error classes, helpers, constants
│   ├── app.js              # Express app setup
│   └── index.js            # Server entrypoint
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🗄️ Database Schema Overview

```prisma
model Airplane {
  id          Int      @id @default(autoincrement())
  modelNumber String
  capacity    Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  flights     Flight[]
}

model City {
  id        Int       @id @default(autoincrement())
  name      String    @unique
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  airports  Airport[]
}

model Airport {
  id               Int      @id @default(autoincrement())
  name             String   @unique
  code             String   @unique // e.g. "DEL", "BOM", "CCU"
  address          String?
  cityId           Int
  city             City     @relation(fields: [cityId], references: [id], onDelete: Cascade)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  departureFlights Flight[] @relation("DepartureAirport")
  arrivalFlights   Flight[] @relation("ArrivalAirport")
}

model Flight {
  id                 Int      @id @default(autoincrement())
  flightNumber       String   @unique
  airplaneId         Int
  airplane           Airplane @relation(fields: [airplaneId], references: [id])
  departureAirportId Int
  departureAirport   Airport  @relation("DepartureAirport", fields: [departureAirportId], references: [id])
  arrivalAirportId   Int
  arrivalAirport     Airport  @relation("ArrivalAirport", fields: [arrivalAirportId], references: [id])
  departureTime      DateTime
  arrivalTime        DateTime
  price              Decimal  @db.Decimal(10, 2)
  totalSeats         Int
  availableSeats     Int
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.x or higher)
- **PostgreSQL** (running locally or via Docker/cloud instance)
- **npm** or **yarn** / **pnpm**

### 2. Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/flights-search-service.git
   cd flights-search-service
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<dbname>?schema=public"
   ```

4. **Run Prisma Migrations & Generate Client**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Seed the Database**:
   ```bash
   npm run seed
   # or
   npx prisma db seed
   ```

6. **Start the Development Server**:
   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints (v1)

### 🛫 Flight Search & Filter
- **GET** `/api/v1/flights`
  - **Query Params**:
    - `trips`: `DEL-BOM` (or `departureAirportId` & `arrivalAirportId`)
    - `tripDate`: `2026-09-01`
    - `minPrice` / `maxPrice`: Numeric filter
    - `travellers`: Number of required available seats
    - `sort`: `price_asc`, `price_desc`, `departure_asc`

### ✈️ Airplane Routes
- **POST** `/api/v1/airplanes` - Create an airplane
- **GET** `/api/v1/airplanes/:id` - Fetch airplane details
- **GET** `/api/v1/airplanes` - List all airplanes
- **DELETE** `/api/v1/airplanes/:id` - Remove airplane

### 🏙️ City & Airport Routes
- **POST** `/api/v1/cities` - Add a new city
- **GET** `/api/v1/cities/:id` - Get city by ID (includes airports)
- **POST** `/api/v1/airports` - Add an airport mapped to a city
- **GET** `/api/v1/airports` - List airports with city relations

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma (with native driver adapters)
- **Validation**: Zod / Joi
- **Language**: JavaScript (ESM) / TypeScript ready

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).