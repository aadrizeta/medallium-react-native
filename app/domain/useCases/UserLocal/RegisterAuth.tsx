import {UserInterface} from "../../entities/User";
import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";

const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = async (user: UserInterface)=> {
    return await register(user)
}