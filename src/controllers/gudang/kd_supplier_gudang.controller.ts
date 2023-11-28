import { Request, Response } from "express";
import { prisma } from "../../database/database";
import StatusCode from "../../constant/status_codes";


export class KodeSupplierGudangController {
    public async getKdSupplier(req: Request, res: Response) {
        await prisma.kd_supplier_gudang.findMany().then((kdSupplier) => {
            return res.status(StatusCode.OK).json({
                message: "Get all data",
                data: kdSupplier
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                message: err
            })
        })
    }

    public async createKdSupplier(req: Request, res: Response) {
        const { kode, nama, kelompok, alamat, notelp, sp_kota } = req.body

        await prisma.kd_supplier_gudang.create({
            data: {
                kode: kode,
                nama: nama,
                kelompok: kelompok,
                alamat: alamat,
                notelp: notelp,
                sp_kota: sp_kota,
                createdAt: new Date(),
            }
        }).then((data) => {
            return res.status(StatusCode.CREATED).json({
                message: "Create data successfully",
                data: data
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                message: err
            })

        })
    }

    public async updateKdSupplier(req: Request, res: Response) {
        const { kode, nama, kelompok, alamat, notelp, sp_kota } = req.body
        await prisma.kd_supplier_gudang.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                kode: kode,
                nama: nama,
                kelompok: kelompok,
                alamat: alamat,
                notelp: notelp,
                sp_kota: sp_kota,
                updatedAt: new Date(),
            }
        }).then((data) => {
            return res.status(StatusCode.OK).json({
                message: "Update data successfully",
                data: data
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                message: err
            })
        })
    }

}