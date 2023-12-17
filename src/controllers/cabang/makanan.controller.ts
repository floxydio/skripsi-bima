import { Request, Response } from "express"
import { prisma } from "../../database/database"
import StatusCode from "../../constant/status_codes"


export class MakananController {
    public async getMakanan(req: Request, res: Response) {
        const { satuan, kode } = req.query
        await prisma.makanan_cabang.findMany({
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
                message: "Success get makanan",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })
        })
    }

    public async createMakanan(req: Request, res: Response) {
        const { kode_bb, nama_bb, satuan, saldo_awal, tp_bb, total_terima, beli, busuk, mutasi_plus, mutasi_minus, pakai, stock_opname, selisih, input_stock } = req.body

        await prisma.makanan_cabang.create({
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                saldo_awal: Number(saldo_awal),
                tp_bb: tp_bb,
                total_terima: Number(total_terima),
                beli: Number(beli),
                busuk: Number(busuk),
                mutasi_plus: Number(mutasi_plus),
                mutasi_minus: Number(mutasi_minus),
                pakai: Number(pakai),
                stock_opname: Number(stock_opname),
                selisih: Number(selisih),
                input_stock: input_stock,
                createdAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.CREATED).json({
                status: StatusCode.CREATED,
                error: false,
                message: "Success create makanan",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })

        })
    }

    public async updateMakanan(req: Request, res: Response) {
        const { id } = req.params
        const { kode_bb, nama_bb, satuan, saldo_awal, tp_bb, total_terima, beli, busuk, mutasi_plus, mutasi_minus, pakai, stock_opname, selisih, input_stock } = req.body

        await prisma.makanan_cabang.update({
            where: {
                id: Number(id)
            },
            data: {
                kode_bb: kode_bb as string,
                nama_bb: nama_bb as string,
                satuan: satuan as string,
                saldo_awal: Number(saldo_awal),
                tp_bb: tp_bb,
                total_terima: Number(total_terima),
                beli: Number(beli),
                busuk: Number(busuk),
                mutasi_plus: Number(mutasi_plus),
                mutasi_minus: Number(mutasi_minus),
                pakai: Number(pakai),
                stock_opname: Number(stock_opname),
                selisih: Number(selisih),
                input_stock: input_stock,
                createdAt: new Date(),
            }
        }).then(() => {
            return res.status(StatusCode.CREATED).json({
                status: StatusCode.CREATED,
                error: false,
                message: "Success update makanan",
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                status: StatusCode.BAD_REQUEST,
                error: true,
                message: err.message || "Something went wrong",
            })

        })
    }

    public async deleteMakanan(req: Request, res: Response) {
        const { id } = req.params
        await prisma.makanan_cabang.delete({
            where: {
                id: Number(id)
            }
        }).then(() => {
            return res.status(StatusCode.OK).json({
                status: StatusCode.OK,
                error: false,
                message: "Success delete makanan",
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