-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS MEDICALIFE;
USE MEDICALIFE;

-- Crear las tablas
CREATE TABLE Administradores (
    AdminID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Apellido VARCHAR(100),
    Usuario VARCHAR(100) UNIQUE,
    Contraseña VARCHAR(255),
    Rol VARCHAR(50)
);

CREATE TABLE Usuarios (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Apellido VARCHAR(100),
    FechaNacimiento DATE,
    Genero CHAR(1),
    Direccion VARCHAR(255),
    Telefono VARCHAR(15),
    Email VARCHAR(100) UNIQUE
);

CREATE TABLE Medicos (
    DoctorID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Especialidad VARCHAR(100)
);

CREATE TABLE TiposCita (
    TipoCitaID INT AUTO_INCREMENT PRIMARY KEY,
    NombreTipoCita VARCHAR(100),
    DuracionEstimada TIME,
    Tarifa DECIMAL(10, 2)
);

CREATE TABLE Citas (
    CitaID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    DoctorID INT,
    FechaHoraCita DATETIME,
    Estado VARCHAR(50),
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID),
    FOREIGN KEY (DoctorID) REFERENCES Medicos(DoctorID)
);

CREATE TABLE Facturas (
    FacturaID INT AUTO_INCREMENT PRIMARY KEY,
    CitaID INT,
    TipoCitaID INT,
    MontoCobrado DECIMAL(10, 2),
    MetodoPago VARCHAR(50),
    FOREIGN KEY (CitaID) REFERENCES Citas(CitaID),
    FOREIGN KEY (TipoCitaID) REFERENCES TiposCita(TipoCitaID)
);

CREATE TABLE HistoriasClinicas (
    HistoriaID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    DoctorID INT,
    FechaConsulta DATETIME,
    Sintomas TEXT,
    Diagnostico TEXT,
    TratamientoRecetado TEXT,
    Observaciones TEXT,
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID),
    FOREIGN KEY (DoctorID) REFERENCES Medicos(DoctorID)
);


INSERT INTO Administradores (Nombre, Apellido, Usuario, Contraseña, Rol) VALUES 
('Luis', 'Ramirez', 'lramirez', 'password3', 'Admin'),
('Elena', 'Mendoza', 'emendoza', 'password4', 'Admin'),
('Pablo', 'Castro', 'pcastro', 'password5', 'Admin'),
('Clara', 'Silva', 'csilva', 'password6', 'Admin'),
('Victor', 'Rios', 'vrios', 'password7', 'Admin');

INSERT INTO Usuarios (Nombre, Apellido, FechaNacimiento, Genero, Direccion, Telefono, Email) VALUES 
('Fernando', 'Herrera', '1978-03-14', 'M', 'Calle 789', '555-9876', 'fernando.herrera@example.com'),
('Laura', 'Ruiz', '1992-07-23', 'F', 'Avenida 321', '555-6543', 'laura.ruiz@example.com'),
('David', 'Gomez', '1988-11-30', 'M', 'Boulevard 654', '555-3210', 'david.gomez@example.com'),
('Sofia', 'Vargas', '2000-12-01', 'F', 'Calle 456', '555-4321', 'sofia.vargas@example.com'),
('Andrea', 'Morales', '1995-06-20', 'F', 'Avenida 123', '555-8765', 'andrea.morales@example.com');

INSERT INTO Medicos (Nombre, Especialidad) VALUES 
('Dr. Alvarez', 'Dermatologia'),
('Dra. Santos', 'Neurologia'),
('Dr. Ortega', 'Oftalmologia'),
('Dra. Perez', 'Ginecologia'),
('Dr. Ramirez', 'Ortopedia');

INSERT INTO TiposCita (NombreTipoCita, DuracionEstimada, Tarifa) VALUES 
('Consulta Dermatologica', '00:45:00', 75.00),
('Consulta Neurologica', '01:15:00', 120.00),
('Consulta Oftalmologica', '00:30:00', 60.00),
('Consulta Ginecologica', '01:00:00', 90.00),
('Consulta Ortopedica', '00:45:00', 80.00);

INSERT INTO Citas (UserID, DoctorID, FechaHoraCita, Estado) VALUES 
(3, 3, '2024-06-12 09:00:00', 'Pendiente'),
(4, 4, '2024-06-13 14:00:00', 'Confirmada'),
(5, 5, '2024-06-14 15:30:00', 'Pendiente'),
(1, 3, '2024-06-15 16:00:00', 'Confirmada'),
(2, 4, '2024-06-16 17:00:00', 'Pendiente');

INSERT INTO Facturas (CitaID, TipoCitaID, MontoCobrado, MetodoPago) VALUES 
(3, 3, 75.00, 'Tarjeta de Debito'),
(4, 4, 120.00, 'Efectivo'),
(5, 5, 60.00, 'Transferencia Bancaria'),
(6, 1, 50.00, 'Tarjeta de Credito'),
(7, 2, 100.00, 'Efectivo');


INSERT INTO Facturas (CitaID, TipoCitaID, MontoCobrado, MetodoPago) VALUES 
(3, 3, 75.00, 'Tarjeta de Debito'),
(4, 4, 120.00, 'Efectivo'),
(5, 5, 60.00, 'Transferencia Bancaria'),
(6, 1, 50.00, 'Tarjeta de Credito'),
(7, 2, 100.00, 'Efectivo');


INSERT INTO HistoriasClinicas (UserID, DoctorID, FechaConsulta, Sintomas, Diagnostico, TratamientoRecetado, Observaciones) VALUES 
(3, 3, '2024-06-12 09:00:00', 'Erupción cutánea', 'Dermatitis', 'Crema tópica', 'Seguir tratamiento por 2 semanas'),
(4, 4, '2024-06-13 14:00:00', 'Dolor de cabeza', 'Migraña', 'Analgesicos', 'Evitar estrés y seguir indicaciones'),
(5, 5, '2024-06-14 15:30:00', 'Visión borrosa', 'Miopía', 'Lentes correctivos', 'Revisar en 6 meses'),
(1, 3, '2024-06-15 16:00:00', 'Dolor abdominal', 'Gastritis', 'Antiácidos', 'Seguir dieta recomendada'),
(2, 4, '2024-06-16 17:00:00', 'Dolor articular', 'Artritis', 'Antiinflamatorios', 'Ejercicios de rehabilitación');



