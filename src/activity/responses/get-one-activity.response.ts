import { activities } from "@prisma/client"

export class GetOneActivityResponse{
    status: string
    message: string
    data: activities
}