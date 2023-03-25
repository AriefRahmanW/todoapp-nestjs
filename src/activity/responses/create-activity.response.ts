import { activities } from "@prisma/client"

export class CreateActivityResponse{
    status: string
    message: string
    data: activities
}