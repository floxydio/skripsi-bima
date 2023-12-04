import { Request, Response } from "express";
import { prisma } from "../../database/database";
import StatusCode from "../../constant/status_codes";
import bcrypt from 'bcrypt';
export class AuthController {

    public async login(req: Request, res: Response) {
        const { username, password } = req.body
        await prisma.users.findFirst({
            where: {
                username: username
            }
        }).then(async (user) => {
            if (user) {
                const checkPassword = bcrypt.compareSync(password, user.password)

                if (checkPassword) {
                    return res.status(StatusCode.OK).json({
                        message: "Login successfully",
                        data: {
                            id: user.id,
                            name: user.name,
                            role: user.role
                        }
                    })
                } else {
                    return res.status(StatusCode.BAD_REQUEST).json({
                        message: "Password is incorrect"
                    })
                }
            } else {
                return res.status(StatusCode.BAD_REQUEST).json({
                    message: "Username not found"
                })
            }
        })
    }


    public async register(req: Request, res: Response) {
        const { username, password, name } = req.body
        const hashPassword = bcrypt.hashSync(password, 10)
        await prisma.users.create({
            data: {
                username: username,
                password: hashPassword,
                name: name,
                role: 1
            }
        }).then((user) => {
            return res.status(StatusCode.OK).json({
                message: "Register successfully",
                data: user
            })
        }).catch((err) => {
            return res.status(StatusCode.BAD_REQUEST).json({
                message: err
            })
        })
    }
}