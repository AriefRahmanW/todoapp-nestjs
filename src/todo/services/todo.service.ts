import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GetAllTodoResponse } from "../responses/get-all-todo.response";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { CreateTodoResponse } from "../responses/create-todo.response";
import { GetOneTodoResponse } from "../responses/get-one-todo.response";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { UpdateTodoResponse } from "../responses/update-todo.response";
import { DeleteTodoResponse } from "../responses/delete-todo.response";
import { GetAllTodoDto } from "../dto/get-all-todo.dto";

@Injectable()
export class TodoService{
    constructor(
        private prismaService: PrismaService
    ){}

    async getAllTodo(query: GetAllTodoDto): Promise<GetAllTodoResponse>{
        try{
            // c
            const where = {}
            if(query.activity_group_id !== null){
                where["activity_group_id"] = query.activity_group_id
            }
            console.log(where)
            const todos = await this.prismaService.todos.findMany({
                where: where,
                orderBy: {
                    updatedAt: "desc"
                }
            })

            return {
                status: "Success",
                message: "Success",
                data: todos
            }
        }catch(e){

        }
    }

    async getOneTodo(id: number): Promise<GetOneTodoResponse>{
        try{
            const todo = await this.prismaService.todos.findFirstOrThrow({
                where: {
                    id: id
                }
            })
            return {
                status: "Success",
                message: "Success",
                data: todo
            }
        }catch(e){
            throw new NotFoundException({
                "status": "Not Found",
                "message": `Todo with ID ${id} Not Found`,
                "data": {}
            })
        }
    }

    async createTodo(data: CreateTodoDto): Promise<CreateTodoResponse>{
        try{
            const todo = await this.prismaService.todos.create({
                data: data
            })

            return {
                status: "Success",
                message: "Success",
                data: todo
            }
        }catch(e){

        }
    }

    async updateTodo(id: number, data: UpdateTodoDto): Promise<UpdateTodoResponse>{
        try{
            const todo = await this.prismaService.todos.update({
                where: {
                    id: id
                },
                data: data
            })
            return {
                status: "Success",
                message: "Success",
                data: todo
            }
        }catch(e){
            throw new NotFoundException({
                "status": "Not Found",
                "message": `Todo with ID ${id} Not Found`,
                "data": {}
            })
        }
    }

    async deleteTodo(id: number): Promise<DeleteTodoResponse>{
        try{
            await this.prismaService.todos.delete({
                where: {
                    id: id
                }
            })
            return {
                status: "Success",
                message: "Success",
                data: {}
            }
        }catch(e){
            throw new NotFoundException({
                "status": "Not Found",
                "message": `Todo with ID ${id} Not Found`,
                "data": {}
            })
        }
    }
}