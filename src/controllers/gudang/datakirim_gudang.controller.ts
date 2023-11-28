
import { Request, Response } from "express";
import { prisma } from "../../database/database";
import StatusCode from "../../constant/status_codes";

export class DataKirimGudangController {
    public async getDataKirim(req: Request, res: Response) {
        await prisma.data_kirim_gudang.findMany().then((dataKirim) => {
            return res.status(StatusCode.OK).json({
                message: "Get all data",
                data: dataKirim
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                message: err
            })
        })
    }

    public async createDataKirim(req: Request, res: Response) {
        const { krm_rm, krm_cabang, krm_nama, krm_qty, tanggal, nama_barang, satuan } = req.body

        await prisma.data_kirim_gudang.create({
            data: {
                krm_rm: krm_rm,
                krm_cabang: krm_cabang,
                krm_nama: krm_nama,
                krm_qty: krm_qty,
                tanggal: tanggal,
                nama_barang: nama_barang,
                satuan: satuan,
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

    public async updateDataKirim(req: Request, res: Response) {
        const { krm_rm, krm_cabang, krm_nama, krm_qty, tanggal, nama_barang, satuan } = req.body

        await prisma.data_kirim_gudang.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                krm_rm: krm_rm,
                krm_cabang: krm_cabang,
                krm_nama: krm_nama,
                krm_qty: krm_qty,
                tanggal: tanggal,
                nama_barang: nama_barang,
                satuan: satuan,
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