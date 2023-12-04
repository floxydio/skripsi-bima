import { Request, Response } from "express";
import { prisma } from "../../database/database";
import StatusCode from "../../constant/status_codes";

export class BahanBakuCabangController {
    public async getBahanBaku(req: Request, res: Response) {
        const { satuan, kode } = req.query
        await prisma.bahanbaku_cabang.findMany({
            where: {
                rm_satuan: satuan as string,
                rm_kode: kode as string
            },
            orderBy: {
                id: "desc"
            }
        }).then((data) => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                data: data,
                message: "Success get bahan baku cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async createBahanBaku(req: Request, res: Response) {
        const { rm_kode, rm_nama, rm_satuan } = req.body
        await prisma.bahanbaku_cabang.create({
            data: {
                rm_kode: rm_kode as string,
                rm_nama: rm_nama as string,
                rm_satuan: rm_satuan as string,
                createdAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.CREATED).json({
                status: StatusCode.CREATED,
                error: false,
                message: "Success create bahan baku cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async updateBahanBaku(req: Request, res: Response) {
        const { id } = req.params
        const { rm_kode, rm_nama, rm_satuan } = req.body
        console.log(req.body)
        await prisma.bahanbaku_cabang.update({
            where: {
                id: Number(id)
            },
            data: {
                rm_kode: rm_kode as string,
                rm_nama: rm_nama as string,
                rm_satuan: rm_satuan as string,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success update bahan baku cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async deleteBahanBaku(req: Request, res: Response) {
        const { id } = req.params
        await prisma.bahanbaku_cabang.delete({
            where: {
                id: Number(id)
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success delete bahan baku cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

}