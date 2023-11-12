import { Request, Response } from "express"
import { prisma } from "../../database/database"
import StatusCode from "../../constant/status_codes"

export class MutasiCabangController {
    public async getMutasiCabang(req: Request, res: Response) {
        const { satuan, kode } = req.query
        await prisma.mutasi_cabang.findMany({
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
                message: "Success get mutasi cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async createMutasiCabang(req: Request, res: Response) {
        const { kode_bb, nama_bb, satuan, tanggal_mutasi, mutasi_terima, mutasi_kirim, keterangan } = req.body

        await prisma.mutasi_cabang.create({
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                tanggal_mutasi: tanggal_mutasi as string,
                mutasi_terima: mutasi_terima as number,
                mutasi_kirim: mutasi_kirim as number,
                keterangan: keterangan as string,
                createdAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.CREATED).json({
                status: StatusCode.CREATED,
                error: false,
                message: "Success create mutasi cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async updateMutasiCabang(req: Request, res: Response) {
        const { id } = req.params
        const { kode_bb, nama_bb, satuan, tanggal_mutasi, mutasi_terima, mutasi_kirim, keterangan } = req.body

        await prisma.mutasi_cabang.update({
            where: {
                id: parseInt(id)
            },
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                tanggal_mutasi: tanggal_mutasi as string,
                mutasi_terima: mutasi_terima as number,
                mutasi_kirim: mutasi_kirim as number,
                keterangan: keterangan as string,
                updatedAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success update mutasi cabang",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async deleteMutasiCabang(req: Request, res: Response) {
        const { id } = req.params
        await prisma.mutasi_cabang.delete({
            where: {
                id: parseInt(id)
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success delete mutasi cabang",
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