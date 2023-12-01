-- AlterTable
ALTER TABLE `bbaku_gudang` MODIFY `rm_ket` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `kd_supplier_gudang` MODIFY `kelompok` VARCHAR(191) NULL,
    MODIFY `alamat` VARCHAR(191) NULL;
