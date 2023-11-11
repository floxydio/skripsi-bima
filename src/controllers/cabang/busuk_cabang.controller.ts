import { Request, Response } from "express"
import { prisma } from "../../database/database"
import StatusCode from "../../constant/status_codes"


export class BusukCabangController {
    public async getBusukCabang(req: Request, res: Response) {
        const { satuan, kode } = req.query
        await prisma.busuk_cabang.findMany({
            where: {
                satuan: satuan as string,
                kode_bb: kode as string
            },
            orderBy: {
                id: "desc"
            }
        }).then((data) => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                data: data,
                message: "Success get busuk cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async createBusukCabang(req: Request, res: Response) {
        const { kode_bb, nama_bb, satuan, tanggal_bb, total_beli } = req.body
        await prisma.busuk_cabang.create({
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                tanggal_bb: tanggal_bb as string,
                total: total_beli as number,
                createdAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.CREATED).json({
                status: StatusCode.CREATED,
                error: false,
                message: "Success create busuk cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async updateBusukCabang(req: Request, res: Response) {
        const { id } = req.params
        const { kode_bb, nama_bb, satuan, tanggal_bb, total_beli } = req.body

        await prisma.busuk_cabang.update({
            where: {
                id: Number(id)
            },
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                tanggal_bb: tanggal_bb as string,
                total: total_beli as number,
                updatedAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success update busuk cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async deleteBusukCabang(req: Request, res: Response) {
        const { id } = req.params
        await prisma.busuk_cabang.delete({
            where: {
                id: Number(id)
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success delete busuk cabang",
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