IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE TABLE [bookings] (
        [BookingId] int NOT NULL IDENTITY,
        [CustomerId] int NOT NULL,
        [CustomerName] nvarchar(50) NOT NULL,
        [MobileNumber] bigint NOT NULL,
        [EmailId] nvarchar(50) NOT NULL,
        [Source] nvarchar(50) NOT NULL,
        [Destination] nvarchar(50) NOT NULL,
        [Duration] nvarchar(50) NOT NULL,
        [Distance] int NOT NULL,
        [VehicleName] nvarchar(50) NOT NULL,
        [VehicleType] nvarchar(50) NOT NULL,
        [FarePerKm] int NOT NULL,
        [BookingDate] datetime2 NOT NULL,
        CONSTRAINT [PK_bookings] PRIMARY KEY ([BookingId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE TABLE [customers] (
        [CustomerId] int NOT NULL IDENTITY,
        [CustomerName] nvarchar(50) NOT NULL,
        [Gender] nvarchar(10) NOT NULL,
        [ContactNumber] bigint NOT NULL,
        [Email] nvarchar(50) NOT NULL,
        [Username] nvarchar(50) NOT NULL,
        [Password] nvarchar(50) NOT NULL,
        CONSTRAINT [PK_customers] PRIMARY KEY ([CustomerId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE TABLE [logins] (
        [AdminId] int NOT NULL IDENTITY,
        [Username] nvarchar(50) NOT NULL,
        [Password] nvarchar(50) NOT NULL,
        CONSTRAINT [PK_logins] PRIMARY KEY ([AdminId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE TABLE [routing] (
        [RouteId] int NOT NULL IDENTITY,
        [Source] nvarchar(50) NOT NULL,
        [Destination] nvarchar(50) NOT NULL,
        [Duration] nvarchar(50) NOT NULL,
        [Distance] int NOT NULL,
        CONSTRAINT [PK_routing] PRIMARY KEY ([RouteId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE TABLE [vehicles] (
        [VehicleId] int NOT NULL IDENTITY,
        [VehicleName] nvarchar(50) NOT NULL,
        [VehicleType] nvarchar(50) NOT NULL,
        [Capacity] nvarchar(50) NOT NULL,
        [FarePerKm] int NOT NULL,
        [Availability] bit NOT NULL,
        CONSTRAINT [PK_vehicles] PRIMARY KEY ([VehicleId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE TABLE [drivers] (
        [DriverId] int NOT NULL IDENTITY,
        [DriverName] nvarchar(max) NOT NULL,
        [LicenseNo] nvarchar(max) NOT NULL,
        [ContactNumber] bigint NOT NULL,
        [DriverRating] nvarchar(max) NOT NULL,
        [VehicleId] int NOT NULL,
        CONSTRAINT [PK_drivers] PRIMARY KEY ([DriverId]),
        CONSTRAINT [FK_drivers_vehicles_VehicleId] FOREIGN KEY ([VehicleId]) REFERENCES [vehicles] ([VehicleId]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    CREATE INDEX [IX_drivers_VehicleId] ON [drivers] ([VehicleId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092305_cab')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231216092305_cab', N'6.0.25');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092427_cab1')
BEGIN
    ALTER TABLE [bookings] DROP CONSTRAINT [PK_bookings];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092427_cab1')
BEGIN
    EXEC sp_rename N'[bookings]', N'bookingss';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092427_cab1')
BEGIN
    ALTER TABLE [bookingss] ADD CONSTRAINT [PK_bookingss] PRIMARY KEY ([BookingId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092427_cab1')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231216092427_cab1', N'6.0.25');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092647_car')
BEGIN
    ALTER TABLE [bookingss] DROP CONSTRAINT [PK_bookingss];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092647_car')
BEGIN
    EXEC sp_rename N'[bookingss]', N'bookings';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092647_car')
BEGIN
    ALTER TABLE [bookings] ADD CONSTRAINT [PK_bookings] PRIMARY KEY ([BookingId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231216092647_car')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231216092647_car', N'6.0.25');
END;
GO

COMMIT;
GO

