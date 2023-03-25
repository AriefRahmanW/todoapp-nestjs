import { todos } from "@prisma/client"

export class GetOneTodoResponse{
    status: string
    message: string
    data: todos
}