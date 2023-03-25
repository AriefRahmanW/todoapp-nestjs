import { todos } from "@prisma/client"

export class GetAllTodoResponse{
    status: string
    message: string
    data: todos[]
}