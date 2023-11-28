-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bahanbaku_cabang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rm_kode` VARCHAR(255) NOT NULL,
    `rm_nama` VARCHAR(255) NOT NULL,
    `rm_satuan` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `beli_cabang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_bb` VARCHAR(255) NOT NULL,
    `nama_bb` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(5) NOT NULL,
    `tanggal_bb` VARCHAR(255) NOT NULL,
    `total_beli` DOUBLE NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `busuk_cabang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_bb` VARCHAR(255) NOT NULL,
    `nama_bb` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(5) NOT NULL,
    `tanggal_bb` VARCHAR(255) NOT NULL,
    `total` DOUBLE NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `makanan_cabang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_bb` VARCHAR(255) NOT NULL,
    `nama_bb` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(5) NOT NULL,
    `saldo_awal` DOUBLE NOT NULL DEFAULT 0,
    `tp_bb` VARCHAR(255) NOT NULL,
    `total_terima` DOUBLE NOT NULL DEFAULT 0,
    `beli` DOUBLE NOT NULL DEFAULT 0,
    `busuk` DOUBLE NOT NULL DEFAULT 0,
    `mutasi_plus` DOUBLE NOT NULL DEFAULT 0,
    `mutasi_minus` DOUBLE NOT NULL DEFAULT 0,
    `pakai` DOUBLE NOT NULL DEFAULT 0,
    `stock_opname` DOUBLE NOT NULL DEFAULT 0,
    `selisih` DOUBLE NOT NULL DEFAULT 0,
    `input_stock` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mutasi_cabang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_bb` VARCHAR(255) NOT NULL,
    `nama_bb` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(5) NOT NULL,
    `tanggal_mutasi` VARCHAR(255) NOT NULL,
    `mutasi_terima` DOUBLE NULL DEFAULT 0,
    `mutasi_kirim` DOUBLE NOT NULL DEFAULT 0,
    `keterangan` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `so_cabang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_bb` VARCHAR(255) NOT NULL,
    `nama_bb` VARCHAR(255) NOT NULL,
    `satuan` VARCHAR(5) NOT NULL,
    `tempat_bb` VARCHAR(255) NOT NULL,
    `total` DOUBLE NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
