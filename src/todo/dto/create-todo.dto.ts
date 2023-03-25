import {
    IsNumber,
    IsString,
    IsNotEmpty
} from "class-validator"

export class CreateTodoDto{

    @IsNumber()
    @IsNotEmpty()
    activity_group_id: number
    
    @IsString()
    @IsNotEmpty()
    title: string
}