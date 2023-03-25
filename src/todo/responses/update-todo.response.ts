import { todos } from "@prisma/client"

export class UpdateTodoResponse{
    status: string
    message: string
    data: todos
}