import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes } from "@nestjs/common";
import { TodoService } from "../services/todo.service";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { GetAllTodoDto } from "../dto/get-all-todo.dto";

@Controller("todo-items")
export class TodoController{
    constructor(
        private readonly todoService: TodoService
    ){}
    
    @Get()
    getAllTodo(
        @Query() query: GetAllTodoDto
    ){
        return this.todoService.getAllTodo(query)
    }

    @Post()
    createTodo(@Body() data: CreateTodoDto){
        return this.todoService.createTodo(data)
    }

    @Get(":id")
    getOneTodo(@Param("id", ParseIntPipe) id: number){
        return this.todoService.getOneTodo(id)
    }

    @Patch(":id")
    updateTodo(
        @Param("id", ParseIntPipe) id: number,
        @Body() data: UpdateTodoDto
    ){
        return this.todoService.updateTodo(id, data)
    }

    @Delete(":id")
    deleteTodo(@Param("id", ParseIntPipe) id: number){
        return this.todoService.deleteTodo(id)
    }
}