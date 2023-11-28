import { Request, Response } from "express";
import { prisma } from "../../database/database";
import StatusCode from "../../constant/status_codes";

export class BbakuGudangController {
    public async getBBaku(req: Request, res: Response) {
        await prisma.bbaku_gudang.findMany().then((bbaku) => {
            return res.status(StatusCode.OK).json({
                message: "Get all data",
                data: bbaku
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                message: err
            })
        })
    }

    public async createBBaku(req: Request, res: Response) {
        const { rm_kode, rm_nama, rm_satuan, rm_konversi, rm_ket, cek, help_mutasi, gdg } = req.body

        await prisma.bbaku_gudang.create({
            data: {
                rm_kode: rm_kode,
                rm_nama: rm_nama,
                rm_satuan: rm_satuan,
                rm_konversi: rm_konversi,
                rm_ket: rm_ket,
                cek: cek,
                help_mutasi: help_mutasi,
                gdg: gdg,
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

    public async updateBBaku(req: Request, res: Response) {
        const { id, rm_kode, rm_nama, rm_satuan, rm_konversi, rm_ket, cek, help_mutasi, gdg } = req.body
        await prisma.bbaku_gudang.update({
            where: {
                id: id
            },
            data: {
                rm_kode: rm_kode,
                rm_nama: rm_nama,
                rm_satuan: rm_satuan,
                rm_konversi: rm_konversi,
                rm_ket: rm_ket,
                cek: cek,
                help_mutasi: help_mutasi,
                gdg: gdg,
                updatedAt: new Date(),
            }
        }).then((data) => {
            return res.status(StatusCode.CREATED).json({
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