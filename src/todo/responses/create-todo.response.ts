import { todos } from "@prisma/client"

export class CreateTodoResponse{
    status: string
    message: string
    data: todos
}