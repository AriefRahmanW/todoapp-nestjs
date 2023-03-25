import { Transform } from "class-transformer"
import {
    IsOptional,
    IsNumber
} from "class-validator"

export class GetAllTodoDto{

    @IsNumber()
    @IsOptional()
    @Transform((value) => Number(value.value))
    activity_group_id: number
}