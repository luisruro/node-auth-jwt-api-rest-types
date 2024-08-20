import bcrypt from "bcrypt";

const SALT_ROUNDS: number = 10; //La cantidad de vueltas que va necesitar el hash cada vuelta hacer que sea más seguro 

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS)
};

//Leer y comparar con el hash de la base de datos

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword)
};
