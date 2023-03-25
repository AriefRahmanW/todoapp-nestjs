import {
    IsString,
    IsNotEmpty
} from "class-validator"

export class UpdateTodoDto{
    
    @IsString()
    @IsNotEmpty()
    title: string
}