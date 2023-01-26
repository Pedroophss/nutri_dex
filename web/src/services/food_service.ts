import { Food } from "../models/food"
import api from "./api"

const baseApi = "something"

export async function getFoods(pageSize: number, pageNumber: number): Promise<Food[]> {
    return await api<Food[]>('v1/foods')
}