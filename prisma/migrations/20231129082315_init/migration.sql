-- CreateTable
CREATE TABLE `bbaku_gudang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rm_kode` VARCHAR(255) NOT NULL,
    `rm_nama` VARCHAR(255) NOT NULL,
    `rm_satuan` VARCHAR(255) NOT NULL,
    `rm_konversi` INTEGER NOT NULL,
    `rm_ket` INTEGER NOT NULL,
    `cek` VARCHAR(255) NOT NULL,
    `help_mutasi` VARCHAR(255) NOT NULL,
    `gdg` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_kirim_gudang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `krm_rm` VARCHAR(255) NOT NULL,
    `krm_cabang` VARCHAR(225) NOT NULL,
    `krm_nama` VARCHAR(225) NOT NULL,
    `krm_qty` INTEGER NOT NULL,
    `tanggal` VARCHAR(225) NOT NULL,
    `nama_barang` VARCHAR(225) NOT NULL,
    `satuan` VARCHAR(225) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kd_supplier_gudang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode` VARCHAR(255) NOT NULL,
    `nama` VARCHAR(255) NOT NULL,
    `kelompok` INTEGER NOT NULL,
    `alamat` INTEGER NOT NULL,
    `notelp` INTEGER NOT NULL,
    `sp_kota` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
