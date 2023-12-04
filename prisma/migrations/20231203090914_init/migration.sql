/*
  Warnings:

  - Made the column `kelompok` on table `kd_supplier_gudang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alamat` on table `kd_supplier_gudang` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `kd_supplier_gudang` MODIFY `kelompok` VARCHAR(191) NOT NULL,
    MODIFY `alamat` VARCHAR(191) NOT NULL;
