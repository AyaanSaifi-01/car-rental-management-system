# 🚗 Car Rental Management System

A full-stack, role-based car rental platform built with **Java, Spring Boot, and Spring Security**, supporting two distinct user roles — **Customer** and **Car Owner** — each with a dedicated dashboard and permission set. The backend exposes RESTful APIs backed by a relational database, and follows stateful (session-based) authentication for secure, role-aware access control.

---

## 📌 Overview

This project simulates a real-world car rental marketplace where:
- **Car Owners** can list, update, and manage their vehicles for rent.
- **Customers** can browse available cars, place rental bookings, and track booking status.

The system is designed with a clean, layered backend architecture and enforces role-based access at the endpoint level using Spring Security.

---

## ✨ Features

### 👤 Customer
- Register and log in securely
- Browse all available cars for rent
- Book a car for a selected rental period
- View and track personal booking history/status

### 🚘 Car Owner
- Register and log in securely
- List new vehicles for rent
- Update or remove existing vehicle listings
- View bookings made on their vehicles

### 🔐 Authentication & Security
- **Stateful, session-based authentication** using Spring Security
- Role-based authorization restricting access to role-specific endpoints
- Passwords securely hashed (never stored in plain text)
- Centralized exception handling for consistent, secure error responses

### ⚙️ Backend Architecture
- Layered architecture: **Controller → Service → Repository**
- DTOs used to separate API contracts from persistence entities
- RESTful CRUD APIs for users, vehicles, and bookings
- Relational data modeling with Spring Data JPA / Hibernate

---

## 🛠️ Tech Stack

| Layer            | Technology                                   |
|-------------------|-----------------------------------------------|
| Language          | Java                                          |
| Backend Framework | Spring Boot, Spring MVC                       |
| Security          | Spring Security (session-based auth)          |
| Persistence       | Spring Data JPA, Hibernate                    |
| Database          | MySQL                                         |
| Frontend          | React.js                                      |
| Build Tool        | Maven                                         |
| API Testing       | Postman                                       |

---

## 🏗️ Project Architecture

```
Client (React.js)
      │
      ▼
REST Controllers  ──►  Service Layer  ──►  Repository Layer  ──►  MySQL Database
      │
      ▼
Spring Security (Session-based Auth + Role-based Authorization)
```

---

## 📂 Project Structure (Backend)

```
car-rental-management-system/
├── src/main/java/com/ayaan/carrental/
│   ├── controller/      # REST API endpoints
│   ├── service/         # Business logic
│   ├── repository/      # JPA repositories
│   ├── entity/          # Database entities (User, Car, Booking, etc.)
│   ├── dto/             # Data Transfer Objects
│   ├── security/        # Spring Security configuration
│   └── exception/       # Global exception handling
├── src/main/resources/
│   └── application.properties
└── pom.xml
```

> Adjust this tree to match your actual package/folder names if they differ.

---

## 🚀 Getting Started

### Prerequisites
- Java 17+ (or your configured JDK version)
- Maven
- MySQL Server
- Node.js & npm (if running the React frontend)

### 1. Clone the repository
```bash
git clone https://github.com/AyaanSaifi-01/car-rental-management-system.git
cd car-rental-management-system
```

### 2. Configure the database
Update `src/main/resources/application.properties` with your MySQL credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/car_rental_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### 3. Run the backend
```bash
mvn spring-boot:run
```
The API will start on `http://localhost:8080` (or your configured port).

### 4. Run the frontend (if applicable)
```bash
cd frontend
npm install
npm start
```

---

## 🔑 Authentication Flow

1. User registers as either a **Customer** or a **Car Owner**.
2. On login, Spring Security creates a server-side session and returns a session cookie.
3. The session is validated on every subsequent request to role-protected endpoints.
4. Customer and Car Owner endpoints are isolated — a Customer cannot access Car Owner routes and vice versa.

---

## 📡 Sample API Endpoints

| Method | Endpoint                 | Access      | Description                        |
|--------|---------------------------|-------------|-------------------------------------|
| POST   | `/api/auth/register`      | Public      | Register a new user (Customer/Owner)|
| POST   | `/api/auth/login`         | Public      | Authenticate and start a session    |
| GET    | `/api/cars`                | Customer    | View all available cars             |
| POST   | `/api/cars`                 | Car Owner   | Add a new car listing               |
| PUT    | `/api/cars/{id}`            | Car Owner   | Update a car listing                |
| DELETE | `/api/cars/{id}`            | Car Owner   | Remove a car listing                |
| POST   | `/api/bookings`             | Customer    | Book a car                          |
| GET    | `/api/bookings/my`          | Customer    | View own booking history            |
| GET    | `/api/bookings/owner`       | Car Owner   | View bookings on owned vehicles     |

> Update this table with your actual endpoint paths, request/response bodies, and status codes.

---

## 🔮 Future Enhancements
- Payment gateway integration
- Booking date/availability conflict validation
- Admin role for platform-wide moderation
- Image upload support for vehicle listings
- Email/SMS notifications for booking confirmations

