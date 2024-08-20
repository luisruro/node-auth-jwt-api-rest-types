import { Request, Response } from "express";
import { comparePassword, hashPassword } from "../services/password.service";
import prisma from '../models/user'
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body //Desestructurarlo del request

    try {
        if (!password) {
            res.status(400).json({ message: "El password es obligatorio" });
            return
        }
        if (!email) {
            res.status(400).json({ message: "El email es obligatorio" });
            return
        }
        const hashedPassword = await hashPassword(password)
        console.log(hashedPassword);
        //Esta variable es una instancia de prisma
        const user = await prisma.create(
            {
                data: {
                    email,
                    password: hashedPassword // Utilizamos la variable hashedPassword en lugar de password
                }
            }
        )

        const token = generateToken(user)
        res.status(201).json({ token }) //Mandamos el token para que el front-end pueda usar el token para mantenerse logeado

    } catch (error: any) {
        if (error?.code === 'P2002' && error?.meta?.target?.includes('email')) {
            res.status(400).json({ message: "El email ingresado ya existe" });
        }
        console.log(error)
        res.status(500).json({ message: 'Error en el registro' })
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ message: 'Email y contraseña son obligatorios' });
        return;
    }

    try {
        const user = await prisma.findUnique({ where: { email } })
        //no encuentra el usuario
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return
        }

        const passwordMatch = await comparePassword(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'usuario y contraseña no coinciden' });
        }

        const token = generateToken(user)
        res.status(200).json({ token })
    } catch (error) {
        console.log("Error: ", error);

    }
};