import { activities } from "@prisma/client"

export class UpdateActivityResponse{
    status: string
    message: string
    data: activities
}