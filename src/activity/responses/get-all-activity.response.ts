import { activities } from "@prisma/client"

export class GetAllActivity{
    status: string
    message: string
    data: activities[]
}