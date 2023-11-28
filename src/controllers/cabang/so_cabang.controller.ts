import { Request, Response } from "express"
import { prisma } from "../../database/database"
import StatusCode from "../../constant/status_codes"


export class SoCabangController {
    public async getSoCabang(req: Request, res: Response) {
        const { satuan, kode } = req.query
        await prisma.so_cabang.findMany({
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
                message: "Success get so cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async createSoCabang(req: Request, res: Response) {
        const { kode_bb, nama_bb, satuan, tempat_bb, total } = req.body

        await prisma.so_cabang.create({
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                tempat_bb: tempat_bb as string,
                total: total as number,
                createdAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.CREATED).json({
                status: StatusCode.CREATED,
                error: false,
                message: "Success create so cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async updateSoCabang(req: Request, res: Response) {
        const { id } = req.params
        const { kode_bb, nama_bb, satuan, tempat_bb, total } = req.body

        await prisma.so_cabang.update({
            where: {
                id: parseInt(id)
            },
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                tempat_bb: tempat_bb as string,
                total: total as number,
                updatedAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success update so cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async deleteSoCabang(req: Request, res: Response) {
        const { id } = req.params

        await prisma.so_cabang.delete({
            where: {
                id: parseInt(id)
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success delete so cabang",
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